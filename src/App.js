
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=0")
      .then( Response => Response.json())
      .then(data => {
      console.log("created_at check:", data.map(t => t.created_at));
      setThreads(data);
    })
      .catch(error => console.error("エラー", error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>スレッド一覧</h1>
      </header>
        <ul>
          {threads.map((thread) => (
            <li key={thread.id}>
              {thread.title} 
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;