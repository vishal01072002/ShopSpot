import React, {useState} from 'react'

export const AddProduct = () => {
  const [isImage, setImage] = useState(false)
  const [product, setProduct] = useState({
    image: "",
    name: "",
    description: "",
    sellingPrice: "",
    mrp: "",
    category: "",
    quantity: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the product data
    console.log("Product Data:", product);
  };

  return (
    <div className=" bg-gray-100">
      <h1 className="text-3xl text-start font-semibold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="p-8 flex gap-16 max-w-[90%] mx-auto mt-8">
        <div className='border-2 w-1/2 flex flex-col gap-10 rounded-lg p-5 pb-8'>
          <p className='text-lg text-start'>General Information</p>
          <div className='flex flex-col gap-3'>
            <div>
            <label htmlFor="name" className="block text-lg text-start mb-1 text-gray-700">Name</label>
            <input placeholder={"Enter Product Name"} type="text" id="name" name="name" value={product.name} onChange={handleChange} className="w-full rounded px-4 py-[6px] border-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
            <label htmlFor="description" className="block text-lg text-start mb-1 text-gray-700">Description</label>
            <input type='text' id="description" placeholder={"Enter Product Description"}  name="description" value={product.description} onChange={handleChange} className="w-full rounded px-4 py-[6px] border-2 focus:outline-none focus:border-blue-500"></input>
            </div>
            <div className='w-full flex gap-10'>
              <div className='w-full'>
                <label htmlFor="sellingPrice" className="block text-lg text-start mb-1 text-gray-700">Selling Price</label>
                <input placeholder={"Enter Product SellingPrice"} type="number" id="sellingPrice" name="sellingPrice" value={product.sellingPrice} onChange={handleChange} className="w-full rounded px-4 py-[6px] border-2 focus:outline-none focus:border-blue-500" />
              </div>
              <div className='w-full'>
                <label htmlFor="mrp" className="block text-lg text-start mb-1 text-gray-700">MRP</label>
                <input placeholder={"Enter Product Mrp"} type="number" id="mrp" name="mrp" value={product.mrp} onChange={handleChange} className="w-full rounded px-4 py-[6px] border-2 focus:outline-none focus:border-blue-500" />
              </div>
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 mt-5 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Product</button>
        </div>
        
        {/* right part */}
        <div className='border-2 w-2/5 flex flex-col gap-5 rounded-lg p-5 pb-8'>
          <div className='border-2 mx-auto w-[250px] h-[250px] rounded-md'>
            {isImage ? <img src={""} alt={"product"} className='w-[250px] h-[250px] rounded-md object-cover'/> : <div className='mt-5 w-[250px] h-[250px] rounded-md'>Product Image</div>}
          </div>
          <div>
            <label htmlFor="image" className="block text-lg text-start mb-1 text-gray-700"><input type="file" accept='image/png, image/gif, image/jpeg' id="image" name="image" value={product.image} onChange={handleChange} className='hidden'/></label>
            <button 
              disabled={false}
              className='rounded-md bg-blue-100 px-3 py-1'
              onClick={() => {}}>
                Select
            </button>
          </div>       
          <div>
            <label htmlFor="category" className="block text-lg text-start mb-1 text-gray-700">Category</label>
            <input placeholder={"Enter Product Category"} type="text" id="category" name="category" value={product.category} onChange={handleChange} className="w-full rounded px-4 py-[6px] border-2 focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-lg text-start mb-1 text-gray-700">Quantity</label>
            <input placeholder={"Enter Product Quantity"} type="number" id="quantity" name="quantity" value={product.quantity} onChange={handleChange} className="w-full rounded px-4 py-[6px] border-2 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
      </form>
    </div>
  )
}
