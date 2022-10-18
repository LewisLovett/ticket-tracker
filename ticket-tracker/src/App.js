import logo from './logo.svg';
import './App.scss';
import Ticket from './components/Ticket/Ticket.jsx';
import team from './data/team.js';

function App() {
  return (
    <div className="App">
      <h1>Ticket Tracker</h1>
        <Ticket teamTickets={team}/>
    </div>
  );
}

export default App;
