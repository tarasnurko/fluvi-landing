import { HomeHead } from "@/epic/home-head";
import { NextPage } from "next";

import { Header } from "@/epic/header";

import Head from "next/head";
import Image from "next/image";
import { FirstSection } from "@/epic/section-first";
import { PageContainer } from "@/common/container";
import { ResultSection } from "@/epic/section-result";
import { IdeaSection } from "@/epic/screen-idea";
import { RoadmapSection } from "@/epic/section-roadmap";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <HomeHead />
      <Header />
      <FirstSection />
      <ResultSection />
      <IdeaSection />
      <RoadmapSection />
    </PageContainer>
  );
};

export default Home;
