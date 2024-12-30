import "../styles/Header.css";

export default function Header({ score, target, maxScore}) {
  return (
    <div className="header">
        <div className="header__text">
          <div className="header__title">Memory Cards</div>
          <div className="header__instructions">Click each photo once</div>
        </div>
        <div className="header__scoreboard">
          <div className="header__score">Score: <span className="text--emphasis">{score}</span></div>
          <div className="header__target">Target: <span className="text--emphasis">{target}</span></div>
          <div className="header__max-score">Max Score: <span className="text--emphasis">{maxScore}</span></div>
        </div>
      </div>
  )
}