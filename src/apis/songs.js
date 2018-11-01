import fs from 'fs';
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
  app.get('/songs/play/:song', function(req,res){
	
    var song = req.params.song; 
    
    var file = __dirname + '/../../' + song;
    console.log(file)
    fs.exists(file,function(exists){
      if(exists)
      {
        var rstream = fs.createReadStream(file);
        rstream.pipe(res);
      }
      else
      {
        res.send("Its a 404");
        res.end();
      }
    
    });
  });

}
export default SongsApi