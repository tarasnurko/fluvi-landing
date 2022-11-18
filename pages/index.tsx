import { HomeHead } from "@/epic/home-head";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <HomeHead />
    </div>
  );
};

export default Home;
