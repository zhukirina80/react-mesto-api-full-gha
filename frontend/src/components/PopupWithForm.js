import usePopupClose from '../hooks/usePopupClose';

function PopupWithForm({ title, name, containerName, children, textBtn, isOpen, onClose, onSubmit }) {

  usePopupClose(isOpen, onClose);

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__${containerName}`}>
        <button onMouseDown={onClose} type="reset" className="popup__button-close" aria-label="Закрыть" />
        <h2 className="popup__title">{title}</h2>
        <form onSubmit={onSubmit} name={`${name}-form`} className={`popup__form popup__form_${name}`}>
          {children}
          <button type="submit" className={`popup__button popup__button_type_${name}`}>
            {textBtn}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;