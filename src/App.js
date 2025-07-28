
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThreadList from "./ThreadList";
import NewThread from "./NewThread";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<ThreadList />} />
        <Route path = "/threads/new" element = {<NewThread />} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;