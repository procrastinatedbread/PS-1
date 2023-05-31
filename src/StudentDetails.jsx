const StudentDetails = ({ student }) => {
  const { name, english, maths, computers } = student;
  const total = english + maths + computers;
  let grade;
  if (total >= 225) {
    grade = "A";
  } else if (total >= 180 && total < 225) {
    grade = "B";
  } else if (total >= 150 && total < 180) {
    grade = "C";
  } else {
    grade = "D";
  }

  return (
    <>
      <h1>Student Details</h1>
      <h3>Name: {name}</h3>
      <h3>English: {english}</h3>
      <h3>Maths: {maths}</h3>
      <h3>Computers: {computers}</h3>
      <h3>Total: {total}</h3>
      <h3>Grade : {grade}</h3>
    </>
  );
};
export default StudentDetails;
