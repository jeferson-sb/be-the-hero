import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'
import OngController from './controllers/OngController.js'
import IncidentController from './controllers/IncidentController.js'
import ProfileController from './controllers/ProfileController.js'
import SessionController from './controllers/SessionController.js'

const routes = Router()

routes.post(
  '/sessions',
  celebrate({
    [Segments.BODY]: Joi.object({
      id: Joi.string().required()
    })
  }),
  SessionController.create
);

routes.get('/ongs', OngController.index);
routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);

routes.post(
  '/incidents',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string()
        .required()
        .max(170),
      value: Joi.number().required()
    })
  }),
  IncidentController.create
);

routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentController.index
);
routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentController.destroy
);

routes.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

export default routes;
