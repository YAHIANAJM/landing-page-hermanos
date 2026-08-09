import { Route, Routes } from 'react-router-dom'
import Landing from './Landing'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing locale="fr" />} />
      <Route path="/ar" element={<Landing locale="ar" />} />
    </Routes>
  )
}
