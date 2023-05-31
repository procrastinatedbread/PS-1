import "./styles.css";
import EmployeeCard from "./EmployeeCard";
import ButtonComponent from "./ButtonComponent";
import StationeryItems from "./StationeryItems";
import ImageComponent from "./ImageComponent";
import ProductComponent from "./ProductComponent";
import StudentDetails from "./StudentDetails";
import EmployeeDetails from "./EmployeeDetails";

export default function App() {
  const name = "Nikhil";
  const designation = "SWE";
  const workExperience = "3 years";
  const backgroundColor = "lightgreen";
  const color = "darkgreen";
  const borderRadius = "5px";
  const padding = "10px";
  const items = ["pen", "pencil", "ruler", "eraser"];
  const header = "Stationery Items";
  const imageLink =
    "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
  const caption = "Spring Flowers";
  const products = [
    { name: "Perk", quantity: 10, sales: 7 },
    { name: "Pepsi", quantity: 10, sales: 20 },
    { name: "Coke", quantity: 18, sales: 50 },
    { name: "Maggi", quantity: 41, sales: 22 },
    { name: "5Star", quantity: 7, sales: 9 }
  ];
  const student = {
    name: "John Doe",
    english: 90,
    maths: 80,
    computers: 70
  };
  return (
    <div className="App">
      <EmployeeCard
        name={name}
        designation={designation}
        workExperience={workExperience}
      />
      <ButtonComponent
        backgroundColor={backgroundColor}
        color={color}
        borderRadius={borderRadius}
        padding={padding}
      />
      <StationeryItems header={header} items={items} />
      <ImageComponent imageLink={imageLink} caption={caption} />
      <ProductComponent products={products} />
      <StudentDetails student={student} />
      <EmployeeDetails />
    </div>
  );
}
