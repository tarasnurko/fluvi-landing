import styled from "styled-components";
import Image, { ImageProps } from "next/image";

import { LinkButton } from "@/common/link";
import { ListContainer, ListItem } from "@/common/list";
import { Container } from "@/common/container";
import { VerticalContainer } from "@/common/container";
import { MainTitle } from "@/common/title";

import IphoneSrc from "@/images/iphone.png";
import SmileSrc from "@/images/emoji/smile.png";
import HeartSrc from "@/images/emoji/heart.png";
import DemonSrc from "@/images/emoji/demon.png";
import SurprizeSrc from "@/images/emoji/surprize.png";
import GhostSrc from "@/images/emoji/ghost.png";
import SmileReverseSrc from "@/images/emoji/smile-reverse.png";
import PleasureSrc from "@/images/emoji/pleasure.png";
import EyesSrc from "@/images/emoji/eyes.png";
import LoveSrc from "@/images/emoji/love.png";
import ThinkSrc from "@/images/emoji/think.png";
import RainbowSrc from "@/images/emoji/rainbow.png";
import PeachSrc from "@/images/emoji/peach.png";

const Wrapper = styled.section`
  width: 100%;
  padding: 167px 0;
  position: relative;
  background-color: var(--orange-primary);
  overflow: hidden;

  @media (max-width: 768px) {
    padding-bottom: 300px;
  }
  @media (max-width: 576px) {
    padding: 88px 0 308px 0;
  }
`;

const IphoneImage = styled(Image)<ImageProps>`
  position: absolute;
  bottom: 0;
  right: 240px;
  z-index: 30;
  @media (max-width: 1200px) {
    right: 170px;
  }
  @media (max-width: 996px) {
    right: 0;
  }
  @media (max-width: 768px) {
    bottom: -90px;
    right: 10px;
    transform: scale(0.7);
  }
  @media (max-width: 576px) {
    bottom: -140px;
    right: 0;
    transform: scale(0.6);
  }
`;
const SmileImage = styled(Image)<ImageProps>`
  position: absolute;
  bottom: -10px;
  right: 560px;
  z-index: 2;
  transform: rotate(-9.05deg);
  @media (max-width: 1200px) {
    right: 490px;
  }
  @media (max-width: 996px) {
    right: 320px;
  }
  @media (max-width: 768px) {
    right: 290px;
    bottom: -20px;
    transform: rotate(-9.05deg) scale(0.7);
  }
  @media (max-width: 576px) {
    bottom: -30px;
    right: 260px;
    transform: rotate(-9.05deg) scale(0.6);
  }
`;
const HeartImage = styled(Image)<ImageProps>`
  position: absolute;
  bottom: 40px;
  right: 610px;
  z-index: 1;
  transform: rotate(-11.74deg);
  @media (max-width: 1200px) {
    right: 540px;
  }
  @media (max-width: 996px) {
    right: 370px;
  }
  @media (max-width: 768px) {
    bottom: 20px;
    right: 330px;
    transform: rotate(-11.74deg) scale(0.7);
  }
  @media (max-width: 576px) {
    bottom: 0;
    right: 270px;
    transform: rotate(-11.74deg) scale(0.6);
  }
`;
const DemonImage = styled(Image)<ImageProps>`
  position: absolute;
  bottom: 90px;
  right: 530px;
  z-index: 4;
  transform: rotate(4.12deg);
  filter: drop-shadow(0px 0px 75px rgba(114, 42, 15, 0.25));
  @media (max-width: 1200px) {
    right: 460px;
  }
  @media (max-width: 996px) {
    right: 290px;
  }
  @media (max-width: 768px) {
    bottom: 50px;
    right: 270px;
    transform: rotate(4.12deg) scale(0.7);
  }
  @media (max-width: 576px) {
    bottom: 20px;
    right: 240px;
    transform: rotate(4.12deg) scale(0.6);
  }
`;
const SurprizeImage = styled(Image)<ImageProps>`
  position: absolute;
  bottom: 120px;
  right: 620px;
  z-index: 3;
  transform: rotate(-12.15deg);
  filter: drop-shadow(0px 0px 75px rgba(114, 42, 15, 0.25));
  @media (max-width: 1200px) {
    right: 550px;
  }
  @media (max-width: 996px) {
    right: 380px;
  }
  @media (max-width: 768px) {
    bottom: 80px;
    right: 320px;
    transform: rotate(-12.15deg) scale(0.7);
  }
  @media (max-width: 576px) {
    bottom: 40px;
    right: 280px;
    transform: rotate(-12.15deg) scale(0.6);
  }
`;
const GhostImage = styled(Image)<ImageProps>`
  position: absolute;
  bottom: 180px;
  right: 530px;
  z-index: 2;
  @media (max-width: 1200px) {
    right: 460px;
  }
  @media (max-width: 996px) {
    right: 290px;
  }
  @media (max-width: 768px) {
    bottom: 110px;
    right: 260px;
    transform: scale(0.7);
  }
  @media (max-width: 576px) {
    bottom: 100px;
    transform: scale(0.6);
  }
`;
const SmileReverseImage = styled(Image)<ImageProps>`
  position: absolute;
  bottom: 250px;
  right: 520px;
  z-index: 3;
  transform: rotate(10deg);
  @media (max-width: 1200px) {
    right: 450px;
  }
  @media (max-width: 996px) {
    right: 280px;
  }
  @media (max-width: 768px) {
    bottom: 160px;
    right: 260px;
    transform: rotate(10deg) scale(0.7);
  }
  @media (max-width: 576px) {
    bottom: 80px;
    right: 240px;
    transform: rotate(10deg) scale(0.6);
  }
`;
const PleasureImage = styled(Image)<ImageProps>`
  position: absolute;
  bottom: 250px;
  right: 230px;
  z-index: 1;
  @media (max-width: 1200px) {
    right: 160px;
  }
  @media (max-width: 996px) {
    right: -10px;
  }
  @media (max-width: 768px) {
    bottom: 130px;
    right: 40px;
    transform: scale(0.7);
  }
  @media (max-width: 576px) {
    bottom: 90px;
    right: 40px;
    transform: rotate(5.49deg) scale(0.6);
  }
`;
const ThinkImage = styled(Image)<ImageProps>`
  position: absolute;
  bottom: 150px;
  right: 280px;
  z-index: 2;
  transform: rotate(5.49deg);
  filter: drop-shadow(0px 0px 75px rgba(114, 42, 15, 0.25));
  @media (max-width: 1200px) {
    right: 210px;
  }
  @media (max-width: 996px) {
    right: 40px;
  }
  @media (max-width: 768px) {
    bottom: 60px;
    right: 50px;
    transform: rotate(5.49deg) scale(0.6);
  }
  @media (max-width: 576px) {
    bottom: 50px;
    right: 60px;
  }
`;
const EyesImage = styled(Image)<ImageProps>`
  position: absolute;
  bottom: 280px;
  right: 170px;
  z-index: 4;
  transform: rotate(13.79deg);
  @media (max-width: 1200px) {
    right: 100px;
  }
  @media (max-width: 996px) {
    right: 0;
    bottom: 140px;
  }
  @media (max-width: 768px) {
    bottom: 170px;
    transform: rotate(13.79deg) scale(0.6);
  }
  @media (max-width: 576px) {
    bottom: 130px;
    right: 10px;
    transform: rotate(7.15deg) scale(0.6);
  }
`;
const LoveImage = styled(Image)<ImageProps>`
  position: absolute;
  bottom: 180px;
  right: 190px;
  z-index: 3;
  @media (max-width: 1200px) {
    right: 120px;
  }
  @media (max-width: 996px) {
    right: -50px;
  }
  @media (max-width: 768px) {
    bottom: 70px;
    right: 0;
    transform: scale(0.7);
  }
  @media (max-width: 576px) {
    bottom: 40px;
    right: 10px;
    transform: rotate(5.28deg) scale(0.6);
    z-index: 2;
  }
`;
const RainbowImage = styled(Image)<ImageProps>`
  position: absolute;
  bottom: 0;
  right: 250px;
  z-index: 1;
  transform: rotate(47.63deg);
  @media (max-width: 1200px) {
    right: 180px;
  }
  @media (max-width: 996px) {
    right: 10px;
  }
  @media (max-width: 768px) {
    bottom: -30px;
    right: 50px;
    transform: rotate(47.63deg) scale(0.6);
  }
  @media (max-width: 576px) {
    bottom: -50px;
    right: 60px;
    transform: rotate(9.73deg) scale(0.6);
  }
`;
const PeachImage = styled(Image)<ImageProps>`
  position: absolute;
  bottom: -30px;
  right: 180px;
  z-index: 2;
  transform: rotate(17.5deg);
  filter: drop-shadow(0px 0px 75px rgba(114, 42, 15, 0.25));
  @media (max-width: 1200px) {
    right: 110px;
  }
  @media (max-width: 996px) {
    right: -60px;
  }
  @media (max-width: 768px) {
    bottom: -40px;
    right: 0;
    transform: rotate(17.5deg) scale(0.7);
  }
  @media (max-width: 576px) {
    bottom: -60px;
    right: 0;
  }
`;

