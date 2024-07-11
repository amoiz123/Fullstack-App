import './App.css';
import React, { useState } from 'react';

export default function App() {
  
  // updates the state of the text to what was user inputed (TextBox)
  const [text, setText] = useState('');
  
  // updates the state of the file from null to what was user Inputed (FileI)
  const [selectedFile, setSelectedFile] = useState(null);

  // shows the text in the text box (what u are typing) (TextBox)
  const handleChange = (event) => {
    setText(event.target.value);
  };


  // logs the file to the console and updates the state with the file selected (FileI)
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
 
  // 
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedFile) {
      console.log('No file selected');
    } else {
      console.log('Selected file:', selectedFile);
    }

    console.log('Current text:', text);

    // Clear form inputs after submission (optional)
    setText('');
    setSelectedFile(null);
  };

  /* ln30, ln68 is the text desplayed before the textbox and file input
   form ln28 ln66 sets the text box as a user changeable interaction
   on change uses the function handleChange to do something when the value in the textbox changes */
  
   return (
    <div className="app">
      <div className="TextBox">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Text Input:
              <input
                type="text"
                value={text}
                onChange={handleChange}
              />
            </label>
          </div>
        
          <div>
            <label>
              Upload File:
              <input
                type="file"
                onChange={handleFileChange}
              />
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
