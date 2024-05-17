import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios' 

export const fetchBallons = createAsyncThunk(
  'balloons/fetchBalloonsStatus',
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    
    const { data } = await axios.get('data/productsData.json', {
      headers: {
        'Cache-Control': 'no-cache'
      },
      params: {
        order,
        sortBy,
        category,
        search,
        currentPage
      }
    });

    return data;
  }
);
