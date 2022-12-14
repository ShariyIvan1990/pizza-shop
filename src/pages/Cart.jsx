import { HeaderApp } from "../components/HeaderApp";
import { CartApp } from "../components/CartApp";

export const Cart = () => {
  return (
    <>
      <HeaderApp butonBack title="Корзина с выбранными товарами" />
      <CartApp />
    </>
  );
};
