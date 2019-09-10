import {stringify} from 'qs';
import request from '../utils/request';
import { getItemEnv}  from './index.js'
const baseUrl=getItemEnv()==='development'?"http://localhost:8080":'http://localhost:8080';
export async function fetchCategoryListI(params){
    
    return request(`${baseUrl}/category/list?${stringify(params)}`).then(res=>res.data);
}

export async function fetchAuthorListI(params){
    
    return request(`${baseUrl}/author/list?${stringify(params)}`).then(res=>res.data);
}