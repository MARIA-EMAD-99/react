
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import Home from "./pages/Home";
  import Layout from './component/Layout';

  function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      )
    );
    return <RouterProvider router={router} />;
  }
  
  export default App;