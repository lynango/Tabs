import React from 'react';

const Tab = (props) => {
const { allTabs, currentTab, setCurrentTab } = props;

const tabStyle = (choice) => {
    if (choice === currentTab) {
        return "selectedTab";
    } else {
        return "nonSelectedTab";
    }
}

const setSelectedTab = (choice) => {
    setCurrentTab(choice);
}

    return (
    <div style={{ margin: "3%", width: "60%", textAlign: "left"}}>

    {
    allTabs.map((item, choice) => (
        <div className={`tab ${ tabStyle(choice) }`} onClick={(e) => setSelectedTab(choice) }>
        { item.label }
        </div>
        ))
    }
    </div>
    )
}

export default Tab;