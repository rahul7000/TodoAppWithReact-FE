import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CounterButton extends Component {

// constructor(props){
// super(props);

// this.increament = this.increament.bind(this)
// this.decreament = this.decreament.bind(this)
// }

render(){
return(
<div className="counter">
    <button onClick={()=>this.props.increamentMethod(this.props.by)}>{this.props.by}</button>
    <button onClick={()=>this.props.decreamentMethod(this.props.by)}>-{this.props.by}</button>
</div>
)
}

// increament(){
// this.props.increamentMethod(this.props.by);
// }

// decreament(){
// this.props.decreamentMethod(this.props.by);
// }

}

CounterButton.defaultProps={
by:10
}

CounterButton.propTypes={
by:PropTypes.number
}
export default CounterButton;