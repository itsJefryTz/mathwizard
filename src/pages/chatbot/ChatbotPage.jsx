import React, { useState, useRef } from 'react';
import { chatWithPuter } from '../../utils/chatbot/puterUtils';
import { Toaster, toast } from 'react-hot-toast';
// import 'tailwindcss/tailwind.css'; // Importar Tailwind CSS

function ChatbotPage() {
  const [response, setResponse] = useState('');
  const questionInputRef = useRef(null);
  const responseTextareaRef = useRef(null); // Crear una referencia para el textarea

  const handleQuestionSubmit = async () => {
    const question = questionInputRef.current.value.trim();
    if (!question) {
      return;
    }

    toast.loading('Procesando tu pregunta...');

    try {
      const answer = await chatWithPuter(question);
      setResponse(answer);
      questionInputRef.current.value = '';
      responseTextareaRef.current.value = answer; // Actualizar el valor del textarea con la respuesta
      toast.dismiss(); // Cerrar la notificación de carga
      toast.success('¡Respuesta recibida!');
    } catch (error) {
      toast.dismiss(); // Cerrar la notificación de carga
      toast.error('Hubo un error al obtener la respuesta.');
    }
  };

  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <Toaster /> {/* Este componente muestra las notificaciones */}
      <p className='text-gray-500 text-sm mt-3 text-center'>Pruébalo gratis en: https://mathwizard-zeta.vercel.app/</p>
      <div className='w-200 bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-4xl min-h-[500px]'>
        <h1 className='text-3xl font-bold text-center'>MathWizard - Chatbot Simple</h1>
        <p className='text-gray-500 text-sm mt-3 text-center mb-4'><b>MathWizard</b> es un innovador chatbot diseñado para responder preguntas matemáticas de manera eficiente y amigable. Utilizando la inteligencia artificial y tecnologías avanzadas como Puter.js, MathWizard es capaz de procesar consultas matemáticas complejas y ofrecer respuestas claras y detalladas. Además, MathWizard también puede ayudarte con cualquier otra pregunta no relacionada con las matemáticas, convirtiéndose en una herramienta versátil y útil para tus tareas diarias.</p>

        <div className="relative mb-6">
          <input
            id="questionInput"
            ref={questionInputRef}
            type="text"
            className="block w-full border-gray-600 rounded-md bg-gray-700 text-white py-2 pl-3 pr-10 ring-1 ring-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Escribe tu pregunta aquí"
          />
          <button
            onClick={handleQuestionSubmit}
            className="absolute inset-y-0 right-0 flex items-center bg-indigo-500 hover:bg-indigo-600 text-white px-4 rounded-r-md"
          >
            <i className="bi bi-send"></i>
          </button>
        </div>

        <textarea
          ref={responseTextareaRef}
          className='w-full bg-gray-700 text-white p-3 rounded-md'
          placeholder="La respuesta aparecerá aquí..."
          rows="10"
          readOnly
        />
        <div className="flex justify-between items-center">
          <a href='https://github.com/itsJefryTz/' target='_blank' className='text-gray-500 text-sm mt-3'>Jefry Urdaneta</a>
          <p className='text-gray-500 text-sm mt-3'>Developed with the <i className="text-red-600 bi bi-heart-fill"></i></p>
        </div>
      </div>
      <div className='text-center text-gray-500 mt-4'>
        <a href="https://github.com/itsJefryTz/mathwizard" target='_blank' rel='noopener noreferrer'>
          <i className="bi bi-github text-2xl"></i>
        </a>
      </div>
    </div>
    </>
  );
}

export default ChatbotPage;