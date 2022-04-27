const express = require('express');
let products = require('./index.json')

const app = express();
app.use(express.json())

const port = process.env.PORT || 8085;

app.get('/api/products', (req, res) => {
  res.json(products);
})

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  const email = emails.find((email) => email.id === +productID);
  if (!email) res.status(404).json({ message: 'Product not found' })
  res.json(email);
})

// app.put('/api/emails/:emailId', (req, res) => {
//   const { emailId } = req.params;
//   const { isRead: newIsRead } = req.body;
//   emails = emails.map(email =>
//     email.id === +emailId ?
//       { ...email, isRead: newIsRead } : email
//   )
//   const newEmail = emails.find(email => email.id === +emailId)
//   res.json(newEmail);
// })

// app.delete('/api/emails/:emailId', (req, res) => {
//   const { emailId } = req.params;
//   emails = emails.filter(email => email.id !== +emailId)
//   res.sendStatus(200)
// })

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})