import Head from 'next/head';
import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Base Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500">
        Base Template
      </h1>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
