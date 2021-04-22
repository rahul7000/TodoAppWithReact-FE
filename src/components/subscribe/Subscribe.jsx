import React, { Component } from 'react';
import Bell1 from './bell1.jpg';
import Bell2 from './bell2.jpg';

class Subscribe extends Component {

constructor(props){
super(props);

this.state={
    subMessage:'Please Subscribe',
    subButtonMessage:"Subscribe",
    bellImage:Bell1,
    welcomeMessage:props.welcomeMessage+" from state Object "
};
}

styles={
color:'red',
fontStyle:'italic'
}

imageStyles={
width:'30px',
hieght:'30px'
}

subscribeClicked=()=>{
this.setState({
    subMessage:'Subscribed ! now hit the bell icon',
    subButtonMessage:'Subscribed'
})
}

imageClicked=()=>{
this.setState({
    subMessage:'Subscribed ! bell rang !',
    subButtonMessage:'Subscribed & Bell',
    bellImage:Bell2
})
}

render() {
return (
    <div>
        <h1>{this.props.welcomeMessage}</h1>
        <h1>{this.state.welcomeMessage}</h1>
        <h1 style={this.styles}>{this.state.subMessage}</h1>
        <button onClick={this.subscribeClicked}>{this.state.subButtonMessage}</button>
        <p/>
        <img style={this.imageStyles} src={this.state.bellImage} alt="" onClick={this.imageClicked}></img>
    </div>
);
}
}

export default Subscribe;
