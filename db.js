// we need a database tool and use sqlite3
const sqlite3 = require('sqlite3').verbose();

// Connect to the database (or create a new one if it doesn't exist)
const db = new sqlite3.Database('hochschule.db');

db.serialize(() => {
    //db.run('INSERT INTO users VALUES (3, "Horst Hund Junior")')
  
    // Retrieve data and print it
    // db.each('SELECT * FROM student LEFT JOIN course ON student.course = course.id;', (err, row) => {
    //   console.log(`${row.firstName} - ${row.lastName} - ${row.course}`);
    // });
    db.each('SELECT * FROM course LEFT JOIN student ON student.course = course.id;', (err, row) => {
        console.log(`${row.firstName} - ${row.lastName} - ${row.course}`);
      });
  });
  
  // Close the database connection
  db.close();