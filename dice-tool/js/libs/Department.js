const DepData = {
  depA: [
    { abs: ["1001", "0000", "0000", "0000"], ems: ["000", "000", "000", "000", "000"] }, //1:本部-制御課
    { abs: ["0000", "0000", "0000", "0000"], ems: ["000", "000", "000", "000", "000"] }, //5a:本部-管制1課
    { abs: ["0000", "0000", "0000", "0000"], ems: ["000", "000", "000", "000", "000"] }, //5b:本部-管制2課
    { abs: ["0000", "0000", "0000", "0000", "0000", "0000", "0000", "0000"], ems: ["000", "000", "000", "000", "000"] }, //13:本部-設計課
  ],
  depB:[
    { abs: ["0000", "0000", "0000", "0000"], ems: ["000", "000", "000", "000", "000"] }, // 2:情報部-検閲課
    { abs: ["0000", "0000", "0000", "0000"], ems: ["000", "000", "000", "000", "000"] }, //12:情報部-記録課
  ],
  depC:[
    { abs: ["0000", "0000", "0000", "0000"], ems: ["000", "000", "000", "000", "000"] }, // 3:人事部-教育課
    { abs: ["0000", "0000", "0000", "0000"], ems: ["000", "000", "000", "000", "000"] }, // 6:人事部-懲戒課
  ],
  depD:[
    { abs: ["0000", "0000", "0000", "0000"], ems: ["000", "000", "000", "000", "000"] }, // 4:厚生部-安全課
    { abs: ["0000", "0000", "0000", "0000"], ems: ["000", "000", "000", "000", "000"] }, // 7:厚生部-福祉課
  ],
  depE:[
    { abs: ["0000", "0000", "0000", "0000"], ems: ["000", "000", "000", "000", "000"] }, // 8:警備部-防衛課
    { abs: ["0000", "0000", "0000", "0000"], ems: ["000", "000", "000", "000", "000"] }, // 9:警備部-視察課
  ],
  depF:[
    { abs: ["0000", "0000", "0000", "0000"], ems: ["000", "000", "000", "000", "000"] }, //10:抽出部-精製課
    { abs: ["0000", "0000", "0000", "0000"], ems: ["000", "000", "000", "000", "000"] }, //11:抽出部-抽出課
  ]
};

class Department {
  depId = "";
  depName = "";
  signName = "";
  employees = [""];
  abnorms = [""];

  coreSup = false;

  txt = {
    end1: "です",
    end2: "した",
    end3: "た",
    end4: "ない",
    end5: "いる",
    crit: "クリティカル、　",
    gift: "ギフト入手",
    fumb: "ファンブル、観測レベル上昇なし",
    succ: "作業成功",
    falr: "作業失敗"
  };

  txtDead(emp) {
    return `▼職員${emp}は死んでいる。\n`;
  }
  txtSurvive() {
    return `▼生還\n`;
  }
  txtPanic(emp, tp) {
    return `▼${emp}は${tp}性パニックに陥った。\n`;
  }
  txtEscape(abn) {
    return `▼${abn}は脱走した。\n`;
  }
}

export const DepA0 = class extends Department { //本部制御課
  depId = "A0";
  depName = "本部 - 制御課";
  signName = "カプリコルヌ";

  employees = DepData.depA[0].ems;
  abnorms = DepData.depA[0].abs;

  coreSup = false;

  txt = {
    end1: "だよ",
    end2: "したよ",
    end3: "たよ",
    end4: "ないよ",
    end5: "いるよ",
    crit: "上手くいったっぽい?　",
    gift: "ギフトだって。よかったね",
    fumb: "……あれ?　やらかした?",
    succ: "うん、よかったよ。",
    falr: "あー、ドンマイ。"
  };

  txtDead(emp) {
    return `▼${emp}、死んじゃった……どうしよ……。\n`;
  }
  txtSurvive() {
    return "▼元気そうだね。\n";
  }
  txtPanic(emp,tp) {
    return `▼${emp}が${tp}性のパニックだって!\n　わわ、こういう時どうするんだったっけ?\n`;
  }
  txtEscape(abn) {
    return `▼${abn}が逃げちゃった。\n……こうなったらボコボコにしちゃえ!\n`;
  }
};

