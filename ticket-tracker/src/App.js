import logo from './logo.svg';
import './App.scss';
import TicketContainer from './containers/TicketContainer/TicketContainer.jsx'
import team from './data/team.js';

function App() {
 


  return (
    <div className="App">
      <h1>Ticket Tracker</h1>
      <TicketContainer teamArry = {team} />
    </div>
  );
}

export default App;
