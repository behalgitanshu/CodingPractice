import './App.css';
import Header from './components/Header';
import React from 'react';
import { getIssue } from './mocks/data';

function App() {

  const [title, setTitle] = React.useState('');
  const [status, setStatus] = React.useState(undefined);

  React.useEffect(
    () => {
      const fetchData = async () => {
        const data = await getIssue();
        setTitle(data.title);
        setStatus(data.status);
      }
      fetchData();
    }, []
  );

  if(!status) return "Fetching Data";

  return (
    <div className="App">
      <Header title={title} status={status} />
      <main>
        <p>This is the main content of the app.</p>
      </main>
    </div>
  );
}

export default App;
