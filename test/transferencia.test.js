const request = require('supertest');
const { expect } = require('chai');
const { getToken } = require('../helpers/authentication.js')
const postTransferencias = require('../fixtures/postTransferencias.json')
describe('Transferências', () => {
    describe('POST /transferencias', () => {
        let token
        beforeEach(async () => {
            token = await getToken('julio.lima', '123456')
        })
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
})