import { HomeHead } from "@/epic/home-head";
import { NextPage } from "next";

import { Header } from "@/epic/header";

import Head from "next/head";
import Image from "next/image";
import { FirstScreen } from "@/epic/screen-first";
import { PageContainer } from "@/common/container";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <HomeHead />
      <Header />
      <FirstScreen />
    </PageContainer>
  );
};

export default Home;
