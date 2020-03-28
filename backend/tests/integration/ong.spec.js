const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/api/ongs')
      .send({
        name: 'APAD',
        email: 'contato@apad.com.br',
        whatsapp: '4700001111',
        city: 'Rio do Sul',
        uf: 'SC'
      });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });

  it('should create a new session', async () => {
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

    const session = await request(app)
      .post('/api/sessions')
      .set('Authorization', ong.id)
      .send({ id: ong.id });
    expect(session.body).toHaveProperty('name');
    expect(session.body.name).toBe('APAD');
  });

  it('should not log in profile', async () => {
    await request(app)
      .get('/api/profile')
      .expect(400);
  });
});
