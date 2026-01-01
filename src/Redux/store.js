import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../Redux/slices/userSlice';
import adminSlice from './slices/adminSlice';
export default configureStore({
  reducer: {
        user:userSlice,
        admin:adminSlice
    },
})