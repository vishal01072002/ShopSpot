import React, {useRef, useState} from 'react'

export const AddProduct = () => {

  const Categories = [
    {
      name : "Mobile",
    },
    {
      name : "Laptop",
    },
  ]
  const [preview, setPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [category, setCategory] = useState("");
  const imgInput = useRef(null);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    sellingPrice: "",
    mrp: "",
    quantity: ""
  });
  
  const handleSelect = () => {
    imgInput.current.click();
  }

  const handleImgChange = (event) => {
    const file = event.target.files[0]
    if(file){
      setImageFile(file);
      imagePreviewHandler(file);
    }
  }

  const imagePreviewHandler = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreview(reader.result)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the product data
    // combine data
    const data = {...product,category:category,productImg:imageFile}
    console.log("Product Data:", data);
  };

  return (
    <div className="bg-gray-50">
      <h1 className="text-3xl text-start font-semibold mb-6 p-5">Add New Product</h1>
      <form onSubmit={handleSubmit} className="p-8 flex gap-16 max-w-[90%] mx-auto mt-8">
        <div className='border-2 w-2/3 flex flex-col bg-white shadow-lg gap-10 rounded-lg p-5 pb-8'>
          <p className='text-lg text-start'>General Information</p>
          <div className='flex flex-col gap-3'>
            <div>
            <label htmlFor="name" className="block text-lg text-start mb-1 text-gray-700">Name</label>
            <input required={true} placeholder={"Enter Product Name"} type="text" id="name" name="name" value={product.name} onChange={handleChange} className="w-full rounded px-4 py-[6px] border-2 border-gray-400 focus:outline-none focus:border-blue-500" />
            </div>
            <div>
            <label htmlFor="description" className="block text-lg text-start mb-1 text-gray-700">Description</label>
            <input required={true} type='text' id="description" placeholder={"Enter Product Description"}  name="description" value={product.description} onChange={handleChange} className="w-full rounded px-4 py-[6px] border-2 border-gray-400 focus:outline-none focus:border-blue-500"></input>
            </div>
            <div className='w-full flex gap-10'>
              <div className='w-full'>
                <label htmlFor="sellingPrice" className="block text-lg text-start mb-1 text-gray-700">Selling Price</label>
                <input required={true} placeholder={"Enter Product SellingPrice"} type="number" min={1} id="sellingPrice" name="sellingPrice" value={product.sellingPrice} onChange={handleChange} className="w-full rounded px-4 py-[6px] border-2 border-gray-400 focus:outline-none focus:border-blue-500" />
              </div>
              <div className='w-full'>
                <label htmlFor="mrp" className="block text-lg text-start mb-1 text-gray-700">MRP</label>
                <input required={true} placeholder={"Enter Product Mrp"} type="number" min={1} id="mrp" name="mrp" value={product.mrp} onChange={handleChange} className="w-full rounded px-4 py-[6px] border-2 border-gray-400 focus:outline-none focus:border-blue-500" />
              </div>
            </div>
            <div>            
            <label htmlFor="category" className="block text-lg text-start mb-1 text-gray-700">Category</label>
            <select
              defaultValue={""}
              id="category"
              onChange={(event) => setCategory(event.target.value)}
              className="w-full rounded px-4 py-[6px] border-2 border-gray-400 focus:outline-none focus:border-blue-500"
              disabled={false}
            >
              <option value="" disabled>
                Choose a Category
              </option>
              {Categories?.map((category, indx) => (
                <option key={indx} value={category?.name}>
                  {category?.name}
                </option>
              ))}
              </select>
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Product</button>
        </div>
        
        {/* right part */}
        <div className='border-2 w-2/6 flex flex-col bg-white shadow-lg gap-8 rounded-lg p-5 '>
          <div className='border-2 border-gray-400 mx-auto w-[250px] mt-5 h-[250px] rounded-md'>
            {preview ? <img src={preview} alt={"product"} className='w-[250px] h-[250px] rounded-md object-cover'/> : <div className='mt-5 w-[250px] h-[250px] rounded-md'>Product Image</div>}
          </div>
          <div>
            <label htmlFor="image" className="block text-lg text-start mb-1 text-gray-700">
            <input required={true} type="file" ref={imgInput} accept='image/png, image/gif, image/jpeg' id="image" name="image" value={product.image} onChange={handleImgChange} className='hidden'/></label>
            <button 
              disabled={false}
              className='rounded-md bg-blue-100 px-5 py-1'
              onClick={() => {handleSelect()}}>
                Select Image
            </button>
          </div>       
          <div>
            <label htmlFor="quantity" className="block text-lg text-start mb-1 text-gray-700">Quantity</label>
            <input required={true} placeholder={"Enter Product Quantity"} type="number" min={1} id="quantity" name="quantity" value={product.quantity} onChange={handleChange} className="w-full rounded px-4 py-[6px] border-2 border-gray-400 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        
      </form>
    </div>
  )
}
