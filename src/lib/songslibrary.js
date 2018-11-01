import find from 'find';
const mm = require('music-metadata');

const settings ={
  pathToMusicFolder: './songs'
}

export function getAllSongs(pathToMusicFolder = settings.pathToMusicFolder) {
  return new Promise((resolve, reject) => {
    find
      .file(/\.(mp3|wav|mid)$/, pathToMusicFolder, files => {
        resolve(files)
      })
      .error( (err) => {
        reject(err)
      })
  })
}

export function getMetaDataFromFile(songPath){
  //Wrapping a promise around here to be able to add the path into the metadta to connect songs and metadata.
  return mm.parseFile(songPath, {native: false, skipCovers:true}) 
        .then( metadata => {
          return {...metadata, songPath}
        })
}

export function getAllMetadata(pathToMusicFolder = settings.pathToMusicFolder){
  return getAllSongs(pathToMusicFolder)
  .then( (songs) => {
    const promises = []
    songs.forEach( song => {
      promises.push(getMetaDataFromFile(song))
    })
    return Promise.all(promises)
  })
}