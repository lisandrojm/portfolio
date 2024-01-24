/* src/app/_components/_ui/Button.tsx */

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  font?: 'mono' | 'flex' | 'serif';
}

export function Button({ children, size = 'md', font = 'flex', ...props }: Props) {
  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'px-2.5 py-1 text-sm';
      case 'md':
        return 'px-3.5 py-1 text-md';
      case 'lg':
        return 'px-4 py-1 text-lg';
      case 'xl':
        return 'px-4 py-1 text-xl';
      case '2xl':
        return 'px-4 py-1 text-2xl';
    }
  };

  const getFontClass = () => {
    switch (font) {
      case 'mono':
        return 'font-mono';
      case 'flex':
        return 'font-flex';
      case 'serif':
        return 'font-serif';
      default:
        return 'font-mono';
    }
  };

  const buttonClass = `border border-orange text-center font-semibold text-orange backdrop-blur uppercase italic focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${getSizeClass()} ${getFontClass()}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
