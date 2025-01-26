import Header from './header.jsx'
import Toby from './pages/Toby.jsx'
import Lucy from './pages/Lucy.jsx'
import Home from './pages/Home.jsx'
import Siblings  from './pages/Siblings.jsx'

function App() {
  let component
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break 
    case '/Toby':
      component = <Toby />
      break 
    case '/Lucy':
      component = <Lucy />
      break
    case '/Siblings':
      component = <Siblings />
      break
  }

  return (
    <>
    <Header/> 
    {component}
    </>
    
  )
}

export default App
