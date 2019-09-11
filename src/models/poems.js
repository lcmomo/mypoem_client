import {
    fetchPoemListByCategoryI,
    fetchAuthorListI
}

from '../services/poems.js'


export default {

    namespace: 'poems',
  
    state: {
        poemList:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload,callback }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },

      *fetchPoemListByCategory({payload,callback},{call,put}){
       
          const results=yield call(fetchPoemListByCategoryI,payload);
         const {data:{list}}=results;
          yield put({
              type:'savePoemList',
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
            type:'savePoemList',
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
      savePoemList(state,action){
          return {
              ...state,
            poemList:action.payload}
      },
      saveAuthorList(state,action){
        return {
            ...state,
            poemList:action.payload
          }
    }
    },
  
  };
  