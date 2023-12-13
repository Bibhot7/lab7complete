import React, { createContext, useContext, useState } from "react";

const EmojiContext = createContext();

export function useEmojiContext() {
  return useContext(EmojiContext);
}

export function EmojiProvider({ children }) {
  const [emoji, setEmoji] = useState("😏","😭");
  const [mood, setMood] = useState("happy");

  const changeMood = (newEmoji, newMood) => {
    setEmoji(newEmoji);
    setMood(newMood);
  };

  return (
    <EmojiContext.Provider value={{ emoji, mood, changeMood }}>
      {children}
    </EmojiContext.Provider>
  );
}
