const responseCode = {
  SUCCESS: 200,
  CREATED: 201,
  BADREQ: 400,
  UNAUTH: 401,
  FORBID: 403,
  NOTFOUND: 404,
  CONFLICT: 409,
  INTSERVERR: 500,
};

const getMessageFromCode = (code) => {
  const messages = [
    [200, "success"],
    [201, "created"],
    [400, "bad request"],
    [401, "unauthorized"],
    [403, "forbidden"],
    [404, "not found"],
    [409, "conflict"],
    [500, "internal server error"],
  ];
  let result = "success";
  messages.forEach((el) => {
    const [c, m] = el;
    if (c === code) {
      result = m;
    }
  });
  return result;
};

const buildResponseBody = (data, code = 200) => {
  return {
    code,
    data,
    message: getMessageFromCode(code),
  };
};

const responseBody = {
  buildResponseBody,
  responseCode,
};

module.exports = responseBody;
