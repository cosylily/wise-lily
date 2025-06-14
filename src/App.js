import "./App.css";
import DictionaryForm from "./Dictionaryform";

function App() {
  return (
    <div className="App p-2 container">
      <div className="title">
        <h1 className="text-center m-3 p-2">Dictionary</h1>
        <h3 className="m-3 p-2">Understand English words without any hassle</h3>
      </div>
      <div className="main-body p-2 rounded">
        <DictionaryForm />
        <footer className="m-3 text-center">
          This dictionary app is created by Hikari. Access the code through{" "}
          <a href="https://github.com/cosylily/wise-lily.git">GitHub</a> and{" "}
          <a href="https://incredible-froyo-08762a.netlify.app/">Netfily</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
