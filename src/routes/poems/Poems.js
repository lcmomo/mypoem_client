import React, { Component } from 'react'
import { connect } from 'dva';
import { NavBar, Icon,Card, WingBlank, WhiteSpace, Flex } from 'antd-mobile';
import styles from './Poems.less'
import Home from '../home/Home.js'
import {getPathParams} from '../../components/_utils/pathTools.js'

const FLexItem=Flex.Item;

@connect(({poems})=>({poems}))
 class Category extends Component {

  constructor(){
    super();
    this.state={
        isCategoryFold:true,
        isAuthorFold:true,
        category:''
    }
  }
componentDidMount(){
    const { match: {params}  }=this.props;
   'modelName' in params ? this.getPoemListByCategoty():this.getPoemListByAuthor();
   
}
  
async getPoemListByCategoty(){
 
  let res={};
//   const {location:{pathname}}=this.props;
//   const routeparam=getPathParams('/home/poems/:id',pathname);
  
  
  const { match:{ params:{ modelName } } }=this.props;
  this.setState({ category:modelName})
  console.log(modelName);
  await this.props.dispatch({
    type:'poems/fetchPoemListByCategory',
    payload:{
      modelName:modelName
    },
    callback:result=>{
      res=result;
    },
  })
  return res;
}

async getPoemListByAuthor(){
 
    let res={};
  //   const {location:{pathname}}=this.props;
  //   const routeparam=getPathParams('/home/poems/:id',pathname);
    
    console.log(this.props)
    const { match:{ params:{ authorName } } }=this.props;
    this.setState({category:authorName})
    console.log(authorName);
    await this.props.dispatch({
      type:'poems/fetchPoemListByCategory',
      payload:{
        authorName:authorName
      },
      callback:result=>{
        res=result;
      },
    })
    return res;
  }
  

changeItem=()=>{
  this.setState({
    isCategoryFold:!this.state.isCategoryFold
  })
}

changeAuthor=()=>{
  this.setState({
    isAuthorFold:!this.state.isAuthorFold
  })
}

  render() {
     // const {categoryList,authorList}=this.props.category;
    
     
    
    return (
      <div className={styles.container}>
        <Home />

          <WingBlank size="sm">
            <WhiteSpace size="md" />
            <Card>
              <Card.Header
                title={`${this.state.category}的诗文`}               
              />
              <Card.Body>
                <div className={styles.categorywrap}>
                 <div className={styles.categorytitle}>
                   <strong >类型：</strong>
                   <Icon type={this.state.isCategoryFold?'down':'up'} className={styles.icon} onClick={()=>{this.changeItem()}}/>
                  </div> 
                 {/* { <Flex wrap="wrap" justify="center" style={{height:this.state.isCategoryFold?'27px':''}}>
                  {
                    categoryList.map((item,index)=>(
                     <FLexItem key={index} className={styles.modelitem}>
                     
                     {item.modelName}
                     
                     </FLexItem>
                    )
                    )
                  }
                 </Flex> 
                 } */} 
                </div>
              </Card.Body>
              <Card.Body>
                <div className={styles.categorywrap}>
                 <div className={styles.categorytitle}>
                   <strong >作者：</strong>
                   <Icon type={this.state.isAuthorFold?'down':'up'} className={styles.icon} onClick={()=>{this.changeAuthor()}}/>
                  </div> 
                 {/* { <Flex wrap="wrap" justify="center" style={{height:this.state.isAuthorFold?'27px':''}}>
                  {
                    authorList.map((item,index)=>(
                     <FLexItem key={index} className={styles.modelitem} style={{flexBasis:50}}>
                     
                     {item.author}
                     
                     </FLexItem>
                    )
                    )
                  }
                 </Flex> 
                 }  */}
                </div>
              </Card.Body>
              {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank>
      </div>
    )
  }
}

export default  Category;