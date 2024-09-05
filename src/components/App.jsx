import '../scss/App.scss';

function App() {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleKeyUp = (ev) => {
    console.log('keyup', ev.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' onKeyUp={handleKeyUp} />
    </form>
  );
}

export default App;
