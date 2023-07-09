export default function ProductTile(index, product) {
  return (
    <div className="slider-slide" key={index}>
      <div className="slider-image-wrapper">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
}
