import styled from "styled-components";
import { setSpacing } from "utils";
import { setValueOrAuto } from "utils/design";

interface IProps {
  width?: number;
  height?: number;
  gap?: number;
}

const ContainerHorizontal = styled.div<IProps>`
  width: ${(props) => setValueOrAuto(props.width)};
  height: ${(props) => setValueOrAuto(props.height)};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => setSpacing(props.gap)};
`;

export default ContainerHorizontal;
