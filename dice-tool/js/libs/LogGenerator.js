import { txtWkR, txtExp, diceSum } from "./work.js";

const InnerLogData = {
  logId: "0000",
  id: "0000",
  work: "本能",
  diceval: 1,
  agent: "NAME",
  gender: "?",
  rank: 1,
  status: [1, 1, 1, 1],
  buf: ["0000"],
  count: 1,
  additional: 0,
}

export var InnerLogEmp={...InnerLogData};
export var rslt = [""];

let set_text = [""];
let se_logt = [];
let selogtext = "";
let logt = [];
let setEmpInfo = [""];
let setLogCount = 1;

let reco = 1;
let log = [ResultLog.defaultTxt];

let save = ["自動で経験値とリザルトツールに加算されます。\n消去でログが消えます(※リザルトツールからも引かれます)。"];

function set11() {

  InnerLogEmp.agent = $('input[name="info51"]').val();
  InnerLogEmp.gender = $('input[name="info52"]').val();
  InnerLogEmp.rank = $('input[name="info53"]').val();
  InnerLogEmp.status[0] = $('input[name="info54"]').val();
  InnerLogEmp.status[1] = $('input[name="info55"]').val();
  InnerLogEmp.status[2] = $('input[name="info56"]').val();
  InnerLogEmp.status[3] = $('input[name="info57"]').val();
  InnerLogEmp.buf = $('input[name="info58"]').val().split(",");
  InnerLogEmp.additional = parseInt($('input[name="info59"]').val());
  textset();
  $("buf").val() = InnerLogEmp.additional;
  syid = 4;
}

function set12() {
  tt2 = $("#work_select").val();
  textset();
}

function set(idx) {
  for (i = 1; i < 11; i++) {
    let infoNm = "info" + idx + i;
    switch (i) {
      case 1:
        InnerLogEmp.agent = save[idx][i] = $(`input[name="${infoNm}"]`).val();
        break;
      case 2:
        InnerLogEmp.gender = save[idx][i] = $(`input[name="${infoNm}"]`).val();
        break;
      case 3:
        InnerLogEmp.rank = save[idx][i] = $(`input[name="${infoNm}"]`).val();
        break;
      case 4:
        InnerLogEmp.status[0] = save[idx][i] = $(`input[name="${infoNm}"]`).val();
        break;
      case 5:
        InnerLogEmp.status[1] = save[idx][i] = $(`input[name="${infoNm}"]`).val();
        break;
      case 6:
        InnerLogEmp.status[2] = save[idx][i] = $(`input[name="${infoNm}"]`).val();
        break;
      case 7:
        InnerLogEmp.status[3] = save[idx][i] = $(`input[name="${infoNm}"]`).val();
        break;
      case 8:
        InnerLogEmp.buf = $(`input[name="${infoNm}"]`).val().split(/,/);
        save[idx][i] = $(`input[name="${infoNm}"]`).val();
        break;
      case 9:
        InnerLogEmp.additional = save[idx][i] = $(`input[name="${infoNm}"]`).val();
        break;
      case 10:
        InnerLogEmp.logId = save[idx][i] = $(`input[name="${infoNm}"]`).val();
        break;
    }
  }
  textset();
  $("#buf").val() = InnerLogEmp.additional;
  kakee = syisg.indexOf(tt14);
  syid = idx;
  /*
    dassoulog[syid] = Number(tt10);
    let total = dassoulog.reduce(function (sum, element) {
        return sum + element;
    }, 0);
    hp = 0;
    dise = 0;
    for (i = 0; i <= total; i++) {
        if (i >= 1 ) {
            if ((i % 5) == 0) {

                    hp += 30;

            }
            if ((i % 10) == 0) {

                    dise += 4;

            }
        }
    }
    if (dise >= 13) {
        dise = 13;
    }
    dassoutxt = dassousyoki + "　正義合計:" + total + "　" +"HP+"+hp+"（上限は元の3倍まで）　与ダメ+"+dise;
    target = document.getElementById("dassoulog");
    target.innerHTML = dassoutxt;
    */
}

