import React from 'react';
import './Calculator.css';

export default function Calculator() {
  return (
    <div className="text-[#333] text-sm font-bold p-12">
      <table className="h-[300px] w-[350px] mx-auto bg-[#E0E0E0]">
        <thead>
          <tr>
            <td colSpan="4">
              <input type="text" value="0" className="w-full pr-1 text-right text-xl font-normal text-white bg-[#858693]" />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="button" value="AC" />
            </td>
            <td>
              <input type="button" value="+/-" />
            </td>
            <td>
              <input type="button" value="%" />
            </td>
            <td className="operator">
              <input type="button" value="÷" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="7" />
            </td>
            <td>
              <input type="button" value="8" />
            </td>
            <td>
              <input type="button" value="9" />
            </td>
            <td className="operator">
              <input type="button" value="x" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="4" />
            </td>
            <td>
              <input type="button" value="5" />
            </td>
            <td>
              <input type="button" value="6" />
            </td>
            <td className="operator">
              <input type="button" value="-" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="1" />
            </td>
            <td>
              <input type="button" value="2" />
            </td>
            <td>
              <input type="button" value="3" />
            </td>
            <td className="operator">
              <input type="button" value="+" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input type="button" value="0" />
            </td>
            <td>
              <input type="button" value="." />
            </td>
            <td className="operator">
              <input type="button" value="=" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
