/* src/app/_components/_shared/DateDisplay.tsx */

import Icon from '@/_components/_icons/Icons';
import TranslateInOut from '@/_components/_gsap/TranslateInOut';

export default function DateDisplay() {
  const currDay = new Date().getDate();
  const currMonth = new Date().toLocaleString('en-US', {
    month: 'short', // Utiliza 'short' para obtener las primeras tres letras del mes
  });
  const currYear = new Date().getFullYear();

  return (
    <div className="flex items-start pb-5 pt-3 italic text-orange">
      <div className="flex items-center">
        <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
          <div className="me-3 mt-1 font-serif text-6xl font-light text-white">{currDay}</div>
        </TranslateInOut>
        <div className="flex flex-col items-start">
          <TranslateInOut overflowHidden delay={0.3} y={100} start="-100% bottom" end="top top" watch>
            <h6 className="text-xl font-bold leading-5 text-orange">{currMonth}</h6>
          </TranslateInOut>
          <TranslateInOut overflowHidden delay={0.4} y={100} start="-100% bottom" end="top top" watch>
            <p className="text-start text-xs leading-3 text-white">
              available
              <br />
              to work
            </p>
          </TranslateInOut>
        </div>
      </div>
    </div>
  );
}
