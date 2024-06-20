async function addStudent(url, jsonString) {
    const response = await fetch(url, {
      method: 'post',
      body: jsonString,
    });
  }
  
  async function getStudent(studentNr) {
    const response = await fetch(
      `http://127.0.0.1:3000/student?studentNr=${studentNr}`
    );
    const text = await response.text();
    console.log(JSON.parse(text));
  }
  
  async function getAllStudents() {
    const response = await fetch('http://127.0.0.1:3000/student');
    const text = await response.text();
    console.log(JSON.parse(text));
  }
  
  async function test() {
    await addStudent(
      'http://127.0.0.1:3000/student',
      JSON.stringify({
        studentNr: 111111,
        firstName: 'Adam',
        lastName: 'Anfang',
        semester: 1,
        faculty: 'DM',
        course: 'MKB',
      })
    );
    await getStudent(111111);
    await getAllStudents();
  }
  
  test();