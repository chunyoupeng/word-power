import  { useState } from 'react';
import axios from 'axios';
import Markdown from "react-markdown"
import Description  from './Description';
import Collapsible from './Collapsible';

const apiUrl = "http://172.17.0.1:3001";

function App() {
  const [word, setWord] = useState('');
  const [text, setText] = useState('');
  const [wordInfo, setWordInfo] = useState(null);
  const [unknownWords, setUnknownWords] = useState([]);

  function cleanWord(word) {
    return word.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();
  }
  const handleWordSubmit = async () => {
    try {
      if (word.trim() === '') {
        alert('Please enter a word to analyze');
      }else  {
        const lowerCaseWord = cleanWord(word)
        setWord(lowerCaseWord);
        console.log(lowerCaseWord)
        const response = await axios.post(`${apiUrl}/api/words`, { word: lowerCaseWord });
        setWordInfo(response.data);
        setWord('');
      }
    } catch (error) {
      console.error('Error fetching word info:', error);
    }
  };

  const handleTextSubmit = async () => {
    try {
      if (text.trim() === '') {
        alert('Please enter some text to analyze');
        return;
      }
      setWord(text.toLowerCase());
      const response = await axios.post(`${apiUrl}/api/text`, { text });
      setUnknownWords(response.data);
      setText('');
    } catch (error) {
      console.error('Error processing text:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
  <div className="mb-4">
    {/* <img src={bookImage} alt="Word Power Book" width={400}/> */}

    <Collapsible title="网站说明">
      <Description></Description>
    </Collapsible>
    {/* <h1 className='text-2xl m-5'>单词输入框</h1> */}
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={word}
      onChange={(e) => setWord(e.target.value)}
      placeholder="Enter a word"
    />
    <button
      className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={handleWordSubmit}
    >
      Submit Word
    </button>
  </div>
  {wordInfo && (
  <div className="p-6 mb-6 bg-white rounded-xl shadow-xl transition duration-300 ease-in-out hover:shadow-2xl">
    <div className="border-b border-gray-200 mb-4">
      <p className="font-bold text-2xl text-gray-800 mb-3">Word: {wordInfo.word}</p>
    </div>
    <div className="prose max-w-none">
      <Markdown>{wordInfo.meaning}</Markdown>
    </div>
    <div className="mt-4">
      <p className="text-gray-500 text-sm">Count: {wordInfo.count}</p>
    </div>
  </div>
)}
  {/* <div className="mb-4">
    <textarea
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Paste your text"
    />
    <button
      className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={handleTextSubmit}
    >
      Analyze Text
    </button>
  </div> */}
{
  unknownWords.length > 0 && (
    <div className="max-w-xl mx-auto mt-5">
      <p className="font-bold text-lg text-gray-800 mb-3">Length: {unknownWords.length}</p>
      <ul className="divide-y divide-gray-200">
        {unknownWords.map((info, index) => (
          <li key={index} className="p-4 hover:bg-gray-50 transition duration-150 ease-in-out">
            <span className="font-bold text-indigo-600">{info.word}</span>
            <span className="block text-xs font-medium text-gray-500 mt-2">Count: {info.count}</span>
            <span className="block text-sm text-gray-700 mt-1"><Markdown>{info.meaning}</Markdown></span>
          </li>
        ))}
      </ul>
    </div>
  )
}
</div>

  );
}

export default App;