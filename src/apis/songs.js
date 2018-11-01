import { getAllSongs } from '../lib/songslibrary';

function SongsApi(app){

  app.get('/songs', (req, res, next) => {
    getAllSongs()
    .then( (songs) => {
      res.status(200).json(songs)
    })
    .catch(err => {
      res.status(500).send('Server Error')
      next(err)
    })
  })

}
export default SongsApi