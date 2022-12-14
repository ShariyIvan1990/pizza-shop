import "./ButtonIcon.scss";

import PropTypes from "prop-types";

const ButtonIcon = ({ icon, theme, handleClick, ...props }) => {
  return (
    <button
      onClick={handleClick}
      className={`button-icon button-icon_theme_${theme}`}
      {...props}
    >
      {icon}
    </button>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.element,
  theme: PropTypes.oneOf(["white", "orange"]),
};

export { ButtonIcon };
