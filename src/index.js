import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

/* Example:01
function Hello({library, message, number}){
    return(
        <div>
            <h1>Welcome to {library}</h1>
            <p>{message}</p>
            <p>{number} Props total</p>
        </div>
    )

}*/
const lakeList = [
    "Lake Huron",
    "Lake Ontario",
    "Professor's Lake"
]
/*function Lake(name){
    return(
        <h1>{name}</h1>
    )
}*/
function App(lakes){
    return (
       /* <div>
            <Lake name="Lake Huron" />
            <Lake name="Lake Ontario" />
            <Lake name="Professor Lake" />
        </div>*/
        <ul>
            {lakes.map(lake =>(<li>{lake}</li>))}
        </ul>
    );
}
ReactDOM.render(
  /*Example:01
  <Hello
      library= "React"
      message="add dynamic data"
      number={3}
      />,*/
    <App lakes={lakeList}/>,
  document.getElementById('root')
);

serviceWorker.unregister();
