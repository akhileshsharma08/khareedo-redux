import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem(state, action) {
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        incrementItemQuantity(state, action) {
            const { itemId } = action.payload;
            const itemToUpdate = state.find((item) => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.quantity += 1;
            }
        },
        decrementItemQuantity(state, action) {
            const { itemId } = action.payload;
            const itemToUpdate = state.find((item) => item.id === itemId);
            if (itemToUpdate && itemToUpdate.quantity > 1) {
                itemToUpdate.quantity -= 1;
            }
        },
    },
});

export const { addItem, removeItem, incrementItemQuantity, decrementItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
