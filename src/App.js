import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Members from './components/Member/Members';

function App() {
  useEffect(()=> {
    fetch('./members.JSON')
    .then(res => res.json())
    .then(data => console.log(data)
    )
  },[])


  return (
    <div className="App">
      <Header></Header>
      <Members></Members>
    </div>
  );
}

export default App;
