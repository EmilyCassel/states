import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onClose, setCurrentUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isForgotUsernameModalOpen, setIsForgotUsernameModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.username === username && user.password === password);

    if (user) {
      alert(`Welcome back, ${user.firstName}!`);
      setCurrentUser(user);
      if (rememberMe) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
      }
      onClose();
      navigate('/home');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
          </div>
          <button type="submit">Login</button>
          <button type="button" onClick={onClose}>Close</button>
          <button type="button" onClick={() => setIsForgotUsernameModalOpen(true)}>Forgot Username</button>
          <button type="button" onClick={() => setIsForgotPasswordModalOpen(true)}>Forgot Password</button>
        </form>
      </div>

      {isForgotUsernameModalOpen && (
        <ForgotUsernameModal onClose={() => setIsForgotUsernameModalOpen(false)} />
      )}
      {isForgotPasswordModalOpen && (
        <ForgotPasswordModal onClose={() => setIsForgotPasswordModalOpen(false)} />
      )}
    </div>
  );
};

const ForgotUsernameModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [username, setUsername] = useState(null);

  const handleSendCode = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === email);

    if (user) {
      setIsCodeSent(true);
      // Simulate sending code
      setTimeout(() => {
        alert('Code sent to your email');
      }, 500);
    } else {
      alert('Email not found.');
    }
  };

  const handleVerifyCode = () => {
    // Simulate code verification
    setUsername('YourUsername'); // Replace with actual username retrieval logic
    alert('Code verified. Your username is YourUsername');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Forgot Username</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {isCodeSent && (
          <div>
            <label>Code:</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
        )}
        <button type="button" onClick={onClose}>Close</button>
        {isCodeSent ? (
          <button type="button" onClick={handleVerifyCode}>Verify Code</button>
        ) : (
          <button type="button" onClick={handleSendCode}>Send Code</button>
        )}
      </div>
    </div>
  );
};

const ForgotPasswordModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSendCode = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === email);

    if (user) {
      setIsCodeSent(true);
      // Simulate sending code
      setTimeout(() => {
        alert('Code sent to your email');
      }, 500);
    } else {
      alert('Email not found.');
    }
  };

  const handleVerifyCode = () => {
    // Simulate code verification
    if (newPassword === confirmPassword) {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const updatedUsers = existingUsers.map(user =>
        user.email === email ? { ...user, password: newPassword } : user
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      alert('Password reset successfully.');
      onClose();
    } else {
      alert('Passwords do not match.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Forgot Password</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {isCodeSent && (
          <>
            <div>
              <label>Code:</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>
            <div>
              <label>New Password:</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </>
        )}
        <button type="button" onClick={onClose}>Close</button>
        {isCodeSent ? (
          <button type="button" onClick={handleVerifyCode}>Reset Password</button>
        ) : (
          <button type="button" onClick={handleSendCode}>Send Code</button>
        )}
      </div>
    </div>
  );
};

export default Login;
