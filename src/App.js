import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [mode, setMode] = useState('light')
  const [progress, setProgress] = useState(10)

  const setProgress1 = (progress) => {
    return setProgress(progress)
  }
  const toggle = () => {
    if (mode === 'light') {
      setMode('dark')
      document.querySelector('body').style.backgroundColor = 'grey'
    } else {
      setMode('light')
      document.querySelector('body').style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggle={toggle} />
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress1(0)}
        />

        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress1}
                key="general"
                mode={mode}
                category="general"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress1}
                key="business"
                mode={mode}
                category="business"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress1}
                key="health"
                mode={mode}
                category="health"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress1}
                key="sports"
                mode={mode}
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress1}
                key="entertainment"
                mode={mode}
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress1}
                key="science"
                mode={mode}
                category="science"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  )
}
export default App
