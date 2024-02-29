const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const dbFilePath = 'hochschule.db';

async function main() {
    const db = await sqlite.open({
        filename: dbFilePath,
        driver: sqlite3.Database,
    });

    //console.log(await db.all('CREATE VIEW student_data AS SELECT student.studentNr, student.firstName, student.lastName, course.name AS "course", faculty.name AS "faculty" FROM (student INNER JOIN course ON student.course = course.id) INNER JOIN faculty ON course.faculty = faculty.id;'));
    
    console.log(await db.all('SELECT * FROM student_data WHERE course="MIB"'));
    await db.close();
}

main();