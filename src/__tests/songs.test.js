import request from 'supertest'
import app from '../app'

describe('Get all songs', () => {
  test('It should respond with a status 200', () => {
      return request(app).get("/songs").then(response => {
          expect(response.statusCode).toBe(200)
      })
  });
})