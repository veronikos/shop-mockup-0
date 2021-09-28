import './App.css';
import Header from './components/Header';
import ShopFrontPage from './containers/ShopFrontPage';


function App() {
  return (
    <div className="App">
      <Header title={"My cool keyboard shop -1"}></Header>
      <ShopFrontPage/>
    </div>
  );
}

export default App;
