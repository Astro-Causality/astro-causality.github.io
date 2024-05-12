export default class Employee {
  id = "000";
  nm = "NONAME";
  gender = 1; // 0:不明 1:男 2:女
  gdst = 0; // 開始時ランク2のステータス 0:勇気 1:慎重 2:自制 3:正義
  dfSt = [15, 15, 15, 15]; // ステータス数値
  crSt = this.dfSt;
  crHP; // 現在HP
  mxHP = 15;
  crSP; // 現在SP
  mxSP = 15;
  strk = [1, 1, 1, 1]; // 能力ランク
  agrk; // 総合ランク
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
  pnc = false;
  dead = false;
  constructor(id, nm, gender, good) {
    this.id = (id.isInteger())?toString(id).padStart(3, "0"):id.padStart(3,"0");
    this.nm = nm;
    this.gender = gender;
    this.dfSt = initSt(good);
    curHP = this.dfSt[0];
    curSP = this.dfSt[1];
    this.strk = calcStRank(this.dfSt);
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
    return this.mxHP;
  }
  get unitMaxSP() {
    return this.mxSP;
  }
  get stBlack() {
    return calcOneStRank(2);
  }
  get stPale() {
    return calcOneStRank(3);
  }

  get isPanic() {
    return this.crSP <= 0;
  }
  get isDead() {
    return this.crHP === 0;
  }

  // 初期ステ設定
  set initSt(good) {
    for (let i = 0; i < 4; i++){
      if (i === good) {
        this.dfSt[i] = 25
      }
      else {
        this.dfSt[i] = 15;
      }
    }

    if (good === 0) {
      this.mxHP = 25;
      this.mxSP = 15;
    } else if (good === 1) {
      this.mxHP = 15;
      this.mxSP = 25;
    } else {
      [this.mxHP, this.mxSP] = 15;
    }
  }

  recoverHP(val) {
    this.curHP += val;
    if (this.curHP > this.maxHP) this.curHP = this.maxHP;
  }
  damageToHP(val) {
    this.curHP -= val;
    if (this.curHP < 0) {
      this.curHP = 0;
      this.dead = true;
    }
  }


  // 特定バフを消去
  removeBuf(buf) {
    this.bufs = this.bufs.filter((b) => b !== buf);
  }

  //バフリセット
  removeAllBufs() {
    this.bufs = [];
  }

  setEgo(weapon, suit) {
    this.equip[0] = weapon;
    this.equip[1] = suit;
  }

  // 能力ランク計算
  calcStRank(st) {
    for (let i = 0; i < 4; i++) {
      if (st[i] < 0) return;
      else if (st[i] >= 25) {
        if (st[i] < 50) this.strk[i] = 2;
        else if (st[i] < 75) this.strk[i] = 3;
        else if (st[i] < 100) this.strk[i] = 4;
        else if (st[i] >= 100) this.strk[i] = 5;
        else if (st[i] === 130) this.strk[i] = 6;
      }
    }
  }

  calcOneStRank(i) {
    if (this.dfSt[i] < 15 || this.dfSt[i] > 130) return;
    else {
      if (this.dfSt[i] < 25) return 1;
      else if (this.dfSt[i] < 50) return 2;
      else if (this.dfSt[i] < 75) return 3;
      else if (this.dfSt[i] < 100) return 4;
      else if (this.dfSt[i] >= 100) return 5;
      else if (this.dfSt[i] === 130) return 6;
      else return;
    }
  }

  // エージェントランク計算
  calcAgRank() {
    const MaxRk = Math.max(this.strk);
    const MinRk = Math.min(this.strk);
    let maxNum = this.strk.filter((rk) => rk === MaxRk).length;
    if (maxNum === 4) return MaxRk;
    else return MinRk;
  }

  addStExp(exp) {
    for (let i = 0; i < 4; i++){
      this.dfSt[i] += exp[i];
      if (i !== this.gdst && this.dfSt[i] < 101) this.dfSt[i] = 100;
      else if (i === this.gdst && this.dfSt[i] < 131) this.dfSt[i] = 130;
    }
    this.calcStRank(this.dfSt);
  }
}