import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="product">
      <div className="product__img">
        <img src={props.image} alt="product-image" className="transition" />
      </div>
      <div className="product__details">
        <p className="product__title">{props.title}</p>
        <p className="product__price">
          <span>$</span> {props.price}
        </p>
      </div>
    </div>
  );
}
export default ProductCard;
