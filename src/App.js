import './App.css';
import Headers from './containers/Headers';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Headers/>
      <Switch>
        <Route exact path="/" component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route> 404 Not Found ! </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
