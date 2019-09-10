import React, { Component } from 'react'
import { connect } from 'dva';
import { NavBar, Icon,Card, WingBlank, WhiteSpace, Flex } from 'antd-mobile';
import styles from './Category.less'
import Home from '../home/Home.js'
const FLexItem=Flex.Item;

@connect(({category})=>({category}))
 class Category extends Component {

  constructor(){
    super();
    this.state={
        isCategoryFold:true,
        isAuthorFold:true,
    }
  }
componentDidMount(){
 
  this.getCategoryList();
  this.getAuthorList();
}
  
async getCategoryList(){
 
  let res={};
  
  console.log(this.props)
  await this.props.dispatch({
    type:'category/fetchCategoryList',
    playload:{
      
    },
    callback:result=>{
      res=result;
    },
  })
  return res;
}

async getAuthorList(){
 
  let res={};
  
  console.log(this.props)
  await this.props.dispatch({
    type:'category/fetchAuthorList',
    playload:{
      
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
     const {categoryList,authorList}=this.props.category;
    
    
    return (
      <div className={styles.container}>
        <Home />

          <WingBlank size="sm">
            <WhiteSpace size="md" />
            <Card>
              <Card.Header
                title="分类"               
              />
              <Card.Body>
                <div className={styles.categorywrap}>
                 <div className={styles.categorytitle}>
                   <strong >类型：</strong>
                   <Icon type={this.state.isCategoryFold?'down':'up'} className={styles.icon} onClick={()=>{this.changeItem()}}/>
                  </div> 
                 { <Flex wrap="wrap" justify="center" style={{height:this.state.isCategoryFold?'27px':''}}>
                  {
                    categoryList.map((item,index)=>(
                     <FLexItem key={index} className={styles.modelitem}>
                     
                     {item.modelName}
                     
                     </FLexItem>
                    )
                    )
                  }
                 </Flex>
                 }  
                </div>
              </Card.Body>
              <Card.Body>
                <div className={styles.categorywrap}>
                 <div className={styles.categorytitle}>
                   <strong >作者：</strong>
                   <Icon type={this.state.isAuthorFold?'down':'up'} className={styles.icon} onClick={()=>{this.changeAuthor()}}/>
                  </div> 
                 { <Flex wrap="wrap" justify="center" style={{height:this.state.isAuthorFold?'27px':''}}>
                  {
                    authorList.map((item,index)=>(
                     <FLexItem key={index} className={styles.modelitem}>
                     
                     {item.author}
                     
                     </FLexItem>
                    )
                    )
                  }
                 </Flex>
                 }  
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