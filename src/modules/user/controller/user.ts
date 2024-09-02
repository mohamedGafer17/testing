
import { Request, Response } from 'express';
import userModel from '../../../../DB/model/User.model';

// get users
export const getUserModule = async (req: Request, res: Response): Promise<Response> => {
    try {
        const users = await userModel.find();
        return res.json({ message: "Done", users });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch users' });
    }
}

// add user
export const addUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { userName, email, password, phone, number } = req.body;
        const user = await userModel.create({ userName, email, password, phone, number });
        return res.json({ message: "Done", user });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create user' });
    }
}

// update user
export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { age, phone } = req.body;

        const user = await userModel.updateOne({ _id: id }, { age, phone });
        return res.json({ message: "Done", user });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to update user' });
    }
}

// delete user
export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;

        const user = await userModel.deleteOne({ _id: id });
        return res.json({ message: 'Done', user });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to delete user' });
    }
}



// ---------------------
// sign up
// export const signup = async (req,res) => {
//     try {
    
//     const {userName, email, password, cPassword} = req.body
//     if (password != cPassword) {
//         return res.json({message: "Mismatch password and cpassword"})
//     }
//     const chechUser = await userModel.findOne({email: email})
//     if (chechUser) {
//         return res.json({message: "Email Exist"})
//     }
//         const newUser = new userModel({userName, email, password })
//         const user = await newUser.save()
//         return res.json ({message:"Done", user})
//     } catch (error) {
//         return res.json({ error})
//     }
// }

// // // ------------------------
// // // login
// export const login = async (req,res) => {
//     try {
    
//         const { email, password} = req.body
    
//         const user = await userModel.findOne({ email, password })
//         if (!user) {
//             return res.json({message: "Invalid email or password"})
//         }
//         return res.json ({message:"Done", user})
//     } catch (error) {
//         return res.json({ error})
//     }
// }
