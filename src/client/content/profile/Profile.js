import React from "react";

const Profile = () => {
  return (
    //add a div with a background image and a text
    <div>
      <h1>Profile</h1>
      <div>
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
        <h2>Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>
        <table>
          <tr>
            <td>Full Name</td>
            <td>Name</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>Email</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>Phone Number</td>
          </tr>
        </table>
        <button>Edit</button>
      </div>
      <div>
        <table>
          <tr>
            <td>Street Address</td>
            <td>Street Address</td>
          </tr>
          <tr>
            <td>City</td>
            <td>City</td>
          </tr>
          <tr>
            <td>State</td>
            <td>State</td>
          </tr>
          <tr>
            <td>Zip Code</td>
            <td>Zip Code</td>
          </tr>
        </table>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default Profile;
