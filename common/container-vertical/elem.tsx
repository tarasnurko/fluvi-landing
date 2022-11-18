import styled from "styled-components";
import { setSpacing } from "utils";
import { setValueOrAuto } from "utils/design";

interface IProps {
  width?: number;
  height?: number;
  gap?: number;
}

const ContainerVertical = styled.div<IProps>`
  width: ${(props) => setValueOrAuto(props.width)};
  height: ${(props) => setValueOrAuto(props.height)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => setSpacing(props.gap)};
`;

export default ContainerVertical;
