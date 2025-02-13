import ReactPlayer from 'react-player/youtube'

import track7_1 from '../../../../assets/WG7_1.png'
import track7_2 from '../../../../assets/WG7_2.png'
import Lightbox from 'react-image-lightbox'
import { useState } from 'react'

const h3_style = {
  fontWeight: 'bold',
  fontSize: '1.5em',
}
const Track7_Summary_content = () => {
  return (
    <div>
      <p>
        本賽道主要目的在於測試緊急醫療救護情境中，跨系統間的資料交換。生理量測儀器可透過此賽道規範的情境回傳標準化的資料至急救端系統、救護車或責任醫院系統，透過將救護紀錄表及四大急重症表單標準化以解決急救資料互通性的問題。本賽道主要針對上述救護紀錄表與四大急重症表單／病摘使用的
        Resource 進行驗證，並確保未來與電子病歷（TW Core IG）進行資料互通的能力。
      </p>
      <p style={h3_style}>目標:</p>
      <ul class="part in-view" data-startline="1100" data-endline="1105" data-position="53961" data-size="0">
        <li class="" data-startline="1100" data-endline="1100" data-position="53963" data-size="0">
          <strong data-position="53963" data-size="0">
            <span data-position="53965" data-size="7">
              資料互通機制：
            </span>
          </strong>
          <span data-position="53974" data-size="47">
            {' '}
            整合現行急就照護情境中，包含消防局、醫院、醫療救護體系中的各單位，建立到院前的資料互通機制。
          </span>
        </li>
        <li class="" data-startline="1101" data-endline="1101" data-position="54024" data-size="0">
          <strong data-position="54024" data-size="0">
            <span data-position="54026" data-size="8">
              跨單位系統介接：
            </span>
          </strong>
          <span data-position="54036" data-size="25">
            基於上述互通機制，介接各單位系統，達成資料互通。
          </span>
        </li>
        <li class="" data-startline="1102" data-endline="1102" data-position="54064" data-size="0">
          <strong data-position="54064" data-size="0">
            <span data-position="54066" data-size="8">
              資料交換與整合：
            </span>
          </strong>
          <span data-position="54076" data-size="61">
            {' '}
            項目包括現場傷病患生命徵象與其他相關量測資料，並具備與電子病歷（臺灣核心規範，TW Core
            IG）進行資料互通的能力。
          </span>
        </li>
        <li class="" data-startline="1103" data-endline="1103" data-position="54140" data-size="0">
          <strong data-position="54140" data-size="0">
            <span data-position="54142" data-size="5">
              資料安全：
            </span>
          </strong>
          <span data-position="54149" data-size="47">
            {' '}
            因應存取傷病患個人資料，需要一個標準化認證授權機制，確保資料交換安全性（Security）。
          </span>
        </li>
        <li class="" data-startline="1104" data-endline="1105" data-position="54199" data-size="0">
          <strong data-position="54199" data-size="0">
            <span data-position="54201" data-size="10">
              院內外連線遠距醫療：
            </span>
          </strong>
          <span data-position="54213" data-size="25">
            {' '}
            若情況允許的話，支援現場與醫院連線實施遠距醫療。
          </span>
        </li>
      </ul>
      <div width="100%">
        <p style={{ fontWeight: 'bold' }}>賽道介紹</p>
        <ReactPlayer url="https://youtu.be/4Bb91YxGL94" width="100%" />
      </div>
    </div>
  )
}

const Track7_Benefits_content = () => {
  return (
    <div>
      <p>
        隨著智慧醫療的快速發展，及緊急醫療救護業務的規模增長，需要加快以標準化方式進行各系統與儀器間資料交換，縮短急救反應時間，以提升整體緊急照護醫療品質。參加單位可使用實際或是產品雛形參加此賽道，由於這是較新的賽道，並需要跨多個
        Resource 進行資料交換，因此參加者須要具備較高的技術門檻。MISAT
        鼓勵急救場域相關工作者（醫院急診單位、急重症醫師、EMT）、軟體工程師、開源工作者、儀器開發廠商、系統整合廠商參加，透過早期布局方式建構場域實證以完善本標準，並建立急救照護場域的產品概念驗證（Proof
        of Concept）與服務驗證（Proof of Service）。
      </p>
    </div>
  )
}

