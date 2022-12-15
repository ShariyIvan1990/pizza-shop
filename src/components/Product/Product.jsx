import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { CardItem } from "../CardItem";
import { ButtonText } from "../ui/ButtonText";
import { products } from "../../services/dataList";

import "./Product.scss";

export const Product = () => {
  const dispatch = useDispatch();
  const id = Number(useParams().id);
  console.log(typeof id);

  const product = products[id - 1];

  const handleClick = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product: product, price: product.price },
    });
  };

  return (
    <div className="product">
      <CardItem
        className="product-card"
        id={id}
        imageName={product.img}
        title={product.name}
        description={product.description}
        price={product.price}
        weight={product.weight}
        buttonToCart={
          <ButtonText
            onClick={() => {
              handleClick(product);
            }}
            text="В корзину"
            theme="orange"
          />
        }
      />
    </div>
  );
};
