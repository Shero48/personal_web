import { configureStore } from "@reduxjs/toolkit";
import slicer from '@/store/slice';

export const store=configureStore({
    reducer:{
        new:slicer
    }
})