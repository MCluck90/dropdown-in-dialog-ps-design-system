import React from "react";
import ActionMenu from "@pluralsight/ps-design-system-actionmenu";
import Dialog from "@pluralsight/ps-design-system-dialog";
import Dropdown from "@pluralsight/ps-design-system-dropdown";
import Theme from "@pluralsight/ps-design-system-theme";
import "./App.css";

function InAppExample() {
  const options = [
    { value: "beg", label: "Beginner" },
    { value: "int", label: "Intermediate" },
    { value: "adv", label: "Advanced" }
  ];
  const [value, setValue] = React.useState(options[1].value);
  return (
    <div>
      <Dropdown
        label="Level"
        placeholder="Select"
        onChange={(evt, value, label) => setValue(value)}
        menu={
          <ActionMenu>
            {options.map(opt => (
              <ActionMenu.Item key={opt.value} value={opt.value}>
                {opt.label}
              </ActionMenu.Item>
            ))}
          </ActionMenu>
        }
        value={value}
      />
      <div>Selected: {value}</div>
    </div>
  );
}

function App() {
  return (
    <Theme>
      <div className="App">
        <Dialog aria-label="Dialog">
          <InAppExample />
        </Dialog>
      </div>
    </Theme>
  );
}

export default App;
