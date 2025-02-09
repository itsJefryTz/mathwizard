import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ChatbotPage from './pages/chatbot/ChatbotPage';

function App() {
  return (
    <>
    <main className='bg-gray-900'>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Navigate to="/chatbot" />} />
          <Route path="/" element={<Navigate to="/chatbot" />} />
          <Route path="/chatbot" element={<div className="container mx-auto p-10 max-w-md"><ChatbotPage /></div>} />
        </Routes>
      </BrowserRouter>
    </main>
    </>
  )
}

export default App