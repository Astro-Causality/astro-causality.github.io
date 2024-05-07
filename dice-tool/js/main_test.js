//危険度・ダメージ属性・ステータス名置換用
const RankTxt = ["ZAYIN", "TETH", "HE", "WAW", "ALEPH"];
const DmgTypeTxt = ["RED", "WHITE", "BLACK", "PALE"];
const StatusTxt = ["勇気", "慎重", "自制", "正義"];

//リトライ回数
const Retry = 0;

//ロード完了時処理
$(function () {
  "use strict";

  //バージョン記載
  $("#output").text(
    "Ver1.0　公式アカウントに記載のバージョンと異なる場合は更新してください。"
  );

  $("#set_depart").click(function () {
    $.getJSON("./data/base.json", (data) => {
      console.log(JSON.stringify(data));
      retryNum = toString(Retry).padStart(2, "0");
    });
    abListGen();
    emListGen();
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
  $("input#opt_roll").click(rollOptionalDice());
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

//部門内の異次元体リストを作成
function abListGen() {
  let abnmBasicList = [];
  $.getJSON("./data/test/AbnmTest.json", (data)=> {
    abnmBasicList = data;

      $.each(abnmBasicList, (i, slot) => {
        console.log(`▼ ${toString(i).padStart(3, "0")} ▼\n${slot}`);
        const AbThumb = $("#ab_list").add("div.ab_view");
        AbThumb.attr("title", "クリックでエンサイクロペディアを表示(別タブ)");
        const AbTile = $("#ab_select").add("label.ab_select");
        AbTile.add('input[name="select_abnm"]:radio').css("display", "none");
        AbTile.add("div.ab_thumbnail");
        $(`.ab_select:nth-child(${i + 1}), .ab_view:nth-child(${i + 1})`).css(
          "background-image",
          `url('../css/img/abnm/${slot.code}.png')`
        );

        const AbName = AbTile.add("p");
        //詐称あり
        if ((slot.fake_name || slot.fake_rank) && slot.truth_lv != null && slot.obs_lv >= slot.truth_lv) {
          if (slot.fake_name && slot.fake_rank) {
            AbName.text(`${slot.name[1]} / ${RankTxt[slot.rank[1]]}`);
          } else if (!slot.fake_name && slot.fake_rank) {
            AbName.text(`${slot.name[0]} / ${RankTxt[slot.rank[1]]}`);
          } else if (slot.fake_name && !slot.fake_rank) {
            AbName.text(`${slot.name[1]} / ${RankTxt[slot.rank[0]]}`);
          }
        }
        //詐称なし
        else AbName.text(`${slot.name[0]} / ${RankTxt[slot.rank[0]]}`);
      });
    });
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
  })
}