import { useState } from "react";

function CarInsurance() {
  const [selectedCompany, setSelectedCompany] = useState(""); // Seçilen şirket

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value); // Seçilen şirketi state'e kaydet
  };

  const companies = [
    { id: 1, name: "AutoSigorta A" },
    { id: 2, name: "AutoSigorta B" },
    { id: 3, name: "AutoSigorta C" },
    { id: 4, name: "AutoSigorta D" },
  ];

  return (
    <div className="car-insurance">
      <h1>Car Insurance</h1>

      {/* Sigorta şirketi seçme açılır menüsü */}
      <label htmlFor="company">Choose Insurance Company:</label>
      <select id="company" value={selectedCompany} onChange={handleCompanyChange}>
        <option value="">Select a company</option>
        {companies.map((company) => (
          <option key={company.id} value={company.name}>
            {company.name}
          </option>
        ))}
      </select>

      {/* Seçilen sigorta şirketine göre bilgi gösterme */}
      {selectedCompany && (
        <div className="company-details">
          <h2>{selectedCompany} Details</h2>
          <p>{selectedCompany} offers a variety of car insurance policies designed to suit different needs. Explore their options for comprehensive coverage.</p>
        </div>
      )}
    </div>
  );
}

export default CarInsurance;
