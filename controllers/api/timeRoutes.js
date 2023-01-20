const router = require('express').Router();
const { Time, Product, ProductTime } = require('../../models');

// The `/api/time` endpoint

router.get('/', (req, res) => {
  // find all times
  // be sure to include its associated Product data
  Time.findAll({
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name','category_id'],
      }
    ]
  })
    .then(dbTimeData => res.json(dbTimeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
  // find time by its `id`
  // be sure to include its associated Product data
  Time.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'category_id'],
      }
    ]
  })
    .then(dbTimeData => {
      if (!dbTimeData) {
        res.status(404).json({ message: 'No time found with this id'});
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new time
  Time.create({
    time_name: req.body.time_name
  })
    .then(dbTimeData => res.json(dbTimeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Time.update(req.body, {
    where: {
        id: req.params.id
    }
  })
    .then(dbTimeData => {
        if (!dbTimeData[0]) {
            res.status(404).json({ message: 'No time found with this id'});
            return;
        }
        res.json(dbTimeData);
  })
    .catch(err => {
        console.log(err); 
        res.status(500).json(err);
  });

});


router.delete('/:id', (req, res) => {
  // delete on time by its `id` value
  Time.destroy({
    where: {
        id: req.params.id
    }
  })
    .then(dbTimeData => {
        if (!dbTimeData) {
            res.status(404).json({ message: 'No time found with this id'});
            return;
        }
        res.json(dbTimeData);
  })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
  });
});


module.exports = router;