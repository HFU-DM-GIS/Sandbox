// Created by ChatGPT on 2024-01-04: https://chat.openai.com/share/c02633f1-a84e-4203-92d7-0c24fdf762e1
const sqlite3 = require('sqlite3').verbose();

// Connect to the database (or create a new one if it doesn't exist)
const db = new sqlite3.Database('example.db');

// Create a table
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INT, name TEXT)');

  // Insert some sample data
  const stmt = db.prepare('INSERT INTO users VALUES (?, ?)');
  stmt.run(1, 'John Doe');
  stmt.run(2, 'Jane Smith');
  stmt.finalize();

  // Retrieve data and print it
  db.each('SELECT * FROM users', (err, row) => {
    console.log(`${row.id} - ${row.name}`);
  });
});

// Close the database connection
db.close();
