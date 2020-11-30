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
<<<<<<< HEAD
  username: 'ninho',
  password: 'valdo',
  firstname: 'Tatouin',
  lastname: 'Serris',
  email: 'tat.s@schola.fr',
  role: 'student',
  nextMail: '0',
  nextMailGrade: '0',
  classId: '5faa1bccad70be34ddafebeb'
=======
  username: 'parent',
  password: 'parent',
  firstname: 'parent',
  lastname: 'parent',
  email: 'parent@parent.parent',
  role: 'parent',
>>>>>>> 7aa1d856d06c616952b4c501325e079e318ecece
});
