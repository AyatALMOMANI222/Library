import React, { useState } from "react";
import Dropdown from "./component/DropDown";
import Buttons from "./component/Buttons";
import Input from "./component/Input";
import Card from "./component/Card";
import Radio from "./component/Radio";
import Accordions from "./component/Accordions";
import PopoverExample from "./component/PopoverExample";
import PopupExample from "./component/pop-up";
import MyComponent from "./component/location";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");
  const options = [
    {
      label: "React",
      value: "React",
    },
    {
      label: "Next",
      value: "Next",
    },
    {
      label: "React-Native",
      value: "React-Native",
    },
  ];

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="App">
      <div>
        <Radio value={value} setValue={setValue} options={options} />
      </div>
      <div>
        <Dropdown />
      </div>
      <PopoverExample />

      <Buttons onClick={() => alert("Button clicked")}>Click me</Buttons>
      <Buttons type="submit" className="primary">
        Submit
      </Buttons>
      <Buttons type="button" className="secondary">
        Cancel
      </Buttons>
      <Input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={handleInputChange}
        className="custom-input"
        errorMsg="too short"
      />
      <p>you entered {inputValue}</p>

      <Card
        title="Welcome"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed lectus vitae lectus tempus consequat."
        image="https://via.placeholder.com/300"
      />
      <Accordions />
      <PopupExample />

      <MyComponent />
    </div>
  );
}

export default App;
