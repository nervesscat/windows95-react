import { useState } from "react";

import BottomBar from "./Components/Windows/BottomBar";
import WindowAPP from "./Components/Windows/WindowApp";

function App() {
  const [appList, setAppList] = useState([{
    name: "Internet Core",
    icon: "https://via.placeholder.com/50",
    onClick: () => {console.log("Internet Core clicked")}
  }]);

  return (
    <div className='background'>
      <BottomBar/>
      <WindowAPP app={appList[0]}/>
    </div>
  );
}

export default App;
