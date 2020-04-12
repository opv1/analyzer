export class SearchInput {
  checkInput(keyWord) {
    if (searchInput.validity.valueMissing) {
      searchInput.setCustomValidity('Это обязательное поле');
    } else if (searchInput.validity.tooShort || searchInput.validity.tooLong) {
      searchInput.setCustomValidity('Должно быть от 2 до 10 символов');
    } else if (searchInput.validity.patternMismatch) {
      searchInput.setCustomValidity('Необходимо вводить кириллицей');
    } else {
      searchInput.setCustomValidity('');
    }
  }
}
