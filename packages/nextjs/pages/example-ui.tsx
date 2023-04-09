import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useAccount } from "wagmi";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useState } from "react";
const Home: NextPage = () => {
  const { address, isConnected } = useAccount();

  const [a, setA] = useState(["0x0", "0x0"]);
  const [b, setB] = useState([
    ["0x0", "0x0"],
    ["0x0", "0x0"],
  ]);
  const [c, setC] = useState(["0x0", "0x0"]);
  const [input, setInput] = useState(["0x0"]);

  const handleInputChange = (index: any, event: any) => {
    const { value } = event.target;
    setInput((prevInput) => {
      const newInput = [...prevInput];
      newInput[index] = value;
      return newInput;
    });
  };

  const handleAChange = (index: any, event: any) => {
    const { value } = event.target;
    setA((prevA) => {
      const newA = [...prevA];
      newA[index] = value;
      return newA;
    });
  };

  const handleBChange = (rowIndex: any, colIndex: any, event: any) => {
    const { value } = event.target;
    setB((prevB) => {
      const newB = [...prevB];
      newB[rowIndex][colIndex] = value;
      return newB;
    });
  };

  const handleCChange = (index: any, event: any) => {
    const { value } = event.target;
    setC((prevC) => {
      const newC = [...prevC];
      newC[index] = value;
      return newC;
    });
  };

  const {data:Proof} = useScaffoldContractRead({
    contractName:'Verifier',
    functionName:'verifyProof',
    args:[a,b,c,input]
  })


  const handleVerification = (e: any) => {
    e.preventDefault();
    console.log(Proof);
  };

  return (
    <div className={styles.container}>
      {isConnected ? (
        <div>
          <h1>{address}</h1>
          <h2>Public input : Circuit(100)</h2>
          <form onSubmit={handleVerification}>
            <br />
            <label className={styles.label}>
              A:
              {a.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  value={value}
                  onChange={(event) => handleAChange(index, event)}
                  className={styles.input}
                />
              ))}
            </label>
            <br />
            <label className={styles.label}>
              B:
              {b.map((row, rowIndex) =>
                row.map((value, colIndex) => (
                  <input
                    key={`${rowIndex}-${colIndex}`}
                    type="text"
                    value={value}
                    onChange={(event) =>
                      handleBChange(rowIndex, colIndex, event)
                    }
                    className={styles.input}
                  />
                ))
              )}
            </label>
            <br />
            <label className={styles.label}>
              C:
              {c.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  value={value}
                  onChange={(event) => handleCChange(index, event)}
                  className={styles.input}
                />
              ))}
            </label>
            <br />
            <label className={styles.label}>
              Input:
              {input.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  value={value}
                  onChange={(event) => handleInputChange(index, event)}
                  className={styles.input}
                />
              ))}
            </label>
            <button className={styles.button} type="submit">
              Submit
            </button>
          </form>

          <h1>{Proof ? "Proof verified" : "Proof not verified"}</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;


