//import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Subscribe from './components/subscribe/Subscribe';
import { Component } from 'react';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';

function App() {

return (
<div className="App">
  <TodoExample/>
</div>
);
}

class LearningExample extends Component{

render(){
return(
  <div className="learningExample">
  <FirstComponent/>
  <SecondComponent/>
  <ThirdComponent/>

</div>
)
}
}

class SubscribeExample extends Component{

render(){
return(
  <div className="subscribeExample">
  <Subscribe welcomeMessage="Hello World !"></Subscribe>
</div>
)
}
}

class CounterExample extends Component{

render(){
  return(
    <div className="counterExample">
    <Counter/>
  </div>
  )
}
}

class TodoExample extends Component {
render() {
  return (
      <div className="todoExample">
        <TodoApp/>
      </div>
  );
}
}


export default App;
