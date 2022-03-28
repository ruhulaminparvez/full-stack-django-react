import './App.css';

import Hello from './components/Hello';
import FunComponent from './components/FunComponent';
import MyClass from './components/MyClass';

function App() {
  return (
    <div className="App">  
        <FunComponent name = "ruhul amin parvez" designation = "jr. software developer"/>
        <MyClass lang = "python" />
       
    </div>
  );
}

export default App;
