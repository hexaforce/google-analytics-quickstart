import logo from './logo.svg';
import './App.css';
import { GET, POST } from './client'

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

  const apiUser = async (e) => {
    const response = await GET('/api/actor')
    if (response.ok) {
      const body = await response.json();
      console.log(body)
    }
  }

  const apiGet = async (e) => {
    const response = await GET('/api/get')
    if (response.ok) {
      const body = await response.json();
      console.log(body)
    }
  }

  const apiPost = async (e) => {
    const response = await POST('/api/post', { aaa: 'aaa', bbb: 100, ccc: true })
    if (response.ok) {
      const body = await response.json();
      console.log(body)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={apiUser}>apiUser</button>
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
        <button onClick={apiGet}>apiGet</button>
        <button onClick={apiPost}>apiPost</button>
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