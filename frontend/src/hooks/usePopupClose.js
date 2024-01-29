import { useEffect } from "react";

function usePopupClose(isOpen, closeAllPopups) {
  useEffect(() => {
    if (!isOpen) return; // останавливаем действие эффекта, если попап закрыт

    const handleOverlay = (event) => {
      // если есть `popup_opened` в классах блока, значит, кликнули на оверлей
      if (event.target.classList.contains("popup_opened")) {
        closeAllPopups();
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleOverlay);

    //  обязательно удаляем обработчики в `clean-up`- функции
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOverlay);
    };
    // обязательно следим за `isOpen`, чтобы срабатывало только при открытии, а не при любой перерисовке компонента
  }, [isOpen]);
}

export default usePopupClose;
