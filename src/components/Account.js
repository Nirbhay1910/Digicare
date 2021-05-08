import React from "react";
import Footer from "./Footer";
import { useStateValue } from "../StateProvider";
import "./css/account.css";
import breport from "../images/breport.jpg";

function Account() {
  const [{ user }, dispatch] = useStateValue();
  if (!user) {
    return (
      <div>
        <h1>You need to be logged in for accessing this url</h1>
      </div>
    );
  } else {
    return (
      <div className="Account">
        <div className="medicians">
          <p className="text">Medicians for you</p>
          <div>
            <table border="5" cellPadding="2">
              <tr>
                <td>Medicians</td>
                <td>Dosage</td>
              </tr>
              <tr>
                <td>ZOLO 650mg</td>
                <td>twice a day</td>
              </tr>
              <tr>
                <td>Azithromycin</td>
                <td>twice a day</td>
              </tr>
              <tr>
                <td>Rabeprazole sodium 20mg</td>
                <td>once a day</td>
              </tr>
              <tr>
                <td>zinc sulphate dispersible 20mg</td>
                <td>once a day</td>
              </tr>
              <tr>
                <td>Vitamin C tab</td>
                <td>twice a day</td>
              </tr>
            </table>
          </div>
        </div>
        <div classname="reports">
          <div>
            <p className="text">Your old Reports</p>
          </div>
          <div>
            <img src={breport} />
          </div>
        </div>
        <div className="disclaimer">
          <p>
            *ALL THE DATA GIVEN HERE IS TEST DATA NOT BEEN RECOMMENDED BY ANY
            DOCTOR
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Account;
