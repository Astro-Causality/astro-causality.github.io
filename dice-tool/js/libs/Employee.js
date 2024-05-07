export default class Employee {
  id;
  nm;
  gender;
  gdst;
  st;
  strk;
  agrk;
  exp;
  equip;
  gifts;
  bufs;
  constructor(id, nm, gender, good) {
    this.id = toString(id).padStart(3, "0");
    this.nm = nm;
    this.gender = gender;
    this.gdst = good; // 0:勇気 1:慎重 2:自制 3:正義
    this.st = initSt(this.gdst); // ステータス数値
    this.strk = calcRank(this.st);
    this.agrk = calcAgRank();
    this.exp = [0, 0, 0, 0];
    this.equip = ["999", "999"]; // [武器ID,防具ID]
    this.gifts = {
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
    this.bufs = [""];
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
  get unitHP() {
    return this.st[0];
  }
  get unitSP() {
    return this.st[1];
  }
  get stBlack() {
    return calcRank(this.st[2]);
  }
  get stPale() {
    return calcRank(this.st[3]);
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

  // 初期ステ設定
  set initSt(good) {
    this.st = [15, 15, 15, 15];
    this.st[good] = 25;
  }
}