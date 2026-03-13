import { Component } from "react";
import Styles from "./Button.module.css";
type Props = {
  label: string | number;
  onClick?: () => void;
  disabled?: boolean;
};

class Button extends Component<Props> {
  render() {
    const { label, onClick, disabled } = this.props;
    return (
      <button disabled={disabled} className={Styles.button} onClick={onClick}>
        {label}
      </button>
    );
  }
}

export default Button;
