import { React, useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");
  const clickHandel = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clearScreen = (e) => {
    setResult("");
  };

  const calculate = () => {
    setResult(eval(result.toString()));
  };
  const backSpace = () => {
    setResult(result.substring(0, result.length - 1));
  };

  return (
    <div className="bg-gray-800 text-white w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100">
        <div className="screen p-2">
          <input
            type="text"
            value={result}
            className="shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]text-white px-1 text-right placeholder-black outline-none rounded-lg bg-gray-100 text-2xl pt-10 w-full text-black"
            placeholder="0"
          />
        </div>

        <div className="brand mb-2">
          <h1 className="text-gray-900 text-xs font-bold bg-gray-200 bg-opacity-90 text-center">
            🌐©Rakesh gupta-2023™❤
          </h1>
        </div>
        <div className="keyboard">
          <div className="flex justify-between m-2">
            <input
              onClick={clearScreen}
              type="button"
              className="bg-red-300 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="C"
            />
            <input
              onClick={backSpace}
              type="button"
              className="bg-orange-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="<"
            />
            <input
              onClick={clickHandel}
              type="button"
              className="bg-green-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="%"
            />
            <input
              onClick={clickHandel}
              type="button"
              className="bg-green-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="/"
            />
          </div>

          <div className="flex justify-between m-2">
            <input
              onClick={clickHandel}
              type="button"
              className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="7"
            />
            <input
              onClick={clickHandel}
              type="button"
              className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="8"
            />
            <input
              onClick={clickHandel}
              type="button"
              className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="9"
            />
            <input
              onClick={clickHandel}
              type="button"
              className="bg-green-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="*"
            />
          </div>

          <div className="flex justify-between m-2">
            <input
              onClick={clickHandel}
              type="button"
              className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="4"
            />
            <input
              onClick={clickHandel}
              type="button"
              className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="5"
            />
            <input
              onClick={clickHandel}
              type="button"
              className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="6"
            />
            <input
              onClick={clickHandel}
              type="button"
              className="bg-green-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="-"
            />
          </div>

          <div className="flex justify-between m-2">
            <input
              onClick={clickHandel}
              type="button"
              className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="1"
            />
            <input
              onClick={clickHandel}
              type="button"
              className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="2"
            />
            <input
              onClick={clickHandel}
              type="button"
              className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="3"
            />
            <input
              onClick={clickHandel}
              type="button"
              className="bg-green-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="+"
            />
          </div>

          <div className="flex justify-between m-2">
            <input
              onClick={clickHandel}
              type="button"
              className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="1"
            />
            <input
              onClick={clickHandel}
              type="button"
              className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="00"
            />
            <input
              onClick={clickHandel}
              type="button"
              className="bg-gray-200 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="."
            />
            <input
              onClick={calculate}
              type="button"
              className="bg-green-300 shadow-md w-12 h-12 rounded-lg text-center text-black  font-medium"
              value="="
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
