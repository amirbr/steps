import './App.css';
import { Comments } from "./containers/Comments";
import { AddComment } from "./components/AddComment";

function App() {
  return (
    <div className="App">
      <h2 className='title'>Steps Challenge</h2>
      <AddComment />
      <Comments />
    </div>
  );
}

export default App;
