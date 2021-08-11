// 検索（区間の指定には"閉区間"）
let str1="にわにはにわにわとりがいる";
// 先頭から検索、先頭から検索（不一致）
console.log(str1.indexOf("にわ"));
console.log(str1.indexOf("あ"));
// 末尾から検索
console.log(str1.lastIndexOf("にわ"));
// 指定したインデックスから右を検索
console.log(str1.indexOf("にわ",3));
// 指定したインデックスから左を検索
console.log(str1.lastIndexOf("にわ",6));
// 指定した文字列で開始するか（インデックスの指定も可能）
console.log(str1.startsWith("にわ"));
// 指定した文字列で終了するか（インデックスの指定も可能）
console.log(str1.endsWith("には",3));
// 指定した文字列が含まれるか（インデックスの指定も可能）
console.log(str1.includes("には",3));

// 部分文字列（区間の指定には左閉右開区間）
let str2="abc def";
// 指定したインデックスの文字を抽出
console.log(str2.charAt(0));
// 指定した範囲の文字列を抽出
// 厳密にはsliceとsubstringの挙動は異なる
console.log(str2.slice(1,5));
console.log(str2.substring(1,5));
// 開始と文字数を指定した文字列を抽出
console.log(str2.substr(1,4));
// 指定した分割文字で分割して配列として取得
console.log(str2.split(" "));

// 大文字小文字（toUpperCase、toLowerCase）
console.log(str2.toUpperCase());

// コード変換
// 指定した文字をLatin-1コードに変換
console.log(str2.charCodeAt(0));
// 指定した文字をUTF-16エンコードされたコードポイント値に変換
console.log(str2.codePointAt(0));
// 指定したLatin-1コードから文字列を生成
console.log(String.fromCharCode(100,101,102,103));
// 指定したコードポイント値から文字列を生成
console.log(String.fromCodePoint(100,101,102,103));

// その他
let str3="  hh "
// 文字列の後方に文字を連結
console.log(str3.concat("g"));
// 文字列をn回だけ繰り返したものを取得
console.log(str3.repeat(2));
// 文字列の前後から空白を削除
console.log(str3.trim());
// 文字列の長さを取得
console.log(str3.length)