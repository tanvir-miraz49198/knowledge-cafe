import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Main></Main>
    <Blog></Blog>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
