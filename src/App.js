import './App.css';
import React, { useState } from 'react';
import Home from './components/HomeScreen';
import { Routes, Route, useNavigate } from 'react-router-dom';
import SearchScreen from './components/SearchScreen';
import { searchData } from './api/AnySearch';
import VoiceSearch from './components/VoiceSearch';
import { recognition } from './api/voiceRecognition';
function App(props) {
  const Navigation = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [anyData, setAnyData] = useState({});
  const [voiceSearch, setVoiceSearch] = useState(false);
  const setSearch = async (term) => {
    setSearchTerm(term);
    const data = await searchData(term);
    setAnyData(data);
    Navigation("/search");
  }
  const openVoiceSearch = () => {
    setVoiceSearch(true);
    recognition.start();
    recognition.onresult = (event) => {
      const { transcript } = event.results[0][0];
      
      if(transcript !== null || transcript !=="" || transcript !==" "){
        setVoiceSearch(false);
        setSearch(transcript);
      }
      else{
        setVoiceSearch(false);
        alert("please try again for voice search");
      }
    }
  }
  const closeVoiceSearch = () => {
    setVoiceSearch(false);
    recognition.stop();
  }
  return (
    <div className="App">
      {
        voiceSearch ? (<VoiceSearch closeVoiceSearch={closeVoiceSearch} />) : (null)
      }
      <Routes>
        <Route exact path='/' element={<Home setSearch={setSearch} openVoiceSearch={openVoiceSearch} />} />
        {searchTerm !== "" ? (<Route exact path='/search' element={<SearchScreen setSearch={setSearch} openVoiceSearch={openVoiceSearch} searchTerm={searchTerm} anyData={anyData} />} />) : null}
        Navigation('/');
      </Routes>
    </div>
  );
}

export default App;
