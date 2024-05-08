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
