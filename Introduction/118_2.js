let str="𩸽";
console.log(str.length);

// サロゲートペア文字を考慮した書き方
console.log(str.length-str.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\s\S]/g).length+1);