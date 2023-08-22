import ReactPlayer from 'react-player/youtube'

import track8_1 from '../../../../assets/WG8_1.png'
import track8_2 from '../../../../assets/WG8_2.png'
import track8_3 from '../../../../assets/WG8_3.png'
import track8_4 from '../../../../assets/WG8_4.png'
import track8_5 from '../../../../assets/WG8_5.png'
const h3_style = {
  fontWeight: 'bold',
  fontSize: '1.5em',
}
const Track8_Summary_content = () => {
  return (
    <div>
      <p>
        為了同解決病患(保戶)、醫院、保險公司三方的關於保險給付的問題，本工作小組提出一個適用於台灣保險理賠情境的技術規格，讓保戶在申請保險理賠時能以電子化方式申請。本賽道將以HL7
        FHIR為核心架構設計不同的Profile，並以FHIR IG方式呈現，建構醫療收據與診斷證明書的資料格式，因應資料互通性的需求。
      </p>
      <br />
      <p style={h3_style}>目的</p>
      <p>
        透過醫院與保險公司合作，在病患同意的情況下，透過將醫院開立的收據以及診斷證明書數位化後，根據本計畫設計的FHIR實作指引產生國際標準FHIR格式文件後，以FHIR
        RESTful
        API方式傳輸至保險公司的交換中心進行保險審核。完成核保後再由保險公司逕付保險費用給醫院，並且讓病人不需要代墊保險理賠金額，省去大量的時間成本。醫院也會節省核發紙本診斷證明書以及收據，保險公司也會節省人力成本，民眾也不需要先行墊付費用，已達到病患、醫院以及保險公司三贏的局面。期望能善患者的照護，提高醫療保健服務的效率，並降低醫療保健的成本。
      </p>
      <center>
        <img src={track8_1} Width="100%" />
      </center>

      <div width="100%">
        <p style={{ fontWeight: 'bold' }}>賽道介紹</p>
        <ReactPlayer url="https://youtu.be/HeQocyAPPLY" width="100%" />
      </div>
      <div width="100%" style={{ marginTop: '1rem' }}>
        <p style={{ fontWeight: 'bold' }}>賽道簡報</p>
      </div>
    </div>
  )
}

const Track8_Benefits_content = () => {
  return (
    <div>
      <ul class="part in-view" data-startline="1239" data-endline="1243" data-position="60140" data-size="0">
        <li class="" data-startline="1239" data-endline="1240" data-position="60142" data-size="0">
          <p data-position="60140" data-size="0">
            <strong data-position="60142" data-size="0">
              <span data-position="60144" data-size="2">
                民眾
              </span>
            </strong>
            <span data-position="60148" data-size="279">
              :
              目前民眾要申請醫療保險理賠時，需要繁瑣的程序，包含填寫理賠申請書、若是不同保險公司則會有不同的規定以及格式，另外還需要提供醫療相關證明文件，包含:
              診斷證明書、收據、檢驗檢查、影像報告、醫學影像等。根據依照保戶申請的醫療險種類，需要提供的資料亦不同。以現有核保流程來說，保戶在醫院完成醫療服務且繳費後，再向醫院申請診斷證明書以及收據，並自行寄送紙本資料到保險公司。保險公司收到申請資料後再進行審查後再支付保險費用給保戶。上述流程除了保戶需要先墊付費用之外，加上申請步驟繁瑣，且申請資料絕大多數都是紙本資料，對於保戶來說需要花費一定的時間處理申請理賠程序。
            </span>
          </p>
        </li>
        <li class="" data-startline="1241" data-endline="1241" data-position="60431" data-size="0">
          <p data-position="60429" data-size="0">
            <strong data-position="60431" data-size="0">
              <span data-position="60433" data-size="4">
                保險公司
              </span>
            </strong>
            <span data-position="60439" data-size="156">
              :
              核保需要投入人力進行人工審核，且對於核保條件以及文件完整度以及內容等需要進行比對，若文件內容不符合給付規定則需退回給保戶重新再向醫院申請文件。對於醫院來說，開立診斷證明書以及提供相關的病歷資料，仍需要開立紙本證明，因此仍需花費一定程度的人力成本，且每開立一張診斷證明書，醫師就需要簽名一次，仍需要多付出人力。
            </span>
          </p>
        </li>
        <li class="" data-startline="1242" data-endline="1243" data-position="60598" data-size="0">
          <p data-position="60596" data-size="0">
            <strong data-position="60598" data-size="0">
              <span data-position="60600" data-size="9">
                醫院與資訊系統業者
              </span>
            </strong>
            <span data-position="60611" data-size="158">
              :
              採用FHIR標準解決醫療健康保險的資料交換和互操作性問題，透過使用FHIR標準實現保險公司與醫療機構之間保險資料以及電子病歷交換的互操作性，進而提高醫療保健的質量和效率。建立FHIR標準的實用模型用來實現互操作性，並以FHIR
              IG的架構呈現，提供完整的規格讓開發者實現具備可擴展且可重複利用的FHIR應用程序。
            </span>
          </p>
        </li>
      </ul>
    </div>
  )
}

