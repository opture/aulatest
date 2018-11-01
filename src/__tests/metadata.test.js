import request from 'supertest'
import app from '../app'

describe('Get all ametadata', () => {
  test('It should respond with a status 200', () => {
      return request(app).get("/metadata").then(response => {
          expect(response.statusCode).toBe(200)
      })
  });
})

describe('Get single metadata', () => {
  test('It should respond with a status 200', () => {
      return request(app).get("/metadata/songs%2FBroke_For_Free_-_01_-_Night_Owl.mp3").then(response => {
          expect(response.statusCode).toBe(200)
      })
  });
})