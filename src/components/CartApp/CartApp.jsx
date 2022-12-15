import { useDispatch, useSelector } from "react-redux";

import { CardItem } from "../CardItem";
import { ButtonText } from "../ui/ButtonText";
import { ButtonIcon } from "../ui/ButtonIcon";

import { ReactComponent as ButtonDeleteIcon } from "../Icons/IconDelete.svg";

import "./CartApp.scss";

export const CartApp = () => {
  const { positions, price } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = (id, price) => {
    dispatch({ type: "DELETE_TO_CART", payload: { index: id, price: price } });
  };

  return (
    <div className="cart-app">
      <div className="cart-main">
        {positions.map((p, index) => {
          return (
            <CardItem
              key={p.id}
              className="cart-card"
              imageName={p.img}
              title={p.name}
              price={p.price}
              buttonToCart={
                <ButtonIcon
                  onClick={() => handleClick(index, p.price)}
                  theme="orange"
                  icon={<ButtonDeleteIcon />}
                />
              }
              iconTheme="orange"
            />
          );
        })}
      </div>
      <div className="cart-footer">
        <p className="cart-footer__order">
          Заказ на сумму:{" "}
          <span className="cart-footer__order-summ">{price} ₽</span>
        </p>
        <ButtonText text="Оформить заказ" theme="orange" />
      </div>
    </div>
  );
};
