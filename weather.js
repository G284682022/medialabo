let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};



/*let w = document.querySelector('div#表示');  
w.remove();   
let ee = document.querySelector('kk#asas');
  ee.textContent = ('sdvojsozigh');
*/

////////// 課題3-2 ここからプログラムを書こう
let hairetu = [360630,524901,993800,1816670,1850147,1880252,2147714,2643743,2968815,3451189,5128581,5368361];

let b = document.querySelector('#kensaku');
b.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {

  let s = document.querySelector('select#santaro');
  let idx = s.selectedIndex; 
  let os = s.querySelectorAll('option');
  let o = os.item(idx);
  console.log('選択された ' + idx + ' 番目の option の情報:');
  console.log('  value=' + o.getAttribute('value'));  // id 属性を表示
  console.log('  textContent='+o.textContent);
  console.log(hairetu[idx]);


    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+hairetu[idx]+'.json';
    if ( hairetu[idx] ==360630  ){
      document.bgColor = "#f2ad63";
      }else if(hairetu[idx] == 2147714){
        document.bgColor = "#1007b8";
      }else if(hairetu[idx] == 2968815){
        document.bgColor = "#7674a1";
      }else{
        document.bgColor = "#bed2d4";
      }


    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {

    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log('都市名'+data.name);


    let ee = document.querySelector('h1#asas');
    ee.textContent = (data.name
);

    let a1 = document.querySelector('h2#f2');
    a1.textContent = (data.weather[0].main);
    let a2 = document.querySelector('h2#f1');
    a2.textContent = ("MIN="+data.main.temp_min+"°      MAX="+data.main.temp_max+"°");
    let a3 = document.querySelector('h2#f4');
    a3.textContent = (data.main.humidity+"の湿度");
    //a2.style.backgroundColor = 'blue';
    console.log(data);
    // data.x を出力
    console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

