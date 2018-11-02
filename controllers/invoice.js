const Invoice = require('../models').Invoice;


module.exports = {
  list(req, res) {
    return Invoice
      .findAll({
        where: {User_id: req.params.id} 
      })
      .then((invoices) => res.status(200).send(invoices))
      .catch((error) => { res.status(400).send(error); });
  },
  getById(req, res) {
    return Invoice
      .findByPk(req.params.id)
      .then((invoice) => {
        if (!invoice) {
          return res.status(404).send({
            message: 'Invoice Not Found',
          });
        }
        return res.status(200).send(invoice);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Invoice
      .create({
        Provider: req.body.provider,
        Billing_Date: req.body.billing_date,
        Total: req.body.total,
        Base: req.body.base,
        IVA: req.body.IVA,
        Comments: req.body.comments,
        User_id: req.body.user_id

      })
      .then((invoice) => res.status(201).send(invoice))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Invoice
      .findById(req.params.id, {
        include: [{
          model: Invoice,
          as: 'invoice'
        }],
      })
      .then(invoice => {
        if (!invoice) {
          return res.status(404).send({
            message: 'Invoice Not Found',
          });
        }
        return invoice
          .update({
            Provider: req.body.provider,
            Billing_Date: req.body.billing_date,
            Total: req.body.total,
            Base: req.body.base,
            IVA: req.body.IBA,
            Comments: req.body.comments,
            user_id: req.body.user_id
          })
          .then(() => res.status(200).send(course))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Invoice
      .findById(req.params.id)
      .then(invoice => {
        if (!invoice) {
          return res.status(400).send({
            message: 'Invoice Not Found',
          });
        }
        return invoice
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
