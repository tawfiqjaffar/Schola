const axios = require('axios');
const createSchool = require('./createSchool');

const createSubject = async (subject, accessToken) => {
  const { label, schoolId } = subject;
  console.log(schoolId);
  try {
    const resp = await axios.post(
      'http://localhost:8080/api/subject/create',
      { label, schoolId },
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return resp.data;
  } catch (err) {
    // console.error(err);
    return undefined;
  }
};
const createAllSubjects = async (accessToken) => {
  const subjects = [
    'Math',
    'Francais',
    'Anglais',
    'Physique-Chimie',
    'SVT',
    'EPS',
    'Histoire-Geo',
  ];
  const subs = [];
  const school = await createSchool(
    { name: 'College test', address: 'address' },
    accessToken
  );

  if (school === undefined) {
    console.error('unable to create school');
  } else {
    for (const el of subjects) {
      const sub = createSubject(
        { label: el, schoolId: school.data._id },
        accessToken
      );
      if (!sub) {
        console.error('unable to create subject');
      }
      subs.push(sub.data._id);
    }
  }
  console.log(subs);
  return subs;
};

module.exports = { createAllSubjects };
