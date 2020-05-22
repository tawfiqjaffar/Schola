const axios = require('axios');
const { runServer, app } = require('../../../../initConnections');

const port = process.env.PORT || 8080;
let server;

beforeAll((done) => {
  process.env.NODE_ENV = 'test';
  runServer();
  server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    done();
  });
});

const createTestUser = async () => {
  try {
    const user = await axios.post('http://localhost:8080/api/user/create', {
      email: 'test@test.test',
      password: 'test',
      firstname: 'test',
      lastname: 'test',
    });
    console.log(user.data);
    return user.data;
  } catch (err) {
    console.error(err.response.data);
    return undefined;
  }
};

const postAuthTestUser = async () => {
  try {
    const auth = await axios.post('http://localhost:8080/api/auth/login', {
      email: 'test@test.test',
      password: 'test',
    });
    console.log(auth.data);
    return auth.data;
  } catch (err) {
    console.error(err.response.data);
    return undefined;
  }
};

const userInfo = async (acessToken) => {
  try {
    const user = await axios({
      url: 'http://localhost:8080/api/user',
      method: 'get',
      headers: {
        authorization: `Bearer ${acessToken}`,
      },
    });
    console.log(user.data);
    return user.data;
  } catch (err) {
    console.error(err.response);
    return undefined;
  }
};

describe('Users GET', () => {
  it('should use /user route to get only logged user info', async () => {
    await createTestUser();
    const auth = await postAuthTestUser();

    expect(auth).toBeDefined();
    expect(auth.code).toEqual(200);
    const user = await userInfo(auth.data.accessToken);

    expect(user).toBeDefined();
    expect(user.code).toEqual(200);
  });
});

afterAll((done) => {
  server.close(done);
});
