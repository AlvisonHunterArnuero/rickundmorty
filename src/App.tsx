import './App.css';
import Characters from './components/Characters';

function App() {
  return (
    <div className="ml-0 pl-0 w-screen h-screen container bg-black">
      <div className="flex flex-wrap gap-4 mx-0.5">
        <Characters />
      </div>
    </div>
  );
}

export default App;
