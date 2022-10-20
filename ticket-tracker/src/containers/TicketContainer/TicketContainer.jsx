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
        const filteredArry = (teamArry.filter(ticket=> ticket.name.substring(0,lenOfInput).toLowerCase() == ticketName.substring(0,lenOfInput).toLowerCase()));
        setTicketListJSX(
            filteredArry.map((ticket) => (
                <Ticket ticketName = {ticket.name} ticketRole = {ticket.role}/>
            ))
        )
        
        
    }

    const roleDropdownJSX = (
        teamArry.map((ticket) => (
            <option value={ticket.role}>{ticket.role}</option>
        ))
    )

    
    const handleRoleChange = (event) =>{

            const ticketRole = event.target.value;
            const filteredArry = (teamArry.filter(ticket=> ticket.role == ticketRole));
            setTicketListJSX(
                filteredArry.map((ticket) => (
                    <Ticket ticketName = {ticket.name} ticketRole = {ticket.role}/>
                ))
            )
            
            
    }

    const ticketContainerJSX = (
        <>
        <input className='nameSearch' onInput={handleSearchInput}/>
        <select name="roles" onChange={handleRoleChange}>
            {roleDropdownJSX}
        </select>
        <div className="ticketContainer">
            {ticketListJSX}
        </div>
        </>
    )

    return (ticketContainerJSX);
}

export default TicketContainer;