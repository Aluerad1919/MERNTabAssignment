import React, {useState} from 'react';
import './App.css';
import TabHeader from './components/tabHeader'

function App() {
  const [tabs, setTabs] = useState([
    {
      selected: true,
      title: "the best tab",
      content: "content of tab 0"
    },
    {
      selected: false,
      title: "the okay tab",
      content: "content of tab 1"
    },
    {
      selected: false,
      title: "the worst tab",
      content: "content of tab 2"
    },

  ])

  const handleClick = (clickedIndex) =>{
    tabs.map((tab,i) => {
      let t = tab;
      if (clickedIndex === i ){
        t.selected= true;
      }
      else{
        t.selected = false;
      }
      setTabs([...tabs.slice(0,i),
      t,
      ].concat(tabs.slice(i+1)))
    })
  }
  return (
    <div className="App">
      {
        tabs.map((tab, i) => {
          return <TabHeader selected={tab.selected} index={i} title={tab.title} handleClick={handleClick} />
        })
      }

      {
        tabs.map((tab, i)=>{
          return tab.selected ? <p>{tab.content}</p>: ""
        })
      }
    </div>
  );

}

export default App;
