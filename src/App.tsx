import './App.css';
import CharactersWrapper from './components/CharactersWrapper';

function App() {
  return (
    <div className="flex justify-center items-top h-full">
      <div className="flex flex-wrap gap-4">
        <CharactersWrapper />
      </div>
    </div>
  );
}

export default App;
