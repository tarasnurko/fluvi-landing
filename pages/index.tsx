import { HomeHead } from "@/epic/home-head";
import { NextPage } from "next";

import { Header } from "@/epic/header";

import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <HomeHead />
      <Header />
    </div>
  );
};

export default Home;
