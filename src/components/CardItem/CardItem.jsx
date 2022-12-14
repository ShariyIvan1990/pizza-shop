import "./CardItem.scss";

import PropTypes from "prop-types";

const CardItem = ({
  imageName,
  title,
  description,
  price,
  weight,
  buttonToCart,
  ...props
}) => {
  return (
    <div {...props}>
      <img
        className="card__image"
        src={`${process.env.PUBLIC_URL}/images/cards/${imageName}`}
        alt={title}
      />
      <h2 className="card__title">{title}</h2>
      {description ? <p className="card__description">{description}</p> : ""}
      <p className="card__info">
        <span className="card__info-price">{price} ₽</span>
        {weight ? <span className="card__info-weight"> /{weight} г.</span> : ""}
      </p>
      {buttonToCart}
      {/* <ButtonIcon theme={iconTheme} icon={icon} /> */}
    </div>
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
