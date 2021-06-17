import { Router } from 'express';
import { v1Parse } from './v1Parser';
import { v2Parse } from './v2Parser';


// Parser-routes
const parserRouter = Router();
parserRouter.post('/v1/parse', v1Parse);
parserRouter.post('/v2/parse', v2Parse);

export default parserRouter;
