import { ForwardedRef, forwardRef } from "react";
import { Statuses } from "../../api/api-service";
import {
  EmployeeAvatar,
  EmployeeAvatarText,
  HeaderCell,
  HeaderText,
  InnerCell,
  InnerCertificateCell,
  InnerEmployeeCell,
  InnerStatusCell,
  StatusDot,
  StatusText,
  TableCell,
  TableText,
} from "./styled";

type Props = {
  children: string;
};

export const HeaderElement = ({ children }: Props) => (
  <HeaderCell>
    <InnerCell>
      <HeaderText>{children}</HeaderText>
    </InnerCell>
  </HeaderCell>
);

export const TableElement = forwardRef(
  ({ children }: Props, ref: ForwardedRef<HTMLDivElement> | null) => (
    <TableCell ref={ref}>
      <InnerCell>
        <TableText>{children}</TableText>
      </InnerCell>
    </TableCell>
  )
);

type StatusProps = {
  $status: Statuses;
  children: string;
};
export const TableStatusElement = forwardRef(
  (
    { children, $status }: StatusProps,
    ref: ForwardedRef<HTMLDivElement> | null
  ) => (
    <TableCell ref={ref}>
      <InnerStatusCell $status={$status}>
        <StatusDot $status={$status} />
        <StatusText $status={$status}>{children}</StatusText>
      </InnerStatusCell>
    </TableCell>
  )
);

export const TableCertificateElement = forwardRef(
  ({ children }: Props, ref: ForwardedRef<HTMLDivElement> | null) => (
    <TableCell ref={ref}>
      <InnerCertificateCell>
        <TableText>{children}</TableText>
      </InnerCertificateCell>
    </TableCell>
  )
);

type EmployeeProps = {
  index: number;
  children: string;
};
export const TableEmployeeElement = forwardRef(
  (
    { children, index }: EmployeeProps,
    ref: ForwardedRef<HTMLDivElement> | null
  ) => (
    <TableCell ref={ref}>
      <InnerEmployeeCell>
        <EmployeeAvatar index={index}>
          <EmployeeAvatarText>FM</EmployeeAvatarText>
        </EmployeeAvatar>
        <TableText>{children}</TableText>
      </InnerEmployeeCell>
    </TableCell>
  )
);
