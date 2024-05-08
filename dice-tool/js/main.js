import Department from "./libs/Department.js";
import { rollOptionalDice } from "./libs/OptionalTool.js";

const DayData = {
  day: 1,
  retry: 0,
};

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

  $("#set_depart").click(function () {
    // 部門データ生成
    const Dep = new Department($("#department").val());
    $("#depart_name").text(Dep.departName);


    $("#em_list")

    $("#depart_info, #em_list, #ab_list").css("visibility", "visible");
  });

  $("#clear_depart").click(resetAll());

  $("#start_work").click(function () {
    $("#workfrm").css("visibility", "visible");
  });

  //作業ロール「ダイス」ボタン
  $("#diceroll_work").click(function () {
    $.getScript("./work.js");
  });

  //ダイスツールの「振る」ボタン
  $("#opt_roll").on("click", rollOptionalDice());
});

function saveLocalStorage() {
  //職員データをローカルストレージとJSONファイルで保存
  const json_header = [{ no: setlog.length }, { data: save }];
  let data_json = JSON.stringify(json_header);
  localStorage.setItem("data_employees", data_json);
  const SaveDate = new Date();
  const FileName =
    "ACST_save_" +
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
