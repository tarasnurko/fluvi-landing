import styled from "styled-components";

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 54px;
  line-height: 110%;

  color: var(--text-white);

  @media (max-width: 576px) {
    font-size: 32px;
    line-height: 120%;
  }
`;

interface ITitle {
  type: "normal" | "white";
}

export const Title = styled.h2<ITitle>`
  font-weight: 700;
  font-size: 36px;
  line-height: 115%;
  color: var(--text-dark-primary);
`;
