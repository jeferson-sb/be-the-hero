import request from 'supertest'

import app from '../../src/app.js'
import connection from '../../src/database/connection.cjs'

describe('Incident', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should create a new incident', async () => {
    const response = await request(app)
      .post('/api/ongs')
      .send({
        name: 'APAD',
        email: 'contato@apad.com.br',
        whatsapp: '4700001111',
        city: 'Rio do Sul',
        uf: 'SC'
      });
    const ong = response.body;

    const incident = await request(app)
      .post('/api/incidents')
      .set('Authorization', ong.id)
      .send({
        title: 'COVID-19',
        description: 'Caso 1',
        value: 50
      });
    expect(incident.body).toHaveProperty('id');
  });
});
