import "./App.css";
import AuthorComponent from "./AuthorComponent";
import InfoComponent from "./InfoComponent";
import PhotoComponent from "./PhotoComponent";

function App() {
  return (
    <div className="main-div">
      <PhotoComponent />
      <InfoComponent />
      <AuthorComponent />
    </div>
  );
}

export default App;
