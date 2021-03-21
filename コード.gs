var lineToken = "xR9QqhC1JrvHYiCt4KbyBZLGtdN4WcY7dGmbpQy41Nh"; 
var birthDay = '1991/10/08'; //誕生日
var targetAge = 35; //35歳年齢

function weatherForecast() {
  var now = dayjs.dayjs().locale('ja'); //現在の日時
  var target = dayjs.dayjs(birthDay).add(targetAge,'y'); //目標日時
  var nextYear = now.clone().add(1,'y').month(0).day(-16); 
  // var message = '来年までの残り月数はあと [' + nextYear.diff(now, 'M') + 'ヶ月]です'
let body = '\n・来年までの残り時間はあと\n' + nextYear.diff(now, 'h') + '時間です\n';
body += '・来年までの残り日数はあと\n' + nextYear.diff(now, 'd') + '日です\n';
body += '・来年までの残り月数はあと\n' + nextYear.diff(now, 'M') + 'ヶ月です\n';
body += '・35歳までの残り時間はあと\n' + target.diff(now, 'h') + '時間です\n';
body += '・35歳までの残り日数はあと\n' + target.diff(now, 'd') + '日です\n';
body += '・35歳までの残り月数はあと\n' + target.diff(now, 'M') + 'ヶ月です\n';
body += '・35歳までの残り年数はあと\n' + target.diff(now, 'y') + '年です\n';
  sendToLine(body);
  console.log(nextYear.format('YYYY-MM-DD'));
  console.log(body);
}

// LINEへの送信処理
function sendToLine(text){
  var token = lineToken;
  var options =
   {
     "method"  : "post",
     "payload" : "message=" + text ,
     "headers" : {"Authorization" : "Bearer "+ token}
   };
   UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}
