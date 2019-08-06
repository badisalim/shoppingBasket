const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const _ = require('lodash');

async function init() {
  const productsFile = './server/products.json';

  let products = await loadData(productsFile);

  app
    .use(cors())
    .use(express.json())
    .get('/shop/products', (req, res) => res.send(products))
    .get('/shop/products/:code', (req, res) => {
      const code = parseInt(req.params.code);
      res.send(products.find(product => product.code === code));
    })
    .post('/shop/products', async (req, res) => {
      console.log(req.body);

      const product = req.body;
      product.code = getNextcode(products);
      products.push(product);
      await saveData(productsFile, products).then(() => res.send(products));
    })
    .put('/shop/products', async (req, res) => {
      const product = req.body;
      const existingProduct = products.find(p => p.code === product.code);
      Object.assign(existingProduct, product);
      await saveData(productsFile, products).then(() => res.send(products));
    })
    // .edit('/shop/products/:code', async (req, res) => {
    //   const code = parseInt(req.params.code);
    //   products = products.filter(p => p.code !== code);
    //   await saveData(productsFile, products).then(() => res.send(products));
    // })

    .delete('/shop/products/:code', async (req, res) => {
      const code = parseInt(req.params.code);
      products = products.filter(p => p.code !== code);
      await saveData(productsFile, products).then(() => res.send(products));
    })


    
   // async function init() {
  const invoiceFile = './server/invoice.json';

  let invoice = await loadData(invoiceFile);

  app
    .use(cors())
    .use(express.json())
    .get('/invoice', (req, res) => {
      res.send(invoice)
    })
    .get('/invoice/:id', (req, res) => {
      const id = parseInt(req.params.id);
      res.send(invoice.find(product => product.id === id));
    })
    .post('/invoice', (req, res) => {
      console.log(req.body);

      const product = req.body;
      product.id = getNextid(invoice);
      invoice.push(product);
      saveData(invoiceFile, invoice).then(() => res.send(invoice));
    })
    .put('/invoice', async (req, res) => {
      const product = req.body;
      const existingProduct = invoice.find(p => p.id === product.id);
      Object.assign(existingProduct, product);
      await saveData(invoiceFile, invoice).then(() => res.send(invoice));
    })
    // .edit('/invoice/:id', async (req, res) => {
    //   const id = parseInt(req.params.id);
    //   invoice = invoice.filter(p => p.id !== id);
    //   await saveData(invoiceFile, invoice).then(() => res.send(invoice));
    // })

    .delete('/invoice/:id', async (req, res) => {
      const id = parseInt(req.params.id);
      invoice = invoice.filter(p => p.id !== id);
      await saveData(invoiceFile, invoice).then(() => res.send(invoice));
    })
    .listen(3000, () => console.log('server started on port 3000'));
}

function getNextcode(items) {
  return (
    items
    .map(item => item.code)
    .sort((item1, item2) => (item1.code > item2.code ? 1 : -1))
    .pop() + 1
  );
}

async function loadData(filename) {
  return new Promise(resolve =>
    fs.readFile(filename, {
      encoding: 'UTF-8'
    }, (err, data) => resolve(JSON.parse(data).data))
  );
}

async function saveData(filename, data) {
  return new Promise(resolve =>
    fs.writeFile(
      filename,
      JSON.stringify({
        data: data
      }), {
        encoding: 'UTF-8'
      },
      resolve
    )
  );
}

init();
