import React from 'react';
import styles from './AboutUs.module.scss';
import aboutA from '@/public/aboutA.png';
import aboutB from '@/public/aboutB.png';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <main className={styles.about}>
      <section className={styles.hero}>
        <article className='container d-flex flex-column'>
          <div className='col-12 col-md-8 mx-auto text-center my-3'>
            <h1>Psychiatry transformed for everyone</h1>

            <p className='my-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <figure data-aos='zoom-in'>
            <Image src={aboutA} alt='Danicare about us image' />
          </figure>
        </article>
      </section>

      <section className='container py-5'>
        <figure data-aos='zoom-in'>
          <Image src={aboutB} alt='Danicare about us image' />
        </figure>
      </section>

      <section className={styles.howItWorks}>
        <h2 className='my-4 text-center'>What we stand for</h2>
        <article className={`cards  container `}>
          <div data-aos='fade-right' className={`${styles.howItWorksCard} `}>
            <div className={styles.numList}>
              <div>
                <h5>1</h5>
              </div>
            </div>

            <h4>Shifting the Dialogue</h4>
            <p>
              Through eradicating stigma, conveying that individuals are not
              alone, and ensuring dependable access to in-network care.
            </p>
          </div>
          <div data-aos='fade-right' className={`${styles.howItWorksCard} `}>
            <div className={styles.numList}>
              <div>
                <h5>2</h5>
              </div>
            </div>

            <h4>Genuine Connections</h4>
            <p>
              Transforming each visit into a dialogue, delivering impactful
              treatment, and approaching every patient with humanity.
            </p>
          </div>
          <div data-aos='fade-right' className={`${styles.howItWorksCard} `}>
            <div className={styles.numList}>
              <div>
                <h5>3</h5>
              </div>
            </div>

            <h4>Establishing the Benchmark</h4>
            <p>
              Through recruiting top-notch psychiatrists, leveraging
              cutting-edge research, and dedicating ourselves to technologies
              that facilitate communication.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}