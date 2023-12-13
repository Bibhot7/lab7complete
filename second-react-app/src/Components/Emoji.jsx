import React from "react";
import { useEmojiContext } from "./EmojiContext";

function Emoji() {
  const { emoji, mood, changeMood } = useEmojiContext();

  return (
    <div className="MoodChanger componentBox">
      Current Emoji: {emoji}
      Current Mood: {mood}
      <button onClick={() => changeMood("😭", "sad")}>Change Mood</button>
    </div>
  );
}

export default Emoji;
