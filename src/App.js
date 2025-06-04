import "./App.css";
import DictionaryForm from "./Dictionaryform";

function App() {
  return (
    <div className="App">
      <div className="title text-center">Dictionary</div>
      <DictionaryForm />
      <footer className="m-3 text-center">
        This dictionary app is created by Hikari. Access the code through{" "}
        <a href="https://github.com/cosylily/wise-lily.git">GitHub</a> and{" "}
        <a href="https://incredible-froyo-08762a.netlify.app/">Netfily</a>.
      </footer>
    </div>
  );
}

export default App;
