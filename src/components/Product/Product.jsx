import { CardItem } from "../CardItem";
import { ButtonText } from "../ui/ButtonText";
import { products } from "../../services/dataList";

import "./Product.scss";

export const Product = () => {
  const product = products[0];
  return (
    <div className="product">
      <CardItem
        className="product-card"
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
