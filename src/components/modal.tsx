import { MouseEventHandler } from "react";

export function Modal({ onClose }) {
  function closeModal(e) {
    const target = e.target;

    if (target.className === "modal-background") {
      onClose();
    }
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal">
        <h1>Модальное окно</h1>

        <div>
          <form>
            <input type="text" placeholder="Текст здесь" />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
