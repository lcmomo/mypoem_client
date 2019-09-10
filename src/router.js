import React from 'react';
import { Router, Route, Switch,IndexRedirect } from 'dva/router';
import dynamic from 'dva/dynamic';
// import IndexPage from './routes/IndexPage';
// import SubRoutes from './utils/SubRoutes.js'
// import {RouteConfig} from './routes/common/router.js'
// import Category from './routes/category/Category.js'

function RouterConfig({ history,app}) {

  const IndexPage = dynamic({
    app,
    models:()=>[],
    component: () => import('./routes/IndexPage.js')
})
  const Category = dynamic({
      app,
      models:()=>[import('./models/category.js'),],
      component: () => import('./routes/category/Category.js')
  })
  const Home = dynamic({
    app,
    models:()=>[],
    component: () => import('./routes/home/Home.js')
})

const Poems = dynamic({
  app,
  models:()=>[import('./models/poems.js')],
  component: () => import('./routes/poems/Poems.js')
})
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} /> 
        
        <Route path="/home" exact component={Home}> 
        </Route> 
        <Route path="/home/category" exact component={Category} />
        {/* {
          RouteConfig.map((route,index)=>(
            <SubRoutes key={index}{...route} app={app}/>
          ))
        } */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
