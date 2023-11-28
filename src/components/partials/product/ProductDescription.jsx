function ProductDescription(props) {
  return (
    <div className="container">
      <h3 className="text-center mt-5 p-3">Description</h3>
      <p className="border-top border-bottom py-5">{props.description}</p>
    </div>
  );
}

export default ProductDescription;
