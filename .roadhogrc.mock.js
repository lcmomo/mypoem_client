

import mockjs from 'mockjs'

import categoryMock from './mock/category.js';

import { format, delay } from 'roadhog-api-doc';

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'false';


const proxy={
    ...categoryMock,
    
};

export default(noProxy?{}:delay(proxy,300))
