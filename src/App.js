import './App.css';
import CreateWallet from './components/CreateWallet';
import RecoverWallet from './components/RecoverWallet';
import InfoWallet from './components/InfoWallet';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CreateWallet />}></Route>
          <Route path='/recover' element={<RecoverWallet />}></Route>
          <Route path='/info' element={<InfoWallet />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
