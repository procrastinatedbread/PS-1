const ImageComponent = ({ imageLink, caption }) => {
  return (
    <>
      <img src={imageLink} alt="flower"></img>
      <p>{caption}</p>
    </>
  );
};
export default ImageComponent;
