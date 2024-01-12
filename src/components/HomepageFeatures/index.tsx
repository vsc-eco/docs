import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  src: string
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Open Smart Contracts',
    src: require('@site/static/img/splash_1.png').default,
    description: (
      <>
        VSC smart contracts were build from the ground up with openness and transparancy in mind.
        Anyone can deploy a smart contract without needing approval, granting unlimited flexibility coupled with a strong webassembly VM.
      </>
    ),
  },
  {
    title: 'Scalable & Future Proof',
    src: require('@site/static/img/splash_2.png').default,
    description: (
      <>
        VSC is a L2 sidechain. 
        This significantly improves onboarding and reduces development time.
      </>
    ),
  },
  {
    title: 'Lightning Fast',
    src: require('@site/static/img/splash_3.png').default,
    description: (
      <>
        VSC is powered by the Hive blockchain's lightning fast 3s block times and one block irreversibility.
        Web3 speeds became Web2.
      </>
    ),
  },
];

function Feature({title, Svg, src, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img className={styles.featureSvg}  src={src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
