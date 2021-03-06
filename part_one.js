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

// ## データ型とリテラル

// 静的型付け言語のような変数の型はないが文字列、数値、真偽値といった値の型(データ型)は存在する
// プリミティブ型とオブジェクトがあるがtypeofで判定できる
// プリミティブ型：Boolean, Number, BigInt, String, undefined, null, Symbol
// オブジェクト：オブジェクト、配列、関数、正規表現、Date

// リテラルはプログラム上で数値や文字列など、データ型の値を直接記述できるように構文として定義されたもの
// "と"で囲んだ範囲が文字列リテラル
const str = "こんにちは";
// Boolean, Number, String, null, オブジェクト、配列、 正規表現にはリテラルが用意されている
/* 0bから始まる2進数リテラル、0oから始まる8進数リテラル（ファイルのパーミッションの表現に使われる）、0xから始まる16進数リテラル（文字のコードポイントやRGB値に使われる）などがある */

/* テンプレートリテラルは、`（バッククォート）で囲んだ範囲を文字列とするリテラルであり複数行の文字列を改行記号のエスケープシーケンス（\n）を使わずにかける */

/* undefinedはただのグローバル変数でありリテラルではないため、ローカル変数として宣言できる(非推奨)がtrue, false, nullなどはリテラルであるため同じ名前の変数は定義できない*/

// オブジェクトリテラルはキー (プロパティ名):値でオブジェクトの作成と初期化が同時にできる
const obj = {
  "key": "value"
};
// ドット記法 (プロパティ名は識別子である必要がある)
console.log(obj.key); // => "value"
// ブラケット記法
console.log(obj["key"]); // => "value"

// 正規表現リテラルは/（スラッシュ）と/（スラッシュ）で正規表現のパターン文字列を囲む

/* プリミティブ型は基本的にリテラルで表現するが、真偽値（Boolean）、数値（Number）、文字列（String）はラッパーオブジェクトがあり、プロパティアクセスができる */

// ## 演算子

// 等価演算子=は異なる型の値であった場合に、同じ型となるように暗黙的な型変換をするため非推奨
// 厳密等価演算子は同じ型で同じ値である場合に、trueを返す
// オペランドがどちらもオブジェクトであるときは、 オブジェクトの参照が同じである場合に、trueを返す
// {} は新しいオブジェクトを作成している
const objA = {};
const objB = {};
// 生成されたオブジェクトは異なる参照となる
console.log(objA === objB); // => false
// 同じ参照を比較している場合
console.log(objA === objA); // => true

// 厳密不等価演算子は異なる型または異なる値である場合に、trueを返す

/* AND演算子（&&）は、左辺の値の評価結果がtrueならば、右辺の評価結果を返す
一方で、左辺の値の評価結果がfalseならば、そのまま左辺の値を返す */
// 左辺はtrueであるため、右辺の評価結果を返す
console.log(true && "右辺の値"); // => "右辺の値"
// 左辺がfalseであるなら、その時点でfalseを返す
// 右辺は評価されない (短絡評価)
console.log(false && "右辺の値"); // => false

/* AND演算子は例えばvalueがString型で かつ 値が"str"である場合という条件を1つのifでかける
（ネストしなくてよい）*/

/* Nullish coalescing演算子(??)は、左辺の値がnullishであるならば、右辺の評価結果を返す
nullishとは、評価結果がnullまたはundefinedとなる値のこと
OR演算子（||）は左辺がfalsyの場合に右辺を評価するため、意図しない結果となる場合がある
例えば (本当は0を扱いたいのに) 左辺が0の場合にfalsyのため右辺が評価されてしまう */