import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "My First Book",
    description: "The first book I ever wrote",
    price: 6,
  },
  {
    id: "p2",
    title: "My Second Book",
    description: "The Second book I ever wrote",
    price: 5,
  },
  {
    id: "p3",
    title: "My Thrid Book",
    description: "The Third book I ever wrote",
    price: 8,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
