import ProductItems from "./ProductItems";

const Product = () => {
  const products = [
    {
      id: "1",
      name: "Product 1",
      description: "Description for product 1",
      price: 19.99,
      image: "/img/product.jpeg",
    },
    {
      id: "2",
      name: "Product 2",
      description: "Description for product 2",
      price: 29.99,
      image: "/img/product.jpeg",
    },
    {
      id: "3",
      name: "Product 3",
      description: "Description for product 3",
      price: 39.99,
      image: "/img/product.jpeg",
    },
    {
      id: "4",
      name: "Product 4",
      description: "Description for product 4",
      price: 49.99,
      image: "/img/product.jpeg",
    },
    {
      id: "5",
      name: "Product 5",
      description: "Description for product 5",
      price: 59.66,
      image: "/img/product.jpeg",
    },
    {
      id: "6",
      name: "Product 6",
      description: "Description for product 6",
      price: 22.59,
      image: "/img/product.jpeg",
    },
    {
      id: "7",
      name: "Product 7",
      description: "Description for product 7",
      price: 69.99,
      image: "/img/product.jpeg",
    },
    {
      id: "8",
      name: "Product 8",
      description: "Description for product 8",
      price: 29.99,
      image: "/img/product.jpeg",
    },
    {
      id: "9",
      name: "Product 9",
      description: "Description for product 9",
      price: 49.99,
      image: "/img/product.jpeg",
    },
    {
      id: "10",
      name: "Product 10",
      description: "Description for product 10",
      price: 49.99,
      image: "/img/product.jpeg",
    },
  ];
  return (
    <div>
      <div className="product-list">
        <ul>
          {products.map((product) => (
            <ProductItems key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
