import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRoute from './routes/PrivateRoute';
import Orders from './Components/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
          path:'/orders',
          element: 
            <PrivateRoute>
              <Orders></Orders>
            </PrivateRoute>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
