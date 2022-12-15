import { CardItem } from "../CardItem/";
import { products } from "../../services/dataList";
import { ButtonIcon } from "../ui/ButtonIcon";

import { ReactComponent as IconAdd } from "../Icons/buttonAddIcon.svg";

import "./Cards.scss";
import { useDispatch } from "react-redux";

export const Cards = () => {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product: product, price: product.price },
    });
  };

  return (
    <div className="cards">
      {products.map((el) => (
        <CardItem
          className="card"
          link
          key={el.id}
          id={el.id}
          imageName={el.img}
          title={el.name}
          description={el.description}
          price={el.price}
          weight={Number(el.price)}
          buttonToCart={
            <ButtonIcon
              onClick={() => {
                handleClick(el);
              }}
              theme="white"
              icon={<IconAdd />}
            />
          }
        />
      ))}
    </div>
  );
};
