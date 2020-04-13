export class SearchInput {
  setEventListeners(searchForm) {
    const fromInput = searchForm.elements.input;
    const formButton = searchForm.elements.button;
    this.checkInputValidity(fromInput);
    this.setSubmitButtonState(searchForm, formButton);
  }

  checkInputValidity(fromInput) {
    console.log(fromInput);
    if (fromInput.validity.valueMissing) {
      fromInput.setCustomValidity('Нужно ввести ключевое слово');
    } else if (fromInput.validity.tooShort || fromInput.validity.tooLong) {
      fromInput.setCustomValidity('Должно быть от 2 до 10 символов');
    } else if (fromInput.validity.patternMismatch) {
      fromInput.setCustomValidity('Необходимо вводить кириллицей');
    } else {
      fromInput.setCustomValidity('');
    }
  }

  setSubmitButtonState(searchForm, formButton) {
    if (searchForm.checkValidity()) {
      formButton.removeAttribute('disabled');
      formButton.classList.remove('popup__button_disabled');
    } else {
      formButton.setAttribute('disabled', true);
      formButton.classList.add('popup__button_disabled');
    }
  }

  checkInputInstantly(elementsForm, formValidator) {
    const inputsForm = Array.from(elementsForm);
    inputsForm.forEach((elementField) => {
      const elementError = elementField.nextElementSibling;
      const elementButton = elementsForm.elements.popup__button;
      if (elementField.classList.contains('popup__input')) {
        formValidator.checkInputValidity(elementField, elementError);
        formValidator.setSubmitButtonState(elementsForm, elementButton);
      }
    });
  }
}
