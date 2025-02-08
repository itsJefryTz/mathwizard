import React, { useState } from 'react';
import { chatWithPuter } from '../../utils/chatbot/puterUtils';

function ChatbotPage() {
  const [response, setResponse] = useState('');

  const handleQuestionSubmit = async () => {
    const question = document.getElementById('questionInput').value;
    const answer = await chatWithPuter(question);
    setResponse(answer);
  };

  return (
    <div>
      <h1>Chatbot con Puter.js</h1>
      <input id="questionInput" type="text" placeholder="Escribe tu pregunta aquí" />
      <button onClick={handleQuestionSubmit}>Enviar</button>
      <div id="response" dangerouslySetInnerHTML={{ __html: response }}></div>
    </div>
  );
}

export default ChatbotPage;