import { Container, VerticalContainer } from "@/common/container";
import { Title } from "@/common/title";
import Image, { ImageProps } from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Dropdown } from "../dropdown";

import CircleSrc from "@/icons/circle-orange.svg";

const Wrapper = styled.section`
  width: 100%;
  padding: 100px 0;

  position: relative;
  background-color: var(--bg-primary);
  overflow: hidden;

  @media (max-width: 576px) {
    padding: 50px 0;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;

  @media (max-width: 576px) {
    text-align: left;
  }
`;

const CircleBg = styled(Image)<ImageProps>`
  width: 300px;
  height: auto;

  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const EllipseBg = styled.div`
  width: 132px;
  height: 132px;

  background-color: var(--bg-secondary);
  border-radius: 50%;

  position: absolute;
  top: 190px;
  right: -85px;
  z-index: 1;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Component = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleActive = (id: number) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <Wrapper>
      <Container>
        <VerticalContainer gap={12} mbGap={8}>
          <TitleContainer>
            <Title>FAQ - частые вопросы</Title>
          </TitleContainer>
          <VerticalContainer width="100%" gap={3}>
            <Dropdown
              dropdownId={1}
              activeId={activeId}
              handleActive={handleActive}
              text="Сколько бесплатный период"
              description="Таким образом новая модель организационной деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.
              Таким образом рамки и место обучения кадров позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также сложившаяся структура организации в значительной степени обуславливает создание форм развития."
            />
            <Dropdown
              dropdownId={2}
              activeId={activeId}
              handleActive={handleActive}
              text="Какую подписку выбрать?"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat excepturi cum optio itaque odio eaque. Soluta est consectetur quas cum. Qui, incidunt consequatur. Quidem, voluptas rerum doloribus a maiores dolorem illum magni unde laboriosam velit corrupti, cumque odio? Sint."
            />
            <Dropdown
              dropdownId={3}
              activeId={activeId}
              handleActive={handleActive}
              text="Какая аналитика будет"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat excepturi cum optio itaque odio eaque. Soluta est consectetur quas cum. Qui, incidunt consequatur. Quidem, voluptas rerum doloribus a maiores dolorem illum magni unde laboriosam velit corrupti, cumque odio? Sint."
            />
            <Dropdown
              dropdownId={4}
              activeId={activeId}
              handleActive={handleActive}
              text="Как Fluvi поможет продвигать блог"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugiat excepturi cum optio itaque odio eaque. Soluta est consectetur quas cum. Qui, incidunt consequatur. Quidem, voluptas rerum doloribus a maiores dolorem illum magni unde laboriosam velit corrupti, cumque odio? Sint."
            />
          </VerticalContainer>
        </VerticalContainer>
      </Container>
      <CircleBg src={CircleSrc} alt="circle" />
      <EllipseBg />
    </Wrapper>
  );
};

export default Component;
