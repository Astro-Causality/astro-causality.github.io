import {DepData} from "../../Setting.js";

export default class Department {
  depId = "";
  employees = [""];
  abnorms = [""];

  static cateNames = ["本", "情報", "人事", "厚生", "警備", "抽出"];
  static depNames = [
    ["制御", "管制1", "管制2", "設計"],
    ["検閲", "記録"],
    ["教育", "懲戒"],
    ["安全", "福祉"],
    ["防衛", "視察"],
    ["精製", "抽出"],
  ];

  constructor(depId, emp, abn) {
    this.depId = depId;
    this.employees = emp;
    this.abnorms = abn;
  }

  get departName() {
    const Sp = this.depId.split("");
    const CateNId = parseInt(Sp[0]);
    const DepNId = parseInt(Sp[1]);
    return `${this.cateNames[CateNId]}部 - ${this.depNames[DepNId]}課`;
  }

  set departData(id) {
    const Sp = id.split("");
    const cateLId = parseInt(Sp[0]);
    const cateSId = parseInt(Sp[1]);
    this.employees = DepData[cateLId][cateSId].ems;
    this.abnorms = DepData[cateLId][cateSId].abs;
  }
}