const Track8_details_content = () => {
  return (
    <div>
      <p>本賽道的理賠情境描述如下:</p>
      <br />
      <ol class="part in-view" data-startline="1246" data-endline="1249" data-position="60805" data-size="0">
        <li class="" data-startline="1246" data-endline="1246" data-position="60808" data-size="0">
          <span data-position="60808" data-size="101">
            保戶填寫個資同意書，送交至交換系統，經過醫院審核通過，向醫院資訊系統(Hospital Information System,
            簡稱HIS)調閱病歷資料，根據本工作小組設計的IG規格轉換成FHIR格式，
          </span>
        </li>
        <li class="" data-startline="1247" data-endline="1247" data-position="60913" data-size="0">
          <span data-position="60913" data-size="62">
            將理賠申請書(未列入本次聯測規格)、收據、以及病歷附件 (包含:
            診斷證明書、檢驗檢查)等文件傳送至保險公司的系統進行審核。
          </span>
        </li>
        <li class="" data-startline="1248" data-endline="1249" data-position="60979" data-size="0">
          <span data-position="60979" data-size="42">
            當審核通過後，計算抵繳金額後再將經費轉帳給醫院後，即完成抵繳(未列入本次聯測規格)。
          </span>
        </li>
      </ol>
    </div>
  )
}

