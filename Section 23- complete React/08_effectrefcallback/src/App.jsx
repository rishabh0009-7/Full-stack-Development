import React, { useCallback, useEffect, useState, useRef } from "react";

const App = () => {
  //1
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  //6- You can use useRef to store values (like a timer ID) that stay constant even when the component re-renders, without triggering new renders
  //used for tracking previous values
  const passwordRef = useRef(null);

  //  3  using usecallback--> The useCallback hook in React is used to memoize functions, ensuring that a function does not get re-created on every render unless its dependencies change.
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "dkasbdasbdalsbdiafcaecfaesc";
    if (numberAllowed) str += "01232324343";
    if (charAllowed) str += "!@#$%^&*()_+";
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setpassword(pass);
    //now usecallback format has 2 things one is callback function(above) and then dependencies array(iska matlab kiske cvhange mai ye sab cheeze ho)
  }, [length, numberAllowed, charAllowed]);

  //5-our button is not working to  copy password to clipboard  so we will use navigator.clipboard.writeText(password) to copy password to clipboard

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
  };

  //4 useeffect --> used to call the function when the component is mounted and page is loaded
  //definition--> of use effect is that it is a hook that allows you to perform side effects in functional components
  //agar component load ho aur hume kuch karana hai to useeffect use hota hai
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]); //jab ye sab  change ho tab hum chahta hai use effect use ho

  return (
    <>
      {/* 2 */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setlength(Number(e.target.value))}
            />
            <label htmlFor="length">:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
