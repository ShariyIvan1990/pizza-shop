import { CardItem } from "../CardItem/";
import { products } from "../../services/dataList";
import { ButtonIcon } from "../ui/ButtonIcon";

import { ReactComponent as IconAdd } from "../Icons/buttonAddIcon.svg";

import "./Cards.scss";

export const Cards = () => {
  console.log(process.env.PUBLIC_URL);
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
          buttonToCart={<ButtonIcon theme="white" icon={<IconAdd />} />}
        />
      ))}
    </div>
  );
};
