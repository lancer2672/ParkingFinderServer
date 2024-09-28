const { OK } = require("../classes/success/SuccessResponse");
const AuthService = require("../service/auth.service");

exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError("Invalid information");
    }
    const loginData = await AuthService.login(req.body);
    new OK({
      message: "User logged in successfully",
      data: loginData,
    }).send(res);
  };