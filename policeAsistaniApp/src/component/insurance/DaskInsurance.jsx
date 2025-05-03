import React, { useState } from "react";
import "./DaskInsurance.css";

function DaskInsurance() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);

  return (
    <>
      <div className="dask-insurance-container">
        <h1>DASK SİGORTASI</h1>
        <label htmlFor="">SİGORTALI ADI SOYADI:</label>
        <input type="text" placeholder="Adı Soyadı" />

        <label htmlFor="sigorta">SİGORTA ŞİRKETİ SEÇİNİZ:</label>
        <select name="sigorta_sirketi" id="sigorta">
          <option value="AnadoluSigorta">ANADOLU SİGORTA</option>
          <option value="AxaSigorta">AXA SİGORTA</option>
          <option value="AllianzSigorta">ALLİANZ SİGORTA</option>
          <option value="TurkiyeSigorta">TÜRKİYE SİGORTA</option>
          <option value="MapfreSigorta">MAPFRE SİGORTA</option>
          <option value="SompoSigorta">SOMPO SİGORTA</option>
          <option value="GroupamaSigorta">GROUPAMA SİGORTA</option>
          <option value="RaySigorta">RAY SİGORTA</option>
          <option value="HDISigorta">HDI SİGORTA</option>
          <option value="NeovaSigorta">NEOVA SİGORTA</option>
          <option value="DoğaSigorta">DOĞA SİGORTA</option>
          <option value="QuickSigorta">QUICK SİGORTA</option>
          <option value="ZurichSigorta">ZURICH SİGORTA</option>
          <option value="MagdeburgerSigorta">MAGDEBURGER SİGORTA</option>
          <option value="BNPSigorta">BNP PARIBAS CARDIF</option>
          <option value="AkSigorta">AK SİGORTA</option>
          <option value="GeneraliSigorta">GENERALI SİGORTA</option>
          <option value="AnkaraSigorta">ANKARA SİGORTA</option>
          <option value="UnicoSigorta">UNICO SİGORTA</option>
          <option value="CorpusSigorta">CORPUS SİGORTA</option>
          <option value="Diğer">DİĞER</option>
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

export default DaskInsurance;
