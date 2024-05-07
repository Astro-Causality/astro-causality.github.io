//危険度・ダメージ属性・ステータス名置換用
const RankTxt = ["ZAYIN", "TETH", "HE", "WAW", "ALEPH"];
const DmgTypeTxt = ["RED", "WHITE", "BLACK", "PALE"];
const StatusTxt = ["勇気", "慎重", "自制", "正義"];

//ロード完了時処理
$(function () {
  ("use strict");

  //バージョン記載
  $("#output").text(
    "Ver1.0　公式アカウントに記載のバージョンと異なる場合は更新してください。"
  );

  $("#set_depart").click(setDepart());

  $("#clear_depart").click(resetAll());

  $("#start_work").click(function () {
    $("#workfrm").css("visibility", "visible");
  });

  //作業ロール「ダイス」ボタン
  $("#diceroll_work").click(function () {
    $.getScript("./work.js");
  });

  //ダイスツールの「振る」ボタン
  $("#opt_roll").on("click",rollOptionalDice());
});

function saveLocalStorage() {
  //職員データをローカルストレージとJSONファイルで保存
  const json_header = [{ no: setlog.length }, { data: save }];
  let data_json = JSON.stringify(json_header);
  localStorage.setItem("data_employees", data_json);
  const SaveDate = new Date();
  const FileName =
    "ASCT_save_" +
    toString(SaveDate.getFullYear()) +
    toString(SaveDate.getMonth()).padStart(2, "0") +
    toString(SaveDate.getDate()).padStart(2, "0") +
    ".json";
  const LinkTag = document.createElement("a");
  LinkTag.href = "data:text/plain," + encodeURIComponent(data_json);
  LinkTag.download = FileName;
  LinkTag.click();
}

function resetAll() {
  $("#depart_info, #em_list, #ab_list").css("visibility", "collapse");
  for (let i = 0; i < $("#ab_list label").length; i++) {
    $(`#${i + 1}`).remove();
  }

  localStorage.removeItem("data_employees");
}

function setDepart() {
  $.getScript("./list_gen.js", abListGen(),emListGen());
  $("#depart_info, #em_list, #ab_list").css("visibility", "visible");
}

//任意ダイスツール用関数
function rollOptionalDice() {
  console.log("開始");
  const OptNum = parseInt($("#opt_num").val());
  const OptFaces = parseInt($("#opt_faces").val());
  const OptTimes = parseInt($("#opt_times").val());

  let opt_values = [];

  for (i = 0; i < OptTimes; i++) {
    let opt_sum = 0;
    for (j = 0; j < OptNum; j++) {
      const OptTmp = Math.floor(Math.random() * OptFaces + 1);
      opt_sum += OptTmp;
    }
    $("#result_opt").add("li.log").text(opt_sum);
    console.log(opt_values[i]);
  }
}
