import React from "react";
import * as style from "./Popup.styles";

function Popup(props) {
  return props.trigger ? (
    <style.popup>
      <style.popup_inside className="popup_inside">
        {props.children}
      </style.popup_inside>
    </style.popup>
  ) : (
    ""
  );
}

export default Popup;
