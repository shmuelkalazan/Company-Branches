import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/store'
import Home from './Components/Home';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
