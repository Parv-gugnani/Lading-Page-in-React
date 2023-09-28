import React, { useState, useEffect } from "react";
import "Typingstyle.css";

const Typewriter = () => {
  const words = ["Parv", "developer", "Designer", "Billo bagge"];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
  const [dynamicText, setDynamicText] = useState("");

  useEffect(() => {
    const typeEffect = () => {
      const current = words[wordIndex];
      const currentChar = isDeleting
        ? current.substring(0, charIndex - 1)
        : current.substring(0, charIndex + 1);

      setCurrentWord(current);
      setDynamicText(currentChar);

      if (!isDeleting && charIndex < current.length) {
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else {
        setIsDeleting(!isDeleting);
        setWordIndex(!isDeleting ? (wordIndex + 1) % words.length : wordIndex);
      }
    };

    const typeTimeout = setTimeout(typeEffect, isDeleting ? 50 : 200);

    return () => clearTimeout(typeTimeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <h1>
      {dynamicText}
      <span className="stop-blinking"></span>
    </h1>
  );
};

export default Typewriter;
