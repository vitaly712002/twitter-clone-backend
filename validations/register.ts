import { body } from 'express-validator';

export const registerValidations = [
  body('email', 'Введите E-Mail')
    .isEmail()
    .withMessage('Неверный E-Mail')
    .isLength({
      min: 10,
      max: 40,
    })
    .withMessage('Допустимое кол-во от 10 до 40'),
  body('fullname', 'Введите имя')
    .isString()
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage('Допустимое кол-во символов имени от 2 до 40'),
  body('username', 'Укажитe логин')
    .isString()
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage('Допустимое кол-во символов в логине от 2 до 40'),
  body('password')
    .isString()
    .isLength({
      min: 6,
    })
    .withMessage('Минимальное длина пароля 6 символов')
    .custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error('Пароли не совпадают');
      } else {
        return value;
      }
    }),
];
