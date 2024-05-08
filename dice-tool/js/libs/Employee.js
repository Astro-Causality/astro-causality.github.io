export class Employee {
  id = "000";
  nm = "NONAME";
  gender = 1;
  gdst = 0;
  st;
  curHP;
  curSP;
  strk;
  agrk;
  exp = [0, 0, 0, 0];
  equip = ["999", "999"]; // [武器ID,防具ID]
  gifts = {
    head: "",
    face: "",
    eye: "",
    mouth: "",
    hand: "",
    cheek: "",
    chest: "",
    back_l: "",
    back_r: "",
    special: "",
  };
  bufs = [""];
  constructor(id, nm, gender, good) {
    this.id = toString(id).padStart(3, "0");
    this.nm = nm;
    this.gender = gender;
    this.gdst = good; // 0:勇気 1:慎重 2:自制 3:正義
    this.st = initSt(this.gdst); // ステータス数値
    curHP = this.st[0];
    curSP = this.st[1];
    this.strk = calcStRank(this.st);
    this.agrk = calcAgRank();
  }

  get unitID() {
    return this.id;
  }
  get unitName() {
    return this.nm;
  }
  get unitGender() {
    return this.gender;
  }
  get unitMaxHP() {
    return this.curHP;
  }
  get unitMaxSP() {
    return this.curSP;
  }
  get stBlack() {
    return calcRank(this.st[2]);
  }
  get stPale() {
    return calcRank(this.st[3]);
  }

  get isPanic() {
    return this.curSP <= 0;
  }
  get isDead() {
    return this.curHP <= 0;
  }

  // 初期ステ設定
  set initSt(good) {
    this.st = [15, 15, 15, 15];
    this.st[good] = 25;
  }

  // 特定バフを消去
  set removeBuf(buf) {
    this.bufs = this.bufs.filter(b => b !== buf);
  }

  //バフリセット
  removeAllBufs() {
    this.bufs = [];
  }

  // 能力ランク計算
  static calcStRank(st) {
    if (st.isArray()) {
      let ranks = [1, 1, 1, 1];
      for (let i = 0; i < 4; i++) {
        if (st[i] < 0) return;
        else if (st[i] >= 25) {
          if (st[i] < 50) ranks[i] = 2;
          else if (st[i] < 75) ranks[i] = 3;
          else if (st[i] < 100) ranks[i] = 4;
          else if (st[i] >= 100) ranks[i] = 5;
          else if (st[i] === 130) ranks[i] = 6;
        }
      }
      return ranks;
    } else {
      if (st < 15 || st > 130) return;
      else {
        if (st < 25) return 1;
        else if (st < 50) return 2;
        else if (st < 75) return 3;
        else if (st < 100) return 4;
        else if (st >= 100) return 5;
        else if (st === 130) return 6;
        else return;
      }
    }
  }

  // エージェントランク計算
  static calcAgRank() {
    const ranks = calcRank(this.st);
    let rksum = 0;
    ranks.forEach((rank) => {
      rksum += rank;
    });
    if (rksum < 4 || rksum > 21) return;
    else {
      if (rksum > 15) return 5;
      else if (rksum > 11) return 4;
      else if (rksum > 8) return 3;
      else if (rksum > 5) return 2;
      else return 1;
    }
  }
}