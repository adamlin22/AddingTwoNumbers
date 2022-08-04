import axios from "axios";
import React, { useState } from "react";

const AddNumbers: React.FC = (): JSX.Element => {
  const [firstNum, setFirstNum] = useState<number>(0);
  const [secondNum, setSecondNum] = useState<number>(0);

  const handleChangeFirstNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNum(parseInt(e.target.value));
  };

  const handleChangeSecondNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondNum(parseInt(e.target.value));
  };

  const handleClickAddTwoNumbers = async () => {
    try {
      const r = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/sum`, {
        firstNum,
        secondNum,
      });

      alert(`Result is ${r.data.sum}`);
    } catch (e) {
      alert("Unexpected error occurred while trying to connect to backend");
    }
  };

  return (
    <div>
      <input
        value={firstNum}
        onChange={handleChangeFirstNum}
        type="number"
        placeholder="First Number"
        style={{ marginTop: "10px" }}
        required
      />
      <br />
      <input
        value={secondNum}
        onChange={handleChangeSecondNum}
        type="number"
        placeholder="Second Number"
        required
      />
      <br />
      <button onClick={handleClickAddTwoNumbers} style={{ marginTop: "15px" }}>
        Add Two Numbers
      </button>
    </div>
  );
};

export default AddNumbers;
