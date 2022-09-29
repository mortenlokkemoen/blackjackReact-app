import React from "react";
import "../game.css";
import CardBack from "../assets/card-back.png";
import BlankChip from "../assets/blank-chip.png";
import AceOfH from "../assets/AH.png";
import TwoOfH from "../assets/2H.png";
import ThreeOfH from "../assets/3H.png";
import FourOfH from "../assets/4H.png";
import FiveOfH from "../assets/5H.png";
import SixOfH from "../assets/6H.png";
import SevenOfH from "../assets/7H.png";
import EightOfH from "../assets/8H.png";
import NineOfH from "../assets/9H.png";
import TenOfH from "../assets/10H.png";
import JackOfH from "../assets/JH.png";
import QueenOfH from "../assets/QH.png";
import KingOfH from "../assets/KH.png";
import AceOfC from "../assets/AC.png";
import TwoOfC from "../assets/2C.png";
import ThreeOfC from "../assets/3C.png";
import FourOfC from "../assets/4C.png";
import FiveOfC from "../assets/5C.png";
import SixOfC from "../assets/6C.png";
import SevenOfC from "../assets/7C.png";
import EightOfC from "../assets/8C.png";
import NineOfC from "../assets/9C.png";
import TenOfC from "../assets/10C.png";
import JackOfC from "../assets/JC.png";
import QueenOfC from "../assets/QC.png";
import KingOfC from "../assets/KC.png";
import AceOfD from "../assets/AD.png";
import TwoOfD from "../assets/2D.png";
import ThreeOfD from "../assets/3D.png";
import FourOfD from "../assets/4D.png";
import FiveOfD from "../assets/5D.png";
import SixOfD from "../assets/6D.png";
import SevenOfD from "../assets/7D.png";
import EightOfD from "../assets/8D.png";
import NineOfD from "../assets/9D.png";
import TenOfD from "../assets/10D.png";
import JackOfD from "../assets/JD.png";
import QueenOfD from "../assets/QD.png";
import KingOfD from "../assets/KD.png";
import AceOfS from "../assets/AS.png";
import TwoOfS from "../assets/2S.png";
import ThreeOfS from "../assets/3S.png";
import FourOfS from "../assets/4S.png";
import FiveOfS from "../assets/5S.png";
import SixOfS from "../assets/6S.png";
import SevenOfS from "../assets/7S.png";
import EightOfS from "../assets/8S.png";
import NineOfS from "../assets/9S.png";
import TenOfS from "../assets/10S.png";
import JackOfS from "../assets/JS.png";
import QueenOfS from "../assets/QS.png";
import KingOfS from "../assets/KS.png";

