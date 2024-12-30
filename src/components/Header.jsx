export default function Header({ score, target, maxScore}) {
  return (
    <div className="header">
        <div className="header__text">
          <div className="header__title">Memory Cards</div>
          <div className="header__instructions">Click each photo once</div>
        </div>
        <div className="header__scoreboard">
          <div className="header__score">Score: {score}</div>
          <div className="header__target">Target: {target}</div>
          <div className="header__max-score">Max Score: {maxScore}</div>
        </div>
      </div>
  )
}