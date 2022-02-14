const router = require('express').Router();
const { stat } = require('fs');
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/allCategories', async(req, res) => {
  try {
    const allCategories = await Product.findAll();
    res.status(200).json(allCategories);
  } catch(err) {
    res.status(400).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  try {
    const oneCategory = await Category.findOne();
    res.status(200).json(oneCategory);
  } catch(err) {
    res.status(400).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});


  // create a new category
router.post('/newCategory', async(req, res) => {
  try{
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch(err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async(req, res) => {
  const updateCategory = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  }).catch((err) => res.json(err));
    res.json(updateCategory);

  // update a category by its `id` value
});


router.delete('/:id', async(req, res) => {
  try {
    const deleteCategory = await Tag.destroy({
      where: {
        id: req.params.id
      }      
  
    });

    if(!deleteTag){
      res.status(400).json({message: 'failed to delete'});
      return;
    }

    res.status(200).json(deleteCategory);
  } catch(err){
    res.status(500).json(err);
  }
  // delete a category by its `id` value
});

module.exports = router;
