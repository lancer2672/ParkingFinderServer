const User = require("../user.model");

class UserRepository {
  static async findById(userId) {
    return await User.findById(userId).exec();
  }
}

module.exports = UserRepository;
