const Cart = require('../Model/Cart.Model');

const createCart = async (userId) => {
    try {
        const cart = await Cart.create({ userId });
        return cart;
    } catch (error) {
        console.error('Error creating cart:', error);
        throw new Error('Failed to create cart');
    }
};

const addToCart = async (userId, productId, quantity, selectedColor, selectedSize) => {
    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = await Cart.create({ userId, products: [{ productId, quantity, selectedColor, selectedSize }] });
        } else {
            const existingProductIndex = cart.products.findIndex(item => item.productId === productId);
            if (existingProductIndex !== -1) {
                cart.products[existingProductIndex].quantity += quantity || 1;
            } else {
                cart.products.push({ productId, quantity: quantity || 1, selectedColor, selectedSize });
            }
            await cart.save();
        }

        return cart; 
    } catch (error) {
        console.error('Error adding to cart:', error);
        throw new Error('Failed to add product to cart');
    }
};

const removeFromCart = async (userId, productId) => {
    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            throw new Error('Cart not found');
        }

        cart.products = cart.products.filter(item => item.productId.toString() !== productId);
        await cart.save();

        return cart;
    } catch (error) {
        console.error('Error removing from cart:', error);
        throw new Error('Failed to remove product from cart');
    }
};

module.exports = {
    createCart,
    addToCart,
    removeFromCart
};
