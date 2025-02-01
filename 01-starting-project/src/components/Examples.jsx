import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Sections from "./Sections.jsx";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();  //must be called  in top level component function and not nested

  function handleSelect(selectedButton) {
    console.log(selectedButton)
    setSelectedTopic(selectedButton)
  }
  let tabContent = <p>Please select a topic.</p>

  if(selectedTopic){
    tabContent = <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>
  }

    return ( <Sections title="Examples" id="examples">
        <Tabs  buttonsContainer="menu" buttons={
            <>
                <TabButton isSelected={selectedTopic === 'components'} onSelect={()=>handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onSelect={()=>handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onSelect={()=>handleSelect('state')}>State</TabButton>
            </>
        }>

        </Tabs>
    {tabContent}
  </Sections>);
}