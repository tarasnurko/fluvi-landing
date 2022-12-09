import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

import {
  Container,
  HorizontalContainer,
  VerticalContainer,
} from "@/common/container";
import { Title } from "@/common/title";
import { Text } from "@/common/text";

import Reviewer1Src from "@/images/reviewers/reviewer-1.png";
import Reviewer2Src from "@/images/reviewers/reviewer-2.png";
import YoutubeSrc from "@/icons/social/youtube.svg";
import TelegramSrc from "@/icons/social/telegram.svg";

import LineSrc from "@/icons/dashed-line-black.svg";
import StarSrc from "@/images/star.png";

const Wrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  position: relative;
  background-color: var(--bg-primary);
  overflow: hidden;

  @media (max-width: 996px) {
    padding: 50px 0;
  }
`;

const ReviewsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(172px, min-content);
  gap: 20px;

  @media (max-width: 996px) {
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
  }
`;

const ReviewBlock = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  gap: 20px;
  border: 1px solid var(--color-gray);
  border-radius: 10px;

  @media (max-width: 576px) {
    padding: 20px;
  }
`;

const ReviewerImg = styled(Image)<ImageProps>`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
  }
`;

const ReviewerName = styled(Link)<LinkProps>`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  color: var(--text-dark-secondary);

  &:hover {
    color: var(--orange-primary);
    text-decoration: underline;
  }

  @media (max-width: 576px) {
    font-size: 16px;
    color: var(--text-dark-primary);
  }
`;

const SocialImg = styled(Image)<ImageProps>`
  width: 16px;
  height: auto;
`;

const ReviewerProfession = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: var(--text-light-primary);

  @media (max-width: 576px) {
    font-size: 12px;
    line-height: 150%;
  }
`;

const ReviewText = styled.p`
  padding-left: 68px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: var(--text-dark-secondary);

  @media (max-width: 576px) {
    padding-left: 0;
    font-size: 12px;
  }
`;

const StarImage = styled(Image)<ImageProps>`
  position: absolute;
  top: 80px;
  right: 420px;
  z-index: 2;
  transform: rotate(15deg);

  @media (max-width: 996px) {
    right: 220px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const LineImage = styled(Image)<ImageProps>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  @media (max-width: 996px) {
    right: -200px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Component = () => {
  return (
    <Wrapper>
      <Container>
        <VerticalContainer gap={12} mbGap={8}>
          <VerticalContainer gap={3}>
            <Title>Отзывы наших клиентов</Title>
            <Text width="425px" mbWidth="auto">
              Отзывы тех кто уже успел опробовать функционал приложения и дал
              свой фидбек!
            </Text>
          </VerticalContainer>
          <ReviewsContainer>
            <ReviewBlock>
              <VerticalContainer gap={3} mbGap={4}>
                <HorizontalContainer gap={5} mbGap={3}>
                  <ReviewerImg
                    src={Reviewer1Src}
                    alt="reviewer-1"
                    width={48}
                    height={48}
                  />
                  <VerticalContainer gap={2}>
                    <HorizontalContainer gap={2}>
                      <ReviewerName href="#">Илья Зинченко</ReviewerName>
                      <SocialImg src={YoutubeSrc} alt="youtube" />
                    </HorizontalContainer>
                    <ReviewerProfession>
                      Маркетолог. Занимается траффиком, инфобизнесом
                    </ReviewerProfession>
                  </VerticalContainer>
                </HorizontalContainer>
                <ReviewText>
                  Приложение просто супер! Показал всей своей семье, им
                  понравилось! Хотелось бы также уточнить, что я крутой. Я
                  ненавижу Кирилла.
                </ReviewText>
              </VerticalContainer>
            </ReviewBlock>

            <ReviewBlock>
              <VerticalContainer gap={3} mbGap={4}>
                <HorizontalContainer gap={5} mbGap={3}>
                  <ReviewerImg
                    src={Reviewer2Src}
                    alt="reviewer-2"
                    width={48}
                    height={48}
                  />
                  <VerticalContainer gap={2}>
                    <HorizontalContainer gap={2}>
                      <ReviewerName href="#">Олег Бердов</ReviewerName>
                      <SocialImg src={TelegramSrc} alt="telegram" />
                    </HorizontalContainer>
                    <ReviewerProfession>
                      Инфлюенсер, музыкант и гений мира
                    </ReviewerProfession>
                  </VerticalContainer>
                </HorizontalContainer>
                <ReviewText>
                  Очень люблю Fluvi, также сильно как люблю Илью Зинченко!
                  Советую скачать и опробовать лично! Я люблю помидоры.
                </ReviewText>
              </VerticalContainer>
            </ReviewBlock>

            <ReviewBlock>
              <VerticalContainer gap={3} mbGap={4}>
                <HorizontalContainer gap={5} mbGap={3}>
                  <ReviewerImg
                    src={Reviewer2Src}
                    alt="reviewer-2"
                    width={48}
                    height={48}
                  />
                  <VerticalContainer gap={2}>
                    <HorizontalContainer gap={2}>
                      <ReviewerName href="#">Олег Бердов</ReviewerName>
                      <SocialImg src={TelegramSrc} alt="telegram" />
                    </HorizontalContainer>
                    <ReviewerProfession>
                      Инфлюенсер, музыкант и гений мира
                    </ReviewerProfession>
                  </VerticalContainer>
                </HorizontalContainer>
                <ReviewText>
                  Очень люблю Fluvi, также сильно как люблю Илью Зинченко!
                  Советую скачать и опробовать лично! Я люблю помидоры.
                </ReviewText>
              </VerticalContainer>
            </ReviewBlock>
            <ReviewBlock>
              <VerticalContainer gap={3} mbGap={4}>
                <HorizontalContainer gap={5} mbGap={3}>
                  <ReviewerImg
                    src={Reviewer1Src}
                    alt="reviewer-1"
                    width={48}
                    height={48}
                  />
                  <VerticalContainer gap={2}>
                    <HorizontalContainer gap={2}>
                      <ReviewerName href="#">Илья Зинченко</ReviewerName>
                      <SocialImg src={YoutubeSrc} alt="youtube" />
                    </HorizontalContainer>
                    <ReviewerProfession>
                      Маркетолог. Занимается траффиком, инфобизнесом
                    </ReviewerProfession>
                  </VerticalContainer>
                </HorizontalContainer>
                <ReviewText>
                  Приложение просто супер! Показал всей своей семье, им
                  понравилось! Хотелось бы также уточнить, что я крутой. Я
                  ненавижу Кирилла.
                </ReviewText>
              </VerticalContainer>
            </ReviewBlock>
          </ReviewsContainer>
        </VerticalContainer>
      </Container>
      <LineImage src={LineSrc} alt="dashed-line-black" priority />
      <StarImage src={StarSrc} alt="star" />
    </Wrapper>
  );
};

export default Component;
