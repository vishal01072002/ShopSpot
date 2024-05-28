import React, {useEffect, useRef, useState} from 'react'
import { apiConnector } from '../api calls/apiConnector';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AddProduct = () => {
  const [isImage, setImage] = useState(false)
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    sellingPrice: "",
    Mrp: "",
    quantity: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add logic to submit the product data
    // combine data
    const formData = new FormData();
    formData.append("productName",product.productName);
    formData.append("description",product.description);
    formData.append("sellingPrice",product.sellingPrice);
    formData.append("Mrp",product.Mrp);
    formData.append("quantity",product.quantity);
    formData.append("category",category);
    if(params?.productId){
      await editProductCall(formData,params?.productId);
    }
    else{
      formData.append("productImg",imageFile);
      // const data = {...product,category:category,productImg:imageFile}
      await addProductCall(formData);
    }
  };
  
  const addProductCall = async(data)=>{
    try {
        const response = await apiConnector("POST","http://127.0.0.1:4000/api/v1/product/addProduct",data,
        {
          "Content-Type": "multipart/form-data",
        }
        );
        if(! response.data.success){
            throw new Error(response.data.message);
        }
        else{
            console.log(response);
            navigate("/");
        }
    } catch (error) {
        console.log("ADD PRODUCT API ERROR............", error);
        console.log(error.response.data.message);
    }    
  }
  
  const editProductCall = async(data,productId)=>{
    try {
        const response = await apiConnector("PUT",`http://127.0.0.1:4000/api/v1/product/editProduct/${productId}`,data,
        {
          "Content-Type": "multipart/form-data",
        });
        if(! response.data.success){
            throw new Error(response.data.message);
          }
          else{
            console.log(response);
            navigate("/");
        }
    } catch (error) {
        console.log("EDIT PRODUCT API ERROR............", error);
        console.log(error.response.data.message);
    }    
  }

  const findProduct = async(productId)=>{
    try {
        const response = await apiConnector("POST",`http://127.0.0.1:4000/api/v1/product/getProduct/${productId}`);
        if(! response.data.success){
            throw new Error(response?.data?.message);
        }
        else{
          console.log(response);
          const productDetail = response.data.product;
          setCategory(productDetail.category);
          setPreview(productDetail.image)
          setProduct({
            productName:productDetail.productName,
            description:productDetail.description,
            sellingPrice:productDetail.sellingPrice,
            Mrp:productDetail.Mrp,
            quantity:productDetail.quantity,
          });
        }
    } catch (error) {
        console.log("ONE PRODUCT API ERROR............", error);
        console.log(error?.response?.data?.message);
    }    
  }

  const oneProduct = async() =>{
    if(params?.productId){
      await findProduct(params?.productId);
    }
  }
  useEffect(()=>{
    oneProduct();
  },[]);

  useEffect(()=>{
    if(user?.account !== "Admin"){
      //navigate("/");
    }
  },[])

  return (
    <>
    <div className="min-h-screen bg-gradient-bg font-gilroy">
      <h1 className="text-4xl font-bold mb-8">Add New Product</h1>
      {/* <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1> */}
      <form onSubmit={handleSubmit} className="p-8 flex gap-16 max-w-[90%] mx-auto mt-8">
        <div className='border-2 w-2/3 flex flex-col bg-white shadow-lg gap-10 rounded-lg p-5 pb-8'>
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
                <input required={true} placeholder={"Enter Product SellingPrice"} type="number" min={1} id="sellingPrice" name="sellingPrice" value={product.sellingPrice} onChange={handleChange} className="w-full rounded px-4 py-[6px] border-2 border-gray-400 focus:outline-none focus:border-blue-500" />
              </div>
              <div className='w-full'>
                <label htmlFor="Mrp" className="block text-lg text-start mb-1 text-gray-700">MRP</label>
                <input required={true} placeholder={"Enter Product Mrp"} type="number" min={1} id="Mrp" name="Mrp" value={product.Mrp} onChange={handleChange} className="w-full rounded px-4 py-[6px] border-2 border-gray-400 focus:outline-none focus:border-blue-500" />
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
            <input required={true} placeholder={"Enter Product Quantity"} type="number" min={1} id="quantity" name="quantity" value={product.quantity} onChange={handleChange} className="w-full rounded px-4 py-[6px] border-2 border-gray-400 focus:outline-none focus:border-blue-500" />
          </div>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};
