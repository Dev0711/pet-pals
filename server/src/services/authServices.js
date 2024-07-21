const { User } = require('../models');

class UserService {
  async createUser(user) {
    return await User.create(user);
  }

  async getUserByField(field) {
    return await User.findOne(field);
  }

  async getUserById(id) {
    return await User.findById(id);
  }

  async updateUserByField(filter, update) {
    return await User.findOneAndUpdate(filter, update);
  }

  async deleteUser(id) {
    return await User.deleteOne(id);
  }
}

module.exports = new UserService();