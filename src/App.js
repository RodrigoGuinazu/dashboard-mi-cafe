import SideBar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Body from './components/Body'
import './app.css'
import ProductsTable from './components/ProductsTable'

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid">
              <Body />
              <ProductsTable />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
