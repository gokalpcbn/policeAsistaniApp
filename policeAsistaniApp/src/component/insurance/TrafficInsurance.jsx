import React, { useState } from "react";
import "./TrafficInsurance.css";
import insuranceCompanies from "../../data/insuranceCompanies";

function TrafficInsurance() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);

  return (
    <>
      <div className="traffic-insurance-container">
        <h1>TRAFİK SİGORTASI</h1>
        <label htmlFor="">SİGORTALI ADI SOYADI:</label>
        <input type="text" placeholder="Adı Soyadı" />

        <label htmlFor="licensePlate">ARAÇ PLAKASI:</label>
        <input type="text" id="licensePlate" placeholder="34ABC123" />

        <label htmlFor="sigorta">SİGORTA ŞİRKETİ SEÇİNİZ:</label>
        <select name="sigorta_sirketi" id="sigorta">
          {insuranceCompanies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>

        <label htmlFor="startDate">Başlangıç Tarihi:</label>
        <input type="date" id="startDate" name="startDate" value={startDate} onChange={handleStartDateChange} />

        <label htmlFor="endDate">Bitiş Tarihi:</label>
        <input type="date" id="endDate" name="endDate" value={endDate} onChange={handleEndDateChange} />
        <div>
          <input type="file" accept=".pdf" />
        </div>
        <div className="button-group">
          <button className="save-button">KAYDET</button>
          <button className="exit-button">ÇIK</button>
        </div>
      </div>
    </>
  );
}

export default TrafficInsurance;
