export default class SearchInput {
  checkInput(searchForm) {
    this.inputForm = searchForm.elements.input;
    if (this.inputForm.validity.valueMissing) {
      this.inputForm.setCustomValidity('Нужно ввести ключевое слово');
    } else if (
      this.inputForm.validity.tooShort ||
      this.inputForm.validity.tooLong
    ) {
      this.inputForm.setCustomValidity('Должно быть от 2 до 10 символов');
    } else if (this.inputForm.validity.patternMismatch) {
      this.inputForm.setCustomValidity('Необходимо вводить кириллицей');
    } else {
      this.inputForm.setCustomValidity('');
    }
  }
}
