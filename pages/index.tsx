import { Header } from "@components/common";
import Body from "@components/common/Body";
import Footer from "@components/Footer";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      <Header />
      <Body />
      <Footer />
    </Layout>
  );
};

export default Home;
