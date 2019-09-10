import React, { Component } from 'react';
import { connect } from 'dva';
import {Link} from 'dva/router'
import { DatePicker,Button, Card, WingBlank, WhiteSpace,Icon, Grid,NavBar, } from 'antd-mobile';
import styles from './IndexPage.css';
 
 
function IndexPage() {
  
  return (
    <div className={styles.normal}>
      <div className={styles.title}>
        <p>人生自是有情诗</p>
        <p>此爱也关风和月</p>
        <Link to="/home" >点击进入</Link>
      
      </div>

    </div>
  );
}
 
IndexPage.propTypes = {
 
};
 
export default connect()(IndexPage);

