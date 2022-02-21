const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/AllTags', async(req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [Product]
    });
    res.status(200).json(allTags);
  } catch(err) {
    res.status(400).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async(req, res) => {
  try {
    const oneTag = await Tag.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product]
    });
    res.status(200).json(oneTag);
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
  try {
    const updateTag = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(updateTag);
  } catch(err) {
    res.status(400).json(err);
  }

  // update a tag's name by its `id` value
});

router.delete('/:id', async(req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(deleteTag);
  } catch(err) {
    res.status(400).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
