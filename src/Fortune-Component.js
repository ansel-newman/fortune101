import React from "react";
import State, { useState } from "react";

const fortuneData = [
  "A few hours grace before the madness begins again.",
  "A gift of a flower will soon be made to you.",
  "A long-forgotten loved one will appear soon.",
  "Buy the negatives at any price.",
  "A tall, dark stranger will have more fun than you.",
  "A visit to a fresh place will bring strange work.",
  "A visit to a strange place will bring fresh work.",
  "A vivid and creative mind characterizes you.",
  "Abandon the search for Truth; settle for a good fantasy.",
  "Accent on helpful side of your nature.  Drain the moat.",
  "Advancement in position."
];

function GetFortune() {
  const number = Math.floor(Math.random() * fortuneData.length);
  const fortune = fortuneData[number];
  return fortune;
}
export default GetFortune;
