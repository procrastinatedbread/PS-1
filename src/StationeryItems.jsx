const StationeryItems = ({ header, items }) => {
  return (
    <>
      <h1>{header}</h1>
      {items.map((item) => {
        return <li>{item}</li>;
      })}
    </>
  );
};
export default StationeryItems;
