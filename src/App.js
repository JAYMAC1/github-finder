// react components
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'

// context and hooks
import { GithubProvider } from './context/github/GithubContext'

import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
function App() {
  return (
    <GithubProvider>
      <BrowserRouter>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element0={<NotFound />} />
              <Route path='/*' element={<NotFound />} />{' '}
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </GithubProvider>
  )
}

export default App
