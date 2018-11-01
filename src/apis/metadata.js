
import { getMetaDataFromFile, getAllMetadata } from '../lib/songslibrary';

function MetaDataAPI(app, options){

  app.get('/metadata', (req, res, next) => {
    getAllMetadata()
    .then( metadata => {
      res.status(200).json(metadata)
    })
    .catch(err => {
      res.status(500).send('Server Error')
      next(err)
    })
  });

  app.get('/metadata/:song', (req, res, next) => {
    
    getMetaDataFromFile(req.params.song)
    .then( (metadata) => {
      res.status(200).json(metadata)
    })
    .catch(err => {
      res.status(500).send('Server Error')
      next(err)
    })
  });

}
export default MetaDataAPI;