import "./CardItem.scss";

import PropTypes, { number } from "prop-types";

import { ButtonIcon } from "../ui/ButtonIcon";
import { ReactComponent as ButtonAddIcon } from "./buttonAddIcon.svg";

const CardItem = ({
  imageName,
  title,
  description,
  price,
  weight,
  ...props
}) => {
  return (
    <>
      <img
        className="card__image"
        src={`/images/cards/${imageName}`}
        alt={title}
      />
      <h2 className="card__title">{title}</h2>
      {description ? <p className="card__description">{description}</p> : ""}
      <p className="card__info">
        <span className="card__info-price">{price} ₽</span>
        {weight ? <span className="card__info-weight"> /{weight}</span> : ""}
      </p>
      <ButtonIcon theme="white" icon={<ButtonAddIcon />} />
    </>
  );
};

CardItem.propTypes = {
  imageName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  weight: PropTypes.number,
};

export { CardItem };
