import { Routes, Route } from "react-router-dom";

import Body from "./routes/page/page.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Pictures from "./routes/pictures/pictures.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='pictures' element={<Pictures />} />
      </Route>
    </Routes>
  );
}

export default App;
