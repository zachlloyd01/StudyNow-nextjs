/* 
    Add a user to the database
*/

import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Cookie from 'cookies';

dbConnect();

export default async (req, res) => {
    if(req.method === 'POST') { // Proper request method
        
        const saltRounds = 10; // Salt the password this many times
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

        let data = req.body;

        data.password = hashedPassword; // Set password to salted and ecrypted version

        let refreshString = Math.random().toString(36) // Random string
                            .substring(2, 15) + Math.random()
                            .toString(36).substring(2, 15);

        data.refreshToken = refreshString;

        let newUser;

        try {
            newUser = await User.create(data); // Create and push model instance
        }
        catch (err) {
            return res.status(500).json(err);
        }

        const sendData = {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name
        };

        const userToken = jwt.sign( // User token expires quickly
            sendData,
            process.env.JWT_SECRET,
            {
                expiresIn: '10 minutes'
            }
        );

        const refreshToken = await jwt.sign( // Expires after one week
            {refreshString,},
            process.env.JWT_SECRET,
            {
                expiresIn: '1 week'
            }
        );

        await Cookie.set('userToken', userToken, {
            httpOnly: true,
        });

        
        res.status(200).json({ // Send data back to frontend
            refreshToken,
            sendData
        });
    }

    else {
        res.status(405).json('Please issue POST request!'); // Bad request!
    }
}