const Track7_details_content = () => {
  return (
    <div>
      <p>
        聯測分成七大情境: (1) 電子化救護紀錄表(Electronic Ambulance Record Form)用於定義救護紀錄表 FHIR
        標準化，並整合核心救護流程、
        (2)生理量測資料交換定義救護車上儀器的生理量測資料、(3)-(7)時間敏感急重症(四大急重症)資料交換定義表單 FHIR
        標準化（OHCA、Trauma、CVA、ACS），依據情境詳細資訊說明如下:
      </p>
      <br />

      <p style={h3_style}>情境1：電子化救護紀錄表(Electronic Ambulance Record Form)</p>
      <p>
        IG:<a href="https://silcoet.ntunhs.edu.tw/EMS/">https://silcoet.ntunhs.edu.tw/EMS/</a>
      </p>
      <ul class="part in-view" data-startline="1112" data-endline="1113" data-position="54758" data-size="0">
        <li class="" data-startline="1112" data-endline="1113" data-position="54760" data-size="0">
          <span data-position="54760" data-size="64">
            本情境參照內政部消防機關救護紀錄表欄位進行定義，可與情境2-7等應用情境進行連結，並保留對 TW Core IG
            的相容性。
          </span>
        </li>
        <center>
          <img src={track7_1} Width="100%" />
        </center>
        <li class="" data-startline="1116" data-endline="1116" data-position="54867" data-size="0">
          <span data-position="54867" data-size="21">
            調閱傷病患資料與派遣任務，並顯示於畫面上。
          </span>
        </li>
        <li class="" data-startline="1117" data-endline="1117" data-position="54891" data-size="0">
          <span data-position="54891" data-size="107">
            新增救護紀錄表（以 Composition 表示），其中各 Resource 必須分別上傳至 FHIR Server 後，以 Reference
            進行聯結，救護紀錄表須包含以下各部資料（R 為必填、O 為選擇性）：
          </span>
        </li>
        <li class="" data-startline="1118" data-endline="1139" data-position="55001" data-size="0">
          <span data-position="55001" data-size="18">
            R: 派遣資料（Encounter)
          </span>
          <ul data-position="55022" data-size="0">
            <li class="" data-startline="1119" data-endline="1119" data-position="55024" data-size="0">
              <span data-position="55024" data-size="8">
                R: 各流程時間
              </span>
            </li>
            <li class="" data-startline="1120" data-endline="1120" data-position="55037" data-size="0">
              <span data-position="55037" data-size="10">
                O: 送往醫院或地點
              </span>
            </li>
            <li class="" data-startline="1121" data-endline="1122" data-position="55052" data-size="0">
              <span data-position="55052" data-size="17">
                R: 傷病患資料（Patient)
              </span>
              <ul data-position="55075" data-size="0">
                <li class="" data-startline="1122" data-endline="1122" data-position="55077" data-size="0">
                  <span data-position="55077" data-size="54">
                    可引用 Track#1 SC3 建立的 Patient 資料，惟須補上本情境要求的 Patient 必填欄位
                  </span>
                </li>
              </ul>
            </li>
            <li class="" data-startline="1123" data-endline="1123" data-position="55136" data-size="0">
              <span data-position="55136" data-size="19">
                R: 現場狀況 (Condition)
              </span>
            </li>
            <li class="" data-startline="1124" data-endline="1124" data-position="55160" data-size="0">
              <span data-position="55160" data-size="31">
                O: 傷病患主訴（QuestionnaireResponse）
              </span>
            </li>
            <li class="" data-startline="1125" data-endline="1125" data-position="55196" data-size="0">
              <span data-position="55196" data-size="18">
                R: 過去病史（Condition）
              </span>
            </li>
            <li class="" data-startline="1126" data-endline="1126" data-position="55219" data-size="0">
              <span data-position="55219" data-size="26">
                R: 過敏史（AllergyIntolerance）
              </span>
            </li>
            <li class="" data-startline="1127" data-endline="1127" data-position="55250" data-size="0">
              <span data-position="55250" data-size="18">
                O: 處置項目（Procedure）
              </span>
            </li>
            <li class="" data-startline="1128" data-endline="1128" data-position="55273" data-size="0">
              <span data-position="55273" data-size="20">
                O: ALS 處置（Procedure）
              </span>
            </li>
            <li class="" data-startline="1129" data-endline="1129" data-position="55298" data-size="0">
              <span data-position="55298" data-size="31">
                O: 給藥（MedicationAdministration）
              </span>
            </li>
            <li class="" data-startline="1130" data-endline="1130" data-position="55334" data-size="0">
              <span data-position="55334" data-size="20">
                R: 生命跡象（Observation）
              </span>
            </li>
            <li class="" data-startline="1131" data-endline="1135" data-position="55359" data-size="0">
              <span data-position="55359" data-size="5">
                急重症登錄
              </span>
              <ul data-position="55369" data-size="0">
                <li class="" data-startline="1132" data-endline="1132" data-position="55371" data-size="0">
                  <span data-position="55371" data-size="24">
                    R: 心肺功能停止登錄（Observation）
                  </span>
                </li>
                <li class="" data-startline="1133" data-endline="1133" data-position="55402" data-size="0">
                  <span data-position="55402" data-size="27">
                    O: OHCA 事故地點型態（Observation）
                  </span>
                </li>
                <li class="" data-startline="1134" data-endline="1134" data-position="55436" data-size="0">
                  <span data-position="55436" data-size="24">
                    O: 疑似心肌梗塞登錄（Observation）
                  </span>
                </li>
                <li class="" data-startline="1135" data-endline="1135" data-position="55467" data-size="0">
                  <span data-position="55467" data-size="25">
                    O: 符合疑似腦中風指標（Observation）
                  </span>
                </li>
              </ul>
            </li>
            <li class="" data-startline="1136" data-endline="1136" data-position="55497" data-size="0">
              <span data-position="55497" data-size="16">
                O: 補述（Narrative）
              </span>
            </li>
            <li class="" data-startline="1137" data-endline="1137" data-position="55518" data-size="0">
              <span data-position="55518" data-size="23">
                R: 檢傷分級（RiskAssessment）
              </span>
            </li>
            <li class="" data-startline="1138" data-endline="1139" data-position="55546" data-size="0">
              <span data-position="55546" data-size="4">
                O:{' '}
              </span>
              <s data-position="55550" data-size="0">
                <span data-position="55552" data-size="24">
                  簽名（Consent &amp; Provenance）
                </span>
              </s>
              <span data-position="55578" data-size="4">
                {' '}
                不定義
              </span>
              <ul data-position="55587" data-size="0">
                <li class="" data-startline="1139" data-endline="1139" data-position="55589" data-size="0">
                  <span data-position="55589" data-size="13">
                    僅記錄救護紀錄表填寫人員（
                  </span>
                  <a href="http://Practitioner.name" target="_blank" rel="noopener">
                    <span data-position="55602" data-size="17">
                      Practitioner.name
                    </span>
                  </a>
                  <span data-position="55619" data-size="1">
                    ）
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="" data-startline="1140" data-endline="1143" data-position="55623" data-size="0">
          <span data-position="55623" data-size="15">
            調閱救護紀錄表，並顯示於畫面上
          </span>
          <ul data-position="55641" data-size="0">
            <li class="" data-startline="1141" data-endline="1141" data-position="55643" data-size="0">
              <span data-position="55643" data-size="7">
                以傷病患名稱（
              </span>
              <a href="http://Patient.name" target="_blank" rel="noopener">
                <span data-position="55650" data-size="12">
                  Patient.name
                </span>
              </a>
              <span data-position="55662" data-size="29">
                ）或唯一識別碼（Patient.Identifier）調閱
              </span>
            </li>
            <li class="" data-startline="1142" data-endline="1143" data-position="55696" data-size="0">
              <span data-position="55696" data-size="12">
                以救護紀錄表唯一識別碼（
              </span>
              <a href="http://Composition.id" target="_blank" rel="noopener">
                <span data-position="55708" data-size="14">
                  Composition.id
                </span>
              </a>
              <span data-position="55722" data-size="3">
                ）調閱
              </span>
            </li>
          </ul>
        </li>
      </ul>

      <p style={h3_style}>情境2：生理量測資料交換</p>
      <p>
        本情境適用於儀器／設備廠商，主要針對救護車上的生理量測數據定義聯測項目。儀器經完成量測後直接上傳至 FHIR Server
        並與派遣案件（救護紀錄表）聯結，後續可應用於與 EEC 進行資料交換的情境。參測單位須在 SC1
        建立救護紀錄表後，方可在本情境單獨進行生理量測資料交換。若參測單位單獨參加本項情境者，也可以使用主辦單位事先建立的範例救護紀錄表進行聯結。
      </p>
      <br />
      <ul class="part in-view" data-startline="1146" data-endline="1155" data-position="55958" data-size="0">
        <li class="" data-startline="1161" data-endline="1176" data-position="56668" data-size="0">
          <span data-position="56668" data-size="15">
            調閱救護紀錄表，並顯示於畫面上
          </span>
          <ul data-position="56686" data-size="0">
            <li class="" data-startline="1162" data-endline="1162" data-position="56688" data-size="0">
              <span data-position="56688" data-size="33">
                有參測情境1的單位，須先在情境1 - 新增救護紀錄表後調閱該筆資料
              </span>
            </li>
            <li class="" data-startline="1163" data-endline="1163" data-position="56726" data-size="0">
              <span data-position="56726" data-size="31">
                沒有參測情境1 的單位，須調閱大會事先建立的範例救護紀錄表資料
              </span>
            </li>
            <li class="" data-startline="1164" data-endline="1172" data-position="56762" data-size="0">
              <span data-position="56762" data-size="36">
                新增生理量測資料（Observation），並至少須要完成以下其中一項：
              </span>
              <ul data-position="56803" data-size="0">
                <li class="" data-startline="1165" data-endline="1165" data-position="56805" data-size="0">
                  <span data-position="56805" data-size="12">
                    12 Leads ECG
                  </span>
                </li>
                <li class="" data-startline="1166" data-endline="1166" data-position="56824" data-size="0">
                  <span data-position="56824" data-size="16">
                    Body Temperature
                  </span>
                </li>
                <li class="" data-startline="1167" data-endline="1167" data-position="56847" data-size="0">
                  <span data-position="56847" data-size="16">
                    Respiratory Rate
                  </span>
                </li>
                <li class="" data-startline="1168" data-endline="1168" data-position="56870" data-size="0">
                  <span data-position="56870" data-size="53">
                    Oxygen saturation in Arterial blood by Pulse oximetry
                  </span>
                </li>
                <li class="" data-startline="1169" data-endline="1169" data-position="56930" data-size="0">
                  <span data-position="56930" data-size="34">
                    Capillary refill[Time] of Nail bed
                  </span>
                </li>
                <li class="" data-startline="1170" data-endline="1170" data-position="56971" data-size="0">
                  <span data-position="56971" data-size="30">
                    Glucose [Mass/volume] in Blood
                  </span>
                </li>
                <li class="" data-startline="1171" data-endline="1171" data-position="57008" data-size="0">
                  <span data-position="57008" data-size="28">
                    Heart rate by Pulse oximetry
                  </span>
                </li>
                <li class="" data-startline="1172" data-endline="1172" data-position="57043" data-size="0">
                  <span data-position="57043" data-size="20">
                    Blood Pressure Panel
                  </span>
                </li>
              </ul>
            </li>
            <li class="" data-startline="1173" data-endline="1176" data-position="57068" data-size="0">
              <span data-position="57068" data-size="29">
                調閱傷病患在單一救護紀錄表上的所有量測資料，並顯示於畫面上
              </span>
              <ul data-position="57102" data-size="0">
                <li class="" data-startline="1174" data-endline="1174" data-position="57104" data-size="0">
                  <span data-position="57104" data-size="7">
                    以傷病患名稱（
                  </span>
                  <a href="http://Patient.name" target="_blank" rel="noopener">
                    <span data-position="57111" data-size="12">
                      Patient.name
                    </span>
                  </a>
                  <span data-position="57123" data-size="29">
                    ）或唯一識別碼（Patient.Identifier）調閱
                  </span>
                </li>
                <li class="" data-startline="1175" data-endline="1176" data-position="57159" data-size="0">
                  <span data-position="57159" data-size="9">
                    以表單 id 調閱
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p style={h3_style}>情境3：急診病摘交換</p>
      <p>
        以急診病摘資料交換為主，參考衛福部公告的急診病摘欄位定義聯測項目。病摘定義的是急診病摘資料交換，並保留對 TW Core
        IG 的相容性。參測單位須在 SC1
        建立救護紀錄表後，方可在本情境單獨進行急診病摘交換。若參測單位單獨參加本項情境者，也可以使用大會事先建立的範例救護紀錄表進行聯結。
        病摘參考連結:
        <a href="https://emr.mohw.gov.tw/emr/doc/110/急診病摘交換欄位與格式之標準規範_1101116.pdf">
          https://emr.mohw.gov.tw/emr/doc/110/急診病摘交換欄位與格式之標準規範_1101116.pdf
        </a>
      </p>
      <ul class="part in-view" data-startline="1180" data-endline="1188" data-position="57535" data-size="0">
        <li class="" data-startline="1180" data-endline="1182" data-position="57537" data-size="0">
          <span data-position="57537" data-size="15">
            調閱救護紀錄表，並顯示於畫面上
          </span>
          <ul data-position="57556" data-size="0">
            <li class="" data-startline="1181" data-endline="1181" data-position="57558" data-size="0">
              <span data-position="57558" data-size="34">
                有參測 SC1 的單位，須先在 SC1 新增救護紀錄表後調閱該筆資料
              </span>
            </li>
            <li class="" data-startline="1182" data-endline="1182" data-position="57597" data-size="0">
              <span data-position="57597" data-size="32">
                沒有參測 SC1 的單位，須調閱大會事先建立的範例救護紀錄表資料
              </span>
            </li>
          </ul>
        </li>
        <li class="" data-startline="1183" data-endline="1184" data-position="57632" data-size="0">
          <span data-position="57632" data-size="81">
            新增急診病摘（Composition），其中各 Resource 必須分別上傳至 FHIR Server 後以 Reference
            進行聯結，下列至少須完成一項：
          </span>
          <ul data-position="57716" data-size="0">
            <li class="" data-startline="1184" data-endline="1184" data-position="57718" data-size="0">
              <span data-position="57718" data-size="5">
                欄位定義：
              </span>
              <a
                href="https://docs.google.com/spreadsheets/d/1zv-C_S3_DmyN36WReID55ben08EtvM95VXiX_mpirYM/edit?usp=sharing"
                target="_blank"
                rel="noopener"
              >
                <span data-position="57723" data-size="100">
                  https://docs.google.com/spreadsheets/d/1zv-C_S3_DmyN36WReID55ben08EtvM95VXiX_mpirYM/edit?usp=sharing
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li class="" data-startline="1185" data-endline="1188" data-position="57826" data-size="0">
          <span data-position="57826" data-size="18">
            調閱急診病摘資料表單，並顯示於畫面上
          </span>
          <ul data-position="57847" data-size="0">
            <li class="" data-startline="1186" data-endline="1186" data-position="57849" data-size="0">
              <span data-position="57849" data-size="7">
                以傷病患名稱（
              </span>
              <a href="http://Patient.name" target="_blank" rel="noopener">
                <span data-position="57856" data-size="12">
                  Patient.name
                </span>
              </a>
              <span data-position="57868" data-size="29">
                ）或唯一識別碼（Patient.Identifier）調閱
              </span>
            </li>
            <li class="" data-startline="1187" data-endline="1188" data-position="57902" data-size="0">
              <span data-position="57902" data-size="9">
                以表單 id 調閱
              </span>
            </li>
          </ul>
        </li>
      </ul>
      <p style={h3_style}>情境4：時間敏感急重症 - 到院前心跳停止（OHCA）病摘交換</p>
      <p>
        以到院前心跳停止（OHCA）資料交換為主，參考衛福部公告的到院前心跳停止（OHCA）欄位定義聯測項目。病摘定義的是到院後針對四大急重症的資料交換，並保留對
        TW Core IG 的相容性。參測單位須在 SC1
        建立救護紀錄表後，方可在本情境單獨進行時間敏感急重症到院前心跳停止（OHCA）病摘交換。若參測單位單獨參加本項情境者，也可以使用大會事先建立的範例救護紀錄表進行聯結。
        病摘參考連結:
        <a href="https://emr.mohw.gov.tw/myemr/doc/111/時間敏感急重症之到院前心跳停止(OHCA)個案登錄表交換欄位與格式之標準規範_1111229.pdf">
          https://emr.mohw.gov.tw/myemr/doc/111/時間敏感急重症之到院前心跳停止(OHCA)個案登錄表交換欄位與格式之標準規範_1111229.pdf
        </a>
      </p>
      <ul class="part in-view" data-startline="1192" data-endline="1200" data-position="58490" data-size="0">
        <li class="" data-startline="1192" data-endline="1194" data-position="58492" data-size="0">
          <span data-position="58492" data-size="15">
            調閱救護紀錄表，並顯示於畫面上
          </span>
          <ul data-position="58511" data-size="0">
            <li class="" data-startline="1193" data-endline="1193" data-position="58513" data-size="0">
              <span data-position="58513" data-size="22">
                須先在 SC1 新增救護紀錄表後調閱該筆資料
              </span>
            </li>
            <li class="" data-startline="1194" data-endline="1194" data-position="58540" data-size="0">
              <span data-position="58540" data-size="32">
                沒有參測 SC1 的單位，須調閱大會事先建立的範例救護紀錄表資料
              </span>
            </li>
          </ul>
        </li>
        <li class="" data-startline="1195" data-endline="1196" data-position="58575" data-size="0">
          <span data-position="58575" data-size="72">
            新增到院前心跳停止（OHCA）病摘（Bundle Document），其中需使用 Composition 將文件中各 Resource 進行聯結
          </span>
          <ul data-position="58652" data-size="0">
            <li class="" data-startline="1196" data-endline="1196" data-position="58654" data-size="0">
              <span data-position="58654" data-size="5">
                欄位定義：
              </span>
              <a
                href="https://docs.google.com/spreadsheets/d/1zv-C_S3_DmyN36WReID55ben08EtvM95VXiX_mpirYM/edit?usp=sharing"
                target="_blank"
                rel="noopener"
              >
                <span data-position="58659" data-size="100">
                  https://docs.google.com/spreadsheets/d/1zv-C_S3_DmyN36WReID55ben08EtvM95VXiX_mpirYM/edit?usp=sharing
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li class="" data-startline="1197" data-endline="1200" data-position="58762" data-size="0">
          <span data-position="58762" data-size="25">
            調閱到院前心跳停止（OHCA）病摘，並顯示於畫面上
          </span>
          <ul data-position="58790" data-size="0">
            <li class="" data-startline="1198" data-endline="1198" data-position="58792" data-size="0">
              <span data-position="58792" data-size="7">
                以傷病患名稱（
              </span>
              <a href="http://Patient.name" target="_blank" rel="noopener">
                <span data-position="58799" data-size="12">
                  Patient.name
                </span>
              </a>
              <span data-position="58811" data-size="29">
                ）或唯一識別碼（Patient.Identifier）調閱
              </span>
            </li>
            <li class="" data-startline="1199" data-endline="1200" data-position="58845" data-size="0">
              <span data-position="58845" data-size="9">
                以表單 id 調閱
              </span>
            </li>
          </ul>
        </li>
      </ul>
      <p style={h3_style}>情境5：時間敏感急重症 - 重大創傷（TRAUMA）病摘交換</p>
      <p>
        以重大創傷（TRAUMA）資料交換為主，參考衛福部公告的重大創傷（TRAUMA）欄位定義聯測項目。病摘定義的是到院後針對四大急重症的資料交換，並保留對
        TW Core IG 的相容性。參測單位須在 SC1
        建立救護紀錄表後，方可在本情境單獨進行時間敏感急重症重大創傷（TRAUMA）病摘交換。若參測單位單獨參加本項情境者，也可以使用大會事先建立的範例救護紀錄表進行聯結。
        病摘參考連結:
        <a href="https://emr.mohw.gov.tw/myemr/doc/111/時間敏感急重症之重大創傷(TRAUMA)個案登錄表交換欄位與格式之標準規範_1111229.pdf">
          https://emr.mohw.gov.tw/myemr/doc/111/時間敏感急重症之重大創傷(TRAUMA)個案登錄表交換欄位與格式之標準規範_1111229.pdf
        </a>
      </p>
      <ul class="part in-view" data-startline="1204" data-endline="1212" data-position="59404" data-size="0">
        <li class="" data-startline="1204" data-endline="1206" data-position="59406" data-size="0">
          <span data-position="59406" data-size="15">
            調閱救護紀錄表，並顯示於畫面上
          </span>
          <ul data-position="59425" data-size="0">
            <li class="" data-startline="1205" data-endline="1205" data-position="59427" data-size="0">
              <span data-position="59427" data-size="22">
                須先在 SC1 新增救護紀錄表後調閱該筆資料
              </span>
            </li>
            <li class="" data-startline="1206" data-endline="1206" data-position="59454" data-size="0">
              <span data-position="59454" data-size="32">
                沒有參測 SC1 的單位，須調閱大會事先建立的範例救護紀錄表資料
              </span>
            </li>
          </ul>
        </li>
        <li class="" data-startline="1207" data-endline="1208" data-position="59489" data-size="0">
          <span data-position="59489" data-size="71">
            新增重大創傷（TRAUMA）病摘（Bundle Document），其中需使用 Composition 將文件中各 Resource 進行聯結
          </span>
          <ul data-position="59565" data-size="0">
            <li class="" data-startline="1208" data-endline="1208" data-position="59567" data-size="0">
              <span data-position="59567" data-size="5">
                欄位定義：
              </span>
              <a
                href="https://docs.google.com/spreadsheets/d/1zv-C_S3_DmyN36WReID55ben08EtvM95VXiX_mpirYM/edit?usp=sharing"
                target="_blank"
                rel="noopener"
              >
                <span data-position="59572" data-size="100">
                  https://docs.google.com/spreadsheets/d/1zv-C_S3_DmyN36WReID55ben08EtvM95VXiX_mpirYM/edit?usp=sharing
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li class="" data-startline="1209" data-endline="1212" data-position="59675" data-size="0">
          <span data-position="59675" data-size="24">
            調閱重大創傷（TRAUMA）病摘，並顯示於畫面上
          </span>
          <ul data-position="59702" data-size="0">
            <li class="" data-startline="1210" data-endline="1210" data-position="59704" data-size="0">
              <span data-position="59704" data-size="7">
                以傷病患名稱（
              </span>
              <a href="http://Patient.name" target="_blank" rel="noopener">
                <span data-position="59711" data-size="12">
                  Patient.name
                </span>
              </a>
              <span data-position="59723" data-size="29">
                ）或唯一識別碼（Patient.Identifier）調閱
              </span>
            </li>
            <li class="" data-startline="1211" data-endline="1212" data-position="59757" data-size="0">
              <span data-position="59757" data-size="9">
                以表單 id 調閱
              </span>
            </li>
          </ul>
        </li>
      </ul>
      <p style={h3_style}>情境6：時間敏感急重症 - 腦中風（CVA）個案登錄表交換</p>
      <p>
        以腦中風（CVA）個案登錄表資料交換為主，參考衛福部公告的腦中風（CVA）個案登錄表欄位定義聯測項目。病摘定義的是到院後針對四大急重症的資料交換，並保留對
        TW Core IG 的相容性。參測單位須在 SC1
        建立救護紀錄表後，方可在本情境單獨進行時間敏感急腦中風（CVA）個案登錄表交換。若參測單位單獨參加本項情境者，也可以使用大會事先建立的範例救護紀錄表進行聯結。
        病摘參考連結:
        <a href="https://emr.mohw.gov.tw/emr/doc/111/20220921.docx">
          https://emr.mohw.gov.tw/emr/doc/111/20220921.docx
        </a>
      </p>
      <ul class="part in-view" data-startline="1216" data-endline="1224" data-position="60044" data-size="0">
        <li class="" data-startline="1216" data-endline="1218" data-position="60046" data-size="0">
          <span data-position="60046" data-size="15">
            調閱救護紀錄表，並顯示於畫面上
          </span>
          <ul data-position="60065" data-size="0">
            <li class="" data-startline="1217" data-endline="1217" data-position="60067" data-size="0">
              <span data-position="60067" data-size="22">
                須先在 SC1 新增救護紀錄表後調閱該筆資料
              </span>
            </li>
            <li class="" data-startline="1218" data-endline="1218" data-position="60094" data-size="0">
              <span data-position="60094" data-size="32">
                沒有參測 SC1 的單位，須調閱大會事先建立的範例救護紀錄表資料
              </span>
            </li>
          </ul>
        </li>
        <li class="" data-startline="1219" data-endline="1220" data-position="60129" data-size="0">
          <span data-position="60129" data-size="70">
            新增腦中風（CVA）個案登錄表（Bundle Document），其中需使用 Composition 將文件中各 Resource 進行聯結
          </span>
          <ul data-position="60204" data-size="0">
            <li class="" data-startline="1220" data-endline="1220" data-position="60206" data-size="0">
              <span data-position="60206" data-size="5">
                欄位定義：
              </span>
              <a
                href="https://docs.google.com/spreadsheets/d/1zv-C_S3_DmyN36WReID55ben08EtvM95VXiX_mpirYM/edit?usp=sharing"
                target="_blank"
                rel="noopener"
              >
                <span data-position="60211" data-size="100">
                  https://docs.google.com/spreadsheets/d/1zv-C_S3_DmyN36WReID55ben08EtvM95VXiX_mpirYM/edit?usp=sharing
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li class="" data-startline="1221" data-endline="1224" data-position="60314" data-size="0">
          <span data-position="60314" data-size="23">
            調閱腦中風（CVA）個案登錄表，並顯示於畫面上
          </span>
          <ul data-position="60340" data-size="0">
            <li class="" data-startline="1222" data-endline="1222" data-position="60342" data-size="0">
              <span data-position="60342" data-size="7">
                以傷病患名稱（
              </span>
              <a href="http://Patient.name" target="_blank" rel="noopener">
                <span data-position="60349" data-size="12">
                  Patient.name
                </span>
              </a>
              <span data-position="60361" data-size="29">
                ）或唯一識別碼（Patient.Identifier）調閱
              </span>
            </li>
            <li class="" data-startline="1223" data-endline="1224" data-position="60395" data-size="0">
              <span data-position="60395" data-size="9">
                以表單 id 調閱
              </span>
            </li>
          </ul>
        </li>
      </ul>
      <p style={h3_style}>情境7：時間敏感急重症 - 冠心症（ACS）病摘交換</p>
      <div
        class="alert alert-warning part in-view"
        data-startline="1226"
        data-endline="1227"
        data-position="60437"
        data-size="44"
      >
        <p data-position="60448" data-size="0">
          <span data-position="60448" data-size="29">
            注意：因本年度尚未公告急性冠心症表單，故今年本情境將取消。
          </span>
        </p>
      </div>
      <p>
        以冠心症（ACS）資料交換為主，參考衛福部公告的冠心症（ACS）欄位定義聯測項目。病摘定義的是到院後針對四大急重症的資料交換，並保留對
        TW Core IG 的相容性。參測單位須在 SC1
        建立救護紀錄表後，方可在本情境單獨進行時間敏感急重症冠心症（ACS）病摘交換。若參測單位單獨參加本項情境者，也可以使用大會事先建立的範例救護紀錄表進行聯結。
      </p>
      <ul class="part in-view" data-startline="1230" data-endline="1238" data-position="60656" data-size="0">
        <li class="" data-startline="1230" data-endline="1232" data-position="60658" data-size="0">
          <span data-position="60658" data-size="15">
            調閱救護紀錄表，並顯示於畫面上
          </span>
          <ul data-position="60677" data-size="0">
            <li class="" data-startline="1231" data-endline="1231" data-position="60679" data-size="0">
              <span data-position="60679" data-size="22">
                須先在 SC1 新增救護紀錄表後調閱該筆資料
              </span>
            </li>
            <li class="" data-startline="1232" data-endline="1232" data-position="60706" data-size="0">
              <span data-position="60706" data-size="32">
                沒有參測 SC1 的單位，須調閱大會事先建立的範例救護紀錄表資料
              </span>
            </li>
          </ul>
        </li>
        <li class="" data-startline="1233" data-endline="1233" data-position="60741" data-size="0">
          <span data-position="60741" data-size="67">
            新增冠心症（ACS）病摘（Bundle Document），其中需使用 Composition 將文件中各 Resource 進行聯結
          </span>
        </li>
        <li class="" data-startline="1234" data-endline="1238" data-position="60811" data-size="0">
          <span data-position="60811" data-size="20">
            調閱冠心症（ACS）病摘，並顯示於畫面上
          </span>
          <ul data-position="60834" data-size="0">
            <li class="" data-startline="1235" data-endline="1235" data-position="60836" data-size="0">
              <span data-position="60836" data-size="7">
                以傷病患名稱（
              </span>
              <a href="http://Patient.name" target="_blank" rel="noopener">
                <span data-position="60843" data-size="12">
                  Patient.name
                </span>
              </a>
              <span data-position="60855" data-size="29">
                ）或唯一識別碼（Patient.Identifier）調閱
              </span>
            </li>
            <li class="" data-startline="1236" data-endline="1238" data-position="60889" data-size="0">
              <span data-position="60889" data-size="9">
                以表單 id 調閱
              </span>
            </li>
          </ul>
        </li>
      </ul>
      <p style={h3_style}>賽道通過基準</p>
      <ul class="part in-view" data-startline="1240" data-endline="1255" data-position="60912" data-size="0">
        <li class="" data-startline="1240" data-endline="1240" data-position="60914" data-size="0">
          <span data-position="60914" data-size="49">
            本賽道各情境的通過基準為獨立判斷，參測單位完成所有標記為 R（必須）的聯測步驟時，才算完成該情境。
          </span>
        </li>
        <li class="" data-startline="1241" data-endline="1241" data-position="60966" data-size="0">
          <span data-position="60966" data-size="30">
            參測單位通過一情境時，將會於核發的通過證明上註記通過的情境。
          </span>
        </li>
        <li class="" data-startline="1242" data-endline="1255" data-position="60999" data-size="0">
          <span data-position="60999" data-size="57">
            僅完成部分項目者，核發的通過證明將註記「部分通過」與其通過項目，並於官網聯測松結果（Matrix）公告通過的項目。
          </span>
          <ul data-position="61059" data-size="0">
            <li class="" data-startline="1243" data-endline="1248" data-position="61061" data-size="0">
              <span data-position="61061" data-size="57">
                例如 A 廠商通過 SC1（所有交換項目）、SC2（僅有 12 Leads ECG），核發的通過證明將會如下註記：
              </span>
              <ul data-position="61123" data-size="0">
                <li class="" data-startline="1244" data-endline="1244" data-position="61125" data-size="0">
                  <span data-position="61125" data-size="10">
                    參測單位： A 廠商
                  </span>
                </li>
                <li class="" data-startline="1245" data-endline="1245" data-position="61142" data-size="0">
                  <span data-position="61142" data-size="25">
                    參測賽道： Track #7 緊急醫療救護情境賽道
                  </span>
                </li>
                <li class="" data-startline="1246" data-endline="1248" data-position="61174" data-size="0">
                  <span data-position="61174" data-size="5">
                    通過項目：
                  </span>
                  <ul data-position="61186" data-size="0">
                    <li class="" data-startline="1247" data-endline="1247" data-position="61188" data-size="0">
                      <span data-position="61188" data-size="34">
                        Scenario 1（完全通過）：通過所有流程，及所有資料交換項目。
                      </span>
                    </li>
                    <li class="" data-startline="1248" data-endline="1248" data-position="61231" data-size="0">
                      <span data-position="61231" data-size="46">
                        Scenario 2（部分通過）：通過所有流程，及以下資料交換項目：12 Leads ECG
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="" data-startline="1249" data-endline="1255" data-position="61282" data-size="0">
              <span data-position="61282" data-size="53">
                例如 B 廠商通過 SC2（僅有 Body Temperature）、SC4，核發的通過證明將會如下註記：
              </span>
              <ul data-position="61340" data-size="0">
                <li class="" data-startline="1250" data-endline="1250" data-position="61342" data-size="0">
                  <span data-position="61342" data-size="10">
                    參測單位： A 廠商
                  </span>
                </li>
                <li class="" data-startline="1251" data-endline="1251" data-position="61359" data-size="0">
                  <span data-position="61359" data-size="25">
                    參測賽道： Track #7 緊急醫療救護情境賽道
                  </span>
                </li>
                <li class="" data-startline="1252" data-endline="1255" data-position="61391" data-size="0">
                  <span data-position="61391" data-size="5">
                    通過項目：
                  </span>
                  <ul data-position="61403" data-size="0">
                    <li class="" data-startline="1253" data-endline="1253" data-position="61405" data-size="0">
                      <span data-position="61405" data-size="50">
                        Scenario 2（部分通過）：通過所有流程，及以下資料交換項目：Body Temperature
                      </span>
                    </li>
                    <li class="" data-startline="1254" data-endline="1255" data-position="61464" data-size="0">
                      <span data-position="61464" data-size="34">
                        Scenario 3（完全通過）：通過所有流程，及所有資料交換項目。
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

