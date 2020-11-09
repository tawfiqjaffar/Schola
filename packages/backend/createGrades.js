const axios = require('axios');
const { createAllSubjects } = require('./createSubjects');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

async function createSingleGrade(
  studentId,
  subjectId,
  grade,
  label,
  accessToken
) {
  try {
    const resp = await axios.post(
      'http://localhost:8080/api/grade/create',
      { studentId, subjectId, grade, label },
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return resp;
  } catch (err) {
    console.error('unable to create grade');
    return undefined;
  }
}

const createAllGrades = async (subjectIds, studentId, accessToken) => {
  const arr = [];

  for (let i = 0; i < 100; i += 1) {
    arr.push(i);
  }
  arr.forEach(async (index) => {
    try {
      await createSingleGrade(
        studentId,
        subjectIds[getRandomInt(subjectIds.length)],
        getRandomInt(20),
        `Grade ${index}`,
        accessToken
      );
    } catch (err) {
      console.error(err);
    }
  });
};

const main = async () => {
  const subs = await createAllSubjects(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmFkbWluIiwicm9sZSI6ImFkbWluIiwiX2lkIjoiNWY0ZDQ3ODg4ZDViMjk3YTEwNWFjMTFkIiwiaWF0IjoxNTk4OTAwMTA4fQ.SGfKmlsy_PAApWnNQWupV-2DsPRC8wTwcZlIrab0tCo'
  );

  await createAllGrades(
    subs,
    '5f4d47888d5b297a105ac11d',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmFkbWluIiwicm9sZSI6ImFkbWluIiwiX2lkIjoiNWY0ZDQ3ODg4ZDViMjk3YTEwNWFjMTFkIiwiaWF0IjoxNTk4OTAwMTA4fQ.SGfKmlsy_PAApWnNQWupV-2DsPRC8wTwcZlIrab0tCo'
  );
  console.log(subs);
};

main();
