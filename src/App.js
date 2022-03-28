import './App.css';
import React, { useState } from 'react';
import Tab from './components/Tab';
import Content from './components/Content';

function App() {
  const tabsArray = [
    { label: "Tab 1", content: "Tab 1 content is showing here" },
    { label: "Tab 2", content: "Tab 2 content is showing here" },
    { label: "Tab 3", content: "Tab 3 content is showing here" },
    { label: "Tab 4", content: "Tab 4 content is showing here" },
  ];

  const [ allTabs, setAllTabs ] = useState(tabsArray);

  const [ currentTab, setCurrentTab ] = useState(0);

  return (
    <div className="App">
      <Tab 
        allTabs={ allTabs } 
        currentTab={ currentTab }
        setCurrentTab={ setCurrentTab } 
      />
      <Content allTabs={ allTabs } currentTab={ currentTab } />
    </div>
  );
}

export default App;