/* 
    Add a user to the database
*/

import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

import bcrypt from 'bcrypt';

dbConnect();

export default async (req, res) => {
    if(req.method === 'POST') { // Proper request method
        
        const saltRounds = 10; // Salt the password this many times
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        let data = req.body;

        data.password = hashedPassword; // Set password to salted and ecrypted version

        const newUser = await User.create(data); // Create and push model instance

        res.status(200).json({ // Send data back to frontend
            success: 'success',
            user: {
                name: newUser.name,
                email: newUser.email,
            }
        });
    }

    else {
        res.status(405).json('Please issue POST request!'); // Bad request!
    }
}