const Track8_SystemsAffected_content = () => {
  return (
    <div>
      <p>本規範涉及涉及的系统有：</p>
      <br />
      <ul class="part in-view" data-startline="1252" data-endline="1257" data-position="61064" data-size="0">
        <li class="" data-startline="1252" data-endline="1252" data-position="61066" data-size="0">
          <strong data-position="61066" data-size="0">
            <span data-position="61068" data-size="5">
              批價系統:
            </span>
          </strong>
        </li>
        <li class="" data-startline="1253" data-endline="1253" data-position="61079" data-size="0">
          <strong data-position="61079" data-size="0">
            <span data-position="61081" data-size="7">
              電子病歷系統:
            </span>
          </strong>
        </li>
        <li class="" data-startline="1254" data-endline="1254" data-position="61094" data-size="0">
          <strong data-position="61094" data-size="0">
            <span data-position="61096" data-size="8">
              索引與交換中心:
            </span>
          </strong>
        </li>
        <li class="" data-startline="1255" data-endline="1255" data-position="61110" data-size="0">
          <strong data-position="61110" data-size="0">
            <span data-position="61112" data-size="7">
              收據調閱系統:
            </span>
          </strong>
        </li>
        <li class="" data-startline="1256" data-endline="1257" data-position="61125" data-size="0">
          <strong data-position="61125" data-size="0">
            <span data-position="61127" data-size="7">
              病歷調閱系統:
            </span>
          </strong>
        </li>
      </ul>
      <p>
        <strong>本工作小組制定的使用情境依序說明如下:</strong>
      </p>
      <br />
      <p style={h3_style}>情境1:理賠申請文件打包上傳</p>
      <p>
        病患向保險公司(Payer)申請健康保險給付，經過病患授權後，由醫院(Provider/EHR)開立收據(Invoice)與收據明細(ChargeItem)與理賠病歷附件，由上傳系統(Creator)將資料傳送至交換中心(Repository)，由保險公司調閱(Consumer)。病例附件部分包含:
        診斷證明書 、檢驗檢查、放射影像報告與醫學影像 (後續擴充)、病理報告 (後續擴充)。
      </p>
      <ul class="part in-view" data-startline="1263" data-endline="1272" data-position="61379" data-size="0">
        <li class="" data-startline="1263" data-endline="1272" data-position="61381" data-size="0">
          <strong data-position="61381" data-size="0">
            <span data-position="61383" data-size="5">
              產生文件:
            </span>
          </strong>
          <ul data-position="61394" data-size="0">
            <li class="" data-startline="1264" data-endline="1272" data-position="61396" data-size="0">
              <span data-position="61396" data-size="27">
                醫療保險申請書文件打包(Bundle)，包含以下內容:
              </span>
              <ul data-position="61429" data-size="0">
                <li class="" data-startline="1265" data-endline="1265" data-position="61431" data-size="0">
                  <span data-position="61431" data-size="14">
                    醫療保險申請書(Claim)
                  </span>
                </li>
                <li class="" data-startline="1266" data-endline="1266" data-position="61452" data-size="0">
                  <span data-position="61452" data-size="28">
                    收據(Invoice)與收據明細(ChargeItem)
                  </span>
                </li>
                <li class="" data-startline="1267" data-endline="1267" data-position="61487" data-size="0">
                  <span data-position="61487" data-size="24">
                    診斷證明書 (DiagnosticReport)
                  </span>
                </li>
                <li class="" data-startline="1268" data-endline="1268" data-position="61518" data-size="0">
                  <span data-position="61518" data-size="19">
                    檢驗檢查 (以Observation)
                  </span>
                </li>
                <li class="" data-startline="1269" data-endline="1269" data-position="61544" data-size="0">
                  <span data-position="61544" data-size="24">
                    放射影像報告(DiagnosticReport)
                  </span>
                </li>
                <li class="" data-startline="1270" data-endline="1270" data-position="61575" data-size="0">
                  <span data-position="61575" data-size="25">
                    醫學影像(ImagingStudy, DICOM)
                  </span>
                </li>
                <li class="" data-startline="1271" data-endline="1272" data-position="61607" data-size="0">
                  <span data-position="61607" data-size="23">
                    病理報告 (DiagnosticReport)
                  </span>
                </li>
                <center>
                  <img src={track8_2} Width="100%" />
                </center>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <p style={h3_style}>情境2:理賠申請補件打包上傳</p>
      <p>
        申請理賠後，需更新理賠病歷附件，經過病患授權後，由醫院(Provider/EHR)產生病歷附件後，由上傳系統(Creator)將保險申請書以更新的方式傳送至交換中心(Repository)，由保險公司調閱(Consumer)。
      </p>
      <ul class="part in-view" data-startline="1278" data-endline="1288" data-position="61813" data-size="0">
        <li class="" data-startline="1278" data-endline="1285" data-position="61815" data-size="0">
          <strong>產生文件</strong>
          <ul data-position="61828" data-size="0">
            <li class="" data-startline="1279" data-endline="1279" data-position="61830" data-size="0">
              <span data-position="61830" data-size="28">
                收據(Invoice)與收據明細(ChargeItem)
              </span>
            </li>
            <li class="" data-startline="1280" data-endline="1280" data-position="61863" data-size="0">
              <span data-position="61863" data-size="24">
                診斷證明書 (DiagnosticReport)
              </span>
            </li>
            <li class="" data-startline="1281" data-endline="1281" data-position="61892" data-size="0">
              <span data-position="61892" data-size="19">
                檢驗檢查 (以Observation)
              </span>
            </li>
            <li class="" data-startline="1282" data-endline="1282" data-position="61916" data-size="0">
              <span data-position="61916" data-size="24">
                放射影像報告(DiagnosticReport)
              </span>
            </li>
            <li class="" data-startline="1283" data-endline="1283" data-position="61945" data-size="0">
              <span data-position="61945" data-size="25">
                醫學影像(ImagingStudy, DICOM)
              </span>
            </li>
            <li class="" data-startline="1284" data-endline="1285" data-position="61975" data-size="0">
              <span data-position="61975" data-size="23">
                病理報告 (DiagnosticReport)
              </span>
            </li>
          </ul>
        </li>
        <li class="" data-startline="1286" data-endline="1288" data-position="62002" data-size="0">
          <p data-position="62000" data-size="0">
            <strong data-position="62002" data-size="0">
              <span data-position="62004" data-size="6">
                角色與交易圖
              </span>
            </strong>
            <br />
            <center>
              <img src={track8_3} Width="100%" />
            </center>
          </p>
        </li>
      </ul>

      <p style={h3_style}>情境3: 理賠申請調閱</p>
      <p>
        保險公司調閱(Consumer)，由情境1與2的理賠申請書資料，透過指定的查詢參數調閱理賠申請書以及附件，並在畫面上恰當呈現此次理賠的佐證資料
      </p>
      <ul class="part in-view" data-startline="1292" data-endline="1295" data-position="62149" data-size="0">
        <li class="" data-startline="1292" data-endline="1292" data-position="62151" data-size="0">
          <strong data-position="62151" data-size="0">
            <span data-position="62153" data-size="5">
              產生文件:
            </span>
          </strong>
          <span data-position="62160" data-size="2">
            {' '}
            無
          </span>
        </li>
        <li class="" data-startline="1293" data-endline="1295" data-position="62165" data-size="0">
          <strong data-position="62165" data-size="0">
            <span data-position="62167" data-size="6">
              角色與交易圖
            </span>
          </strong>
          <br />
          <center>
            <img src={track8_4} Width="100%" />
          </center>
        </li>
      </ul>
    </div>
  )
}

