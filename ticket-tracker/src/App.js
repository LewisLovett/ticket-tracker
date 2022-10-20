import logo from './logo.svg';
import './App.scss';
import Ticket from './containers/Ticket/Ticket.jsx';
import team from './data/team.js';

function App() {
  const ticketListJSX = team.map((ticket) => (
    
    <Ticket ticketName = {ticket.name} ticketRole = {ticket.role}/>
));


  return (
    <div className="App">
      <h1>Ticket Tracker</h1>
      <div className="ticketContainer">
      {ticketListJSX}
      </div>
    </div>
  );
}

export default App;
