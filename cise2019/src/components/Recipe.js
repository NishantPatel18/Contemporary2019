import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'

class Recipe extends Component{

    

    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(this.props.checked===0)
        {
            this.props.addShipping();
        }
        if(this.props.checked===3)
        {
            this.props.subExpress2();
        }
    }
    handleChecked2 = (e)=>{
        if(this.props.checked===1)
        {
        this.props.substractShipping();
        }
        if(this.props.checked===3)
        {
            this.props.subExpress();
        }
}
handleChecked3 = (e)=>{
    if(this.props.checked===0)
    {
    this.props.addExpress();
    }
    if(this.props.checked===1)
    {
        this.props.addExpress2();
    }
}

    render(){
  
        return(
            <div className="container">
                <div className="collection2">
                    
                            <form action="/action_page.php">
                            <input type="radio" name="del" ref="shipping" onChange= {this.handleChecked} />Shipping(+$6)<hr/>
                            <input type="radio" name="del" ref="shipping" onChange= {this.handleChecked3} />Express Shipping(+$69)
                            <input type="radio" name="del" ref="shipping" onChange={this.handleChecked2}/>Pickup At Location 1(+$0)<br/>
                            <input type="radio" name="del" ref="shipping" onChange={this.handleChecked2}/>Pickup At Location 2(+$0)<br/>
                            <input type="radio" name="del" ref="shipping" onChange={this.handleChecked2}/>Pickup At Location 3(+$0)<br/>
                            </form>

                        
                        <b>Total:$ {this.props.total} </b>
                    </div>
                    <div className="checkout">
                        <button><a href="./Checkout.js">Checkout</a></button>
                    </div>
                 </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total,
        checked : state.checked
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})},
        addExpress: ()=>{dispatch({type: 'EXP_SHIPPINGA'})},
        addExpress2: ()=>{dispatch({type: 'EXP_SHIPPINGA2'})},
        subExpress: ()=>{dispatch({type: 'EXP_SHIPPINGS'})},
        subExpress2: ()=>{dispatch({type: 'EXP_SHIPPINGS2'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
