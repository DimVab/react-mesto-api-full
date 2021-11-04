const cardsRoutes = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { urlPatternForJoi } = require('../utils/url-patterns');

const {
  createCard, getCard, getCards, likeCard, dislikeCard, deleteCard,
} = require('../controllers/cards');

cardsRoutes.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(new RegExp(urlPatternForJoi)),
  }),
}), createCard);

cardsRoutes.get('/cards', getCards);

cardsRoutes.get('/cards/:cardId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex(),
  }),
}), getCard);

cardsRoutes.put('/cards/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex(),
  }),
}), likeCard);

cardsRoutes.delete('/cards/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex(),
  }),
}), dislikeCard);

cardsRoutes.delete('/cards/:cardId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex(),
  }),
}), deleteCard);

module.exports = cardsRoutes;
