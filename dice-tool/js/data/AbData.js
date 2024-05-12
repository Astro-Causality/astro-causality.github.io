import Abnormality from "../libs/Abnormality";
import EgoGift from "../libs/EgoGift";
import { rollDice } from "../libs/rollDice";

export const Ab1000 = class extends Abnormality {
  id = ["O", "05", "1000"];
  nm = "教育用ダミー";
  rk = 0;
  tp = 1;
  obLv = 0;
  wct = 0;
  pg = "";
  maxpe = super.maxPEBox;
  wksc = super.judgeLine;
  wcate = [
    [0, "本能"],
    [1, "洞察"],
    [2, "愛着"],
    [3, "抑圧"],
  ];
  canEsc = true;

  work(agent) {}

  escape() {}
};

export const Ab1361 = class extends Abnormality {
  id = ["T", "01", "1361"];
  nm = "うらないやさん";
  rk = 0;
  tp = 1;
  obLv = 0;
  wct = 0;
  pg = "66401ef97aae5";
  maxpe = super.maxPEBox;
  wksc = super.judgeLine;
  wcate = [
    [0, "本能"],
    [1, "洞察"],
    [2, "愛着"],
    [3, "抑圧"],
  ];
  curDim = 3;
  maxDim = 3;
  canEsc = false;
  abiTxt = "";

  work(dp, agent, cate) {
    if (curDim === 0) {
      this.abiTxt = `${this.obLv >= 1 ? this.mngCode : this.nm}は花占いを${
        dp.txt.end2
      }。\n`;
      const Flower = rollDice(1, 6);
      switch (Flower) {
        case 1:
          const HPGain = rollDice(2, 6);
          agent.crHP += HPGain;
          if (agent.crHP > agent.mxHP) agent.crHP = agent.mxHP;
          this.abiTxt += `${agent.nm}のHPが${HPGain}回復!\n`;
          break;
        case 2:
          const SPGain = rollDice(2, 6);
          agent.crSP += SPGain;
          if (agent.crSP > agent.mxSP) agent.crSP = agent.mxSP;
          this.abiTxt += `${agent.nm}のSPが${SPGain}回復!\n`;
          break;
        case 3:
          const BlackUp = rollDice(1, 5);
          agent.crSt[2] += BlackUp;
          this.abiTxt += `${agent.nm}の自制が${BlackUp}上昇!\n`;
          break;
        case 4:
          const PaleUp = rollDice(1, 5);
          agent.crSt[3] += PaleUp;
          this.abiTxt += `${agent.nm}の正義が${PaleUp}上昇!\n`;
          break;
        case 5:
          agent.crSP = 0;
          agent.pnc = true;
          break;
        case 6:
          agent.crHP = 0;
          agent.dead = true;
          this.abiTxt += `${agent.nm}は${
            this.obLv >= 1 ? this.mngCode : this.nm
          }に取り込まれてしまっ${dp.txt.end3}!\n`;
          break;
      }
    }
  }
};

export const Ab1001 = class extends Abnormality {
  id = ["O", "03", "1001"];
  nm = "";
  rk = 0;
  tp = 1;
  obLv = 0;
  wct = 0;
  pg = "";
  maxpe = super.maxPEBox;
  wksc = super.judgeLine;
  wcate = [
    [0, "本能"],
    [1, "洞察"],
    [2, "愛着"],
    [3, "抑圧"],
  ];
  canEsc = false;

  work(agent) {}
};
