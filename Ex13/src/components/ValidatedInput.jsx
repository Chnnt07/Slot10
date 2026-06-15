import React, { useState, useEffect } from 'react';

export default function ValidatedInput({
  validationFunction = (v) => v.length >= 3,
  errorMessage = 'Input must be at least 3 characters',
}) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <div>
      <h2>Validated Input</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ borderColor: isValid ? undefined : 'red' }}
      />
      {!isValid && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}
