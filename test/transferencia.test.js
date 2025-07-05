const request = require('supertest');
const { expect } = require('chai');
const { getToken } = require('../helpers/authentication.js')
const postTransferencias = require('../fixtures/postTransferencias.json')
describe('Transferências', () => {
    let token
        beforeEach(async () => {
            token = await getToken('julio.lima', '123456')
        })
    describe('POST /transferencias', () => {
        it('Should return success with 201 when transfer value is equal to or greater than R$10.00', async () => {
            // Shallow copy. Only top level of object is copied.
            const bodyTransferencias = { ...postTransferencias }
            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)
            // console.log(response.status)
            // console.log(response.body)
            expect(response.status).to.equal(201)

        })
        it('Should return failure with 422 when transfer value is less than R$10.00', async () => {
            const bodyTransferencias = { ...postTransferencias}
            bodyTransferencias.valor = 7
            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias)
            // console.log(response.status)
            // console.log(response.body)
            expect(response.status).to.equal(422)

        })
    })
    describe('GET /transferencias/{id}', () => {
        it('Should return success with 200 and data equal to that in the transfer ledger found in DB when ID is valid', async () => {
            const response = await request(process.env.BASE_URL)
                .get('/transferencias/11')
                .set('Authorization', `Bearer ${token}`)
            // console.log(response.status)
            // console.log(response.body)
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(11)
            expect(response.body.id).to.be.a('number')
            expect(response.body.conta_origem_id).to.equal(1)
            expect(response.body.conta_destino_id).to.equal(2)
            expect(response.body.valor).to.equal(11.00)

        })
    })
    describe('GET /transferencias', () => {
        it('Should return 10 elements in pagination when limit is set to 10', async () => {
            const response = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limit=10')
                .set('Authorization', `Bearer ${token}`)
                expect(response.status).to.equal(200)
                expect(response.body.limit).to.equal(10)
                expect(response.body.transferencias).to.have.lengthOf(10)
                // console.log(response.body)
        })
    })
})