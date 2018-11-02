const User = require('../models').User;


module.exports = {
  list(req, res) {
    return User
      .findAll({
        include: [{
          model: Invoice,
          as: 'invoices'
        }],
        order: [
          ['createdAt', 'DESC'],
          [{ model: Invoice, as: 'invoice' }, 'createdAt', 'DESC'],
        ],
      })
      .then((users) => res.status(200).send(user))
      .catch((error) => { res.status(400).send(error); });
  },
  getById(req, res) {
    return User
      .findByPk(req.params.id)
      .then((User) => {
        if (!User) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(User);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return User
      .create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User
      .findById(req.params.id, {
        include: [{
          model: User,
          as: 'User'
        }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user
          .update({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return User
      .findById(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
