const EmployeeCard = ({ name, designation, workExperience }) => {
  return (
    <p>
      Name: {name} || Designation:{" "}
      <span style={{ color: "green" }}>{designation}</span> || Work Experience:{" "}
      <span style={{ color: "blue" }}>{workExperience}</span>
    </p>
  );
};
export default EmployeeCard;
