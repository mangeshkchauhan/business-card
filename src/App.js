import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="parent">
      <div className="business-card">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
