import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import SignUp from "./pages/signUp"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import './index.css'; // Correct import path if App.css is in the same directory as App.jsx

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home/> } />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App