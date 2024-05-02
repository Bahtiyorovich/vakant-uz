import Login from "./components/auth/Login";
import Layout from "./components/layout/layout"

const App = () => {

  const user = true;

  return (
    <div>
      {user 
      ? <Layout/> : <Login/>}
    </div>
  )
 
}

export default App