export const DepB0 = class extends Department { //情報部検閲課
  depId = "B0";
  depName = "情報部 - 検閲課";
  signName = "ウィルゴ";

  employees = DepData.depB[0].ems;
  abnorms = DepData.depB[0].abs;

  coreSup = false;

  txt = {
    end1: "でござる",
    end2: "したでござる",
    end3: "たでござる",
    end4: "ないでござる",
    end5: "いるでござる",
    crit: "上出来でござる!　",
    gift: "いい贈り物でござるな。",
    fumb: "次があるでござるよ。",
    succ: "コツコツでござるな。",
    falr: "気負ってはいけないでござるよ。",
  };

  txtDead(emp) {
    return `▼${emp}殿の生命反応が途絶えたでござる。\n……他人事では居られないでござるよ。\n`;
  }
  txtSurvive() {
    return `▼また顔が見れて嬉しいでござるよ〜。\n`;
  }
  txtPanic(emp, tp) {
    return `▼${emp}殿が正気を失っている様子でござる。\n${tp}性と見られる故、落ち着けてやってほしいでござるな。\n`;
  }
  txtEscape(abn) {
    return `▼${abn}が家出している様子でござる。\n`;
  }
};

export const DepC0 = class extends Department { //人事部教育課
  depId = "C0";
  depName = "人事部 - 教育課";
  signName = "ピスケス";

  employees = DepData.depC[0].ems;
  abnorms = DepData.depC[0].abs;

  coreSup = false;

  txt = {
    end1: "です",
    end2: "した",
    end3: "た",
    end4: "ない",
    end5: "いる",
    crit: "クリティカル、　",
    gift: "ギフト入手",
    fumb: "ファンブル、観測レベル上昇なし",
    succ: "作業成功",
    falr: "作業失敗"
  };

  txtDead(emp) {
    return `▼職員${emp}は死んでいる。\n`;
  }
  txtSurvive() {
    return `▼生還\n`;
  }
  txtPanic(emp, tp) {
    return `▼${emp}は${tp}性パニックに陥った。\n`;
  }
  txtEscape(abn) {
    return `▼${abn}は脱走した。\n`;
  }
};

export const DepD0 = class extends Department { //厚生部安全課
  depId = "D0";
  depName = "厚生部 - 安全課";
  signName = "タウルス";

  employees = DepData.depD[0].ems;
  abnorms = DepData.depD[0].abs;

  coreSup = false;

  txt = {
    end1: "よ",
    end2: "したわ",
    end3: "たわ",
    end4: "ないわ",
    end5: "いるわ",
    crit: "すごい!　",
    gift: "ギフトを貰ってるわ。",
    fumb: "……どうか気落ちしないで。",
    succ: "よくできました。",
    falr: "次はきっと大丈夫よ。",
  };

  txtDead(emp) {
    return `▼${emp}さんが亡くなったわ。……私って無力ね。\n`;
  }
  txtSurvive() {
    return `▼生きてるわね、よかった。\n`;
  }
  txtPanic(emp, tp) {
    return `▼${emp}さんがパニック状態だわ!\n　${tp}性みたい、鎮圧してあげて!\n`;
  }
  txtEscape(abn) {
    return `▼${abn}が脱走してるわ!\n`;
  }
};

export const DepA1 = class extends Department { //本部管制1課
  depId = "A1";
  depName = "本部 - 管制1課";
  signName = "ゲミニA";

  employees = DepData.depA[1].ems;
  abnorms = DepData.depA[1].abs;

  coreSup = false;

  txt = {
    end1: "です",
    end2: "した",
    end3: "た",
    end4: "ない",
    end5: "いる",
    crit: "クリティカル、　",
    gift: "ギフト入手",
    fumb: "ファンブル、観測レベル上昇なし",
    succ: "作業成功",
    falr: "作業失敗"
  };

  txtDead(emp) {
    return `▼職員${emp}は死んでいる。\n`;
  }
  txtSurvive() {
    return `▼生還\n`;
  }
  txtPanic(emp, tp) {
    return `▼${emp}は${tp}性パニックに陥った。\n`;
  }
  txtEscape(abn) {
    return `▼${abn}は脱走した。\n`;
  }
};

