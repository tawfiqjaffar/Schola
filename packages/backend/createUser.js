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
  username: 'admin',
  password: 'admin',
  firstname: 'Admin',
  lastname: 'ADMIN',
  email: 'admin@admin.admin',
  role: 'admin',
});
