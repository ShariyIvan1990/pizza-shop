import "./ButtonText.scss";

import PropTypes from "prop-types";

const ButtonText = ({ text, theme, ...props }) => {
  return (
    <button className={`button-text button-text_theme_${theme}`} {...props}>
      {text}
    </button>
  );
};

ButtonText.propTypes = {
  icon: PropTypes.element,
  theme: PropTypes.oneOf(["transparent", "orange"]),
};

export { ButtonText };
