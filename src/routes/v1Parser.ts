import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { Client } from "@entities/client";
import { dataMissingError, dataInvalidError } from '@shared/constants';

// const userDao = new UserDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



/**
 * v1Parse
 * 
 * @param req 
 * @param res 
 * @returns 
 */
 export async function v1Parse(req: Request, res: Response) {
    const { data } = req.body;
    if (!data) {
        return res.status(BAD_REQUEST).json({
            error: dataMissingError,
        });
    }
    if (data.length !== 25) {
        return res.status(BAD_REQUEST).json({
            error: dataInvalidError,
        });
    }
    const client:Client = {
        firstName: req.body.data.substr(0,8),
        lastName: req.body.data.substr(8,10),
        clientId: req.body.data.substr(18,6)
    }
    return res.status(OK).json(client);
}

