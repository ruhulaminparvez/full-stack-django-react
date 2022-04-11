import './App.css';
import React from 'react';
// import Hello from './components/Hello';
// import FunComponent from './components/FunComponent';
// import MyClass from './components/MyClass';
// import Name from './components/Name';
// import Example from './components/Example';
// import Example2 from './components/Example2';
// import Form from './components/Form';
import MyFragment from './components/MyFragment';


function App() {

  // function clicked(){
  //   alert('You clicked inside app.js!');
  // }

  return (
    <div className='container'>  
        {/* <Name />
        <Example names = {['Python', 'Java', 'JavaScripts', 'C#']}/> 
        <Example2 names = {['React', 'React-Native', 'Django']}/>

        <Form /> */}

        <MyFragment />
       
    </div>
  );
}

export default App;
