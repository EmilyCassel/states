import React, { useEffect, useState } from "react"; 
import { Link } from 'react-router-dom';
import CreateAccount from "../components/CreateAccount";
import Login from "../components/Login";

const Door = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); 
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser')) || JSON.parse(sessionStorage.getItem('currentUser'));
    if (user) {
      setCurrentUser(user);
    }
    console.log('Cover component loaded');
  }, []);

  const openCreateModal = () => {
    setIsLoginModalOpen(false); 
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const openLoginModal = () => {
    setIsCreateModalOpen(false); 
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    sessionStorage.removeItem("currentUser"); 
    setCurrentUser(null);
  };

  return (
    <div className="coverBackground">
      <div className="coverLinks">
        <h2>
          <Link className="coverLibraryLink" to="/home">
            {currentUser ? `${currentUser.firstName}'s Library` : 'Library'}
          </Link>
        </h2>
        {currentUser ? (
          <div>
            <h1>Welcome, {currentUser.firstName}!</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={openCreateModal}>Create Library Account</button>
            <button onClick={openLoginModal}>Login</button>
          </div>
        )}
      </div>

      {isCreateModalOpen && (
        <div className="modalOverlay" onClick={closeCreateModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <CreateAccount onClose={closeCreateModal} />
          </div>
        </div>
      )}
    
      {isLoginModalOpen && (
        <div className="modalOverlay" onClick={closeLoginModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <Login onClose={closeLoginModal} setCurrentUser={setCurrentUser} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Door;