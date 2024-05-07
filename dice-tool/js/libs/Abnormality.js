class Abnormality {
  id;   //3桁の番号(AC-X-00-「000」の部分)
  nm;   //名前
  rk;   //0:ZAYIN 1:TETH 2:HE 3:WAW 4:ALEPH
  tp;   //1:通常 2:ツール
  obLv; //観測レベル
  wct;  //作業回数
  pg;   //Privatter+のページID
}

export class AbnmBasic extends Abnormality {
  maxpe;
  wksc;
  constructor(id, nm, rk, dtp, dvl, dct, pg) {
    this.id = id;
    this.nm = nm;
    this.rk = rk;
    this.tp = 1;
    this.obLv = 1;
    this.dtp = dtp;
    this.dvl = dvl;
    this.dct = dct;
    this.maxpe = calcEbox(this.rk);
    this.wksc = calcWorkSuc(this.rk);
    this.wct = 0;
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
  constructor(id, nm, rk, pg) {
    this.id = id;
    this.nm = nm;
    this.rk = rk;
    this.tp = 2;
    this.obLv = 1;
    this.wct = 0;
    this.pg = pg;
  }
}