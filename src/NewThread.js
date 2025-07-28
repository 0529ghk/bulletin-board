
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewThread () {
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            await fetch("https://railway.bulletinboard.techtrain.dev/threads" , {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({title}),
            });
            navigate("/");
        }
        catch (error) {
            console.error("作成エラー", error);
        }
    };
    return (
        <div className="App">
            <header>
                <h2>スレッド新規作成</h2>
            </header>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="タイトルを入力"
            />
            <button onClick={handleSubmit}>作成</button>
        </div>
    );
}

export default NewThread;