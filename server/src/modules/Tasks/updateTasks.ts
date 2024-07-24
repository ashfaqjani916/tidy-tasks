import {Request,Response} from 'express';
const {list} = require('pb-util');

export const updateTasks = async (req: Request, res: Response) => {
    const tasksArr = req.body;
    const listValues = list.encode(tasksArr);
    console.log(listValues);
    res.send(listValues);

}
