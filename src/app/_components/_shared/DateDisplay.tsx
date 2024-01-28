/* src/app/_components/_shared/DateDisplay.tsx */

import Icon from '@/_components/_icons/Icons';

export default function DateDisplay() {
  const currDay = new Date().getDate();
  const currMonth = new Date().toLocaleString('en-US', {
    month: 'short', // Utiliza 'short' para obtener las primeras tres letras del mes
  });
  const currYear = new Date().getFullYear();

  return (
    <div className="flex items-start pb-5 pt-3 italic text-orange">
      <div className="text- mt-2 text-xl">
        <Icon kind="calendar" />
      </div>
      <div className="me-3 font-serif text-5xl font-bold text-white">{currDay}</div>
      <div className="flex flex-col items-start">
        <h6 className="text-2xl font-bold text-orange">{currMonth}</h6>
        <p className="text-start text-xs text-white">
          available
          <br />
          to learn
          <br />
          more...
        </p>
      </div>
    </div>
  );
}
