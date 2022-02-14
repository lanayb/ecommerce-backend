const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  try {
    const findAllTags = await Tag.findAll();
    res.status(200).json(findAllTags);
  } catch(err) {
    res.status(400).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async(req, res) => {
    try {
      const singleTag = await Tag.findOne(req.params.id);
      res.status(200).json(singleTag);
    } catch(err) {
      res.status(400).json(err);
    }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});


router.post('/', async(req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch(err){
    res.status(400).json(err);
  }
  // create a new tag
});



router.put('/:id', async(req, res) => {
  const updateTags = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
  }).catch((err) => res.json(err));
    res.json(updateTags);

  // update a tag's name by its `id` value
});

router.delete('/:id', async(req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }      
  
    });

    if(!deleteTag){
      res.status(400).json({message: 'failed to delete'});
      return;
    }

    res.status(200).json(deleteTag);
  } catch(err){
    res.status(500).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
