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
  username: 'ninho',
  password: 'valdo',
  firstname: 'Tatouin',
  lastname: 'Serris',
  email: 'tat.s@schola.fr',
  role: 'student',
  nextMail: '0',
  nextMailGrade: '0',
  classId: '5faa1bccad70be34ddafebeb'
});
