import {
    fetchCategoryListI,
    fetchAuthorListI
}

from '../services/poems.js'


export default {

    namespace: 'poems',
  
    state: {
        categoryList:[],
        authorList:[]
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
      },

      *fetchAuthorList({payload,callback},{call,put}){
       
        const results=yield call(fetchAuthorListI,payload);
       const {data:{list}}=results;
        yield put({
            type:'saveAuthorList',
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
      },
      saveAuthorList(state,action){
        return {
            ...state,
          authorList:action.payload}
    }
    },
  
  };
  