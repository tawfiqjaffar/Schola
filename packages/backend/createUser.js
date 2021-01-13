const axios = require('axios');

const createUser = async (user) => {
  const {
    username,
    password,
    firstname,
    lastname,
    email,
    dateofbirth,
    role,
    nextMail,
    nextMailGrade,
    classId,
  } = user;
  try {
    const resp = await axios.post('http://localhost:8080/api/user/create', {
      username,
      password,
      firstname,
      lastname,
      email,
      dateofbirth,
      role,
      nextMail,
      nextMailGrade,
      classId,
    });
    console.log(resp.data.data);
    console.log('User created!');
  } catch (err) {
    console.error(err);
  }
};

createUser({
  username: 'Mateo',
  password: 'Mateo',
  firstname: 'Mateo',
  lastname: 'Quintero',
  email: 'Mateo@teacher.fr',
  role: 'teacher',
  nextMail: '0',
  nextMailGrade: '0',
  classId: '5faa1bccad70be34ddafebeb'
});
