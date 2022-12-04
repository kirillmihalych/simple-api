const express = require('express')
const app = express()
const PORT = 8080

app.use(express.json())

app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: 'T-Shirt XXL',
    size: 'large',
  })
})

app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params
  const { logo } = req.body

  if (!logo) {
    res.status(418).send({ message: 'We need a logo' })
  }

  res.send({
    tshirt: `T-Shirt XXL with your logo ${logo} and ID of logo ${id}`,
  })
})

app.listen(PORT, () => console.log('It started'))
