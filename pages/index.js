import Head from "next/head";
import Page from "./pages"
import Feed from "../components/feed"
import { useState, useEffect } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState("");
  const [resultArr, setResultArr] = useState([]); 
  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setResultArr([...resultArr, result]);
    setAnimalInput("");
  }
  // useEffect(()=>{
  //   setResultArr([...resultArr, result]);
  // },[result])

  return (
    <div>
      <Head>
        <title>pro·fes·sion·al - de·vel·op·ment - day</title>
      </Head>

      <main className={styles.main}>
        <Page />
        <h3>Name my pet</h3>
        {/* <img src="/placeholder.png" className={styles.icon} /> */}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div className={styles.result}>{result}</div>
        <div className={styles.feed}>
        <ul>
          {resultArr?.filter(word => word.length > 0).map((output, i) => (
           <li key={i}>{output}</li>
          ))}
        </ul>
        </div>
      </main>
    </div>
  );
}
