import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ChatbotPage from './pages/chatbot/ChatbotPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Navigate to="/chatbot" />} />
          <Route path="/" element={<Navigate to="/chatbot" />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App