export const DepA2 = class extends Department { //本部管制2課
  depId = "A2";
  depName = "本部 - 管制2課";
  signName = "ゲミニB";

  employees = DepData.depA[2].ems;
  abnorms = DepData.depA[2].abs;

  coreSup = false;

  txt = {
    end1: "です",
    end2: "した",
    end3: "た",
    end4: "ない",
    end5: "いる",
    crit: "クリティカル、　",
    gift: "ギフト入手",
    fumb: "ファンブル、観測レベル上昇なし",
    succ: "作業成功",
    falr: "作業失敗"
  };

  txtDead(emp) {
    return `▼職員${emp}は死んでいる。\n`;
  }
  txtSurvive() {
    return `▼生還\n`;
  }
  txtPanic(emp, tp) {
    return `▼${emp}は${tp}性パニックに陥った。\n`;
  }
  txtEscape(abn) {
    return `▼${abn}は脱走した。\n`;
  }
};

export const DepC1 = class extends Department { //人事部懲戒課
  depId = "C1";
  depName = "人事部 - 懲戒課";
  signName = "レオ";

  employees = DepData.depC[1].ems;
  abnorms = DepData.depC[1].abs;

  coreSup = false;

  txt = {
    end1: "です",
    end2: "した",
    end3: "た",
    end4: "ない",
    end5: "いる",
    crit: "クリティカル、　",
    gift: "ギフト入手",
    fumb: "ファンブル、観測レベル上昇なし",
    succ: "作業成功",
    falr: "作業失敗"
  };

  txtDead(emp) {
    return `▼職員${emp}は死んでいる。\n`;
  }
  txtSurvive() {
    return `▼生還\n`;
  }
  txtPanic(emp, tp) {
    return `▼${emp}は${tp}性パニックに陥った。\n`;
  }
  txtEscape(abn) {
    return `▼${abn}は脱走した。\n`;
  }
};

export const DepD1 = class extends Department { //厚生部福祉課
  depId = "D1";
  depName = "厚生部 - 福祉課";
  signName = "カンケル";

  employees = DepData.depD[1].ems;
  abnorms = DepData.depD[1].abs;

  coreSup = false;

  txt = {
    end1: "です",
    end2: "した",
    end3: "た",
    end4: "ない",
    end5: "いる",
    crit: "クリティカル、　",
    gift: "ギフト入手",
    fumb: "ファンブル、観測レベル上昇なし",
    succ: "作業成功",
    falr: "作業失敗"
  };

  txtDead(emp) {
    return `▼職員${emp}は死んでいる。\n`;
  }
  txtSurvive() {
    return `▼生還\n`;
  }
  txtPanic(emp, tp) {
    return `▼${emp}は${tp}性パニックに陥った。\n`;
  }
  txtEscape(abn) {
    return `▼${abn}は脱走した。\n`;
  }
};

export const DepE0 = class extends Department { //警備部防衛課
  depId = "E0";
  depName = "警備部 - 防衛課";
  signName = "アリエス";

  employees = DepData.depE[0].ems;
  abnorms = DepData.depE[0].abs;

  coreSup = false;

  txt = {
    end1: "であります",
    end2: "しました",
    end3: "ました",
    end4: "ません",
    end5: "おります",
    crit: "見事!　",
    gift: "ギフトを戴いたようであります!",
    fumb: "空回りでありますか……!",
    succ: "好い働きであります。",
    falr: "教訓とするべきです。"
  };

  txtDead(emp) {
    return `▼職員${emp}の死を無駄にせぬように!\n`;
  }
  txtSurvive() {
    return `▼無事でありますな!\n`;
  }
  txtPanic(emp, tp) {
    return `▼職員${emp}が${tp}性の狂乱状態、速やかに鎮圧を!\n`;
  }
  txtEscape(abn) {
    return `▼${abn}の脱走を確認!\n`;
  }
};

export const DepE1 = class extends Department { //警備部視察課
  depId = "E1";
  depName = "警備部 - 視察課";
  signName = "スコルピウス";

  employees = DepData.depE[1].ems;
  abnorms = DepData.depE[1].abs;

  coreSup = false;

  txt = {
    end1: "だな",
    end2: "した",
    end3: "た",
    end4: "ない",
    end5: "いるぞ",
    crit: "よくやった!　",
    gift: "いいもの貰ったな!",
    fumb: "だ、大丈夫か……?",
    succ: "偉いぞ～。",
    falr: "そんな時もあるさ。"
  };

  txtDead(emp) {
    return `▼${emp}が死んだみたいだな。\n`;
  }
  txtSurvive() {
    return `▼生きて帰ったか!　よかった!\n`;
  }
  txtPanic(emp, tp) {
    return `▼${emp}の様子がおかしいぞ。多分${tp}性だ。\n`;
  }
  txtEscape(abn) {
    return `▼${abn}が脱走したみたいだ、ぶん殴ってきてくれ。\n`;
  }
};

