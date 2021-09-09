import React, { useState } from 'react';

export default function Seletor() {
  const [selectedOption, setSelectedOption] = useState(null);

  function handleSelectChange(event) {
    setSelectedClient(event.target.value);
  }

  return (
    <div className="Picker">
      <select value={selectedOption} onChange={handleSelectChange}
      style = {{
                backgroundColor:'white',
                borderColor: "#CDC4F2",
                borderWidth: '5px',
                borderRadius: '4px'
              }}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>

    </div>
  );
}