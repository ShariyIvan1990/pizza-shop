import { CardItem } from "../CardItem";
import { products } from "../../services/dataList";
import { ButtonText } from "../ui/ButtonText";

import "./CartApp.scss";

import { ReactComponent as ButtonDeleteIcon } from "../Icons/IconDelete.svg";

export const CartApp = () => {
  return (
    <div className="cart-app">
      <div className="cart-main">
        {products.map((p) => {
          return (
            <CardItem
              className="cart-card"
              imageName={p.img}
              title={p.name}
              price={p.price}
              icon={<ButtonDeleteIcon />}
              iconTheme="orange"
            />
          );
        })}
      </div>
      <div className="cart-footer">
        <p className="cart-footer__order">
          Заказ на сумму: <span className="cart-footer__order-summ">{0} ₽</span>
        </p>
        <ButtonText text="Оформить заказ" theme="orange" />
      </div>
    </div>
  );
};
