import TabButton from "./TabButton.jsx";
import {useState} from "react";
import {EXAMPLES} from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
    // Dynamically render the selected topic
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

// conditionally render the selected topic before and after selection
    let tabContent = <p> Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        )
    }

    return(
        <Section title="Examples" id="examples">
            <Tabs
                buttons={
                <>
                    <TabButton isSelected={selectedTopic === "components"}
                               onClick={() => handleSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === "jsx"}
                               onClick={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === "props"}
                               onClick={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === "state"}
                               onClick={() => handleSelect('state')}>State</TabButton>
                </>
            }
                buttonsContainer="menu"
            >
                {tabContent}
            </Tabs>

        </Section>
    )
}