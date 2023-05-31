const ButtonComponent = ({ backgroundColor, color, borderRadius, padding }) => {
  return (
    <>
      <button
        style={{
          backgroundColor: backgroundColor,
          color: color,
          borderRadius: borderRadius,
          padding: padding
        }}
      >
        Start
      </button>
    </>
  );
};
export default ButtonComponent;
