class ResultLog {
  logId;
  agent;
  logTxt;
  static defaultTxt = "自動で経験値とリザルトツールに加算されます。\n消去でログが消えます(※リザルトツールからも引かれます)。";
}

export class WorkLog extends ResultLog{
  abnmId;
  wktp;
  dcv;
  ge;
  rk;
  st;
  bf;
  ct;
  ad;

  constructor(){}
}

const InnerLogData = {
  id: "000",
  work: "本能",
  diceval: 1,
  agent: "NAME",
  gender: "?",
  rank: 1,
  status: [1, 1, 1, 1],
  buf: "000",
  count: 1,
  additional: 0,
};

let se_logt = [];
let selogtext = "";
let logt = [];
let set_log = [];
let set_logcount = 1;

let reco = 1;
let log = [
  ResultLog.defaultTxt,
];

let save = [];

function setLog(loche) {
  for (i = 0; i < set_log_count; i++) {
    if (set_log[i] == null && loche == 0) {
      if (loche == 0) {
        set_text =
          '<div class="keilog"><input type="button" value="セット" onclick="set(' +
          i +
          ');"><label for="dice">ID：</label><input type="number" id="info' +
          i +
          '10" name="info' +
          i +
          '10" style="width:50px;" value="00' +
          i +
          '"><label for="dice">職員名：</label><input size="10" type="text" name="info' +
          i +
          '1" style="width:100px;" value="A"><label for="dice">加護：</label><input size="10" type="text" name="info' +
          i +
          '8" style="width:150px;" value="000"><label for="dice">補正値：</label><input type="number" id="info' +
          i +
          '9" name="info' +
          i +
          '9" style="width:50px;" value="0"><details style="display:inline-block;"><summary style="margin-left:10px;cursor:pointer;border:1px solid black; width:60px; display:inline;">開く</summary><label for="dice">性別：</label><input size="10" type="text" name="info' +
          i +
          '2" style="width:50px;" value="none"><label for="dice">ランク：</label><input type="number" id="info' +
          i +
          '3" name="info' +
          i +
          '3" style="width:30px;" value="1"><label for="dice">勇気：</label><input type="number" id="info' +
          i +
          '4" name="info' +
          i +
          '4" style="width:30px;" value="1"><label for="dice">慎重：</label><input type="number" id="info' +
          i +
          '5" name="info' +
          i +
          '5" style="width:30px;" value="1"><label for="dice">自制：</label><input type="number" id="info' +
          i +
          '6" name="info' +
          i +
          '6" style="width:30px;" value="1"><label for="dice">正義：</label><input type="number" id="info' +
          i +
          '7" name="info' +
          i +
          '7" style="width:30px;" value="1"></details></div > ';
        set_log.push(set_text);
        sysysy = [["000", 0]];
        sycon.push(sysysy);
        sycount(i);
        sysysy = [i, 0, 0, 0, 0];
        keiti.push(sysysy);
        keilog.push("");
        zenkai.push("0");
        //dassoulog.push(1);
        save.push([
          i,
          "noname",
          "?",
          "1",
          "1",
          "1",
          "1",
          "1",
          "000",
          "0",
          "00" + i,
        ]);
        nunba.push(i);
      }
    } else {
      for (j = 1; j < 12; j++) {
        const infoTmp = JSON.parse(JSON.stringify(InnerLogData));
        const InfoId = "info" + i + j;
        if (j == 1) {
          if (loche == 1) {
            infoTmp.agent = save[i][j];
          } else {
            infoTmp.agent = document.workroll[InfoId].value;
            save[i][j] = infoTmp.agent;
          }
        }
        if (j == 2) {
          if (loche == 1) {
            infoTmp.gender = save[i][j];
          } else {
            infoTmp.gender = document.workroll[InfoId].value;
            save[i][j] = infoTmp.gender;
          }
        }
        if (j == 3) {
          if (loche == 1) {
            infoTmp.rank = save[i][j];
          } else {
            infoTmp.rank = document.workroll[InfoId].value;
            save[i][j] = infoTmp.rank;
          }
        }
        if (j == 4) {
          if (loche == 1) {
            infoTmp.status[0] = save[i][j];
          } else {
            infoTmp.status[0] = document.workroll[InfoId].value;
            save[i][j] = infoTmp.status[0];
          }
        }
        if (j == 5) {
          if (loche == 1) {
            infoTmp.status[1] = save[i][j];
          } else {
            infoTmp.status[1] = document.workroll[InfoId].value;
            save[i][j] = infoTmp.status[1];
          }
        }
        if (j == 6) {
          if (loche == 1) {
            infoTmp.status[2] = save[i][j];
          } else {
            infoTmp.status[2] = document.workroll[InfoId].value;
            save[i][j] = infoTmp.status[2];
          }
        }
        if (j == 7) {
          if (loche == 1) {
            infoTmp.status[3] = save[i][j];
          } else {
            infoTmp.status[3] = document.workroll[InfoId].value;
            save[i][j] = infoTmp.status[3];
          }
        }
        if (j == 8) {
          if (loche == 1) {
            ingoTmp.buf = save[i][j];
          } else {
            ingoTmp.buf = document.workroll[InfoId].value;
            save[i][j] = ingoTmp.buf;
          }
        }
        if (j == 9) {
          if (loche == 1) {
            infoTmp.additional = save[i][j];
          } else {
            infoTmp.additional = document.workroll[InfoId].value;
            save[i][j] = infoTmp.additional;
          }
        }
        if (j == 10) {
          if (loche == 1) {
            infoTmp.id = save[i][j];
          } else {
            infoTmp.id = document.workroll[InfoId].value;
            save[i][j] = infoTmp.id;
          }
        }
      }
      set_log[i] =
        '<div class="keilog"><input type="button" value="セット" onclick="set(' +
        i +
        ');"><label for="dice">ID：</label><input type="number" id="info' +
        i +
        '10" name="info' +
        i +
        '10" style="width:50px;" value="' +
        infoTmp.id +
        '"><label for="dice">職員名：</label> <input size="10" type="text" name="info' +
        i +
        '1" style="width:100px;" value="' +
        infoTmp.agent +
        '"><label for="dice">加護：</label><input size="10" type="text" name="info' +
        i +
        '8" style="width:150px;" value="' +
        ingoTmp.buf +
        '"><label for="dice">補正値：</label><input type="number" id="info' +
        i +
        '9" name="info' +
        i +
        '9" style="width:50px;" value="' +
        infoTmp.additional +
        '"><details style="display:inline-block;"><summary style="margin-left:10px;cursor:pointer;border:1px solid black; width:60px; display:inline;">開く</summary><label for="dice">性別：</label><input size="10" type="text" name="info' +
        i +
        '2" style="width:50px;" value="' +
        infoTmp.gender +
        '"><label for="dice">ランク：</label><input type="number" id="info' +
        i +
        '3" name="info' +
        i +
        '3" style="width:30px;" value="' +
        infoTmp.rank +
        '"><label for="dice">勇気：</label><input type="number" id="info' +
        i +
        '4" name="info' +
        i +
        '4" style="width:30px;" value="' +
        infoTmp.status[0] +
        '"><label for="dice">慎重：</label><input type="number" id="info' +
        i +
        '5" name="info' +
        i +
        '5" style="width:30px;" value="' +
        infoTmp.status[1] +
        '"><label for="dice">自制：</label><input type="number" id="info' +
        i +
        '6" name="info' +
        i +
        '6" style="width:30px;" value="' +
        infoTmp.status[2] +
        '"><label for="dice">正義：</label><input type="number" id="info' +
        i +
        '7" name="info' +
        i +
        '7" style="width:30px;" value="' +
        infoTmp.status[3] +
        '"></details></div > ';
      console.log("てす");
      if (loche == 1) {
        sysysy = [["000", 0]];
        sycon.push(sysysy);
        sycount(i);
        sysysy = [i, 0, 0, 0, 0];
        keiti.push(sysysy);
        keilog.push("");
        zenkai.push("0");
        //dassoulog.push(1);
        save.push([
          i,
          "noname",
          "none",
          "1",
          "1",
          "1",
          "1",
          "1",
          "000",
          "0",
          "00" + i,
        ]);
        nunba.push(i);
      }
    }
  }
  se_logt = set_log;
  let result = se_logt.filter(function (item) {
    return item !== "miss";
  });
  selogtext = result.join("");
  target = document.getElementById("haiti");
  target.innerHTML = selogtext;
  set_log_count += 1;
}

