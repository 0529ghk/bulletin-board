import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function ThreadList() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=0")
      .then( Res => Res.json())
      .then(data => setThreads(data))
      .catch(error => console.error("エラー", error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>スレッド一覧</h1>
        <Link to = "/threads/new">
          <button>+新規スレッド作成</button>
        </Link>
      </header>
        <ul>
          {threads.map((thread) => (
            <li key={thread.id}>{thread.title}</li>
          ))}
        </ul>
    </div>
  );
}

export default ThreadList;