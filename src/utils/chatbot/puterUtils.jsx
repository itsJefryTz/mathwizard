export const chatWithPuter = async (question) => {
  try {
    const resp = await window.puter.ai.chat(question, { model: 'claude', stream: true });
    let fullResponse = '';
    for await (const part of resp) {
      fullResponse += part?.text?.replaceAll('\n', '<br>');
    }
    return fullResponse;
  } catch (error) {
    console.error('Error during chat:', error);
    return 'Hubo un error al comunicarse con Puter.';
  }
}; 