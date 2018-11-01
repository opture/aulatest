import express from 'express';
import SongsApi from './apis/songs';
import MetaDataAPI from './apis/metadata';

const app = express();


//Add endpoints.
SongsApi(app, {})
MetaDataAPI(app, {})

export default app