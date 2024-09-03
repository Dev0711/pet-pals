const { User, Pet } = require('../models');

class UserService {
  async createUser(user) {
    return await User.create(user);
  }

  async getUserByField(field, projection = null) {
    if (projection === null) return await User.findOne(field).populate('pets_ids').exec();
    
    return await User.findOne(field).select(projection).populate('pets_ids').exec();
  }

  async getUsersByField(field, projection = null) {
    if (projection === null) return await User.find(field);
    
    return await User.find(field).select(projection);
  }

  async getUserById(id) {
    return await User.findById(id);
  }

  async updateUserByField(filter, update) {
    return await User.findOneAndUpdate(filter, update, { new: true });
  }

  async deleteUser(id) {
    return await User.deleteOne(id);
  }
}

module.exports = new UserService();