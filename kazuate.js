
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
let i = 1;

//-------
let n = 0;
//-------

// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let dd = document.querySelector('button#blue');
dd.addEventListener('click', hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let a1 = document.querySelector('input[name="shimei"]');
  let yoso = a1.value;    // ユーザが記入した文字列
  let a2 = document.querySelector('span#kaisu');    
     a2.textContent = kaisu+'回目の予想:';                 
  let a3 = document.querySelector('span#answer');    
  a3.textContent = yoso;




  /*let s = document.querySelector('span#kaisu');
  s.textContent = kaisu;
  let q = document.querySelector('span#answer');
  q.textContent = yoso;*/
  
if (kaisu<5){
  let a1 = document.querySelector('span#kaisu');         
  a1.textContent = kaisu+'回目の予想:'; 
  if (kotae == yoso){
    let ee = document.querySelector('p#result');
    ee.textContent = ('正解です．おめでとう!');
  }else if(yoso < kotae){
    let ee = document.querySelector('p#result');
    ee.textContent = ('まちがい．答えはもっと大きいですよ');
  }else {
    let ee = document.querySelector('p#result');
    ee.textContent = ('まちがい．答えはもっと小さいですよ');
  }
  kaisu = kaisu + 1;
  }else{
    let ee = document.querySelector('p#result');
    ee.textContent = ('答えは '+ kotae + " でした。すでにゲームは終わっています");
    kaisu = kaisu + 1;
  }
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}
