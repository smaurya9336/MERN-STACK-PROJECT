
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Registration from './components/Registration'

function App() {
 

  return (
    <>
   <div className="container-fluid">
    {/* navbar start */}
    <Navbar />
    {/* navbar end */}
    {/* Registration form start */}
    <Registration />
    {/* Registration form end */}
    {/* Footer start */}
    <Footer />
    {/* Footer end */}
   </div>
  
    </>
  )
}

export default App
