import React from "react";

const Profile = () => {
  return (
    //add a div with a background image and a text
    <div>
      <h1>Profile</h1>
      <div>
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
        <h2>User 1</h2>
        <p>
          This is the admin user who can add, edit and delete users. This user
          is also the owner of the application.
        </p>
      </div>
      <div>
        <table>
          <tr>
            <td>Full Name </td>
            <td>John Minseok Kim</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>kakwak123@gmail.com</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>0416501316</td>
          </tr>
        </table>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default Profile;
