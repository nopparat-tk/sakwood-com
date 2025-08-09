import { useState } from "react";
import BritishEmbassy from "./BritishEmbassy";

export default function Modal({ isPopup, handlePopup }) {
  return <>{isPopup && <BritishEmbassy onClick={handlePopup} />}</>;
}
