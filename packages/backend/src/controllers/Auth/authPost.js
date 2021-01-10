require("dotenv");
const jwt = require("jsonwebtoken");

const userSchema = require("../../models/user");
const responseBody = require("../../routes/responseBody");
const { checkHash } = require("../../encryption/hash");

const postLoginUser = (req, res) => {
  const { email, password } = req.body;
  userSchema.findOne({ email }, async (err, user) => {
    if (err || !user) {
      return res
        .status(responseBody.responseCode.UNAUTH)
        .send(
          responseBody.buildResponseBody(
            err || `invalid username or password`,
            responseBody.responseCode.UNAUTH
          )
        );
    }
    try {
      const hasMatched = await checkHash(password, user.password);
      if (!hasMatched) {
        return res
          .status(responseBody.responseCode.UNAUTH)
          .send(
            responseBody.buildResponseBody(
              "invalid username or password",
              responseBody.responseCode.UNAUTH
            )
          );
      }
      const accessToken = jwt.sign(
        {
          email,
          userName: user.userName,
          role: user.role,
          _id: user._id,
        },
        process.env.SECRET
      );
      return res.status(responseBody.responseCode.SUCCESS).send(
        responseBody.buildResponseBody({
          accessToken,
        })
      );
    } catch (bcryptErr) {
      return res
        .status(responseBody.responseCode.INTSERVERR)
        .send(
          responseBody.buildResponseBody(
            bcryptErr,
            responseBody.responseCode.INTSERVERR
          )
        );
    }
  });
};

module.exports = {
  postLoginUser,
};
