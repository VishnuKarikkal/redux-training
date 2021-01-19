import  "./css/style.css";
//useSelector for accessing the GLOBAL States 
import {useSelector,useDispatch} from 'react-redux';
import { signin,increment,decrement } from "./actions";
import Child from "./Child";

function App() {
  //accessing the counterReducer State : 'counterReducer' as declared in the 'combineReducers'
  const counter = useSelector( state => state.counterReducer);
  //'loggedReducer'
  const logged = useSelector( state => state.loggedReducer)

  //dispatching
  const dispatcher = useDispatch();

  return (
    <div className="App">
      <h1>APP Compo <span>{counter}</span></h1>
      <button onClick={()=>dispatcher(signin())}>{logged ?"signOut" :"sign in"}</button>
      {logged ? <p>Logged</p> : <p>SignIn</p>}

      <button onClick={()=>dispatcher(increment())}>Counter +</button>

      <button onClick={()=>dispatcher(decrement())}>Counter -</button>

      <Child />
    </div>
  );
}

export default App;
