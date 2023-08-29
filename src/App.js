import { useState, useEffect } from 'react'
import './App.css'

import Footer from './Components/Footer/Footer'
import Main from './Pages/Main/Main'
import News from './Pages/News/News'
import Introduction from './Pages/Introduction/Introduction'
import Signup from './Pages/Signup/Signup'
import Specification from './Pages/Specification/Specification'
import Traks from './Pages/Traks/Traks'
import Result from './Pages/Result/Result'
import Recruit from './Pages/Recruit/Recruit'
import Successcase from './Pages/Successcase/Successcase'
import Contributor from './Pages/Contributor/Contributor'
import Workgroupactivity from './Pages/Workgroupactivity/Workgroupactivity'
import Relatedactivity from './Pages/Relatedactivity/Relatedactivity'
import Member from './Pages/Member/Member'
import Training from './Pages/Training/Training'
import { Routes, Route, useLocation } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import NewNavBar from './Components/Navbar/NewNavBar'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  const location = useLocation()
  const [navBarHeight, setNavBarHeight] = useState(0)
  return (
    <>
      <NewNavBar setNavBarHeight={setNavBarHeight} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/News" element={<News />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Member" element={<Member />} />
        <Route path="/Specification" element={<Specification />} />
        <Route path="/Tracks" element={<Traks navBarHeight={navBarHeight} />} />
        <Route path="/Tracks/:id" element={<Traks navBarHeight={navBarHeight} />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Successcase" element={<Successcase />} />
        <Route path="/Recruit" element={<Recruit />} />
        <Route path="/Contributor" element={<Contributor />} />
        <Route path="/Workgroupactivity" element={<Workgroupactivity />} />
        <Route path="/Relatedactivity" element={<Relatedactivity />} />
        <Route path="/Training" element={<Training />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </>
  )
}

export default App
