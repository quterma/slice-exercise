import { ReactComponent as ButtonIcon } from "./assets/button-icon-plus.svg";

export const tabConfig = {
  certificates: {
    title: "Certificates",
    button: {
      ButtonIcon,
      buttonTitle: "Create New",
      handleClick: () => console.log("certificates header button clicked"),
    },
  },
};
