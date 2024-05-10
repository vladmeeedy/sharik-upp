import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios' 

export const fetchBallons = createAsyncThunk(
  'balloons/fetchBalloonsStatus',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params
    const { data } = await axios.get("data/productsData.json")
    let indices;
    if (currentPage == 1) {
      indices = [0, 1, 2, 3, 4, 5, 6, 7];
    } else if (currentPage == 2) {
      indices = [8, 9, 10, 11, 12, 13, 14, 15];
    } else if (currentPage == 3) {
      indices = [16, 17, 18, 19, 20, 21, 22];
    }
const result = indices.map(index => data[index]);
   
    return result
  },
)