const Track8_Specification_content = () => {
  return (
    <div>
      <p style={h3_style}>規格</p>
      <ul class="part in-view" data-startline="1298" data-endline="1300" data-position="62253" data-size="0">
        <li class="" data-startline="1298" data-endline="1298" data-position="62255" data-size="0">
          <span data-position="62255" data-size="22">
            台灣醫療收據與診斷證明書實作指引: IG連結
          </span>
        </li>
        <li class="" data-startline="1299" data-endline="1300" data-position="62280" data-size="0">
          <span data-position="62280" data-size="14">
            台灣核心實作指引: IG連結
          </span>
        </li>
      </ul>
      <p>涉及到的角色 (Actors)以及交易(Transactions)，說明如下:</p>
      <br />
      <p style={h3_style}>角色(Actors)</p>
      <ol class="part in-view" data-startline="1304" data-endline="1305" data-position="62352" data-size="0">
        <li class="" data-startline="1304" data-endline="1305" data-position="62355" data-size="0">
          <strong data-position="62355" data-size="0">
            <span data-position="62357" data-size="15">
              保險理賠(CLAIM)角色整理
            </span>
          </strong>
        </li>
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
              <td>CLAIM_CREATOR</td>
              <td>Claim Creator</td>
              <td>新增理賠資料與附件</td>
            </tr>
            <tr>
              <td>CLAIM_CONSUMER</td>
              <td>Claim Consumer</td>
              <td>查詢與調閱理賠資料與附件</td>
            </tr>
            <tr>
              <td>CLAIM_REPOSITORY</td>
              <td>Claim Repository</td>
              <td>理賠資料儲存庫</td>
            </tr>
          </tbody>
        </table>
      </ol>
      <p style={h3_style}>交易(Transactions)</p>
      <ol class="part in-view" data-startline="1313" data-endline="1314" data-position="62631" data-size="0">
        <li class="" data-startline="1313" data-endline="1314" data-position="62634" data-size="0">
          <strong data-position="62634" data-size="0">
            <span data-position="62636" data-size="15">
              保險理賠(CLAIM)交易整理
            </span>
          </strong>
        </li>
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
              <td>MITW-XX</td>
              <td>Health Care Insurance Claim Creator</td>
              <td>新增理賠申請書</td>
            </tr>
            <tr>
              <td>MITW-XX</td>
              <td>Create Health Care Insurance Claim Bundle</td>
              <td>新增理賠申請書文件打包</td>
            </tr>
            <tr>
              <td>MITW-XX</td>
              <td>Update Health Care Insurance Claim Bundle</td>
              <td>更新理賠申請書文件打包 - 電子病歷附件</td>
            </tr>
            <tr>
              <td>MITW-XX</td>
              <td>Qurey/RetrieveHealth Care Insurance Claim Bundle</td>
              <td>查詢與調閱理賠申請書文件打包</td>
            </tr>
          </tbody>
        </table>
      </ol>
      <p style={h3_style}>角色與交易關係圖</p>
      <center>
        <img src={track8_5} Width="100%" />
      </center>
    </div>
  )
}

