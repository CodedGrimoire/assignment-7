import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
 
  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
      });
  }, []);

 const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  

function progressCountIncrease() {
    const newCount=inProgressCount + 1;
    setInProgressCount(newCount);
  }
  function resolvedIncrease() {
    const newCount=resolvedCount  + 1;
     setResolvedCount(newCount);
  }
function progressCountDecrease() {
    const newCount=inProgressCount - 1;
    setInProgressCount(newCount);
  }
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const moveToInProgress = (ticket) => {
    if (!inProgressTasks.find((t) => t.id === ticket.id)) {
      setInProgressTasks([...inProgressTasks, ticket]);
      progressCountIncrease();
      toast.info(`"${ticket.title}" is being processed!`);
    }
  };
  

  
  const completeTask = (ticket) => {
    setResolvedTasks([...resolvedTasks, ticket]);
   

    setInProgressTasks(inProgressTasks.filter((t) => t.id !== ticket.id));
    resolvedIncrease();
     toast.info(`"${ticket.title}" is resolved!`);
    progressCountDecrease();
    removeFromCustomerService(ticket);
  };

  function removeFromCustomerService(ticket) {
    setTickets(tickets.filter((t) => t.id !== ticket.id));
  }

  return (
    <div className="content">
      
      <div className="cards">
        <div className="purple-card">
          <img className="left-side"  src="/vector1.png" alt="" />
          <div className="writings">
          <h4>In-Progress</h4>
          <h1>{inProgressCount}</h1>
          </div>
           <img className="Right-side" src="/vector1.png" alt="" />
        </div>
        <div className="green-card">
           <img className="left-side"  src="/vector1.png" alt="" />
            <div className="writings">
          <h4>Resolved</h4>
          <h1>{resolvedCount}</h1>
          </div>
            <img className="Right-side" src="/vector1.png" alt="" />
        </div>
      </div>
<h1 className="customer-ticket-text">Customer Tickets</h1>
      <div className="main-section">
       
        <div className="tickets">
           
          
          {tickets.length === 0 ? (
    <p>No tickets available</p>
  ) :tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="ticket-card"
              onClick={() => moveToInProgress(ticket)}
            >
              <div className="ticket-header">
                <h4>{ticket.title}</h4>
                <span className={`status ${ticket.status.toLowerCase()}`}>

                  {ticket.status}
                </span>
              </div>


              <p>{ticket.description}</p>
              <div className="ticket-footer">
                <span className={`priority ${ticket.priority.toLowerCase()}`}>

                  {ticket.priority}
                </span>
                <span>#{ticket.id}</span>
                <span>{ticket.assignee}</span>
                <span>{ticket.date}</span>
              </div>
            </div>
          ))}
        </div>

        
        <div className="ticket-status">
          <h3>Task Status</h3>
          <div className="task-buttons">
            {inProgressTasks.length === 0 ? (
              <p>Select a ticket to add to Task Status</p>
            ) : (
              inProgressTasks.map((t) => (
                <div key={t.id} className="task-row">
                  <span>{t.title}</span>
                  <button
                    className="complete-btn"
                    onClick={() => completeTask(t)}
                  >
                    Complete
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="resolved-status">
            <h4>Resolved Task</h4>
            {resolvedTasks.length === 0 ? (
              <p>No resolved tasks yet.</p>
            ) : (
              resolvedTasks.map((t) => (
                <div key={t.id} className="resolved-card">
                  {t.title}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
       <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </div>
  );
};

export default Dashboard;
