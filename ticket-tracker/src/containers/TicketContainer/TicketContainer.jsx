import "./TicketContainer.scss";
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

    // const roleDropdownJSX = (
    //     teamArry.map((ticket) => (
    //         <option value={ticket.role}>{ticket.role}</option>
    //     ))
    // )

    
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
        <select className="roleDropdown" name="roles" onChange={handleRoleChange}>
            {/* {roleDropdownJSX} */}
            <option value="Junior Software Developer">Junior Software Developer</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Senior Software Developer">Senior Software Developer</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Tester">Tester</option>
            <option value="Hard Man">HardMan</option>
        </select>
        <div className="ticketContainer">
            {ticketListJSX}
        </div>
        </>
    )

    return (ticketContainerJSX);
}

export default TicketContainer;