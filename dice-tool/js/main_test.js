import Department from "./libs/Department.js";

//危険度・ダメージ属性・ステータス名置換用
const RankTxt = ["ZAYIN", "TETH", "HE", "WAW", "ALEPH"];
const DmgTypeTxt = ["RED", "WHITE", "BLACK", "PALE"];
const StatusTxt = ["勇気", "慎重", "自制", "正義"];

//リトライ回数
const Retry = 0;

//ロード完了時処理
export default $(function () {
  "use strict";

  //バージョン記載
  $("#output").text(
    "Ver1.0　公式アカウントに記載のバージョンと異なる場合は更新してください。"
  );

  $("#set_depart").click(function () {
    // 部門データ生成
    const Dep = new Department($("#department").val());
    $("#depart_name").text(Dep.departName);

    $("#depart_info, #em_list, #ab_list").css("visibility", "visible");
  });

  $("#clear_depart").click(resetAll());

  $("#start_work").click(function () {
    $("#workfrm").css("visibility", "visible");
  });

  //作業ロール「ダイス」ボタン
  $("#diceroll_work").click(function () {
    $.getScript("./libs/work.js");
  });

  //ダイスツールの「振る」ボタン
  $("#opt_roll").click(rollOptionalDice());
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
    opt_values[i] = opt_sum;
    $("#result_opt").add("li.log").text(opt_sum);
    console.log(opt_values[i]);
  }
}

//部門内の職員リストを作成
function emListGen() {
  let emList = [];
  $.getJSON("./data/test/EmpTest.json", (data) => {
    emList = data;

    $.each(emList, (i, slot) => {
      console.log(`▼ ${toString(i).padStart(3, "0")} ▼\n${slot}`);
      const EmTile = $("#em_list").add("label.em_select");
      EmTile.add('input[name="select_emp"]:checkbox').css({
        display: "none",
      });
      EmTile.add("p").text(`${slot.id}: ${slot.details.nm}`);
    });
  });
}
