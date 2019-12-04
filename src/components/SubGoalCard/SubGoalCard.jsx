import React from "react";
import "./SubGoalCard.css";
import styled from "styled-components";
import DonutChart from "./DonutChart";

import { faRunning, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SubGoalCard({ cardData }) {
  return (
    <SubGoal
      gColor1={cardData.gradColor1}
      gColor2={cardData.gradColor2}
      className="sub-goal-card"
    >
      <div className="sub-goal-card__halfdiv">
        <FontAwesomeIcon
          className="sub-goal-card__icon"
          icon={cardData.iconName === "faBars" ? faBars : faRunning}
        />
        <p className="sub-goal-card__title">{cardData.title}</p>
        <p className="sub-goal-card__subtitle">{cardData.subtitle}</p>
      </div>
      <div className="sub-goal-card__halfdiv">
        <p className="chartText">Bqlq</p>

        <DonutChart
          className="doughnut-text"
          numerator={cardData.numerator}
          denominator={cardData.denominator}
          color1="white"
          color2="rgb(0, 0, 0, 0.5)"
        />
      </div>
    </SubGoal>
  );
}

var SubGoal = styled.div`
  background: linear-gradient(
    to right,
    ${props => props.gColor1 || "blue"},
    ${props => props.gColor2 || "green"}
  );
`;
