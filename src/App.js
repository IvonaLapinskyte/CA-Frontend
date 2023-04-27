
import './App.css';
import MainPage from './compoments/common/mainPage'
import User from './compoments/common/user';


function App() {
 
  if(sessionStorage.getItem("user") == null){
    return(
      <div className="App">
        <MainPage></MainPage>
      </div>
    )
  }else{
    return(
      <div className="App">
        <User></User>
      </div>
    )
  }
}

export default App;
