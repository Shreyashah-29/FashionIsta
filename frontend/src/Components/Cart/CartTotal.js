import { Typography, Button } from '@mui/material';

const CartTotal = ({ cart, handleCheckout }) => {
  const getTotalPrice = () => {
    return cart.products.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Total: ${getTotalPrice().toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Checkout
      </Button>
    </>
  );
};

export default CartTotal;
