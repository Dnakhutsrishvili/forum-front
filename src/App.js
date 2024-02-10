import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import SignUp from './components/SignUp';
import SignInSide from './components/SingInSide';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
<>
<ResponsiveAppBar />
            <Routes>
                <Route path="/login" element={<SignInSide />}></Route>
                <Route path="/register" element={<SignUp/>}></Route>
            </Routes>
</>
  );
}

export default App;
