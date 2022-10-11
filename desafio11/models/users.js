import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import findOrCreate from 'mongoose-findorcreate';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        max: 100,
    },
    password: {
        type: String,
        required: true,
        max: 100,
    }
});
userSchema.plugin(findOrCreate);

export const User = mongoose.model('users', userSchema);