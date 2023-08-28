'use client'
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://2.180.5.196:8000',
/*  baseURL: 'http://localhost:5000',*/
});

export default api;