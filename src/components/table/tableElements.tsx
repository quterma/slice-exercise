import { ForwardedRef, forwardRef } from "react";
import { Statuses } from "../../api/api-service";
import {
  EmployeeAvatar,
  EmployeeAvatarText,
  HeaderCell,
  HeaderText,
  Indicator,
  InnerCell,
  InnerCertificateCell,
  InnerEmployeeCell,
  InnerStatusCell,
  InputCheckBox,
  Label,
  StatusDot,
  StatusText,
  TableCell,
  TableText,
} from "./styled";
import { DropDown, DropDownMenuItem } from "../shared/drop-down";

type HeaderProps = {
  children: string;
};
export const HeaderElement = ({ children }: HeaderProps) => (
  <HeaderCell>
    <InnerCell>
      <HeaderText>{children}</HeaderText>
    </InnerCell>
  </HeaderCell>
);

type TableElementProps = {
  children: string;
  checked: boolean;
};
export const TableElement = forwardRef(
  (
    { children, checked }: TableElementProps,
    ref: ForwardedRef<HTMLDivElement> | null
  ) => (
    <TableCell ref={ref} checked={checked}>
      <InnerCell>
        <TableText>{children}</TableText>
      </InnerCell>
    </TableCell>
  )
);

type TableDropdownElementProps = {
  checked: boolean;
  menuItems: DropDownMenuItem[];
};
export const TableDropdownElement = forwardRef(
  (
    { checked, menuItems }: TableDropdownElementProps,
    ref: ForwardedRef<HTMLDivElement> | null
  ) => (
    <TableCell ref={ref} checked={checked}>
      <InnerCell>
        <DropDown menuItems={menuItems} />
      </InnerCell>
    </TableCell>
  )
);

type StatusElementProps = TableElementProps & {
  $status: Statuses;
};
export const TableStatusElement = forwardRef(
  (
    { children, checked, $status }: StatusElementProps,
    ref: ForwardedRef<HTMLDivElement> | null
  ) => (
    <TableCell ref={ref} checked={checked}>
      <InnerStatusCell $status={$status}>
        <StatusDot $status={$status} />
        <StatusText $status={$status}>{children}</StatusText>
      </InnerStatusCell>
    </TableCell>
  )
);

export const TableCertificateElement = forwardRef(
  (
    { children, checked }: TableElementProps,
    ref: ForwardedRef<HTMLDivElement> | null
  ) => (
    <TableCell ref={ref} checked={checked}>
      <InnerCertificateCell>
        <TableText>{children}</TableText>
      </InnerCertificateCell>
    </TableCell>
  )
);

type EmployeeElementProps = TableElementProps & {
  $index: number;
};
export const TableEmployeeElement = forwardRef(
  (
    { children, checked, $index }: EmployeeElementProps,
    ref: ForwardedRef<HTMLDivElement> | null
  ) => (
    <TableCell ref={ref} checked={checked}>
      <InnerEmployeeCell>
        <EmployeeAvatar $index={$index}>
          <EmployeeAvatarText>FM</EmployeeAvatarText>
        </EmployeeAvatar>
        <TableText>{children}</TableText>
      </InnerEmployeeCell>
    </TableCell>
  )
);

type CheckboxElementProps = {
  checked: boolean;
  onChange: () => void;
};
export const CheckboxTableElement = ({
  checked,
  onChange,
}: CheckboxElementProps) => (
  <TableCell checked={checked} $isFirstColumn={true}>
    <InnerCell>
      <Label>
        <InputCheckBox checked={checked} onChange={onChange} />
        <Indicator />
      </Label>
    </InnerCell>
  </TableCell>
);

export const CheckboxHeaderElement = ({
  checked,
  onChange,
}: CheckboxElementProps) => (
  <HeaderCell $isFirstColumn={true}>
    <InnerCell>
      <Label>
        <InputCheckBox checked={checked} onChange={onChange} />
        <Indicator />
      </Label>
    </InnerCell>
  </HeaderCell>
);