const Track7_SystemsAffected_content = () => {
  return <div></div>
}

const Track7_Specification_content = () => {
  const [srcImg, setSrcImg] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  return (
    <div>
      <p style={h3_style}>角色(Actors)</p>
      <p>1. 緊急醫療救護(EMS)角色整理</p>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th>
              <strong>Keyword</strong>
            </th>
            <th>
              <strong>名稱</strong>
            </th>
            <th>
              <strong>描述</strong>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>EMS_CREATOR</td>
            <td>EMS Creator</td>
            <td>新增緊急醫療救護資料角色</td>
          </tr>
          <tr>
            <td>EMS_CONSUMER</td>
            <td>EMS Consumer</td>
            <td>新增緊急醫療救護資料角色</td>
          </tr>
          <tr>
            <td>EMS_REPOSITORY</td>
            <td>EMS Repository</td>
            <td>緊急醫療救護資料儲存庫</td>
          </tr>
        </tbody>
      </table>

      <p style={h3_style}>交易(Transactions)</p>
      <p>1. 緊急醫療救護(EMS)交易整理</p>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th>
              <strong>編號</strong>
            </th>
            <th>
              <strong>名稱</strong>
            </th>
            <th>
              <strong>描述</strong>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>MITW-33</td>
            <td>EMS resource create</td>
            <td>新增緊急醫療救護資料</td>
          </tr>
          <tr>
            <td>MITW-34</td>
            <td>EMS Resources Query/Retrieve</td>
            <td>新增緊急醫療救護資料</td>
          </tr>
        </tbody>
      </table>

      <p style={h3_style}>角色與交易關係圖</p>
      <p>1. 緊急醫療救護(EMS)之角色與交易關係圖</p>

      <img src={track7_2} alt="trackImg" width="40%" onClick={() => setLightboxOpen(true)} />
      {lightboxOpen && (
        <Lightbox
          imageLoadErrorMessage="無法載入圖片"
          imagePadding={window.innerWidth / 10}
          mainSrc={track7_2}
          onCloseRequest={() => setLightboxOpen(false)}
        />
      )}
    </div>
  )
}

const Track7_Author_content = () => {
  return (
    <div>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>角色</th>
            <th style={{ width: '15%' }}>姓名</th>
            <th>所屬單位</th>
            <th>貢獻</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>召集人</td>
            <td>楊宇凡</td>
            <td>社團法人台灣醫療影像資訊標準協會 副秘書長</td>
            <td>Profiling, 聯測測試情境</td>
          </tr>
          <tr>
            <td>貢獻者</td>
            <td>李修安</td>
            <td>國家衛生研究院 - 癌症研究所 博士後研究員</td>
            <td>Profiling, 聯測測試情境</td>
          </tr>
          <tr>
            <td>貢獻者</td>
            <td>黃睿駿</td>
            <td>國立臺北護理健康大學 - 資訊管理系</td>
            <td>聯測測試情境</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export {
  Track7_Summary_content,
  Track7_Benefits_content,
  Track7_details_content,
  Track7_SystemsAffected_content,
  Track7_Specification_content,
  Track7_Author_content,
}
