import {getAllSongs, getAllMetadata, getMetaDataFromFile} from '../lib/songslibrary'

describe('songslibrary.getAllSongs', () => {

  it('should resolve with an array', () => {
    return getAllSongs().then(songs => {
      expect(songs).toBeInstanceOf(Array)
    })
  });

  it('should reject when folder does not exist', () => {
    expect.assertions(1);
    return expect(getAllSongs('folderthatdoesnotexist')).rejects.toBeDefined();
  });

})

describe('songslibrary.getAllMetadata', () => {

  it('should resolve with an array', () => {
    return getAllMetadata().then(metadata => {
      expect(metadata).toBeInstanceOf(Array)
    })
  });

  it('should reject when folder does not exist', () => {
    expect.assertions(1);
    return expect(getAllMetadata('folderthatdoesnotexist')).rejects.toBeDefined();
  });

})

describe('songslibrary.getMetaDataFromFile', () => {
  it('should resolve with an object', () => {
    return getMetaDataFromFile('songs/Broke_For_Free_-_01_-_Night_Owl.mp3').then(metadata => {
      expect(metadata).toBeInstanceOf(Object)
    })
  });
  it('should reject when file does not exist', () => {
    expect.assertions(1);
    return expect(getMetaDataFromFile('sfile that does not exist')).rejects.toBeDefined();
  });
});