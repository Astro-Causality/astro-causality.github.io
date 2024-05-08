export const rollOptionalDice = function() {
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