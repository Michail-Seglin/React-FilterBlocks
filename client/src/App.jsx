import { useState } from 'react'
import JobPage from './page/JobPage/JobPage'
import { Route, Routes } from 'react-router-dom'
import VacancyPage from './page/VacancyPage/VacancyPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path={'/'} element={<JobPage />} />
        <Route path={'/vacancy/:id'} element={<VacancyPage />} />
      </Routes>
    </>
  )
}

export default App
