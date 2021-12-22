import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary />
      <footer class="position-absolute bottom--20 start-2">
        Coded by Alex Perez-Davies. Code on{" "}
        <a target="/" href="https://github.com/AlexPD93/React-Weather-App">
          Github.
        </a>
      </footer>
    </div>
  );
}

export default App;
