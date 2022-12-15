import { useNavigate, Link } from "react-router-dom";

import { ButtonIcon } from "../ui/ButtonIcon";
import { ButtonText } from "../ui/ButtonText";

import { ReactComponent as IconBack } from "../Icons/icon_back.svg";
import { ReactComponent as IconCart } from "../Icons/icon_cart.svg";

import "./HeaderApp.scss";
import { useSelector } from "react-redux";

export const HeaderApp = ({ butonBack, title, cart, ...props }) => {
  const { price, amount } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  const handleClickLogout = () => {
    sessionStorage.removeItem("isAuth");

    navigate("/", { replace: true });
  };

  return (
    <header className="header">
      <div className="header-wrap">
        {butonBack ? (
          <ButtonIcon
            onClick={handleClick}
            icon={<IconBack />}
            theme="orange"
          />
        ) : null}
        {title ? <h2 className="header__title">{title}</h2> : null}
      </div>
      <div className="header-wrap">
        {cart ? (
          <div className="header-cart">
            <div className="cart__info">
              <p>{amount} товара</p>
              <p>на сумму {price} ₽</p>
            </div>
            <div className="cart__button">
              <Link to="/cart">
                <IconCart />
              </Link>
            </div>
          </div>
        ) : null}
        <ButtonText
          onClick={handleClickLogout}
          theme="transparent"
          text="Выйти"
        />
      </div>
    </header>
  );
};