export default function Game({
  randomizedDecks,
  playersCards,
  dealersCards,
  chipCount,
  setChipCount,
  betAmount,
  setBetAmount,
  playerCount,
  setPlayerCount,
  dealerCount,
  setDealerCount,
  handleHit,
  handleStay,
  handleDouble,
  lockedBet,
  handleLockedBet,
  isHandComplete,
  isDealersTurn,
  isPlayerBusted,
  isDealerBusted,
  didDouble,
  startHand,
  handleBet,
  previousBet,
  winner,
  isBlackjack,
  clearLockedBet,
}) {
  const whichassets = (who, cards) => {
    return cards.map((card) => {
      let findImage;
      switch (card) {
        case "AH":
          findImage = AceOfH;
          break;
        case "2H":
          findImage = TwoOfH;
          break;
        case "3H":
          findImage = ThreeOfH;
          break;
        case "4H":
          findImage = FourOfH;
          break;
        case "5H":
          findImage = FiveOfH;
          break;
        case "6H":
          findImage = SixOfH;
          break;
        case "7H":
          findImage = SevenOfH;
          break;
        case "8H":
          findImage = EightOfH;
          break;
        case "9H":
          findImage = NineOfH;
          break;
        case "10H":
          findImage = TenOfH;
          break;
        case "JH":
          findImage = JackOfH;
          break;
        case "QH":
          findImage = QueenOfH;
          break;
        case "KH":
          findImage = KingOfH;
          break;
        case "AC":
          findImage = AceOfC;
          break;
        case "2C":
          findImage = TwoOfC;
          break;
        case "3C":
          findImage = ThreeOfC;
          break;
        case "4C":
          findImage = FourOfC;
          break;
        case "5C":
          findImage = FiveOfC;
          break;
        case "6C":
          findImage = SixOfC;
          break;
        case "7C":
          findImage = SevenOfC;
          break;
        case "8C":
          findImage = EightOfC;
          break;
        case "9C":
          findImage = NineOfC;
          break;
        case "10C":
          findImage = TenOfC;
          break;
        case "JC":
          findImage = JackOfC;
          break;
        case "QC":
          findImage = QueenOfC;
          break;
        case "KC":
          findImage = KingOfC;
          break;
        case "AD":
          findImage = AceOfD;
          break;
        case "2D":
          findImage = TwoOfD;
          break;
        case "3D":
          findImage = ThreeOfD;
          break;
        case "4D":
          findImage = FourOfD;
          break;
        case "5D":
          findImage = FiveOfD;
          break;
        case "6D":
          findImage = SixOfD;
          break;
        case "7D":
          findImage = SevenOfD;
          break;
        case "8D":
          findImage = EightOfD;
          break;
        case "9D":
          findImage = NineOfD;
          break;
        case "10D":
          findImage = TenOfD;
          break;
        case "JD":
          findImage = JackOfD;
          break;
        case "QD":
          findImage = QueenOfD;
          break;
        case "KD":
          findImage = KingOfD;
          break;
        case "AS":
          findImage = AceOfS;
          break;
        case "2S":
          findImage = TwoOfS;
          break;
        case "3S":
          findImage = ThreeOfS;
          break;
        case "4S":
          findImage = FourOfS;
          break;
        case "5S":
          findImage = FiveOfS;
          break;
        case "6S":
          findImage = SixOfS;
          break;
        case "7S":
          findImage = SevenOfS;
          break;
        case "8S":
          findImage = EightOfS;
          break;
        case "9S":
          findImage = NineOfS;
          break;
        case "10S":
          findImage = TenOfS;
          break;
        case "JS":
          findImage = JackOfS;
          break;
        case "QS":
          findImage = QueenOfS;
          break;
        case "KS":
          findImage = KingOfS;
          break;
      }
      if (who === "dealer" && parseInt(cards.indexOf(card)) === 1) {
        return (
          <img
            className="card-img"
            alt={card}
            src={isDealersTurn ? findImage : CardBack}
          ></img>
        );
      }
      return (
        <img
          className={
            didDouble && cards.indexOf(card) === 2 && who === "player"
              ? "sideways-double-card"
              : "card-img"
          }
          alt={card}
          src={findImage}
        ></img>
      );
    });
  };

  return (
    <div className="game-div">
      <div className="dealers-cards-div">
        <h1 className="count">
          {isDealersTurn ? dealerCount : null}
        </h1>
        {whichassets("dealer", dealersCards)}
      </div>
      <div className="chip-or-message">
        {lockedBet > 0 || !isHandComplete ? (
          <div className="empty-chip-container">
            <div className="locked-bet-amount">
              {isHandComplete ? lockedBet : previousBet}
            </div>
            <img
              className="locked-bet-img"
              onClick={clearLockedBet}
              src={BlankChip}
            ></img>
          </div>
        ) : null}
        <h1 className="result-message">
          {winner === "player" && isBlackjack
            ? `Blackjack! Player wins $${
                previousBet + previousBet * 1.5
              } and wins 100 points`
            : winner === "player" && didDouble
            ? `Player doubles and wins $${previousBet * 4} and gets 50 points`
            : winner === "player" && isDealerBusted
            ? `Dealer busted! Player wins $${previousBet * 2 }  and gets and 50 points`
            : winner === "dealer" && didDouble
            ? `Player doubled and lost $${previousBet * 2}`
            : winner === "dealer" && isBlackjack
            ? `Dealer Blackjack. Player lost $${previousBet}`
            : winner === "dealer" &&
              isPlayerBusted &&
              didDouble
            ? `Player busted on double. Lost $${previousBet * 2}`
            : winner === "dealer" && isPlayerBusted
            ? `Player busted. Lost ${previousBet}`
            : winner === "dealer"
            ? `Player lost ${previousBet}`
            : winner === "player"
            ? `Player wins ${previousBet * 2} and gets 50 points`
            : winner === "push" && didDouble
            ? `Pushed back ${previousBet * 2}`
            : winner === "push"
            ? `Pushed back ${previousBet}`
            : null}
        </h1>
      </div>
      <div className="players-cards-div">
        {whichassets("player", playersCards)}
        <h1 className="count">
          {playerCount > 0 ? playerCount : null}
        </h1>
      </div>
      <section className="gameplay-options">
        {!isHandComplete ? (
          <>
            <button
              className="betting-option"
              id={
                !isDealersTurn && playerCount < 21
                  ? "ready-to-start"
                  : "not-ready"
              }
              onClick={handleHit}
            >
              Hit
            </button>
            <button
              className="betting-option"
              id={
                !isDealersTurn &&
                playerCount <= 21 &&
                !didDouble
                  ? "ready-to-start"
                  : "not-ready"
              }
              onClick={handleStay}
            >
              Stay
            </button>
            <button
              className="betting-option"
              id={
                !isDealersTurn &&
                playersCards.length === 2 &&
                chipCount >= previousBet
                  ? "ready-to-start"
                  : "not-ready"
              }
              onClick={handleDouble}
            >
              Double
            </button>
          </>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}
