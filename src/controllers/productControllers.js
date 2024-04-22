import Products from '../models/products.js'

export const getProducts = async(req, res) => { // averiguar la biblioteca multer para subir imagenes
    res.send('get products')
    const getAllProducts = await Products.find()
    console.log(getAllProducts);

}
export const createProduct = async(req, res) => {
    // console.log(req.body)
    const newProduct = new Products(req.body)
    await newProduct.save()
    res.status(201).json('create product')
}
export const getProductById = async (req, res) => {
    console.log(req.params.id)
    const productByid = await Products.findById(req.params.id)
    console.log(productByid);
    if (productByid) {
        res.status(200).json(productByid)
    } else {
        res.status(404).json('product not found')
    }
}
export const updateProductById = async (req, res) => {
   const updateProduct = await Products.findByIdAndUpdate(req.params.id, req.body, {new: true})
   if(updateProduct) {
    res.json(updateProduct)
   } else {
    res.status(404).json('product not found')
   }
}
export const deleteProductById = async (req, res) => {
    const deleteProduct = await Products.findByIdAndDelete(req.params.id)
    if(deleteProduct) {
        console.log("Product deleted successfully!");
        res.status(200).json(deleteProduct)
    }
}
