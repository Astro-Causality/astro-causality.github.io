import { AbnmBasic, AbnmTool } from "../libs/Abnormality.js";

class Ab000 extends AbnmBasic {
  id = ["O", "05", "000"];
  nm = "教育用ダミー";
  rk = 0;
  tp = 1;
  obLv = 1;
  wct = 0;
  pg = "";
  maxpe = super.calcEbox(this.rk);
  wksc = 0;
  wcate = ["本能", "洞察", "愛着", "抑圧"];

  triggerAbility(agent) {}
}

class Ab001 extends AbnmBasic {
  id = ["O","03","001"];
  nm = "";
  rk = 0;
  tp = 1;
  obLv = 1;
  wct = 0;
  pg = "";
  maxpe = super.calcEbox(this.rk);
  wksc = 0;
  wcate = ["本能", "洞察", "愛着", "抑圧"];

  triggerAbility(agent){}
}