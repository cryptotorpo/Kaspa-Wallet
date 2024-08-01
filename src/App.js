import './App.css';
import CreateWallet from './components/CreateWallet';
import RecoverWallet from './components/RecoverWallet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useState, createContext, useContext } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [network, setNetwork] = useState("Bitcoin");  
  return (
    <MyContext.Provider value={{ network, setNetwork}}>
      {children}
    </MyContext.Provider>
  );
};

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CreateWallet />}></Route>
          <Route path='/recover' element={<RecoverWallet />}></Route>
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
