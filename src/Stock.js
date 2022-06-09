import react from "react";
import { useState } from "react";
import "./styles.css";

function Stock() {
  const [msg, setmsg] = useState("");
  function show(e) {
    e.preventDefault();
    var a = document.getElementById("ip").value;
    var b = document.getElementById("qn").value;
    var c = document.getElementById("cp").value;
    if (a !== "" && b !== "" && c !== "") {
      a = parseInt(a);
      b = parseInt(b);
      c = parseInt(c);
    }
    var ans = (c - a) * b;

    var m = (100 / a) * ans;

    if (ans > 0) {
      setmsg("you got " + ans + " profit and the persent is " + m + "%");
    } else if (ans === 0 || a === "" || b === "" || c === "") {
      setmsg("No gain or NO loss");
    } else {
      ans = ans * -1;
      m = m * -1;
      setmsg("you got " + ans + " loss and ther persent is  " + m + "%");
    }
  }
  return (
    <div>
      <h1> Stock Profit & Loss Calculator </h1>
      <br />
      <form>
        <label> Intial Price </label>
        <br />
        <input id="ip" required />

        <br />
        <br />
        <br />
        <label> Quantity of Stocks </label>
        <br />

        <input id="qn" required />
        <br />
        <br />
        <br />
        <label> Current Price </label>
        <br />
        <input id="cp" required />
        <br />
        <br />
        <br />
        <input type="submit" id="btn" value="Tell me" onClick={show} />
      </form>
      <h3> {msg} </h3>
    </div>
  );
}

export default Stock;
