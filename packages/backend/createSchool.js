const axios = require('axios');

const createSchool = async (school, accessToken) => {
  const { name, address } = school;
  console.log('NAME', name, 'ADDREsS', address);
  try {
    const resp = await axios.post(
      'http://localhost:8080/api/school/create',
      { name, address },
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return resp.data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

module.exports = createSchool;
