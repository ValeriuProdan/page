import { Routes, Route } from "react-router-dom";

import Page from "./routes/page/page.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Pictures from "./routes/pictures/pictures.component";
import Resume from "./routes/resume/resume.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='pictures' element={<Pictures />} />
        <Route path='profesional' element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App;
