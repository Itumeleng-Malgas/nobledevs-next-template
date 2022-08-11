import Head from 'next/head';
import styles from './PrimaryLayout.module.less';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout</title>
      </Head>
      <main className={styles.main}>
        <h4>With Primary Layout</h4>
        {children}
      </main>
    </>
  );
};

export default PrimaryLayout;
