import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

import { Container, VerticalContainer } from "@/common/container";

import LogoSrc from "@/icons/logo-orange.svg";
import YoutubeSrc from "@/icons/social/youtube.svg";
import TelegramSrc from "@/icons/social/telegram.svg";
import TwitterSrc from "@/icons/social/twitter.svg";

const Wrapper = styled.section`
  width: 100%;
  padding: 75px 0;

  background-color: var(--bg-primary);

  @media (max-width: 576px) {
    padding: 50px 0;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoImg = styled(Image)<ImageProps>`
  width: 70px;
  height: auto;

  @media (max-width: 576px) {
    width: 49px;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SocialImgWrapper = styled(Link)<LinkProps>`
  display: flex;
  align-items: center;
`;

const SocialImg = styled(Image)<ImageProps>`
  width: 21px;
  height: auto;

  @media (max-width: 576px) {
    width: 16px;
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--color-gray);
`;

const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, max-content);
    gap: 24px;
  }
`;

const PageLink = styled(Link)<LinkProps>`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: var(--text-dark-secondary);

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

const MailLink = styled(Link)<LinkProps>`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text-dark-secondary);

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const Copyright = styled.p`
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text-light-primary);

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const Component = () => {
  return (
    <Wrapper>
      <Container>
        <VerticalContainer gap={8}>
          <TopContainer>
            <LogoImg src={LogoSrc} alt="logo" />
            <SocialsContainer>
              <SocialImgWrapper href="#">
                <SocialImg src={YoutubeSrc} alt="fluvi-youtube" />
              </SocialImgWrapper>
              <SocialImgWrapper href="#">
                <SocialImg src={TelegramSrc} alt="fluvi-telegram" />
              </SocialImgWrapper>
              <SocialImgWrapper href="#">
                <SocialImg src={TwitterSrc} alt="fluvi-twitter" />
              </SocialImgWrapper>
            </SocialsContainer>
          </TopContainer>
          <BottomContainer>
            <InfoContainer>
              <LinksContainer>
                <PageLink href="#">Регистрация</PageLink>
                <PageLink href="#">Авторизация</PageLink>
                <PageLink href="#">Terms Of Use</PageLink>
                <PageLink href="#">Privacy Policy</PageLink>
              </LinksContainer>
              <MailLink
                target="_top"
                rel="nofollow"
                href="mailto:tarasnurko340@gmail.com"
              >
                info@fluvi.net
              </MailLink>
            </InfoContainer>
            <Divider />
            <Copyright>
              Copyrights Fluvi 2022. All Rights Reserved. League of Legends,
              Valorant, Teamfight Tactics and other games are registered
              trademarks of Riot Games, Inc. Fluvi is in no way affiliated with,
              associated with or endorsed by Riot Games, Inc.
            </Copyright>
          </BottomContainer>
        </VerticalContainer>
      </Container>
    </Wrapper>
  );
};

export default Component;
