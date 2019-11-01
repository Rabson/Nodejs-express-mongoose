const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    title: { type: String, required: true },
    content: String,
    author: String
}, { collection: 'user-data' });

const User = mongoose.model('UserData', userDataSchema);

module.exports = {
    find: async (query = {}) => {
        try {
            return await User.find(query);
        } catch (error) {
            console.log("error in find User DB.");
            throw error;
        }
    },
    insert: async (data) => {
        try {
            const UserData = new User(data);
            return await UserData.save();
        } catch (error) {
            console.log("error in insert User DB.");
            throw error;
        }
    },
    updateById: async (Id, data) => {
        try {
            return await User.updateOne({ _id: Id }, { $set: { ...data } });
        } catch (error) {
            console.log("error in updateById User DB.");
            throw error;
        }
    },
    removeById: async (Id) => {
        try {
            return await User.remove({ _id: Id });
        } catch (error) {
            console.log("error in removeById User DB.");
            throw error;
        }
    },
}