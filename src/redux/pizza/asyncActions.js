import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios' 

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params
    const { data } = await axios.get("/productsData.json")
    console.log(category);
    let indices;
    if (currentPage == 1) {
      indices = [0, 1, 2, 3];
    } else if (currentPage == 2) {
      indices = [4, 5, 6, 7];
    } else if (currentPage == 3) {
      indices = [8,9];
    }
const result = indices.map(index => data[index]);
   
    return result
  },
)
