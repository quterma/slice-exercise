import styled from "styled-components";

import { ReactComponent as ButtonIcon } from "./assets/button-icon.svg";
import { Table } from "./components/table/table";
import { MainHeader } from "./components/main-header/main-header";

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  return (
    <Main>
      <MainHeader
        title={"Certificates"}
        button={{
          ButtonIcon,
          buttonTitle: "Create New",
          handleClick: function(): void {
            throw new Error("Function not implemented.");
          },
        }}
      />
      <Table />
    </Main>
  );
};
