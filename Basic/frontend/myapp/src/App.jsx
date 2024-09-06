import {BrowserRouter,Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import ShowAll from "./components/ShowAll";
import View from "./components/View";

function App() {
  return (
    <>
   <div className="container-fluid">
    {/* navbar start */}
    <Navbar />
    {/* navbar end */}
    {/* main content start */}
   <BrowserRouter>
   <Routes>
  <Route exact path="/" element={<Registration />} />
  <Route exact path="/showall" element={<ShowAll />} />
  <Route exact path="/view:id" element={<View />} />
   </Routes>
   </BrowserRouter>
    {/* main content end */}
    {/* Footer start */}
    <Footer />
    {/* Footer end */}
   </div>
  
    </>
  )
}

export default App