const Track8_Author_content = () => {
  return (
    <div>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th>角色</th>
            <th>姓名</th>
            <th>所屬單位</th>
            <th>貢獻</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>
              <span data-position="66960" data-size="3">
                召集人
              </span>
            </td>
            <td>
              <span data-position="66966" data-size="3">
                連中岳
              </span>
            </td>
            <td>
              <span data-position="66972" data-size="16">
                國立臺北護理健康大學－資訊管理系
              </span>
            </td>
            <td>
              <span data-position="66991" data-size="27">
                專案管理、系統分析與設計, 聯測情境設計, 驗證與測試
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="67023" data-size="4">
                IG作者
              </span>
            </td>
            <td>
              <span data-position="67030" data-size="3">
                李麗惠
              </span>
            </td>
            <td>
              <span data-position="67038" data-size="20">
                國立臺北護理健康大學 - 健康事業管理系
              </span>
            </td>
            <td>
              <span data-position="67061" data-size="20">
                Profiling, 製作FHIR IG
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="67086" data-size="4">
                IG作者
              </span>
            </td>
            <td>
              <span data-position="67093" data-size="3">
                林伃瑤
              </span>
            </td>
            <td>
              <span data-position="67101" data-size="18">
                國立臺北護理健康大學－健康事業管理系
              </span>
            </td>
            <td>
              <span data-position="67123" data-size="9">
                製作FHIR IG
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="67137" data-size="4">
                IG作者
              </span>
            </td>
            <td>
              <span data-position="67144" data-size="3">
                曾鈺珈
              </span>
            </td>
            <td>
              <span data-position="67152" data-size="18">
                國立臺北護理健康大學－健康事業管理系
              </span>
            </td>
            <td>
              <span data-position="67174" data-size="9">
                製作FHIR IG
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="67188" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="67194" data-size="3">
                龔筠庭
              </span>
            </td>
            <td>
              <span data-position="67200" data-size="15">
                國泰金控數位數據暨科技發展中心
              </span>
            </td>
            <td>
              <span data-position="67219" data-size="7">
                系統分析與設計
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="67230" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="67236" data-size="3">
                陳杏宜
              </span>
            </td>
            <td>
              <span data-position="67242" data-size="16">
                國立臺北護理健康大學－資訊管理系
              </span>
            </td>
            <td>
              <span data-position="67261" data-size="7">
                系統分析與設計
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="67273" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="67279" data-size="3">
                蔡姍妘
              </span>
            </td>
            <td>
              <span data-position="67285" data-size="16">
                國立臺北護理健康大學－資訊管理系
              </span>
            </td>
            <td>
              <span data-position="67304" data-size="7">
                系統分析與設計
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export {
  Track8_Summary_content,
  Track8_Benefits_content,
  Track8_details_content,
  Track8_SystemsAffected_content,
  Track8_Specification_content,
  Track8_Author_content,
}
