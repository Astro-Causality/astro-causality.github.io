import * as listGen from "./list_gen.js";
import * as work from "./work.js";

const RankTxt = ["ZAYIN", "TETH", "HE", "WAW", "ALEPH"];
const DmgTypeTxt = ["RED", "WHITE", "BLACK", "PALE"];
const StatusTxt = ["勇気", "慎重", "自制", "正義"];

window.addEventListener("load", () => {
  target = document.querySelector("#output");
  target.innerHTML =
    'Ver1.0 公式アカウントに記載のバージョンと異なる場合は更新してください。<input type="button" id="change_txt_style" value="口調変更">';
  document.querySelector("#change_txt_style").addEventListener("click", openFile());

  document.querySelector("#diceroll_work").addEventListener("click", work.rollWorkDice(),false);
});

function getData(e) {
  console.log("test");
  var xml = e.target.result;

  const parser = new DOMParser();
  const xmlString = xml;
  const doc1 = parser.parseFromString(xmlString, "application/xml");
  var nodes = doc1.getElementsByTagworkerName("T1");
  T1 = nodes[0].textContent;
  console.log(T1);
  var nodes = doc1.getElementsByTagworkerName("T2");
  T2 = nodes[0].textContent;
  console.log(T2);
  var nodes = doc1.getElementsByTagworkerName("Tcrit");
  Tcrit = nodes[0].textContent;
  console.log(Tcrit);
  var nodes = doc1.getElementsByTagworkerName("Tgift");
  Tgift = nodes[0].textContent;
  console.log(Tgift);
  var nodes = doc1.getElementsByTagworkerName("Tfumb");
  Tfumb = nodes[0].textContent;
  console.log(Tfumb);
  var nodes = doc1.getElementsByTagworkerName("Tsuccess");
  Tsuccess = nodes[0].textContent;
  console.log(Tsuccess);
  var nodes = doc1.getElementsByTagworkerName("Tfailure");
  Tfailure = nodes[0].textContent;
  console.log(Tfailure);
  var nodes = doc1.getElementsByTagworkerName("Tsurvive");
  Tsurvive = nodes[0].textContent;
  console.log(Tsurvive);
  var nodes = doc1.getElementsByTagworkerName("Tdead");
  Tdead = nodes[0].textContent;
  console.log(Tdead);
  var nodes = doc1.getElementsByTagworkerName("Tescape");
  Tescape = nodes[0].textContent;
  console.log(Tescape);
  var nodes = doc1.getElementsByTagworkerName("Tpanic");
  Tpanic = nodes[0].textContent;
  console.log(Tpanic);
}

function openFile() {
  T1 = "です";
  T2 = "した";
  T3 = "た";
  T4 = "ない";
  T5 = "いる";
  Tcrit = "クリティカル!　";
  Tgift = "ギフト入手";
  Tfumb = "ファンブル!　観測レベル上昇なし";
  Tsuccess = "作業成功";
  Tfailure = "作業失敗";
  Tsurvive = "生還";
  Tdead = "死亡";
  Tescape = "は脱走した";
  Tpanic = "パニックに陥った";
  const input = document.createElement("input");
  input.type = "file";
  input.addEventListener("change", function (e) {
    const files = input.files;
    var file = files[0];
    var reader = new FileReader();
    reader.addEventListener("load", getData, false);
    reader.readAsText(file);

    var result = e.target.files[0];

    reader.addEventListener("load", () => {
      var title = result.agentnm.match(/(.*)\.xml$/)[1];
      lodata = result;
      console.log(result);
    });
  });

  input.click();
}

function saveLocalStorage() {
  const json_header = [{ no: setrog.length }, { data: save }];
  let data_json = JSON.stringify(json_header);
  localStorage.setItem("data_employees",data_json);
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