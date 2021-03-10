export default class CheckInput {
  validateValue(value) {
    if (value.validity.valueMissing) {
      return value.setCustomValidity('Нужно ввести ключевое слово')
    } else if (value.validity.tooShort || value.validity.tooLong) {
      return value.setCustomValidity('Должно быть от 2 до 10 символов')
    } else {
      return true
    }
  }
}
