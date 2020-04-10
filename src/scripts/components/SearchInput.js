export class SearchInput {
  checkInput(keyWord) {
    console.log(keyWord);
    if (keyWord.length === 0) {
      console.log('lol');
    } else {
      console.log('ok');
    }
  }
}
