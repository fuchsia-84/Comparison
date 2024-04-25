// 「同意する」のチェックボックスを取得
const agree_checkbox = document.getElementById("agree");
// 送信ボタンを取得
const submit = document.getElementById("submit");

// チェックボックスをクリックした時
agree_checkbox.addEventListener("click", () => {
  // チェックされている場合
  if (agree_checkbox.checked === true) {
    submit.disabled = false; // disabledを外す
  }
  // チェックされていない場合
  else {
    submit.disabled = true; // disabledを付与
  }
});