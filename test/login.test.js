const request = require('supertest');
const { expect } = require('chai');
const postLogin = require('../fixtures/postLogin.json')
require('dotenv').config()
describe('Login', () => {
    describe('POST /login', () => {
        it('Should return 200 with a string token when using valid credentials', async () => {
            const bodyLogin = { ...postLogin}
            const response = await request(process.env.BASE_URL)
            .post('/login')
            .set('Content-Type', 'application/json')
            .send(bodyLogin)
            console.log(response.status)
            console.log(response.body)
            const response = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })
            // console.log(response.status)
            // console.log(response.body)
            expect(response.status).to.equal(200)
            expect(response.body.token).to.be.a('string')

        })
    })
})