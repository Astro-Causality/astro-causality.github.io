class Abnormality {
  id = ["O", "00", "000"]; //カテゴリ(O/T/F), 形状番号(01～06 07/09), 個別番号(AC-X-00-「000」の部分)
  nm = "";    //名前
  rk = 0;     //0:ZAYIN 1:TETH 2:HE 3:WAW 4:ALEPH
  tp = 0;     //1:通常 2:ツール
  obLv = 1;   //観測レベル
  wct = 0;    //作業回数
  pg = "";    //Privatter+のページID

  get mngCode() {
    return `AC-${this.id[0]}-${this.id[1]}-${this.id[2]}`;
  }
  get pgLink() {
    if (pg == "") return "";
    else return `https://privatter.me/page/${this.pg}?p=${this.obLv}#contents`;
  }

  triggerAbility(agent) {
  }
}

export class AbnmBasic extends Abnormality {
  id = "000";
  nm = "";
  rk = 0;
  tp = 1;
  obLv = 1;
  wct = 0;
  pg = "";
  maxpe = 0;  //1回の作業で得られるPE-Box上限
  wksc = 0;   //作業判定時の目標値
  wcate = []; //作業の名称
  constructor(id, nm, rk, dtp, dvl, dct, pg, wcate) {
    this.id = id;
    this.nm = nm;
    this.rk = rk;
    this.dtp = dtp;
    this.dvl = dvl;
    this.dct = dct;
    this.maxpe = calcEbox(this.rk);
    this.wksc = calcWorkSuc(this.rk);
    this.wcate = wcate;
    this.pg = pg;
  }

  static calcEbox(rk) {
    switch (rk.toLowerCase()) {
      case 0:
        return 6;
      case 1:
        return 12;
      case 2:
        return 18;
      case 3:
        return 24;
      case 4:
        return 30;
    }
  }

  static calcWorkSuc(rk) {
    switch (rk.toLowerCase()) {
      case 0:
        return 3;
      case 1:
        return 6;
      case 2:
        return 9;
      case 3:
        return 12;
      case 4:
        return 15;
    }
  }
}

export class AbnmTool extends Abnormality {
  id = "000";
  nm = "";
  rk = 0;
  tp = 2;
  obLv = 1;
  wct = 0;
  pg = "";
  constructor(id, nm, rk, pg) {
    this.id = id;
    this.nm = nm;
    this.rk = rk;
    this.pg = pg;
  }
}