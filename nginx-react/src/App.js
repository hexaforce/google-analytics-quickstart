import logo from './logo.svg';
import './App.css';
import { GET } from './client'

const App = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await GET('/api/analytics-data/flask-health-check')
    if (response.ok) {
      const body = await response.json();
      console.log(body)
    }
    console.log('You clicked submit.');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>

    </div>
  );
}
export default App;