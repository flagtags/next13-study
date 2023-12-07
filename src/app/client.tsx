'use client';
import { useState } from 'react';

const ClientComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <h1>Client Component</h1>

      <label>
        {isChecked ? '체크 됨' : '체크 안 됨'}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
      </label>
    </div>
  );
};

export default ClientComponent;
