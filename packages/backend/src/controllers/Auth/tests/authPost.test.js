const axios = require('axios');
const { runServer } = require('../../../../initConnections');

beforeEach(() => {
  process.env.NODE_ENV = 'test';
  runServer();
});

const createTestUser = async () => {
  try {
    const user = await axios.post('http://localhost:8080/api/user/create', {
      email: 'test@test.test',
      password: 'test',
      firstname: 'test',
      lastname: 'test',
    });
    return user;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

const authTestUser = async () => {
  try {
    const auth = await axios.post('http://localhost:8080/api/auth/login', {
      email: 'test@test.test',
      password: 'test',
    });
    return auth;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

describe('Authentication', () => {
  it('should authenticate a user and return an access token', async () => {
    await createTestUser();
    let auth = await authTestUser();

    expect(auth).toBeDefined();
    expect(auth.data.code).toEqual(200);
  });
});
