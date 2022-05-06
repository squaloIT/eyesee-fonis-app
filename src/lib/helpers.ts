import {
  BsEmojiAngry,
  BsEmojiLaughing,
  BsEmojiFrown,
  BsEmojiDizzy,
  BsEmojiNeutral,
  BsEmojiHeartEyes,
} from "react-icons/bs";

export const getIcon = (emotion: string): any => {
  if (emotion === "neutral") {
    return BsEmojiNeutral;
  }
  if (emotion === "happiness") {
    return BsEmojiLaughing;
  }
  if (emotion === "sad") {
    return BsEmojiFrown;
  }
  if (emotion === "love") {
    return BsEmojiHeartEyes;
  }
  if (emotion === "angry") {
    return BsEmojiAngry;
  }
  if (emotion === "suprised") {
    return BsEmojiDizzy;
  }
  return "";
};
