import { InputSelectIcon } from "./CustomIcons";

export function Select() {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: InputSelectIcon,
      },
    },
  };
}
