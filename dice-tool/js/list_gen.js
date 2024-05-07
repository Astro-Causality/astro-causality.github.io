import Abnm01 from "./data/abnm/Abnm01.json" assert {type: "json"};
import tethList from "./data/abnm/AbnmTETH.json" assert {type: "json"};
import heList from "./data/abnm/AbnmHE.json" assert { type: "json" };
import wawList from "./data/abnm/AbnmWAW.json" assert { type: "json" };
import alephList from "./data/abnm/AbnmALEPH.json" assert { type: "json" };
import empList from "./data/employees/empl_list.json" assert {type: "json"};

import testAbnmList from "./data/test/AbnmTest.json" assert {type: "json"};

const TestAbnm = JSON.parse(testAbnmList);
const Ab01Prs = JSON.parse(Abnm01);

const Employees = JSON.parse(empList);

function abListGen() {
  const DepartID = Number(document.selector_depart["department"].value);

  switch (DepartID) {
    case 0:
      const AbDataParsed = JSON.parse(Abnm01);
  }
}

function emListGen() {}

function abGenTest() {
  console.log(TestAbnm);
}

function emGenTest() {
  console.log(Employees);
}