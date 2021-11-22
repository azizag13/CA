import React from "react";
import "./App.css";
import Form from './components/form/Form'
import {store} from './redux/store'
import {Provider} from 'react-redux'

const App = () => {
  return (
      <Provider store={store}>
      <React.Fragment>
         <Form/>
      </React.Fragment>
      </Provider>
   
  );
};

export default App;
