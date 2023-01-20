const router = require("express").Router();
const { Product, Category, Time, ProductTime } = require("../../models");

// The `/api/products` endpoint

// get all products

router.get("/", async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  await Product.findAll({
    attributes: ["id", "product_name", "price", "stock", "category_id"],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
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
router.get("/:id", (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
});

// create new product
router.post("/", (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.timeIds.length) {
        const productTimeIdArr = req.body.timeIds.map((tag_id) => {
          return {
            product_id: product.id,
            time_id,
          };
        });
        return ProductTime.bulkCreate(productTimeIdArr);
      }
      // if no product tags, just respond
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
    .then((ProductTime) => {
      // get list of current tag_ids
      const productTimeIds = productTimes.map(({ time_id }) => time_id);
      // create filtered list of new tag_ids
      const newProductTimes = req.body.timeIds
        .filter((time_id) => !productTimeIds.includes(tag_id))
        .map((time_id) => {
          return {
            product_id: req.params.id,
            time_id,
          };
        });
//       // figure out which ones to remove
//       const productTimesToRemove = productTimes
//         .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//         .map(({ id }) => id);

//       // run both actions
//       return Promise.all([
//         ProductTag.destroy({ where: { id: productTagsToRemove } }),
//         ProductTag.bulkCreate(newProductTags),
//       ]);
//     })
//     .then((updatedProductTags) => res.json(updatedProductTags))
//     .catch((err) => {
//       // console.log(err);
//       res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one product by its `id` value
});

module.exports = router;
