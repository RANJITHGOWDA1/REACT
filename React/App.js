import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
class App extends Component {
  render() {
  return (
    <div className="App">
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <ParentComponent/>
      <UserGreeting/>
      <NameList/>
      { /*<Counter></Counter>*/}
      { /*<Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
  </Greet> */}
      {/*<Greet name="Diana" heroName="Wonder Woman">
      </Greet>
      <Welcome name="Bruce" heroName="Batman"></Welcome>
      {/*<Welcome name="Clark" heroName="Superman"></Welcome>
      <Welcome name="Diana" heroName="Wonder Woman"></Welcome>
      <Hello></Hello>*/ }
      <Message></Message>
    </div>
  );
}
}

export default App;
