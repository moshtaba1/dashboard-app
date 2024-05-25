import './App.css';
import routes from "./routes"
import {useRoutes} from "react-router-dom"
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';

export default function App() {

  let router = useRoutes(routes)

  return (
    <>
      <div className="small-screen">
        <h1>Please Enter with Desktop...</h1>
      </div>
      <div className="big-screen">
        <TopBar />
        <div className="container">
          <SideBar />
          {router}
        </div>
      </div>
    </>
  );
}
