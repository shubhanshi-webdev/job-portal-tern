import './App.css';
import Body from './Components/Body';
import {createBrowserRouter, RouterProvider}  from 'react-router-dom';
import JobDescription from './Components/JobDescription';
import Thankyou from './Components/Thankyou';
import Error from './Components/Error';

function App() {
  return (
      <div className="App">
      <RouterProvider router={routesList} />
      </div>
  );
}

const routesList = createBrowserRouter(
  [
    {
      path: '/',
      element: <Body />,
      errorElement: <Error />
    },
    {
      path: '/job-description/:id',
      element: <JobDescription />
    },
    {
      path: '/thankyou',
      element: <Thankyou />
    },
  ]
)
export default App;
