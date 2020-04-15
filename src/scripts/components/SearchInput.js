export class SearchInput {
  checkInput(searchForm) {
    const inputForm = searchForm.elements.input;
    if (inputForm.validity.valueMissing) {
      inputForm.setCustomValidity('Нужно ввести ключевое слово');
    } else if (inputForm.validity.tooShort || inputForm.validity.tooLong) {
      inputForm.setCustomValidity('Должно быть от 2 до 10 символов');
    } else if (inputForm.validity.patternMismatch) {
      inputForm.setCustomValidity('Необходимо вводить кириллицей');
    } else {
      inputForm.setCustomValidity('');
    }
  }
}
