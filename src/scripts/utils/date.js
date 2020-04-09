export const nowDateIco = (function () {
  const nowDate = new Date();
  const nowDateIco = nowDate.toISOString().slice(0, 10);
  return nowDateIco;
})();

export const laterDateIco = (function () {
  const laterDate = new Date();
  laterDate.setDate(laterDate.getDate() - 7);
  const laterDateIco = laterDate.toISOString().slice(0, 10);
  return laterDateIco;
})();
