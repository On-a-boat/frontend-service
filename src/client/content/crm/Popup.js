import React, { useState, useEffect } from "react";
import * as s from "./Popup.styles";
import axios from "axios";
import { parents } from "dom-helpers";


function Popup(props) {

  const [buttonPopup, setButtonPopup] = useState(false);

  const [groupName, setGroupName] = useState("");
  const [userId, setUserId] = useState([]);

   // Create new group JSON and post to the Database.
   const makeGroup = () => {
    const Ymd = (date) => date.toISOString().slice(0, 10);
    const selectedRows = JSON.parse(localStorage.getItem("selectedRows"));
    var updateId = [];
    selectedRows.forEach((row) => {
      updateId.push(row.UserId);
    });
    setUserId(updateId);

    if (userId.length > 0 && groupName != "") {
      axios
        .post("https://backend.weeyapp-crm-on-a-boat.com/group", {
          groupName: groupName,
          users: userId,
          users: "" + userId,
          userCount: userId.length,
          dateCreated: new Date().toLocaleDateString(),
          dateCreated: Ymd(new Date()),
        })
        .then((response) => {
          console.log(response);
        });
    }
  };



  return props.trigger ? (
    <s.Popup >
      <s.GroupNameInput
          value={groupName || ""}
          onChange={(e) => {
            setGroupName(e.target.value || ""); // Set undefined to remove the filter entirely
          }}
          placeholder={"Enter group name"}
        />
        <s.CreateButton onClick={() => makeGroup()}>
          {" "}
            Create{" "}
        </s.CreateButton>
        <s.CancelButton onClick={() => setButtonPopup(false)}>
          {" "}
            Cancel{" "}
        </s.CancelButton>
    </s.Popup>
  ) : (
    ""
  );
}

export default Popup;
