/* src/app/_components/_shared/DateDisplay.tsx */

import TranslateInOut from '@/_components/_gsap/TranslateInOut';

export default function DateDisplay() {
  const currDay = new Date().getDate();
  const currMonth = new Date().toLocaleString('en-US', {
    month: 'short',
  });
  const currYear = new Date().getFullYear().toString().slice(-2);

  return (
    <div className="cursor-scale small flex items-start pt-2 italic text-orange">
      <div className="flex items-center">
        <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
          <div className="me-3 mt-1 font-serif text-6xl font-light text-white">{currDay}</div>
        </TranslateInOut>
        <div className="flex flex-col items-start">
          <TranslateInOut overflowHidden delay={0.3} y={100} start="-100% bottom" end="top top" watch>
            <div>
              <h6 className="text-nowrap text-xl font-bold leading-5 text-orange">
                {currMonth} {currYear}
              </h6>
            </div>
          </TranslateInOut>
          <TranslateInOut overflowHidden delay={0.4} y={100} start="-100% bottom" end="top top" watch>
            <p className="text-start text-xs leading-3 text-white">
              available
              <br />
              for work
            </p>
          </TranslateInOut>
        </div>
      </div>
    </div>
  );
}
