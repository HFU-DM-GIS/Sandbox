const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

const dbFilePath = 'hochschule.db';

async function main() {
    const db = await sqlite.open({
        filename: dbFilePath,
        driver: sqlite3.Database,
    });

    console.log(await db.all('SELECT * FROM student'));
    await db.close();
}

main();