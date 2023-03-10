import PropTypes from "prop-types";

import "./ButtonIcon.scss";

export const ButtonIcon = ({ icon, theme, ...props }) => {
  return (
    <button className={`button-icon button-icon_theme_${theme}`} {...props}>
      {icon}
    </button>
  );
};

ButtonIcon.propTypes = {
  icon: PropTypes.element,
  theme: PropTypes.oneOf(["white", "orange"]),
};
