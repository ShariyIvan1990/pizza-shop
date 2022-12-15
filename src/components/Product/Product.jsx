import { useParams } from "react-router-dom";

import { CardItem } from "../CardItem";
import { ButtonText } from "../ui/ButtonText";
import { products } from "../../services/dataList";

import "./Product.scss";

export const Product = () => {
  const id = Number(useParams().id);
  console.log(typeof id);

  const product = products[id - 1];

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
        buttonToCart={<ButtonText text="В корзину" theme="orange" />}
      />
    </div>
  );
};
