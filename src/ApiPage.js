import React, { useState } from "react";

function ApiPage() {
  const [user, setUser] = useState(null);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const userDetails = data.results[0];
      setUser({
        fullName: `${userDetails.name.first} ${userDetails.name.last}`,
        gender:
          userDetails.gender.charAt(0).toUpperCase() +
          userDetails.gender.slice(1),
        email: userDetails.email,
        phone: userDetails.phone,
        address: `${userDetails.location.city}, ${userDetails.location.state}, ${userDetails.location.country}`,
        picture: userDetails.picture.large,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="container">
      {!user ? (
        <button onClick={fetchUserDetails}>Fetch User Details</button>
      ) : (
        <div className="user-details-card">
          <div className="user-details-left">
            <img src={user.picture} alt="User" className="user-image" />
            <div className="name">
              <h2>{user.fullName}</h2>
              <p>{user.gender}</p>
            </div>
          </div>
          <div className="user-details-right">
            <h3>Information</h3>
            <div className="user-info">
              <div className="user-info-top">
                <div className="email">
                  <strong>Email:</strong>
                  <br />
                  {user.email}
                </div>
                <div className="phone">
                  <strong>Phone:</strong>
                  <br /> {user.phone}
                </div>
              </div>

              <div className="user-info-bottom">
                <div>
                  <strong className="add">Address:</strong>
                  <br /> {user.address}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApiPage;
