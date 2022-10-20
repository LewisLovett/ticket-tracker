import { useState } from "react";
import Ticket from '../Ticket/Ticket.jsx';
const TicketContainer = (props) => {
    const {teamArry} = props;
    const [ticketListJSX, setTicketListJSX] = useState(
        teamArry.map((ticket) => (
            <Ticket ticketName = {ticket.name} ticketRole = {ticket.role}/>
        ))
    );

   

    const handleSearchInput = (event) =>{

        const ticketName = event.target.value;
        const lenOfInput = ticketName.length;
        const filteredArry = (teamArry.filter(ticket=> ticket.name.substring(0,lenOfInput) == ticketName.substring(0,lenOfInput)));
        setTicketListJSX(
            filteredArry.map((ticket) => (
                <Ticket ticketName = {ticket.name} ticketRole = {ticket.role}/>
            ))
        )
        
        
    }

    const ticketContainerJSX = (
        <>
        <input className='nameSearch' onInput={handleSearchInput}/>
        <div className="ticketContainer">
            {ticketListJSX}
        </div>
        </>
    )

    return (ticketContainerJSX);
}

export default TicketContainer;