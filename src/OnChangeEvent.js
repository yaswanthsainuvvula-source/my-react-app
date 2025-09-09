import { useState } from "react";

function OnChangeEvent() {
  const [country, setCountry] = useState("");

  const handleEvent = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div style={{padding:"20px"}}>
      <select value={country} onChange={handleEvent}>
        <option value="">Select Country</option>
        <option value="USA">USA</option>
        <option value="Ind">Ind</option>
        <option value="Eng">Eng</option>
      </select>

      <p>Selected Country: {country}</p>
    </div>
  );
}

export default OnChangeEvent;
