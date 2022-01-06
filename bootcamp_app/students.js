const { Pool } = require("pg");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const args = process.argv;
console.log(args);

pool
  .query(
    `
SELECT students.id, students.name AS student_name, cohorts.name AS cohort_name
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '${args[2]}%'
LIMIT ${args[3]};
`
  )
  .then((res) => {
    console.log(res);
    res.rows.forEach((user) => {
      //   console.log(user);
      console.log(
        `${user.student_name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`
      );
    });
  });
