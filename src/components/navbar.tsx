export function Navbar({ onButtonClick }) {
  return (
    <div className="navbar">
      <a href="#">Мероприятия</a>
      <button className="btn-open-modal" onClick={onButtonClick}>
        Показать окно
      </button>
    </div>
  );
}
