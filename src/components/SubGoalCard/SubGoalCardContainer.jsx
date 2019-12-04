import React from "react";
import "./SubGoalCard.css";
import SubGoalCard from "./SubGoalCard";

let subGoalCardList = [
  {
    gradColor1: "#4FACFE",
    gradColor2: "#00F2FE",
    title: "10 Exercises",
    subtitle: "1 hour 50 minutes",
    numerator: 5,
    denominator: 10,
    iconName: "faRunning"
  },
  {
    gradColor1: "#FF527A",
    gradColor2: "#FF9575",
    title: "5 meals",
    subtitle: "1600 Calories",
    numerator: 3,
    denominator: 10,
    iconName: "faBars"
  }
];

export default function SubGoalCardContainer() {
  return (
    <div className="sub-goal-card-container">
      {subGoalCardList.map((c, i) => (
        <SubGoalCard cardData={c} key={i} />
      ))}
    </div>
  );
}
