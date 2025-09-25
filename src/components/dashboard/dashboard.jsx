import React, { useEffect, useState } from "react";
import "./dashboard.css";

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
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

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
  
  const moveToInProgress = (ticket) => {
    if (!inProgressTasks.find((t) => t.id === ticket.id)) {
      setInProgressTasks([...inProgressTasks, ticket]);
      progressCountIncrease();
    }
  };
  

  
  const completeTask = (ticket) => {
    setResolvedTasks([...resolvedTasks, ticket]);
   

    setInProgressTasks(inProgressTasks.filter((t) => t.id !== ticket.id));
    resolvedIncrease();
    progressCountDecrease();
  };

  return (
    <div className="content">
      
      <div className="cards">
        <div className="purple-card">
          <h4>In-Progress</h4>
          <h1>{inProgressCount}</h1>
        </div>
        <div className="green-card">
          <h4>Resolved</h4>
          <h1>{resolvedCount}</h1>
        </div>
      </div>

      <div className="main-section">
        {/* Tickets Grid */}
        <div className="tickets">
          {tickets.map((ticket) => (
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

        {/* Sidebar */}
        <div className="ticket-status">
          <h3>Task Status</h3>
          <div className="task-buttons">
            {inProgressTasks.length === 0 ? (
              <p>No task in progress</p>
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
    </div>
  );
};

export default Dashboard;
