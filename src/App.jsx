import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ChatbotHome from './pages/chatbot/ChatbotHome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Navigate to="/chatbot" />} />
          <Route path="/" element={<Navigate to="/chatbot" />} />
          <Route path="/chatbot" element={<ChatbotHome />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App