export default class Abnormality {
  id = ["O", "00", "0000"]; //カテゴリ(O/T/F), 形状番号(01～06 07/09), 個別番号(AC-X-00-「0000」の部分)
  nm = ""; //名前
  rk = 0; //0:ZAYIN 1:TETH 2:HE 3:WAW 4:ALEPH
  tp = 0; //1:通常 2:ツール
  obLv = 0; //観測レベル
  wct = 0; //作業回数
  pg = ""; //Privatter+のページID
  lvup = 3;
  curDim = 5; //ディムカウンター現在値
  maxDim = 5; //ディムカウンター最大値
  wcate = []; //作業の名称
  canEsc = false; //脱走の有無
  abiTxt = "";

  get mngCode() {
    return `AC-${this.id[0]}-${this.id[1]}-${this.id[2]}`;
  }
  get nameTxt() {
    if (this.obLv === 0) {
      return this.mngCode;
    } else {
      return this.nm;
    }
  }
  get pgLink() {
    if (pg == "") return "";
    else
      return `https://privatter.me/page/${this.pg}?p=${this.obLv + 1}#contents`;
  }

  workCtUp() {
    this.wct++;
    if (this.wct === this.lvup && this.obLv < 4) {
      this.obLv++;
      this.lvup += 3;
    }
  }

  //1回の作業で得られるPE-Box上限
  get maxPEBox() {
    if (this.tp === 1) {
      switch (this.rk) {
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
  }

  get judgeLine() {
    if (this.tp === 1) {
      switch (this.rk) {
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

  //作業時
  work() { }

  workJudge(cate, agrk, dcv) {
    const JudgeFinLine = this.judgeLine * sase[cate][agrk - 1];
    if (dcv >= JudgeFinLine) {
      return 1;
    } else {
      return 0;
    }
  }

  //脱走時
  escape() {
    if (this.canEsc && this.curDim === 0) {

    } else {
      return;
    }
  }
}
