import axios from 'axios';
import {API} from "../const/const"
export const api = axios.create({
    baseURL: API
    
})