const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/allCats', async(req, res) => {
  try {
    const allCat = await Category.findAll({
      include: [Product]
    });
    res.status(200).json(allCat);
  } catch(err) {
    res.status(400).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  try {
    const oneCat = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    });
    res.status(200).json(oneCat);
  } catch(err) {
    res.status(400).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});


  // create a new category
router.post('/', async(req, res) => {
  try {
    const newCat = await Category.create(req.body);
    res.status(200).json(newCat);
  } catch(err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async(req, res) => {
  try {
    const updateCat = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(updateCat);
  } catch(err) {
    res.status(400).json(err);
  }
  // update a category by its `id` value
});


router.delete('/:id', async(req, res) => {
  try {
    const deleteCat = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(deleteCat);
  } catch(err) {
    res.status(400).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
