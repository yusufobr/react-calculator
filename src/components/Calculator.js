import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [theState, setTheState] = useState({
    total: 0,
    next: 0,
    operation: null,
  });

  const handleEvent = (e) => {
    const result = calculate(theState, e.target.value);
    setTheState(result);
  };

  const handleChange = (e) => {
    setTheState({
      total: e.target.value,
    });
  };

  return (
    <div className="container mx-auto mt-16 gap-2 flex justify-between rounded-lg py-8 px-4 bg-[#ffffff80] drop-shadow-lg">
      <h2 className="text-xl font-semibold capitalize">let&apos;s do some math!</h2>
      <div className="text-[#333] text-sm font-bold ">
        <table className="h-[400px] w-[450px] mx-auto bg-[#E0E0E0] drop-shadow-lg">
          <thead>
            <tr>
              <td colSpan="4">
                <input type="text" onChange={handleChange} value={theState.next || theState.total || 0} className="w-full pr-1 text-right text-xl font-normal text-white bg-[#858693]" />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="button" value="AC" onClick={handleEvent} />
              </td>
              <td>
                <input type="button" value="+/-" onClick={handleEvent} />
              </td>
              <td>
                <input type="button" value="%" onClick={handleEvent} />
              </td>
              <td className="operator">
                <input type="button" value="÷" onClick={handleEvent} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" value="7" onClick={handleEvent} />
              </td>
              <td>
                <input type="button" value="8" onClick={handleEvent} />
              </td>
              <td>
                <input type="button" value="9" onClick={handleEvent} />
              </td>
              <td className="operator">
                <input type="button" value="x" onClick={handleEvent} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" value="4" onClick={handleEvent} />
              </td>
              <td>
                <input type="button" value="5" onClick={handleEvent} />
              </td>
              <td>
                <input type="button" value="6" onClick={handleEvent} />
              </td>
              <td className="operator">
                <input type="button" value="-" onClick={handleEvent} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" value="1" onClick={handleEvent} />
              </td>
              <td>
                <input type="button" value="2" onClick={handleEvent} />
              </td>
              <td>
                <input type="button" value="3" onClick={handleEvent} />
              </td>
              <td className="operator">
                <input type="button" value="+" onClick={handleEvent} />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="button" value="0" onClick={handleEvent} />
              </td>
              <td>
                <input type="button" value="." onClick={handleEvent} />
              </td>
              <td className="operator">
                <input type="button" value="=" onClick={handleEvent} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
