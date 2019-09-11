
import React, { Component } from 'react';
import {Route} from 'dva/router';
import { connect } from 'dva';
import { Tabs,NavBar,Icon } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky'; 
import Category from '../category/Category.js'
import styles from './Home.less'

@connect(({category})=>({category}))
class Home extends Component {
    constructor(){
        super();
        this.state={
           
        }
    }
   
    

    render() {
        console.log(this.props)

        const tabs = [
            { title: 'First Tab', key: 't1' },
            { title: 'Second Tab', key: 't2' },
            { title: 'Third Tab', key: 't3' },
          ];
          
          const renderTabBar=(props)=> {
            return (
            <Sticky>
              {
                  ({ style }) => (<div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>)
            }
             </Sticky>
            );
          }

          const tabs2 = [
            { title: '诗词', sub: '1',key:"/home/category" },
            { title: 'Second Tab', sub: '2',key:"/home/1" },
            { title: 'Third Tab', sub: '3',key:"/home/2" },
            { title: 'Forth Tab', sub: '3',key:"/home/3" },
          ];

        //   const TableExample=()=>(
        //     <Tabs tabs={tabs2}
        //     initialPage={0}
            
        //     renderTab={tab => <span>{tab.title}</span>}
        //   >
        //     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        //       Content of first tab
        //     </div>
        //     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        //       Content of second tab
        //     </div>
        //     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        //       Content of third tab
        //     </div>
        //     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        //       Content of fhird tab
        //     </div>
        //   </Tabs>
        //   )
    

          const HomeTab = () => (
            <div>
              
                <StickyContainer>
                  <div id="tab">
                    <Tabs tabs={tabs2}
                        initialPage={1}
                        renderTabBar={renderTabBar}
                        onChange={(tab, index) => { }}
                        onTabClick={(tab, index) => {this.props.history.push(tab.key) }}
                        style={{backgroundColor:'#888e6d'}}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of second tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of third tab
                        </div>
                    </Tabs>
                  </div>
                </StickyContainer>
               
            </div>
          )
        return (
            <div className={styles.container}>
                <div className={styles.title}>
                    <b>我的诗词库</b>
                </div>

                <NavBar
                    mode="dark"
                    leftContent={<span onClick={()=>this.props.history.back()}>返回</span>}
                    rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                    ]}
                    className={styles.navbar}
                    >
                </NavBar>
                {/* <TableExample /> */}
                <HomeTab />
            </div>
        );
    }
}

export default Home;