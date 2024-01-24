/* src/app/_components/_pages/_proyect/Proyect.tsx */

'use client';

import XContainer from '@/_components/_containers/XContainer';
import YMSingleSectionContainer from '@/_components/_containers/YMSingleSectionContainer';

export default function Proyect() {
  return (
    <YMSingleSectionContainer>
      <section className="bg-black_a">
        <XContainer>
          <div className="flex flex-col items-center">
            <div className="w-full lg:w-1/2">
              <div className="uppercase">
                <h2 className="mb-4 text-3xl font-bold text-orange sm:text-4xl">Project</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, voluptate reiciendis? Officia ut quidem a, dolor quis totam explicabo maxime quisquam, incidunt id voluptas soluta perspiciatis modi unde repudiandae. Tenetur.</p>
              </div>
            </div>
          </div>
        </XContainer>
      </section>
    </YMSingleSectionContainer>
  );
}
