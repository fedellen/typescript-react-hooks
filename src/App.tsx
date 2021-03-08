import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useKeyHandler } from './hooks/useKeyHandler';

function App() {
  const [hiddenLogo, setHiddenLogo] = useState(false);
  const [hiddenLink, setHiddenLink] = useState(false);

  useKeyHandler([
    { keyValues: ['e', 'Enter'], callback: () => setHiddenLogo(!hiddenLogo) },
    { keyValues: ['z', 'x'], callback: () => setHiddenLink(!hiddenLink) }
  ]);

  return (
    <div className='App'>
      <header className='App-header'>
        {!hiddenLogo && <img src={logo} className='App-logo' alt='logo' />}
        <p>Press "E" or "Enter" to hide/show logo.</p>
        <p>Press "Z" or "X" to hide/show react.js link</p>
        {!hiddenLink && (
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        )}
      </header>
    </div>
  );
}

export default App;
