import React from "react";
import { useState } from "react";
import Container from "./Container";
export default function App17() {
  const [flag, setflag] = useState(0);
  const disp = () => {};
  return (
    <div>
      <button onClick={() => setflag((prev) => 1)}>Feeds</button>
      <button onClick={() => setflag((prev) => 2)}>Post</button>
      <Container flag={flag} />
    </div>
  );
}