function listLog() {
  for (i = 1; i < logcount; i++) {
    if (log[i] == null) {
      log[i] =
        '<li  class="log" id="li' +
        i +
        '">' +
        i +
        ":ID," +
        result[2] +
        ":" +
        agentnm +
        ":" +
        result[3] +
        ":" +
        seitxt +
        ":" +
        keitxt +
        ":PE" +
        peti +
        '<details class="log" style="display:inline;"><summary class="log" style="cursor:pointer; border:1px solid black; width:60px; color: #63b1d1;">詳細</summary> <div style="cursor:pointer; color: #63b1d1; border:1px solid black; width:250px; margin-top:5px; padding:7px;">' +
        twetext +
        '</div></details><input type="button" value="消去" onclick="kesi(' +
        i +
        "," +
        peti +
        "," +
        syid +
        "," +
        keikenti +
        "," +
        sagyona +
        ');"></li>';
    }
  }
  logt = log;
  var result = logt.filter(function (item) {
    return item !== "miss";
  });
  logtext = result.join("");
  target = document.getElementById("comelog");
  target.innerHTML = logtext;
  logcount += 1;
}

function kesi(del_no, pet, del_i, keiket, ksagyo) {
  console.log("開始");
  log[del_no] = "miss";
  const DelID = "li" + del_no;
  kdoc = document.getElementById(DelID);
  kdoc.remove();
  pp = pet;
  petiplus(pp);
  const DelIn_i = ksagyo + 1;
  keiti[del_i][DelIn_i] -= keiket;
  if (keiti[del_i][DelIn_i] <= 0) {
    keiti[del_i][DelIn_i] = 0;
  }

  keiktxt =
    '<li class="log"  >' +
    keiti[del_i][0] +
    agentnm +
    "　勇気：" +
    keiti[del_i][1] +
    "慎重：" +
    keiti[del_i][2] +
    "自制：" +
    keiti[del_i][3] +
    "正義：" +
    keiti[del_i][4] +
    "</li>";
  keilog[del_i] = keiktxt;
  keilogtext = keilog.join("");
  target = document.getElementById("exp_result");
  target.innerHTML = keilogtext;
}
