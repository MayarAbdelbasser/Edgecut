import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";
import img1 from "../assets/f1.png";
import img2 from "../assets/f2.png";
import img3 from "../assets/f3.png";
import img4 from "../assets/f4.png";
import img5 from "../assets/f5.png";
import img6 from "../assets/f6.png";

function Products() {
  const products = [
    { id: 1, title: "brown Chair Design", price: 100, image: img1 },
    { id: 2, title: "Double Bed Design", price: 200, image: img2 },
    { id: 3, title: "House Chair Design", price: 200, image: img3 },
    { id: 4, title: "brown Table Design", price: 100, image: img4 },
    { id: 5, title: "Blue Chair Design", price: 200, image: img5 },
    { id: 6, title: "Brown Table Design", price: 200, image: img6 },
  ];
  return (
    <section className="container products__container" id="furnitures">
      <h2>Our Furniture</h2>
      <p>
        which don't look even slightly believable. If you are going to use a
        passage of Lorem Ipsum, you need to be sure there isn't an
      </p>
      <div className="products__holder">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Products;
