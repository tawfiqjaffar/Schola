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
    });
    console.log(resp.data.data);
    console.log('User created!');
  } catch (err) {
    console.error(err);
  }
};

createUser({
  username: 'student',
  password: 'student',
  firstname: 'student',
  lastname: 'student',
  email: 'student@student.student',
  role: 'student',
});
