import './App.css';
import routes from "./routes"
import {useRoutes} from "react-router-dom"
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';

export default function App() {

  let router = useRoutes(routes)

  return (
    <>
      <TopBar/>
      <div className='container'>
        <SideBar/>
        {router}
      </div>
    </>
  );
}