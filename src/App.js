import React, {useState} from 'react';
import './App.css';
import tabHeader from './components/tabHeader';

function App() {
  const [tabs, setTabs] = useState([
    {
      selected: true,
      title: "the best tab"
    },
    {
      selected: false,
      title: "the okay tab"
    },
    {
      selected: false,
      title: "the worst tab"
    },

  ])
  return (
    <div className="App">
      {/* <tabHeader selected = {true} index={0} title= 'best tab'/> 
      <tabHeader selected = {false} index={1} title= 'okay tab'/> 
      <tabHeader selected = {false} index={2} title= 'worst tab'/>  */}
      hello world
      {
        tabs.map((tab, i)=> {
          return <tabHeader selected={tab.selected} index={i} title={tab.title}/>
        })
      }
    </div>
  );

}

export default App;
