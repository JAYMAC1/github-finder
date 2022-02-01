// react components
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'

// context and hooks
import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alret/AlertContext'

//  Components and Pages
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import User from './components/users/User'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <BrowserRouter>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element0={<NotFound />} />
                <Route path='/*' element={<NotFound />} />{' '}
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
