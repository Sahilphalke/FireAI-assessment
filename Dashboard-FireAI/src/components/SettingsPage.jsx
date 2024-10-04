
import React, { useState } from 'react';
import "../styles/SettingsPage.css";

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated User Data:', formData);
    
  };

  return (
    <div className="settings-page-container">
      <h1 className="settings-page-title">Update User Details</h1>
      <div className="form-box"> {/* New div for form box */}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>Status:</label>
            <input 
              type="text" 
              name="status" 
              value={formData.status} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
