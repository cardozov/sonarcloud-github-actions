const request = require('supertest')

const app = require('../index')

describe('index.js', () => {
    describe('GET /', () => {
        it('should return Hello World! and status code 200', async () => {
            const response = await request(app).get('/')
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('Hello World!')
        })
    })

    describe('GET /health', () => {
        it('should return OK and status code 200', async () => {
            const response = await request(app).get('/health')
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('OK')
        })
    })

    describe('/person', () => {
        it('GET: should return This is a person and status code 200', async () => {
            const response = await request(app).get('/person')
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('This is a person')
        })

        it('POST: should return This is a person and status code 200', async () => {
            const response = await request(app).post('/person')
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('This is a person')
        })

        it('PATCH: should return This is a person and status code 200', async () => {
            const response = await request(app).patch('/person')
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('This is a person')
        })

        it('PUT: should return This is a person and status code 200', async () => {
            const response = await request(app).put('/person')
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('This is a person')
        })

        it('DELETE: should return This is a person and status code 200', async () => {
            const response = await request(app).delete('/person')
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('This is a person')
        })
    })

    describe('/product', () => {
        it('GET: should return This is a product and status code 200', async () => {
            const response = await request(app).get('/product')
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('This is a product')
        })

        it('POST: should return This is a product and status code 200', async () => {
            const response = await request(app).post('/product')
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('This is a product')
        })

        it('PATCH: should return This is a product and status code 200', async () => {
            const response = await request(app).patch('/product')
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('This is a product')
        })

        it('PUT: should return This is a product and status code 200', async () => {
            const response = await request(app).put('/product')
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('This is a product')
        })

        it('DELETE: should return This is a product and status code 200', async () => {
            const response = await request(app).delete('/product')
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('This is a product')
        })
    })

    afterAll(() => app.close())
})