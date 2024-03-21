import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("0xe778192D6dd8429152e3ba4A4A2Aa2B81162Ebb5")
  const [id, setId] = useState(1)
  return (
    <div>
      {/* <img src={`http://localhost:3000/${location}/${id}`} /> */}
    </div>
  );
}
