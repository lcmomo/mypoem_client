import React, { Component } from 'react'
import { connect } from 'dva';
import{Link} from 'dva/router'
import { NavBar, Icon,Card, WingBlank, WhiteSpace, Flex } from 'antd-mobile';
import styles from './Category.less'
import Home from '../home/Home.js'
const FLexItem=Flex.Item;

@connect(({category,poems})=>({category,poems}))
 class Category extends Component {

  constructor(){
    super();
    this.state={
        isCategoryFold:true,
        isAuthorFold:true,
    }
    //this.getPoemListByAuthor=this.getPoemListByAuthor.bind(this)
  }
componentDidMount(){
 
  this.getCategoryList();
  this.getAuthorList();
}
  
async getCategoryList(){
 
  let res={};
  
 // console.log(this.props)
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
  
 // console.log(this.props)
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


async getPoemListByCategoty(modelName){
 
  let res={};
  //console.log(modelName)

  await this.props.dispatch({
    type:'category/fetchPoemListByCategory',
    payload:{
      modelName:modelName
    },
    callback:result=>{
      res=result;
    },
  })
  return res;
}

async getPoemListByAuthor(author){
 
    let res={};
  //   const {location:{pathname}}=this.props;
  //   const routeparam=getPathParams('/home/poems/:id',pathname);
 // console.log(author)
 // console.log(this.props)
    await this.props.dispatch({
      type:'category/fetchPoemListByCategory',
      payload:{
        authorName:author
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

renderPoem=(item,index)=>(
   
     <div style={{marginTop:8}} key={index}>
      <Card.Body style={{backgroundColor:'#f0efe2'}}>
        
          <p className={styles.poemTitle}>
            <a href=""><b>{item.poemName}</b></a>
          </p>
          <p className={styles.source}>
             <span>{item.dynasty}</span> &nbsp;:&nbsp;<span>{item.authorName}</span>
          </p>
          <div className={styles.contson}>
              {item.content}
          </div>
       
      </Card.Body>
      </div>
)
  render() {
     const {categoryList,authorList,poemList}=this.props.category;
    
    
    return (
      <div className={styles.container}>
        <Home />

          <WingBlank size="sm">
            <WhiteSpace size="md" />
            <Card style={{ backgroundColor: '#e1e0c7'}}>
              <Card.Header
                title="分类"
                style={{backgroundColor:'#f0efe2'}}               
              />
              <Card.Body style={{backgroundColor:'#f0efe2'}}>
                <div className={styles.categorywrap}>
                 <div className={styles.categorytitle}>
                   <strong >类型：</strong>
                   <Icon type={this.state.isCategoryFold?'down':'up'} className={styles.icon} onClick={()=>{this.changeItem()}}/>
                  </div> 
                 { <Flex wrap="wrap" justify="center" style={{height:this.state.isCategoryFold?'27px':''}}>
                  {
                    categoryList.map((item,index)=>(
                     <FLexItem key={index} className={styles.modelitem}  onClick={()=>this.getPoemListByCategoty(item.modelName)}>
                     
                     {/* <Link to={`/home/poems_category/${item.modelName}`} style={{color:'#19537d',cursor:'pointer'}}>{item.modelName}</Link> */}
                     {
                       item.modelName
                     }
                     </FLexItem>
                    )
                    )
                  }
                 </Flex>
                 }  
                </div>
              </Card.Body>
             
              <Card.Body style={{backgroundColor:'#f0efe2'}}>
                <div className={styles.categorywrap}>
                 <div className={styles.categorytitle}>
                   <strong >作者：</strong>
                   <Icon type={this.state.isAuthorFold?'down':'up'} className={styles.icon} onClick={()=>{this.changeAuthor()}}/>
                  </div> 
                 { <Flex wrap="wrap" justify="center" style={{height:this.state.isAuthorFold?'27px':''}}>
                  {
                    authorList.map((item,index)=>(
                     <FLexItem key={index} className={styles.modelitem} style={{flexBasis:60}} onClick={()=>this.getPoemListByAuthor(item.author)}>
                     
                     {/* <Link to={`/home/poems_author/${item.author}`} style={{color:'#19537d',cursor:'pointer'}}>{item.author}</Link> */}
                     {
                       item.author
                     }
                     </FLexItem>
                    )
                    )
                  }
                 </Flex>
                 }  
                </div>
               
              </Card.Body>
             
              {
                poemList.map(
                  (item,index)=>(
                    
                      this.renderPoem(item,index)
                   
                  )
                )
                
              }
              {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank>
      </div>
    )
  }
}

export default  Category;