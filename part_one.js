"use strict";
// ## 変数と宣言

// constは再代入できない変数の宣言とその変数が参照する値（初期値）を定義する
// 同時に複数の変数を宣言
const bookTitle = "JavaScript Primer",
      bookCategory = "Programming";
/* constで宣言した変数は常に同じ値を示すとは限らないため、定数とは呼べない
"再代入できない変数"と理解する */
// `const`でオブジェクトを定義している
const object = {
  key: "value"
};
// オブジェクトそのものは変更できてしまう
object.key = "newValue";

/* 参照透過性 ("変数の値は最初に定義した値と常に同じ") を保たない場合、
letキーワードを使う */
let bookTitle = "JavaScript Primer";
// letは変数宣言のみもできるが、デフォルト値で`undefined`という値で初期化される
let bookTitle2;

// ## 値の評価と表示
// 構文エラーや実行時エラーの典型的なものはMDNのJavaScript エラーリファレンスにまとめられている
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Errors

// 構文エラーも実行時エラーもエラーメッセージとエラーの原因は一致しないことがある
// エラーが発生した行の周辺をよく見ることやエラーメッセージを調べてみることが大切
