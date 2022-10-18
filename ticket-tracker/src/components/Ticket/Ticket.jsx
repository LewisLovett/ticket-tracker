import "./Ticket.scss";
import Counter from "../Counter/Counter";

const Ticket = (props) => {

    const ticketListJSX = props.teamTickets.map((ticket) => (
        <div className="ticket">
            <h2>{ticket.name}</h2>
            <h2>{ticket.role}</h2>
            <Counter/>
        </div>
    ));

    return(<div className="ticketContainer">{ticketListJSX}</div>)
}

export default Ticket;
