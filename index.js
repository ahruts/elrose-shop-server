const express = require('express');
let products = require('./index.json')

const app = express();
app.use(express.json())

// const users = [
//   { id: 4, email: 'qwe@qwe.com', password: '123123' },
//   { id: 7, email: 'asd@asd.com', password: '321321' }
// ]

const port = process.env.PORT || 8085;

app.post('/api/login', (req, res) => {
  const { email, password } = req.body
  const isValid = users.some(user => user.email === email && user.password === password);
  setTimeout(() => {
     if (isValid) {
        const user = users.find(user => user.email)
        res.json(user)
     } else {
        res.status(403)
        res.json({ message: ['Incorrect email or password', 'Password should contain number'] })
     }
  }, 2000)
})

app.get('/api/products', (req, res) => {
  res.json(products);
})

// app.get('/api/emails/:emailId', (req, res) => {
//   const { emailId } = req.params;
//   const email = emails.find(email => email.id === +emailId)
//   if (!email) res.status(404).json({ message: 'Email not found' })
//   res.json(email);
// })

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