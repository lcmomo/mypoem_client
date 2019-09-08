import {
    fetchCategoryListI
}

from '../services/category.js'


export default {

    namespace: 'category',
  
    state: {
        categoryList:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload,callback }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },

      *fetchCategoryList({payload,callback},{call,put}){
       
          const results=yield call(fetchCategoryListI,payload);
         const {data:{list}}=results;
          yield put({
              type:'saveCategoryList',
              payload:list
          });
          if(typeof callback==='function'){
              callback(results);
          }
      }


    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      saveCategoryList(state,action){
          return {
              ...state,
            categoryList:action.payload}
      }
    },
  
  };
  