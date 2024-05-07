import { setText } from "./log_gen.js";

const WorkBasic = ["本能", "洞察", "愛着", "抑圧",];
const WorkTool = [["使用","返却"],["使用開始","使用中止"],];

let dice_num = 1;
let dice_faces = 6;

function setWorkType(abnm_data) {
  abnm_data.work_data.work_types.foreach((work_type) => {
    let i = 0;
    const Item = document.createElement("option");
    Item.textContent = work_type;
    Item.value = i;
    document.querySelector("#work_select").appendChild(Item);
    i++;
  });
}

function rollWorkDice() {
  dice_num = document.roll_work["st_b_wk"].value;
  dice_faces = document.roll_work["dice_num_wk"].value;
  let dice_tmp = 0;
  let dice_sum = 0;

  for (i = 0; i < dice_num; i++) {
    dice_tmp = Math.floor(Math.random() * dice_faces) + 1;
    dice_sum += dice_tmp;
  }

  setText(dice_sum);
}

function displayLink() {
  let linkTag = "";
  const LinkTag = document.createElement("a");
  conc = con.map(function (value, index) {
    return value[0];
  });
  conc2 = con.map(function (value, index) {
    return value[2];
  });
  conc3 = conc.indexOf(tt1);
  lin = conc2[conc3];
  if (lin != "kari") {
    LinkTag.href = lin;
    LinkTag.target = "_blank";
    LinkTag.rel = "noopener noreferrer";
    LinkTag.id = "info_link";
    LinkTag.textContent = "エンサイクロペディア (別タブ)";
    linkTag =
      '<a href="' +
      lin +
      '" target="_blank" rel="noopener noreferrer">エンサイクロペディア（新規タブ）</a>';
    target = document.getElementById("linklog");
    target.innerHTML = linkTag;
  }
}