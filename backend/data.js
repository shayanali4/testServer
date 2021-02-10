import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Shayan',
            email: 'shayanai4@live.com',
            password: bcrypt.hashSync('1234', 8),
        },
        {
            name: 'Shaheer',
            email: 'shaheer@live.com',
            password: bcrypt.hashSync('1234', 8),
        },
    ],
    
};
export default data;