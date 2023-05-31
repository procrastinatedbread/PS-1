const EmployeeDetails = () => {
  const employees = [
    {
      name: "Jack Smith",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 24000
    },
    {
      name: "Mary Robbins",
      level: 3,
      dept: "Fin",
      designation: "Manager",
      salary: 28000
    },
    {
      name: "Steve Williams",
      level: 4,
      dept: "Ops",
      designation: "President",
      salary: 35000
    },
    {
      name: "Bob Andrews",
      level: 1,
      dept: "Fin",
      designation: "Trainee",
      salary: 16500
    },
    {
      name: "Dave Martin",
      level: 2,
      dept: "Fin",
      designation: "Manager",
      salary: 21700
    },
    {
      name: "Julia Clarke",
      level: 3,
      dept: "Ops",
      designation: "Manager",
      salary: 26900
    },
    {
      name: "Kathy Jones",
      level: 4,
      dept: "Tech",
      designation: "President",
      salary: 42500
    },
    {
      name: "Tom Bresnan",
      level: 2,
      dept: "Tech",
      designation: "Manager",
      salary: 22200
    }
  ];

  return (
    <>
      <ul>
        {employees.map(({ name, level, dept, designation, salary }) => {
          if (level === 2) {
            return (
              <li style={{ backgroundColor: "orange" }}>
                name: {name}, level: {level}, dept: {dept}, designation:{" "}
                {designation}, salary: {salary}
              </li>
            );
          } else if (designation === "President") {
            return (
              <li style={{ border: "1px solid black" }}>
                name: {name}, level: {level}, dept: {dept}, designation:{" "}
                {designation}, salary: {salary}
              </li>
            );
          }
          return (
            <li>
              name: {name}, level: {level}, dept: {dept}, designation:{" "}
              {designation}, salary: {salary}
            </li>
          );
        })}
      </ul>
      <h1>
        Total salary expense:{" "}
        {employees.reduce((acc, curr) => acc + curr.salary, 0)}
      </h1>
    </>
  );
};
export default EmployeeDetails;
