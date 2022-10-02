import './App.css';
import Navbar from './Navbar';
import CreateNote from './CreateNote';

import { useState } from 'react';
import View_Note from './View_Note';
import Footer from './Footer';
function App() {
  const [addItem, setAddItem] = useState([]);
  const save = (lists) => {
    console.log(lists);
    setAddItem((p) => {
      return [...p, lists];
    })
    console.log(addItem);
  }
  function deleteNote(key) {
    setAddItem((prv) => prv.filter((value, index) => key !== index))
  }

  return (
    <div className="App">
      <Navbar />
      <CreateNote save={save} />
      <View_Note />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
