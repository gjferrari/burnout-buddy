const router = require("express").Router();
const { Product, Category, Time, ProductTime } = require("../../models");

// The `/api/products` endpoint

// get all products

router.get("/", async (req, res) => {
  // find all products
  // be sure to include its associated Category and Time data
  await Product.findAll({
    // attributes: ["id", "product_name", "category_id"],
    include: [
      {
        model: Time,
        // attributes: ["id", "time_amount"],
        // you only need to use attributes to exclude things but
        //since Time only has id and time_amount you can just refer to the Time model
      },
      {
        model: Category,
        // attributes: ["id", "category_name"],
      },
    ],
  })
    .then((productData) => {
      res.json(productData);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get one product

router.get("/:id", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Time }, { model: Category }],
    });

    if (!productData) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/:id", (req, res) => {
//   // find a single product by its `id`
//   // be sure to include its associated Category and Time data
// });

// create new product
router.post("/", (req, res) => {
  // create body
  Product.create(req.body)
    .then((product) => {
      // if there's product time, we need to create pairings to bulk create in the ProductTime model
      if (req.body.tagIds.length) {
        const productTimeIdArr = req.body.timeIds.map((time_id) => {
          return {
            product_id: product.id,
            time_id,
          };
        });
        return ProductTime.bulkCreate(productTimeIdArr);
      }
      // if no product times, just respond
      res.status(200).json(product);
    })
    .then((productTimeIds) => res.status(200).json(productTimeIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put("/:id", (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTime.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTimes) => {
      // get list of current tag_ids
      const productTimeIds = productTimes.map(({ time_id }) => time_id);
      // create filtered list of new tag_ids
      const newProductTimes = req.body.timeIds
        .filter((time_id) => !productTimeIds.includes(time_id))
        .map((time_id) => {
          return {
            product_id: req.params.id,
            time_id,
          };
        });
      // figure out which ones to remove
      const productTimesToRemove = productTimes
        .filter(({ time_id }) => !req.body.timeIds.includes(time_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTime.destroy({ where: { id: productTimesToRemove } }),
        ProductTime.bulkCreate(newProductTimes),
      ]);
    })
    .then((updatedProductTimes) => res.json(updatedProductTimes))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one product by its `id` value
});

module.exports = router;
