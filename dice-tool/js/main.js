import * as Dep from "./libs/Department.js";
import { rollOptionalDice } from "./libs/OptionalTool.js";

//危険度・ダメージ属性・ステータス名置換用
const RankTxt = ["ZAYIN", "TETH", "HE", "WAW", "ALEPH"];
const DmgTypeTxt = ["RED", "WHITE", "BLACK", "PALE"];
const StatusTxt = ["勇気", "慎重", "自制", "正義"];

//ロード完了時処理
jQuery(function ($) {
  ("use strict");

  //バージョン記載
  $("#output").text(
    "Ver1.0　公式アカウントに記載のバージョンと異なる場合は更新してください。"
  );

  $("#set_depart").bind("click", function () {
    // 部門データ生成
    const DepId = $("#department").val();
    const DepNm = Dep[`Dep${DepId}`];
    $("#depart_name").text(DepNm);

    $("#ab_list").css("visibility", "visible");
  });

  $("#clear_depart").bind("click", function () {
    $("#ab_list").css("visibility", "collapse");
    $("#depart_name").text("未選択");
    $("#department option:hidden").prop("selected", true);
  });

  //作業ロール「ダイス」ボタン
  $("#diceroll_work").bind("click", function () {
    $.getScript("./libs/Work.js");
  });

  //ダイスツールの「振る」ボタン
  $("#opt_roll").bind("click", rollOptionalDice());
});