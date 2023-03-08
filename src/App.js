import "./App.css";
import Container from "./components/container";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <Container />
    </WeatherProvider>
  );
}

export default App;
