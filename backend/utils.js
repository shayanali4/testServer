import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
    },
        'somethingsecret',
    {
        expiresIn: '10d',
    });
};