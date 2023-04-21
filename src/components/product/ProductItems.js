import "./ProductItems.css";

const ProductItems = () => {
  const products = [
    {
      name: "Product 1",
      description: "Description for product 1",
      price: 19.99,
      image: "/img/product.jpeg",
    },
    {
      name: "Product 2",
      description: "Description for product 2",
      price: 29.99,
      image: "/img/product.jpeg",
    },
    {
      name: "Product 3",
      description: "Description for product 3",
      price: 39.99,
      image: "/img/product.jpeg",
    },
    {
      name: "Product 4",
      description: "Description for product 4",
      price: 49.99,
      image: "/img/product.jpeg",
    },
  ];

  return (
    <div className="product-list">
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div className="product-item">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h3>${product.price.toFixed(2)}</h3>
              <button>Add Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductItems;
