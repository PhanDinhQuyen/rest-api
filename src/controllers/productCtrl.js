const Products = require("../models/productModel");

const productCtrl = {
  getAllProduct: async (req, res) => {
    try {
      const product = await Products.find();
      return res.status(200).json(product);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);
      if (!product)
        return res.status(404).json({ msg: `This product does not exist` });
      return res.status(200).json(product);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  addProduct: async (req, res) => {
    try {
      const { title, price, description, category, image } = req.body;
      const newProduct = new Products({
        title,
        price,
        description,
        category,
        image,
      });
      await newProduct.save();
      res.status(200).json(newProduct);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  putProduct: async (req, res) => {
    const { title, price, description, category, image } = req.body;

    try {
      const product = await Products.findByIdAndUpdate(
        //Id
        req.params.id,

        { title, price, description, category, image },
        // If have "new: true" , save success
        {
          new: true,
        }
      );
      if (!product)
        return res.status(404).json({ msg: "This product does not exist." });
      return res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const product = await Products.findByIdAndDelete(req.params.id);
      if (!product)
        return res.status(404).json({ msg: "This product does not exist." });

      return res.json({ msg: `Delete success` });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};
module.exports = productCtrl;
