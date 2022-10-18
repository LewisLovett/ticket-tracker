import "./Ticket.scss";
import Counter from "../Counter/Counter";

const Ticket = (props) => {

    const ticketListJSX = props.teamTickets.map((ticket) => (
        <>
        <h1>{ticket.name}</h1>
        <h2>{ticket.role}</h2>
        <Counter/>
    </>
    ));

    return(<>
    {ticketListJSX}
    </>)
}

export default Ticket;
