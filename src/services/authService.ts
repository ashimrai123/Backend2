import bcrypt from 'bcrypt';
import jwtUtils from '../utils/jwtUtils';
import { User, users } from '../models/user';

const authService = {
  signup: async (userData: any) => {
    // Generate a salted hash of the password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Create a new user object
    const newUser: User = {
        id: Math.random().toString(36).substring(2, 11), 
        username: userData.username,
      email: userData.email,
      password: hashedPassword,
    };

    // Add the new user to the array
    users.push(newUser);

    // Generate a JWT using jwtUtils
    const token = jwtUtils.generateToken(newUser.id);

    // Return the new user and token
    return { user: newUser, token };
  },
};

export default authService;
