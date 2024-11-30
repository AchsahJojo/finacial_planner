
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const GoalSettingForm = ({ addGoal }) => {
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    addGoal({ goal, deadline });
    setGoal('');
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="mb-3">
        Set Goal
      </Button>
        <br />
        <br />
      <Button variant="secondary" onClick={handleGoBack}>
        Go Back
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Set Your Goal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="goal" className="form-label">Goal</label>
              <input
                type="text"
                id="goal"
                className="form-control"
                placeholder="Enter your goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="deadline" className="form-label">Deadline</label>
              <input
                type="date"
                id="deadline"
                className="form-control"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
            <Button variant="primary" type="submit" className="w-100">
              Set Goal
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GoalSettingForm;