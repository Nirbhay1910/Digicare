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
          <p className="text">Medicines Prescribed</p>
          <div>

            <table class="styled-table">
              <thead>
                <tr>
                  <th>Medicines</th>
                  <th>Dosage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ZOLO 650mg</td>
                  <td>twice a day</td>
                </tr>
                <tr class="active-row">
                  <td>Dispersible 20mg</td>
                  <td>once a day</td>
                </tr>
                <tr>
                  <td>Azithromycin</td>
                  <td>once a day</td>
                </tr>
                <tr class="active-row">
                  <td>Rabeprazole sodium 20mg</td>
                  <td>twice a day</td>
                </tr>
                <tr>
                  <td>Vitamin C tab</td>
                  <td>once a day</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
        <div classname="reports">
          <div className="cen">
            <p className="text" >Reports</p>
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
