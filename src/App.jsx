import { useEffect, useState } from 'react';
import './App.css';
import { Textarea } from './components/textarea/Textarea';
import Header from './components/header/Header';

function App() {
  const [mode, setMode] = useState(true);
  const htmlTag = document.getElementsByTagName('html')[0];

  useEffect(() => {
    // Function to detect user's preference from local storage
    const storedMode = localStorage.getItem("m");
    const preferredMode = storedMode === "true"; // Convert to a boolean

    // Apply the preferred mode from local storage
    setMode(preferredMode);

    // Add/remove the dark mode class based on the preferred mode
    if (preferredMode) {
      htmlTag.classList.remove('dark');
      htmlTag.classList.add('light');
    } else {
      htmlTag.classList.remove('light');
      htmlTag.classList.add('dark');
    }
  }, [mode]);


  const toggleMode = () => {
    setMode(prevMode => {
      // Update the state
      const newMode = !prevMode;
      // Apply the class to the HTML tag based on the new mode
      if (newMode) {
        htmlTag.classList.remove('dark');
        htmlTag.classList.add('light');
        localStorage.setItem("m", true);
      } else {
        htmlTag.classList.remove('light');
        htmlTag.classList.add('dark');
        localStorage.setItem("m", false);
      }
      // Return the new mode
      return newMode;
    });
  }

  return (
    <>
      <Header mode={mode} toggleMode={toggleMode} />
      <Textarea />
    </>
  );
}

export default App;
