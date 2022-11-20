import { useState } from "react";
import styled from "styled-components";

interface IBurgerMenu extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  open: boolean;
}

const BurgerMenu = styled.button<IBurgerMenu>`
  width: 22px;
  height: 19px;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: transparent;
  border: none;

  cursor: pointer;

  &:focus {
    outline: none;
  }

  div {
    width: 100%;
    height: 3px;
    background-color: var(--bg-primary);
    border-radius: 2px;

    transition: all 0.3s ease-in-out;

    :first-child {
      transform: ${(props) =>
        props.open
          ? "translateY(200%) rotate(45deg)"
          : "translateY(0) rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${(props) => (props.open ? 0 : 1)};
    }

    :last-child {
      transform: ${(props) =>
        props.open
          ? "translateY(-200%) rotate(-45deg)"
          : "translateY(0) rotate(0)"};
    }
  }
`;

const Component = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen((prevValue) => !prevValue);

  return (
    <BurgerMenu onClick={handleOpen} open={open}>
      <div></div>
      <div></div>
      <div></div>
    </BurgerMenu>
  );
};

export default Component;
