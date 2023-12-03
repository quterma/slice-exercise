import styled from "styled-components";
import { Button, constants } from "../shared/styled";
import { HeaderButton } from "../types/tab-types";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${constants.main.grey};
  padding: 16px 32px;
  position: sticky;
  top: 0;
  background-color: ${constants.main.white};
`;

const Title = styled.h1`
  font-family: ${constants.fonts.inter};
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  color: ${constants.main.blue};
`;

type Props = {
  title: string;
  button: HeaderButton | null;
};

export const MainHeader = ({ title, button }: Props) => {
  const headerButton = button ? (
    <Button $primary onClick={button.handleClick}>
      {<button.ButtonIcon />}
      {button.buttonTitle}
    </Button>
  ) : null;

  return (
    <Container>
      <Title>{title}</Title>
      {headerButton}
    </Container>
  );
};
