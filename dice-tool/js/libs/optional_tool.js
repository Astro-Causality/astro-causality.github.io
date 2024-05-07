export * as opt from "./optional_tool.js";

function rollOptionalDice() {
  console.log("開始");
  const OptNum = parseInt(document.hanteisuru["nini1"].value);
  const OptFaces = parseInt(document.hanteisuru["nini2"].value);
  const OptTimes = parseInt(document.hanteisuru["nini3"].value);

  let opt_values = [];

  for (i = 0; i < OptTimes; i++) {
    let opt_sum = 0;
    for (j = 0; j < OptNum; j++) {
      const OptTmp = Math.floor(Math.random() * OptFaces + 1);
      opt_sum += OptTmp;
    }
    const OptLi = document.createElement("li");
    OptLi.className = "log";
    OptLi.textContent = toString(opt_sum);
    opt_values[i] = OptLi;
    console.log(opt_values[i]);
  }

  opt_values.forEach((opt_val) => {
    document.querySelector("#result_opt").appendChild(opt_val);
  });
}