export const DepF0 = class extends Department { //抽出部精製課
  depId = "F0";
  depName = "抽出部 - 精製課";
  signName = "サギタリウス";

  employees = DepData.depF[0].ems;
  abnorms = DepData.depF[0].abs;

  coreSup = false;

  txt = {
    end1: "だよ",
    end2: "したよ",
    end3: "たよ",
    end4: "ないよ",
    end5: "るよ",
    crit: "なかなかやるね!　",
    gift: "そのギフト、いかしてるよ。",
    fumb: "あちゃぁ……ノーカンかな。",
    succ: "うん、OK。",
    falr: "失敗かぁ。"
  };

  txtDead(emp) {
    return `▼皆、死んだ${emp}の分も仕事してやりな。\n`;
  }
  txtSurvive() {
    return `▼生きてるね。\n`;
  }
  txtPanic(emp, tp) {
    return `▼${emp}の${tp}性パニック、誰か治してやりな。\n`;
  }
  txtEscape(abn) {
    return `▼${abn}が脱走したよ。\n`;
  }
};

export const DepF1 = class extends Department { //抽出部抽出課
  depId = "F1";
  depName = "抽出部 - 抽出課";
  signName = "アクアリウス";

  employees = DepData.depF[1].ems;
  abnorms = DepData.depF[1].abs;

  coreSup = false;

  txt = {
    end1: "だ",
    end2: "した",
    end3: "た",
    end4: "ない",
    end5: "いる",
    crit: "よくやった。",
    gift: "いいものを貰ったな。上手く使え",
    fumb: "これは……ノーコメントで。",
    succ: "次も上手くいくとは限らないぞ。",
    falr: "たまにはそういう時もある。"
  };

  txtDead(emp) {
    return `▼${emp}が死んだか。\n`;
  }
  txtSurvive() {
    return `▼今回は運が良かったな。\n`;
  }
  txtPanic(emp, tp) {
    return `▼${emp}が正気を失った。${tp}性だ、迅速に鎮圧しろ。\n`;
  }
  txtEscape(abn) {
    return `▼${abn}を逃がすな。目にもの見せてやれ。\n`;
  }
};

export const DepB1 = class extends Department { //情報部記録課
  depId = "B1";
  depName = "情報部 - 記録課";
  signName = "リブラ";

  employees = DepData.depB[1].ems;
  abnorms = DepData.depB[1].abs;

  coreSup = false;

  txt = {
    end1: "だ",
    end2: "したよ",
    end3: "た",
    end4: "ないな",
    end5: "いるな",
    crit: "目覚ましいな。",
    gift: "其は巧く使って御呉れ。",
    fumb: "此れで良いとは勘案していないだろうな?",
    succ: "経験は裏切らないものよ。",
    falr: "向後は拙の望蜀に沿ってお呉れ。"
  };

  txtDead(emp) {
    return `▼${emp}は燃え尽きたよ。\n`;
  }
  txtSurvive() {
    return `▼墓の元にならなくてよかったな。\n`;
  }
  txtPanic(emp, tp) {
    return `▼${emp}の境目が混濁しているようだ。\n${tp}性か。\n`;
  }
  txtEscape(abn) {
    return `▼${abn}が徘徊している。どうするんだ?\n`;
  }
};

export const DepA3 = class extends Department { //本部設計課
  depId = "A3";
  depName = "本部 - 設計課";
  signName = "アレクシス";

  employees = DepData.depA[3].ems;
  abnorms = DepData.depA[3].abs;

  coreSup = false;

  txt = {
    end1: "です",
    end2: "した",
    end3: "た",
    end4: "ない",
    end5: "いる",
    crit: "クリティカル、　",
    gift: "ギフト入手",
    fumb: "ファンブル、観測レベル上昇なし",
    succ: "作業成功",
    falr: "作業失敗"
  };

  txtDead(emp) {
    return `▼職員${emp}は死んでいる。\n`;
  }
  txtSurvive() {
    return `▼生還\n`;
  }
  txtPanic(emp, tp) {
    return `▼${emp}は${tp}性パニックに陥った。\n`;
  }
  txtEscape(abn) {
    return `▼${abn}は脱走した。\n`;
  }
};
