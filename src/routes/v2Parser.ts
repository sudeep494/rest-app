import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { Client } from "@entities/client";
import { dataMissingError, dataInvalidError } from '@shared/constants';

const { BAD_REQUEST, OK } = StatusCodes;


/**
 * v2Parse
 * 
 * @param req 
 * @param res 
 * @returns 
 */
 export async function v2Parse(req: Request, res: Response) {
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
        firstName: req.body.data.substr(0,8).replace(/0/g,''),
        lastName: req.body.data.substr(8,10).replace(/0/g,''),
        clientId: req.body.data.substr(18,3)+'-'+req.body.data.substr(21,4)
    }
    return res.status(OK).json(client);
}

