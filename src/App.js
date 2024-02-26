import './App.css';
import Media from './components/MediaCard';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import SignUp from './components/SignUp';
import SignInSide from './components/SingInSide';
import Dashboard from './components/Dashboard';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
<>
<ResponsiveAppBar />
            <Routes>
                <Route path="/login" element={<SignInSide />}></Route>
                <Route path="/register" element={<SignUp/>}></Route>
                <Route path="/" element={<Media/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
</>
  );
}

export default App;
