import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Open smart contracts',
    Svg: require('@site/static/img/splash_1.png').default,
    description: (
      <>
        VSC smart contracts were build from the ground up for openness and transparancy.
        Anyone can deploy a smart contract without needing approval, granting unlimited flexibility
      </>
    ),
  },
  {
    title: 'Scalable & future proof',
    Svg: require('@site/static/img/splash_2.png').default,
    description: (
      <>
        VSC is a L2 sidechain. 
        This allows VSC to easily onboard users using native lite accounts and significantly decreases our development time.
      </>
    ),
  },
  {
    title: 'Lightning Fast',
    Svg: require('@site/static/img/splash_3.png').default,
    description: (
      <>
        VSC is powered by the Hive blockchain's lightning fast 3s block times and one block irreversibility.
        No need to wait for web3 speeds
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
