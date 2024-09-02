import connectDB from '../DB/connection'
import userRouter from "./modules/user/user.router"
import { Express } from 'express';

const bootstrap = (app: Express, express: any): void => {
    app.use(express.json());

    app.use("/user", userRouter);

    connectDB();
};

export default bootstrap;
