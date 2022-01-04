SELECT SUM(duration) AS total_duration 
FROM students
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
WHERE student_id = 186;
