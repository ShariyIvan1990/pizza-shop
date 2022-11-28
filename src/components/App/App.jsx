import "./style.scss";

import { ButtonIcon } from "../ui/Button-icon";

function App() {
  return (
    <div className="App">
      <ButtonIcon onClick={() => alert("hello")} style="orange" icon={<>+</>} />
    </div>
  );
}

export default App;
