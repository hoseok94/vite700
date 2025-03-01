import { useState } from 'react'
import './App.css'
import LeftSection from './sections/Leftsection'
import RightSection from './sections/Rightsection'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
          <LeftSection />
          <RightSection />
      </div>
    )
  }
export default App;