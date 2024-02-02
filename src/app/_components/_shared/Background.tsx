/* src/app/_components/_shared/Background.tsx */

import styles from '@/_styles/_components/Background.module.css';
import Icon from '@/_components/_icons/Icons';

export default function Background() {
  return (
    <section className={`${styles.animated}`}>
      <ul className={`${styles.floating}`}>
        <li className={`${styles.drift} ${styles.drift1} ${styles.delay1} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float1} text-3xl text-orange opacity-25`}>
            <Icon kind="bootstrap" />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift2} ${styles.delay3} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float2} text-4xl text-orange opacity-25`}>
            <Icon kind="tailwind" />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift6} ${styles.delay2} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float2} text-2xl text-orange opacity-25`}>
            <Icon kind="materialui" />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift3} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float3} text-4xl text-orange opacity-25`}>
            <Icon kind="html" />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift5} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float5} text-3xl text-orange opacity-25`}>
            <Icon kind="github" />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift6} ${styles.delay2} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float6} text-4xl text-orange opacity-25`}>
            <Icon kind="nextjs" />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift7} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float7} text-3xl text-orange opacity-25`}>
            <Icon kind="vercel" />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift8} ${styles.delay5} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float8} text-4xl text-orange opacity-25`}>
            <Icon kind="js" />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift9} ${styles.delay5} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float9} text-4xl text-orange opacity-25`}>
            <Icon kind="react" />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift10} ${styles.delay3} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float10} text-3xl text-orange opacity-25`}>
            <Icon kind="nodejs" />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift5} ${styles.delay4} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float7} text-4xl text-orange opacity-25`}>
            <Icon kind="express" />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift2} ${styles.delay5} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float3} text-3xl text-orange opacity-25`}>
            <Icon kind="nestjs" />
          </div>
        </li>
        <li className={`${styles.drift} ${styles.drift3} ${styles.delay1} ${styles.floating_li}`}>
          <div className={`${styles.float} ${styles.float8} text-4xl text-orange opacity-25`}>
            <Icon kind="mongodb" />
          </div>
        </li>
        <div>
          <li className={`${styles.drift} ${styles.drift6} ${styles.delay5} ${styles.floating_li}`}>
            <div className={`${styles.float} ${styles.float6} text-4xl text-orange opacity-25`}>
              <Icon kind="ts" />
            </div>
          </li>
        </div>
      </ul>
    </section>
  );
}
