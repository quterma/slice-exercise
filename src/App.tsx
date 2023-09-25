import styled from "styled-components";

import { ReactComponent as ButtonIcon } from "./assets/button-icon.svg";
import { Table } from "./components/table/table";
import { TableHeader } from "./components/table/table-header";

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  return (
    <Main>
      <TableHeader
        title={"Certificates"}
        button={{
          ButtonIcon,
          buttonTitle: "Create New",
          handleClick: () => console.log("clicked"),
        }}
      />
      <Table />
    </Main>
  );
};
