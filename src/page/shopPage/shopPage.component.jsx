import React from 'react';

import './shopPage.component.styles.scss';

import SHOP_DATA from './shopPage.data';

class ShopPage extends React.Component{
  constructor (props) {
    super(props);
    
    this.state = {
      collections: SHOP_DATA 
    }
  }

  render(){
    return(
      <div>
        <h1>SHOP</h1>
      </div>
    )
  }
}

export default ShopPage;