import React, { useState } from 'react';

const groupedOptions = [
    {
      label: 'Fruits',
      options: [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
      ],
    },
    {
      label: 'Vegetables',
      options: [
        { value: 'carrot', label: 'Carrot' },
        { value: 'broccoli', label: 'Broccoli' },
        { value: 'spinach', label: 'Spinach' },
      ],
    },

    {
        label: 'Fruity Vegetables',
        options: [
          { value: 'bigcarrot', label: 'bigCarrot' },
          { value: 'bigbroccoli', label: 'bigBroccoli' },
          { value: 'bigspinach', label: 'bigSpinach' },
        ],
      },
  ];

const GroupedCheckboxSelect = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedValues((prev) => 
      prev.includes(value) 
        ? prev.filter((v) => v !== value) // Remove value if it's already selected
        : [...prev, value] // Add value if it's not selected
    );
  };

  return (
    <div>
      {groupedOptions.map((group) => (
        <div key={group.label} className="mb-4">
          <h3 className="font-bold">{group.label}</h3>
          {group.options.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="checkbox"
                id={option.value}
                value={option.value}
                checked={selectedValues.includes(option.value)}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
        </div>
      ))}
      <div>
        <h4>Selected Values:</h4>
        <pre>{JSON.stringify(selectedValues, null, 2)}</pre>
      </div>
    </div>
  );
};

export default GroupedCheckboxSelect;