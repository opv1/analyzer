export class SearchInput {
  checkInput(searchForm) {
    const inputSearch = searchForm.elements.input;
    if (inputSearch.validity.valueMissing) {
      inputSearch.setCustomValidity('Нужно ввести ключевое слово');
    } else if (inputSearch.validity.tooShort || inputSearch.validity.tooLong) {
      inputSearch.setCustomValidity('Должно быть от 2 до 10 символов');
    } else if (inputSearch.validity.patternMismatch) {
      inputSearch.setCustomValidity('Необходимо вводить кириллицей');
    } else {
      inputSearch.setCustomValidity('');
    }
  }
}
