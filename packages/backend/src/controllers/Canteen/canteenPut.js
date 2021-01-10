const Canteen = require("../../models/canteen");
const responseBody = require("../../routes/responseBody");

const updateDateLunch = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    const { body } = req;
    const newDate = req.body.date;

    return Canteen.updateOne(
      { _id: body.id },
      { $set: { date: newDate } },
      (err, data) => {
        if (err) {
          console.log(err);
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                err,
                responseBody.responseCode.INTSERVERR
              )
            );
        } else {
          return res
            .status(responseBody.responseCode.SUCCESS)
            .send(
              responseBody.buildResponseBody(
                data,
                responseBody.responseCode.SUCCESS
              )
            );
        }
      }
    );
  } else {
    return res
      .status(responseBody.responseCode.FORBID)
      .send(
        responseBody.buildResponseBody(
          "You do not have the access right to perform such a modification",
          responseBody.responseCode.FORBID
        )
      );
  }
};

const updateStarterLunch = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    const { body } = req;
    const newStarter = req.body.starter;

    return Canteen.updateOne(
      { _id: body.id },
      { $set: { starter: newStarter } },
      (err, data) => {
        if (err) {
          console.log(err);
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                err,
                responseBody.responseCode.INTSERVERR
              )
            );
        } else {
          return res
            .status(responseBody.responseCode.SUCCESS)
            .send(
              responseBody.buildResponseBody(
                data,
                responseBody.responseCode.SUCCESS
              )
            );
        }
      }
    );
  } else {
    return res
      .status(responseBody.responseCode.FORBID)
      .send(
        responseBody.buildResponseBody(
          "You do not have the access right to perform such a modification",
          responseBody.responseCode.FORBID
        )
      );
  }
};

const updateMealLunch = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    const { body } = req;
    const newMeal = req.body.meal;

    return Canteen.updateOne(
      { _id: body.id },
      { $set: { meal: newMeal } },
      (err, data) => {
        if (err) {
          console.log(err);
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                err,
                responseBody.responseCode.INTSERVERR
              )
            );
        } else {
          return res
            .status(responseBody.responseCode.SUCCESS)
            .send(
              responseBody.buildResponseBody(
                data,
                responseBody.responseCode.SUCCESS
              )
            );
        }
      }
    );
  } else {
    return res
      .status(responseBody.responseCode.FORBID)
      .send(
        responseBody.buildResponseBody(
          "You do not have the access right to perform such a modification",
          responseBody.responseCode.FORBID
        )
      );
  }
};

const updateDessertLunch = (req, res) => {
  if (req.user.role === "viesco" || req.user.role === "admin") {
    const { body } = req;
    const newDessert = req.body.dessert;

    return Canteen.updateOne(
      { _id: body.id },
      { $set: { dessert: newDessert } },
      (err, data) => {
        if (err) {
          console.log(err);
          return res
            .status(responseBody.responseCode.INTSERVERR)
            .send(
              responseBody.buildResponseBody(
                err,
                responseBody.responseCode.INTSERVERR
              )
            );
        } else {
          return res
            .status(responseBody.responseCode.SUCCESS)
            .send(
              responseBody.buildResponseBody(
                data,
                responseBody.responseCode.SUCCESS
              )
            );
        }
      }
    );
  } else {
    return res
      .status(responseBody.responseCode.FORBID)
      .send(
        responseBody.buildResponseBody(
          "You do not have the access right to perform such a modification",
          responseBody.responseCode.FORBID
        )
      );
  }
};

module.exports = {
  updateDateLunch,
  updateStarterLunch,
  updateMealLunch,
  updateDessertLunch,
};
