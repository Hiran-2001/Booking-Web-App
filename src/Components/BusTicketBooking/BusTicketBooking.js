import React from 'react'
import './BusTicketBooking.css'
function BusTicketBooking() {
  return (
    <div className='bus-ticket-div'>
      <div className="bus-ticket-container">
      <h5 className="bus-container-title">book Bus ticket</h5>
       
        <div className="place-selection">

          <h6>place</h6>
        </div>
        <div className="date-selection">
          
          <h6>date</h6>
        </div>
        
      </div>
    </div>
  )
}

export default BusTicketBooking