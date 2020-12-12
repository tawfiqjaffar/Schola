const axios = require("axios");
const { runServer, app } = require("../../../../initConnections");

const port = process.env.PORT || 8080;
let server;

beforeAll((done) => {
  console.log("before");
  process.env.NODE_ENV = "test";
  runServer();
  server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    done();
  });
});

const createTestUser = async () => {
  try {
    const user = await axios.post("http://localhost:8080/api/user/create", {
      email: "test@test.test",
      password: "test",
      firstname: "test",
      lastname: "test",
    });
    return user;
  } catch (err) {
    console.error(err.response.data);
    return undefined;
  }
};

const authTestUser = async () => {
  try {
    const auth = await axios.post("http://localhost:8080/api/auth/login", {
      email: "test@test.test",
      password: "test",
    });
    return auth;
  } catch (err) {
    console.error(err.response.data);
    return undefined;
  }
};

describe("Authentication", () => {
  it("should authenticate a user and return an access token", async () => {
    await createTestUser();
    const auth = await authTestUser();

    expect(auth).toBeDefined();
    expect(auth.data.code).toEqual(200);
  });
});

afterAll((done) => {
  console.log("after");

  server.close(done);
});