const Component = () => {
  return (
    <Wrapper>
      <Container>
        <VerticalContainer gap={8} width="480px" mbWidth="auto">
          <MainTitle>Используй соц. сети на максимум</MainTitle>
          <ListContainer>
            <ListItem type="white">Начни вести системно соцсети </ListItem>
            <ListItem type="white">Вся работа с контентом в 1 месте </ListItem>
            <ListItem type="white">Управляй блогом как бизнесом</ListItem>
          </ListContainer>
          <LinkButton href="link">Попробовать бесплатно</LinkButton>
        </VerticalContainer>
      </Container>
      <IphoneImage src={IphoneSrc} alt="iphone" />
      <SmileImage src={SmileSrc} alt="smile" />
      <HeartImage src={HeartSrc} alt="heart" />
      <DemonImage src={DemonSrc} alt="demon" />
      <SurprizeImage src={SurprizeSrc} alt="surprize" />
      <GhostImage src={GhostSrc} alt="ghost" />
      <SmileReverseImage src={SmileReverseSrc} alt="smile-reverse" />
      <PleasureImage src={PleasureSrc} alt="pleasure" />
      <ThinkImage src={ThinkSrc} alt="think" />
      <EyesImage src={EyesSrc} alt="eyes" />
      <LoveImage src={LoveSrc} alt="love" />
      <RainbowImage src={RainbowSrc} alt="rainbow" />
      <PeachImage src={PeachSrc} alt="peach" />
    </Wrapper>
  );
};

export default Component;