function setLog(logH) {
  for (i = 0; i < setLogCount; i++) {
    if (setEmpInfo[i] == null && logH == 0) {
      if (logH == 0) {
        set_text = `'<div class="keilog"><input type="button" value="セット" onclick="set(${i});">
          <label for="dice">ID：</label><input type="number" id="info${i}10" name="info${i}10" style="width:50px;" value="${toString(i).padStart(4,"0")}">
          <label for="dice">職員名：</label><input size="10" type="text" name="info${i}1" style="width:100px;" value="NAME">
          <label for="dice">加護：</label><input size="10" type="text" name="info${i}8" style="width:150px;" value="000">
          <label for="dice">補正値：</label><input type="number" id="info${i}9" name="info${i}9" style="width:50px;" value="0">
          <details style="display:inline-block;"><summary style="margin-left:10px;cursor:pointer;border:1px solid black; width:60px; display:inline;">開く</summary>
          <label for="dice">性別：</label><input size="10" type="text" name="info${i}2" style="width:50px;" value="none">
          <label for="dice">ランク：</label><input type="number" id="info${i}3" name="info${i}3" style="width:30px;" value="1">
          <label for="dice">勇気：</label><input type="number" id="info${i}4" name="info${i}4" style="width:30px;" value="1">
          <label for="dice">慎重：</label><input type="number" id="info${i}5" name="info${i}5" style="width:30px;" value="1">
          <label for="dice">自制：</label><input type="number" id="info${i}6" name="info${i}6" style="width:30px;" value="1">
          <label for="dice">正義：</label><input type="number" id="info${i}7" name="info${i}7" style="width:30px;" value="1">
          </details></div > '`;
        setEmpInfo.push(set_text);
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
    }
    else {
      for (let j = 1; j < 11;j++){
        const InfoId = "info" + i + j;
        switch (i) {
          case 1:
            if (logH === 1) InnerLogEmp.agent = save[i][j];
            else InnerLogEmp.agent = save[i][j] = $(`input[name="${infoId}"]`).val();
            break;
          case 2:
            if (logH === 1) InnerLogEmp.gender = save[i][j];
            else InnerLogEmp.gender = save[i][j] = $(`input[name="${infoId}"]`).val();
            break;
          case 3:
            if (logH === 1) InnerLogEmp.rank = save[i][j];
            else InnerLogEmp.rank = save[i][j] = $(`input[name="${infoId}"]`).val();
            break;
          case 4:
            if (logH === 1) InnerLogEmp.status[0] = save[i][j];
            else InnerLogEmp.status[0] = save[i][j] = $(`input[name="${infoId}"]`).val();
            break;
          case 5:
            if (logH === 1) InnerLogEmp.status[1] = save[i][j];
            else InnerLogEmp.status[1] = save[i][j] = $(`input[name="${infoId}"]`).val();
            break;
          case 6:
            if (logH === 1) InnerLogEmp.status[2] = save[i][j];
            else InnerLogEmp.status[2] = save[i][j] = $(`input[name="${infoId}"]`).val();
            break;
          case 7:
            if (logH === 1) InnerLogEmp.status[3] = save[i][j];
            else InnerLogEmp.status[3] = save[i][j] = $(`input[name="${infoId}"]`).val();
            break;
          case 8:
            if (logH === 1) InnerLogEmp.buf = save[i][j].split(/,/);
            else {
              InnerLogEmp.buf = $(`input[name="${infoId}"]`).val().split(/,/);
              save[i][j] = $(`input[name="${infoId}"]`).val();
            }
            break;
          case 9:
            if (logH === 1) InnerLogEmp.additional = save[i][j];
            else InnerLogEmp.additional = save[i][j] = $(`input[name="${infoId}"]`).val();
            break;
          case 10:
            if (logH === 1) InnerLogEmp.logId = save[i][j];
            else InnerLogEmp.logId = save[i][j] = $(`input[name="${infoId}"]`).val();
            break;
        }
      }
      setEmpInfo[i] =
        `'<div class="keilog"><input type="button" value="セット" onclick="set(${i});">
        <label for="dice">ID：</label><input type="number" id="info${i}10" name="info${i}10" style="width:50px;" value="${InnerLogEmp.id}">
        <label for="dice">職員名：</label> <input size="10" type="text" name="info${i}1" style="width:100px;" value="${InnerLogEmp.agent}">
        <label for="dice">加護：</label><input size="10" type="text" name="info${i}8" style="width:150px;" value="${InnerLogEmp.buf}">
        <label for="dice">補正値：</label><input type="number" id="info${i}9" name="info${i}9" style="width:50px;" value="${InnerLogEmp.additional}">
        <details style="display:inline-block;"><summary style="margin-left:10px;cursor:pointer;border:1px solid black; width:60px; display:inline;">開く</summary>
        <label for="dice">性別：</label><input size="10" type="text" name="info${i}2" style="width:50px;" value="${InnerLogEmp.gender}">
        <label for="dice">ランク：</label><input type="number" id="info${i}3" name="info${i}3" style="width:30px;" value="${InnerLogEmp.rank}">
        <label for="dice">勇気：</label><input type="number" id="info${i}4" name="info${i}4" style="width:30px;" value="${InnerLogEmp.status[0]}">
        <label for="dice">慎重：</label><input type="number" id="info${i}5" name="info${i}5" style="width:30px;" value="${InnerLogEmp.status[1]}">
        <label for="dice">自制：</label><input type="number" id="info'${i}6" name="info${i}6" style="width:30px;" value="${InnerLogEmp.status[2]}">
        <label for="dice">正義：</label><input type="number" id="info${i}7" name="info${i}7" style="width:30px;" value="${InnerLogEmp.status[3]}">
        </details></div>'`;
      console.log("test");
      if (logH == 1) {
        sysysy = [["000", 0]];
        sycon.push(sysysy);
        sycount(i);
        sysysy = [i, 0, 0, 0, 0];
        keiti.push(sysysy);
        keilog.push("");
        zenkai.push("0");
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
  se_logt = setEmpInfo;
  let result = se_logt.filter(function (item) {
    return item !== "miss";
  });
  selogtext = result.join("");
  target = document.getElementById("haiti");
  target.innerHTML = selogtext;
  set_log_count += 1;
}

export function listLog() {
  for (i = 1; i < logcount; i++) {
    if (log[i] == null) {
      log[i] =
        `<li  class="log" id="li${i}">${i}:ID,${rslt[2]}:${InnerLogEmp.agent}:${rslt[3]}:${txtWkR}:${txtExp}:PE${peti}\n
        <details class="log" style="display:inline;"><summary class="log" style="cursor:pointer; border:1px solid black; width:60px; color: #63b1d1;">詳細</summary>
        <div style="cursor:pointer; color: #63b1d1; border:1px solid black; width:250px; margin-top:5px; padding:7px;">{twetext}
        </div></details><input type="button" value="消去" onclick="deleteLog(${i},${peti},${syid},${keikenti},${sagyona});"></li>`;
    }
  }
  logt = log;
  var result = logt.filter((item) => {
    return item !== "miss";
  });
  logtext = result.join("");
  target = document.getElementById("total_log");
  $("#total_log").html(logtext);
  logcount += 1;
}

export function textset() {
  const RsltTxt =
    `@AstroCausality #ACst_作業\n
    ID:${InnerLogEmp.id}\n
    作業:${InnerLogEmp.work}\n
    出目:${InnerLogEmp.diceval}\n
    名前:${InnerLogEmp.agent}\n
    性別:${InnerLogEmp.gender}\n
    総合ランク:${InnerLogEmp.rank}\n
    能力ランク:\n
    ${InnerLogEmp.status[0]}/${InnerLogEmp.status[1]}/${InnerLogEmp.status[2]}/${InnerLogEmp.status[3]}\n
    加護:${InnerLogEmp.buf}\n
    現在カウント:${InnerLogEmp.count}`;

  $("#result_work").val(RsltTxt);
  $("#st_b_wk").val(InnerLogEmp.status[2]);
}

function deleteLog(del_no, peVal, emId, expv, wkct) {
  console.log("開始");
  log[del_no] = "miss";
  const DelID = "li" + del_no;
  kdoc = document.getElementById(DelID);
  kdoc.remove();
  pp = peVal;
  petiplus(pp);
  const DelIn_i = wkct + 1;
  keiti[emId][DelIn_i] -= expv;
  if (keiti[emId][DelIn_i] <= 0) {
    keiti[emId][DelIn_i] = 0;
  }

  keiktxt =
    '<li class="log">' +
    keiti[emId][0] +
    agentnm +
    "　勇気：" +
    keiti[emId][1] +
    "慎重：" +
    keiti[emId][2] +
    "自制：" +
    keiti[emId][3] +
    "正義：" +
    keiti[emId][4] +
    "</li>";
  keilog[emId] = keiktxt;
  keilogtext = keilog.join("");
  target = document.getElementById("exp_result");
  target.innerHTML = keilogtext;
}

export function setData() {
  rslt = $("#result_work").val().split(/\n/);
  const RsltCount = rslt.length;

  for (var i = 0; i < RsltCount; ++i) {
    const DataTxt = rslt[i].split(/\s\s+/).join("");
    let dataSp = DataTxt.split(":");
    if (i >= 1 || i == 3 || i == 5 || i == 6 || i == 12) {
      if (dataSp[1].toLowerCase() == "ex") {
        dataSp[1] = 6;
      }
      rslt[i] = dataSp[1];
    } else {
      if (dataSp[1].toLowerCase() == "ex") {
        dataSp[1] = 6;
      }
      rslt[i] = parseInt(dataSp[1]);
    }
  }
  tt12 = rslt[12];
  let bufArr = rslt[12].split(/,/);
  rslt[12] = bufArr;
  diceSum = rslt[4];

  for (var i = 0; i < RsltCount; ++i) {
    if (rslt[i] == null) {
      if (i >= 2) {
        alert(i + 1 + "行目入力エラー");
      }
    } else {
      continue;
    }
  }
}