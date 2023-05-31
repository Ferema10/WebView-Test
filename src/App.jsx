import "./App.css";

function App() {
  const sendMessageNative = () => {
    window.ReactNativeWebView.postMessage("Open Camera Native");
  };

  return (
    <>
      <h1>Webview + Native</h1>
      <div className="card">
        <button onClick={() => sendMessageNative()}>Abrir camara</button>
      </div>
    </>
  );
}

export default App;
