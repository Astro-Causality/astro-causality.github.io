import * as logGen from "./log_gen.js";
import { AbnmBasic, AbnmTool } from "../data/AbData.js";

let dice_num = 1;
let dice_faces = 6;



export function setWorkType(abnm_data) {
  $.each(abnm_data.work_data.work_types, (index, work_type) => {
    const Item = $("#work_select").add("option");
    Item.text(work_type);
    Item.val(index);
  });
}

export function rollWorkDice() {
  dice_num = document.roll_work["st_b_wk"].value;
  dice_faces = document.roll_work["dice_num_wk"].value;
  let dice_tmp = 0;
  let dice_sum = 0;

  for (i = 0; i < dice_num; i++) {
    dice_tmp = Math.floor(Math.random() * dice_faces) + 1;
    dice_sum += dice_tmp;
  }

  logGen.setText(dice_sum);
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

export function nowJudging() {
  let irai = 0;
  let ab_rank = 0; //危険度ランク
  let ab_name = "";
  let agent = "NO NAME"; //職員名
  let work_no = 0;

  let sitxt = ""; //死亡時テキスト

  //作業不可反応系

  //パニック反応系

  //死亡反応系

  //脱走反応系

  //最終的なディムカウンターを記録・表示

  //獲得PE-Boxの値が負の場合、0に修正

  //作業した異次元体のIDを職員ごとに記録

  //経験値関連(別メソッド)

  //テキストの生成
}

export function calcExp() {
  let no = work_no + 1;
}