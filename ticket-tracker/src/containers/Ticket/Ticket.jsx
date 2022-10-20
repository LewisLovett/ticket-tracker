import "./Ticket.scss";
import Counter from "../../components/Counter/Counter.jsx"
import { useState } from "react";

const Ticket = (props) => {
    const {ticketName, ticketRole} = props;
    const [ticketCount, setTicketCount] = useState(0);

    const handleIncrement = () => {
        setTicketCount(ticketCount+1);
    }
    const handleDecrement = () => {
        setTicketCount(ticketCount-1);
    }
    const ticketJSX =  (
        <div className="ticket">
            <h2>{ticketName}</h2>
            <h2>{ticketRole}</h2>
            <Counter count={ticketCount} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>
        </div>
    );

    return(ticketJSX)
}

export default Ticket;
