import React from "react";
import Rating from "../Rating/GameReviewForm";
import ModalButton from "../../../components/button/modalButton/button";
import styles from "./index.module.css";
import { GameDataTypes } from "../../../types/slugData";
export default function Review({ game }: { game: GameDataTypes }) {
  return (
    <div>
      <Rating game={game} />
      <div className={styles.modalButton}>
        <ModalButton>Review this game</ModalButton>
      </div>
    </div>
  );
}
