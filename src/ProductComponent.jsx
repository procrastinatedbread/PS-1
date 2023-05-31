const ProductComponent = ({ products }) => {
  return (
    <>
      <h1>Products names</h1>
      {products.map(({ name }) => (
        <li>{name}</li>
      ))}
      {products
        .filter(({ name, quantity, sales }) => sales > quantity)
        .map(({ name, quantity, sales }) => {
          return (
            <li>
              Name: {name}, Quantity: {quantity}, Sales:{sales}
            </li>
          );
        })}
    </>
  );
};
export default ProductComponent;
