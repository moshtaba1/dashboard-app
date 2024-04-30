import Home from "./pages/Home/Home"
import UserList from "./pages/User/UserList"
import Products from "./pages/Products/Products"


let routes = [
    {path:'/' , element:<Home/>},
    {path:'/users' , element:<UserList/>},
    {path:'/products' , element:<Products/>},
]
 
export default routes