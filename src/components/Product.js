import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PiShoppingCartFill } from "react-icons/pi";

const AdminMenu = ({isAdmin, product}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDeleteMessageClose = (e) => {
        if(e.currentTarget.textContent === 'Ok') {
            let products = JSON.parse(localStorage.getItem('products'));
            const deleteProduct = products.find((ele) => ele.key === product.key);
            products.splice(products.indexOf(deleteProduct), 1);
            localStorage.setItem('products', JSON.stringify(products));
            dispatch({type: 'setProductDeleted', payload: product.name});
        }
        setOpenDeleteMessage(false);
    };

    const [openDeleteMessage, setOpenDeleteMessage] = useState(false);

    if(isAdmin) {
        return(
            <Fragment>
                <IconButton size="small" aria-label="delete" style={{marginLeft:'auto', marginRight: 5}} onClick={() => {
                    navigate('/modifyproduct/' + product.key);
                }}>
                    <EditIcon />
                </IconButton>
                <IconButton size="small" aria-label="delete" style={{marginLeft: 5, marginRight: 5}} onClick={() => {
                    dispatch({type: 'setProductDeleted', payload: ''});
                    setOpenDeleteMessage(true);
                }}>
                    <DeleteIcon />
                </IconButton>
                <Dialog
                open={openDeleteMessage}
                onClose={handleDeleteMessageClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Confirm Deletion of Product! {product.name}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to delete the product?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleDeleteMessageClose} autoFocus variant="contained">Ok</Button>
                        <Button onClick={handleDeleteMessageClose}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

export default function Product({productDetails, isAdmin}) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const [product, setProduct] = useState(productDetails);

    const addToCart = (productId)=>{
        const temp = [...cart,productId];
        dispatch({type: 'addCart', payload: temp});
    }

    const navigate = useNavigate();
    return (
        <Card key={product._id} sx={{ maxWidth: 345 , margin: 5, minWidth: 345}}>
            <CardMedia
                sx={{ height: 240 }}
                image={product.image}
                title={product.productName}
            />
            <CardContent>
                <div className="flex justify-between" >
                    <p className="text-xl font-semibold">{product.productName}</p>
                    <div className="relative">
                        <span className="text-emerald-600 text-xl font-semibold">&#8377;{product.sellingPrice}</span>
                        <del className="absolute top-5 right-0" >&#8377;{product.Mrp}</del>
                    </div>
                </div>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions className="flex justify-between">
                <Button size="medium" variant="contained" onClick={() => {navigate('/products/' + product._id)}}>Buy</Button>

                {
                    (cart.includes(product._id)) ? 
                    <Button size="medium" variant="contained" onClick={()=>{navigate("/cart")}}><PiShoppingCartFill size={19} className="mr-1"/>{"Check Out"}</Button> :
                    <Button size="medium" variant="contained" onClick={() => {addToCart(product._id)}}><PiShoppingCartFill size={19} className="mr-1"/>{"Add"}</Button>
                }
                <AdminMenu isAdmin={isAdmin} product={product}/>
            </CardActions>
        </Card>
      );
}