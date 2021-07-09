import React,{ useState, useEffect }  from 'react';
import './App.css';
import { Terminal } from './Terminal';

function App() {
  const [url, setUrl] = useState("");
  const [addons, setAddons] = useState<any>([]);
  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    // let ws = new WebSocket(url)
    // const attachAddon = new AttachAddon(ws);
    // console.log(url);
    // setAddons([attachAddon])
  }

 

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Websocket:
          <input type="text"  value={url} name="url" onChange={(e) => setUrl(e.target.value)} />
        </label>
        <button>Connect</button>
        <Terminal />
      </form>
    </div>
  );
}

export default App;
