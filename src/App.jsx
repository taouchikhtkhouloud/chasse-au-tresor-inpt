import Home from "./page/home/Home";
import Login from "./page/login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import { AuthContextProvider} from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';

function App() {

  return (
    <div >
      <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<ProtectedRoute> <Home /></ProtectedRoute>} />
          </Route>
        </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;