import { FunctionComponent, SVGProps } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  button: {
    ButtonIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
    buttonTitle: string;
    handleClick: () => void;
  };
};

const Title = styled.h1`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
`;

export const MainHeader = ({
  title,
  button: { ButtonIcon, buttonTitle, handleClick },
}: Props) => {
  return (
    <div className="">
      <Title>{title}</Title>
      {<ButtonIcon />}
      {buttonTitle}
    </div>
  );
};
