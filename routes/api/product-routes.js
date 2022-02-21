const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/allProd', async(req, res) => {
  try {
    const allProd = await Product.findAll({
      include: [ Category, Tag ],
    });
    res.status(200).json(allProd);
  } catch(err) {
    res.status(400).json(err);
  }
  // find all products
  // be sure to include its associated Category and Tag data
});

// get one product
router.get('/oneProd:id', async(req, res) => {
  try {
    const oneProd = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Category, Tag]
    });
    res.status(200).json(oneProd);
  } catch(err) {
    res.status(400).json(err);
  }
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
});

// create new product
router.post('/newProd', async(req, res) => {
  try {
    const newProd = await Product.create(req.body);
    res.status(200).json(newProd);
  } catch(err) {
    res.status(400).json(err);
  }
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */ 
});


// update product
router.put('/:id', async(req, res) => {
  // update product data
  try {
    const updateProd = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
      include: [Category, ProductTag],
    });
    res.status(200).json(updateProd);
  } catch(err) {
    res.status(400).json(err);
  }

});


router.delete('/:id', async(req, res) => {
  // delete one product by its `id` value
  try {
    const deleteProd = await Product.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(deleteProd);
  } catch(err) {
    res.status(400).json(err);
  }
});

module.exports = router;
