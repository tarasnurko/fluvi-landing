import styled from "styled-components";
import { convertToPx, setSpacing, setValueOrAuto } from "utils/design";

interface IListContainer {
  width?: number;
  height?: number;
  gap?: number;
}

export const ListContainer = styled.ul<IListContainer>`
  width: ${(props) => setValueOrAuto(props.width)};
  height: ${(props) => setValueOrAuto(props.height)};
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => (props.gap ? convertToPx(props.gap * 4) : "16px")};
`;

interface IListItem {
  type: "normal" | "white";
}

export const ListItem = styled.li<IListItem>`
  color: ${(props) =>
    props.type === "normal"
      ? "var(--text-dark-secondary)"
      : "var(--text-white)"};

  font-weight: ${(props) => (props.type === "normal" ? 400 : 500)};
  font-size: ${(props) => (props.type === "normal" ? "16px" : "18px")};
  line-height: 100%;

  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 100%;
  }
`;
