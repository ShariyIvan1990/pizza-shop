import "./style.scss";

import PropTypes from "prop-types";

const ButtonIcon = ({ icon, style, clickHandler, ...props }) => {
  return (
    <button
      onClick={clickHandler}
      className={`button-icon button-icon_theme_${style}`}
      {...props}
    >
      {icon}
    </button>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.element,
  style: PropTypes.oneOf(["white", "orange"]),
};

export { ButtonIcon };
