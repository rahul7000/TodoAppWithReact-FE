import React,{Component} from 'react';
import './Counter.css';
import CounterButton from './CounterButton';

class Counter extends Component{

//define the initial state in the constructor
constructor(){
super();//super is required if you are using this in constructor

this.state={
counter : 0
}

this.increament = this.increament.bind(this)
this.decreament = this.decreament.bind(this)
this.reset = this.reset.bind(this)
}

render(){
return(
<div className="counterApp">
    <div className="appName">MyCounterApp</div>

    <div className="counterButtons">
        <CounterButton by={1} increamentMethod={this.increament} decreamentMethod={this.decreament} />
        <CounterButton by={5} increamentMethod={this.increament} decreamentMethod={this.decreament} />
        <CounterButton by={10} increamentMethod={this.increament} decreamentMethod={this.decreament} /> 
        <CounterButton by={20} increamentMethod={this.increament} decreamentMethod={this.decreament} />
        <CounterButton by={100} increamentMethod={this.increament} decreamentMethod={this.decreament} />
    </div>
    <div className="counterSpace">
        <span>{this.state.counter}</span>
    </div>
    <div>
        <button onClick={this.reset} className="resetButton">Reset</button>
    </div>
</div>

)
}

//change the state of a component using setState method of React class
increament(by){
//console.log("increament")
//this.state.counter++; // bad practice
// this.setState ({
//     counter :this.state.counter+by
// })

this.setState(
(prevState)=>{
return{counter:prevState.counter+by}

});
}

decreament(by){
this.setState(
(prevState)=>{
    return{
    counter:prevState.counter-by
}
}
)
}

reset(){
this.setState({
counter:0
})
}

}




export default Counter