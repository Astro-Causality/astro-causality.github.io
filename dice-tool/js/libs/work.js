import * as LogGen from "./LogGenerator.js";
import * as Abnm from "../data/AbData.js";
import rollDice from "./rollDice.js";
import * as Dep from "./Department.js";
import * as Emp from "../data/EmpData.js";

let diceNum = 1;
let diceFaces = 6;
export var diceSum = 0;

export var txtWkR = "";
export var txtExp = "";

export var empId = -1;

export function setWorkType(abnm_data) {
  $.each(abnm_data.wcate, (idx, wktp) => {
    const Item = $("#work_select").add("option");
    Item.text(wktp);
    Item.val(idx);
  });
}

export function rollWorkDice() {
  diceNum = document.roll_work["st_b_wk"].val();
  diceFaces = document.roll_work["dice_num_wk"].val();
  diceSum = rollDice(diceNum, diceFaces);
  LogGen.setText(diceSum);
}

export function displayLink() {
  const LinkTag = $("#link_log").add("a#info_link");
  conc = con.map(function (value, index) {
    return value[0];
  });
  conc2 = con.map(function (value, index) {
    return value[2];
  });
  conc3 = conc.indexOf(tt1);
  const LinkData = conc2[conc3];
  if (LinkData != "kari") {
    LinkTag.attr({
      href: LinkData,
      target: "_blank",
      rel: "noopener noreferrer",
    });
    LinkTag.text("エンサイクロペディア (別タブ)");
  }
}

export function nowJudging(dpId, abId, emId, wcate) {
  const Dp = Dep["Dep" + dpId];
  const Ab = Abnm["Ab" + abId];
  const Em = Emp["Emp" + emId];

  const AbRk = Ab.rk; //危険度ランク
  const AbNm = (Ab.obLv >= 1) ? Ab.nm : Ab.mngCode;
  const AgentNm = Em.nm; //職員名

  let isWorkSp = false;
  let spWorkNm1 = "";
  let spWorkNm2 = "";
  let isSuccess = 0;

  let peVal = 0;
  let expVal = 0;
  let expName = "";

  let txtSoD = ""; //死亡or生還時テキスト
  let isAlive = true;
  let bufs = parseInt($("#buf").val().split(/,/));

  if (wcate == "本能") {
    isWorkSp = false;
    expName = "勇気：";
  } else if (wcate == "洞察") {
    isWorkSp = false;
    expName = "慎重：";
  } else if (wcate == "愛着") {
    isWorkSp = false;
    expName = "自制：";
  } else if (wcate == "抑圧") {
    isWorkSp = false;
    expName = "正義：";
  } else {
    isWorkSp = false;
  }

  if (wcate === 99) {
    isWorkSp = true;
    expName = "特殊：";
  }

  let dimCt = parseInt(LogGen.rslt[13]);

  //作業不可系が動くタイミング

  //パニック反応系が動くタイミング

  //死亡反応系が動くタイミング

  //職員が死んだらテキスト出す
  if (!isAlive) {
    txtSoD = Dp.txtDead(AgentNm);
  } else {
    txtSoD = Dp.txtSurvive();
  }

  if (WkCate == 4 || WkCate == 5) {
    txtWkR = "";
    isSuccess = 3;
  }

  //作業成功したら経験値
  if (isSuccess === 1) {
    txtExp = expName + expVal;
  } else {
    txtExp = 0;
    expVal = 0;
  }

  //脱走反応系が動くタイミング

  if (!isAlive) {
    LogGen.InnerLogEmp.buf = "";
    let bufIdx = "info" + syid + "8";
    $(`input[name="${bufIdx}"]`).val() = "000";
  }

  //最終的なディムカウンターを記録・表示
  LogGen.rslt[13] = LogGen.InnerLogEmp.count = dimCt;
  LogGen.textset();

  //獲得PE-Boxの値が負の場合、0に修正

  //作業した異次元体のIDを職員ごとに記録

  //経験値関連(別メソッド)

  //テキストの生成
  let tweetTxt =
    AbNm +
    " " +
    tire +
    "\n" +
    AgentNm +
    "　" +
    irana +
    "\n\n" +
    seitxt +
    kuritxt +
    text +
    sitxt +
    dametxt +
    "\n獲得PiE-BOX：" +
    peVal +
    "\n獲得経験値　" +
    txtExp;
  $("#result_work2").val(tweetTxt);
  LogGen.listLog();
  const WorkPeRslt = parseInt($("#work_pe_sum").val());
  $("#work_pe_sum").val(WorkPeRslt + peVal);
}

export function calcExp() {
  let no = work_no + 1;
}