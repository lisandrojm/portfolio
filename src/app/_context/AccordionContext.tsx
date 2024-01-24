/* src/app/_context/AccordionContext.tsx */
'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { createContext, useCallback, useContext, useEffect, useRef, useState, ReactNode } from 'react';

interface Item {
  expanded: boolean;
  container: React.RefObject<HTMLDivElement>;
  content: React.RefObject<HTMLDivElement>;
}

interface AccordionContextProps {
  items: Map<string, Item>;
  setItem: (id: string, expanded: boolean, container: React.RefObject<HTMLDivElement>, content: React.RefObject<HTMLDivElement>) => void;
  deleteItem: (id: string) => boolean;
  toggle: (id: string, expanded: boolean, container: React.RefObject<HTMLDivElement>, content: React.RefObject<HTMLDivElement>) => void;
}

interface AccordionContextProviderProps {
  children: ReactNode;
  allowMultiple: boolean;
}

interface AccordionItemProps {
  id: string;
  initialExpanded?: boolean;
  container: React.RefObject<HTMLDivElement>;
  content: React.RefObject<HTMLDivElement>;
}

const AccordionContext = createContext<AccordionContextProps>({
  items: new Map(),
  setItem: () => {},
  deleteItem: () => false,
  toggle: () => {},
});

const updateItem = (id: string, expanded: boolean, container: React.RefObject<HTMLDivElement>, content: React.RefObject<HTMLDivElement>, latestItems: React.MutableRefObject<Map<string, Item>>, setItems: React.Dispatch<React.SetStateAction<Map<string, Item>>>) => {
  const itemsMap = new Map(latestItems.current);

  itemsMap.set(id, { expanded, container, content });
  setItems(itemsMap);
  latestItems.current = itemsMap;
};

const updateItemHeight = (expanded: boolean, container: React.RefObject<HTMLDivElement>, content: React.RefObject<HTMLDivElement>) => {
  const containerElement = container.current;
  const contentElement = content.current;

  if (expanded && containerElement && contentElement) {
    gsap.to(containerElement, {
      duration: 0.45,
      height: contentElement.getBoundingClientRect().height,
      opacity: 1,
      ease: 'expo.inOut',
      onComplete: () => {
        gsap.set(containerElement, { height: 'auto' });
        ScrollTrigger.refresh(true);
      },
    });
  } else if (!expanded && containerElement) {
    gsap.to(containerElement, {
      duration: 0.45,
      height: 0,
      opacity: 0,
      ease: 'expo.inOut',
      onComplete: () => {
        ScrollTrigger.refresh(true);
      },
    });
  }
};

export function AccordionContextProvider({ children, allowMultiple }: AccordionContextProviderProps) {
  const [items, setItems] = useState(new Map<string, Item>());
  const latestItems = useRef(items);

  const setItem = useCallback(
    (id: string, expanded: boolean, container: React.RefObject<HTMLDivElement>, content: React.RefObject<HTMLDivElement>) => {
      updateItem(id, expanded, container, content, latestItems, setItems);
      if (expanded) updateItemHeight(expanded, container, content);
    },
    [setItems]
  );

  const deleteItem = useCallback((id: string) => {
    const newItemsMap = new Map(latestItems.current);

    if (newItemsMap.delete(id)) {
      setItems(newItemsMap);
      latestItems.current = newItemsMap;
      return true;
    }
    return false;
  }, []);

  const toggle = (id: string, expanded: boolean, container: React.RefObject<HTMLDivElement>, content: React.RefObject<HTMLDivElement>) => {
    const itemObj = latestItems.current.get(id);

    if (!itemObj) {
      process.env.NODE_ENV !== 'production' && console.error(`[AccordionItem] invalid key: ${id}`);
      return;
    }

    if (typeof expanded !== 'boolean') expanded = !itemObj.expanded;

    if (expanded) {
      updateItem(id, expanded, container, content, latestItems, setItems);
      updateItemHeight(expanded, container, content);
      !allowMultiple && latestItems.current.forEach(({ expanded, container, content }, _id) => _id !== id && expanded && toggle(_id, false, container, content));
    } else {
      updateItem(id, expanded, container, content, latestItems, setItems);
      updateItemHeight(expanded, container, content);
    }
  };

  return (
    <AccordionContext.Provider
      value={{
        items,
        setItem,
        deleteItem,
        toggle,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
}

export function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (process.env.NODE_ENV !== 'production' && !context.items) throw new Error('AccordionItem must be used within an Accordion');

  return context;
}

export default function useAccordionItem({ id, initialExpanded, container, content }: AccordionItemProps) {
  const { items, setItem, deleteItem, toggle } = useAccordionContext();
  const currentItem = items.get(id);
  const initialState = initialExpanded ? initialExpanded : false;

  useEffect(() => {
    setItem(id, initialState, container, content);

    return () => {
      deleteItem(id);
    };
  }, [setItem, deleteItem, id, initialState, container, content]);

  return {
    expanded: currentItem ? currentItem.expanded : false,
    toggle: (expanded: boolean) => toggle(id, expanded, container, content),
  };
}
