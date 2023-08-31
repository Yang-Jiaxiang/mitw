import ReactPlayer from 'react-player/youtube'

import track10_1 from '../../../../assets/WG10_1.png'
import track10_2 from '../../../../assets/WG10_2.png'
import Lightbox from 'react-image-lightbox'
import { useState } from 'react'
const h3_style = {
  fontWeight: 'bold',
  fontSize: '1.5em',
}
const Track10_Summary_content = () => {
  return (
    <div>
      <ul class="part in-view" data-startline="1410" data-endline="1414" data-position="66206" data-size="0">
        <li class="" data-startline="1410" data-endline="1410" data-position="66208" data-size="0">
          <span data-position="66208" data-size="155">
            癌症登記做為管理、儲存、分析癌症患者相關數據的基礎，記錄了病患的就醫資訊，綜上所述，早期診斷及正確的治療方案對癌症的影響甚大，透過癌症登記資料可以得到良好的改善，各個國家的相關法規也開始要求收集病患的癌症資料，並依據各自的文化及需求規範，訂定相應的措施及標準，以盡可能收集完整的癌症病歷、診斷及治療的臨床資訊。
          </span>
        </li>
        <li class="" data-startline="1411" data-endline="1411" data-position="66366" data-size="0">
          <span data-position="66366" data-size="158">
            為了掌握癌症患者的狀況及診療情形，臺灣衛生福利部國民健康署癌症登記中心建立臺灣癌症資料庫（Taiwan Cancer
            Database,
            TCDB），儲存個案至醫院就診、檢驗、治療等過程，在設計上以預防疾病、降低死亡率及發生率為出發點，考量後續資料應用分析及個案追蹤，將癌症個案以最小需求進行資料收集並彙整至資料庫。
          </span>
        </li>
        <li class="" data-startline="1412" data-endline="1412" data-position="66527" data-size="0">
          <span data-position="66527" data-size="131">
            然而，臺灣癌症登記的設計以統計分析為目的，並未考慮到資料的互通性，使癌症登記與病患資料、病理報告、基因檢測數據分散，無法有效透過資料庫進行串聯，造成臺灣癌症登記的架構無法涵蓋一個人所有的醫療數據，這影響未來精準醫療（precision
            medicine）的應用。
          </span>
        </li>
        <li class="" data-startline="1413" data-endline="1414" data-position="66661" data-size="0">
          <span data-position="66661" data-size="47">
            使用規格: 臺灣癌症登記長/短表摘錄手冊–2022年修訂版: 短表45個欄位、長表115個欄位
          </span>
        </li>
      </ul>
      <div width="100%">
        <p style={{ fontWeight: 'bold' }}>賽道介紹</p>
        <ReactPlayer url="https://youtu.be/GLsm8sRmnMQ" width="100%" />
      </div>
    </div>
  )
}

const Track10_Benefits_content = () => {
  return (
    <div>
      <ul class="part in-view" data-startline="1416" data-endline="1418" data-position="66729" data-size="0">
        <li class="" data-startline="1416" data-endline="1416" data-position="66731" data-size="0">
          <span data-position="66731" data-size="116">
            現在的臺灣癌症登記格式已為臺灣統一標準，所有醫院須按照癌症登記摘錄手冊像國健署申報，但在醫院內部研究使用上，由於目前醫院內的電子病歷並沒有使用統一的醫療標準格式，造成院內癌症登記資料庫仍為獨立資料庫，與醫院內的其他電子病歷無法互通。
          </span>
        </li>
        <li class="" data-startline="1417" data-endline="1418" data-position="66850" data-size="0">
          <span data-position="66850" data-size="170">
            為了改善現有癌症登記無法與電子病歷有效整合的問題，並將其作為串聯完整腫瘤學電子病歷的關鍵要素，使癌症登記不再只是單一資料庫，能夠與病患資料、病理報告、基因檢測數據整合應用，將現有臺灣癌症登記資料轉換為符合國際標準FHIR的資料格式，參考美國mCODE架構，以過去癌症登記規範為主要原則，同時考量電子病歷架構，設計能夠前後相容的癌症登記格式。
          </span>
        </li>
      </ul>
    </div>
  )
}

const Track10_details_content = () => {
  return (
    <div>
      <p>本賽道的使用情境描述如下:</p>
      <ol class="part in-view" data-startline="1421" data-endline="1424" data-position="67055" data-size="0">
        <li class="" data-startline="1421" data-endline="1421" data-position="67058" data-size="0">
          <span data-position="67058" data-size="60">
            癌登個案管理師從HIS調閱癌登相關資訊，並根據本工作小組設計的IG規格轉換成FHIR格式後，上傳至癌症登記索引與交換中心
          </span>
        </li>
        <li class="" data-startline="1422" data-endline="1424" data-position="67122" data-size="0">
          <span data-position="67122" data-size="54">
            癌症登記管理系統依照IG的能力聲明中用戶端(Client)之能力聲明，對癌症登記索引與交換中心進行查詢與調閱
          </span>
        </li>
      </ol>
    </div>
  )
}

const Track10_SystemsAffected_content = () => {
  return (
    <div>
      <p>本規範涉及的系统有：</p>
      <ul class="part in-view" data-startline="1427" data-endline="1430" data-position="67218" data-size="0">
        <li class="" data-startline="1427" data-endline="1427" data-position="67220" data-size="0">
          <strong data-position="67220" data-size="0">
            <span data-position="67222" data-size="8">
              癌症登記上傳系統
            </span>
          </strong>
        </li>
        <li class="" data-startline="1428" data-endline="1428" data-position="67236" data-size="0">
          <strong data-position="67236" data-size="0">
            <span data-position="67238" data-size="8">
              癌症登記管理系統
            </span>
          </strong>
        </li>
        <li class="" data-startline="1429" data-endline="1430" data-position="67252" data-size="0">
          <strong data-position="67252" data-size="0">
            <span data-position="67254" data-size="11">
              癌症登記索引與交換中心
            </span>
          </strong>
        </li>
      </ul>
      <p>
        <strong>本工作小組制定的使用情境依序說明如下:</strong>
      </p>
      <p style={h3_style}>情境1:癌登短表交換</p>
      <li>
        癌症登記短表上傳系統(Creator)，依照臺灣癌症登記短表 FHIR IG規格將資料轉換為 FHIR 格式，並以Bundle格式上傳TCR
        FHIR儲存庫
      </li>
      <p style={h3_style}>情境2:癌登短表交換</p>
      <li>
        癌症登記長表上傳系統(Creator)，依照臺灣癌症登記短表 FHIR IG規格將資料轉換為 FHIR 格式，並以Bundle格式上傳TCR
        FHIR儲存庫
      </li>
      <center>
        <img src={track10_1} Width="100%" />
      </center>
      <p>
        表10-1以及表10-2為台灣癌症登記癌登的Profile設計對照台灣癌症登記格式對照表。Profile主要設計概念包含: (1)
        病患基本資料(Patient)、(2)醫事機構資訊(Organization)、(3)醫事人員資訊(Practitioner)、(4)病患就診資訊(首次就診日期)(Encounter)、(5)癌症診斷資訊(Condition)、(6)癌症登錄相關資訊(Observation)、(7)癌症治療相關(Procedure)。
      </p>
      <p style={h3_style}>臺灣癌症登記短表格式轉換FHIR Profile對照</p>
      <p>
        <center>表10-1、臺灣癌症登記短表格式轉換FHIR Profile對照表</center>
      </p>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th style={{ width: '10%' }}></th>
            <th style={{ width: '40%' }}>
              <span data-position="67861" data-size="6">
                癌登欄位名稱
              </span>
            </th>
            <th>
              <span data-position="67886" data-size="4">
                FHIR
              </span>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>
              <span data-position="68047" data-size="3">
                1.1
              </span>
            </td>
            <td>
              <span data-position="68057" data-size="6">
                申報醫院代碼
              </span>
            </td>
            <td>
              <span data-position="68082" data-size="23">
                Organization.identifier
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="68145" data-size="3">
                1.2
              </span>
            </td>
            <td>
              <span data-position="68155" data-size="4">
                病歷號碼
              </span>
            </td>
            <td>
              <span data-position="68180" data-size="18">
                Patient.identifier
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="68243" data-size="3">
                1.3
              </span>
            </td>
            <td>
              <span data-position="68253" data-size="2">
                姓名
              </span>
            </td>
            <td>
              <span data-position="68278" data-size="12">
                Patient.name
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="68341" data-size="3">
                1.4
              </span>
            </td>
            <td>
              <span data-position="68351" data-size="7">
                身分證統一編號
              </span>
            </td>
            <td>
              <span data-position="68376" data-size="18">
                Patient.identifier
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="68439" data-size="3">
                1.5
              </span>
            </td>
            <td>
              <span data-position="68449" data-size="2">
                性別
              </span>
            </td>
            <td>
              <span data-position="68474" data-size="14">
                Patient.gender
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="68537" data-size="3">
                1.6
              </span>
            </td>
            <td>
              <span data-position="68547" data-size="4">
                出生日期
              </span>
            </td>
            <td>
              <span data-position="68572" data-size="17">
                Patient.birthDate
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="68635" data-size="3">
                1.7
              </span>
            </td>
            <td>
              <span data-position="68645" data-size="5">
                戶籍地代碼
              </span>
            </td>
            <td>
              <span data-position="68670" data-size="26">
                Patient.address.postalCode
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="68733" data-size="3">
                2.1
              </span>
            </td>
            <td>
              <span data-position="68743" data-size="4">
                診斷年齡
              </span>
            </td>
            <td>
              <span data-position="68768" data-size="18">
                Condition.onsetAge
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="68831" data-size="3">
                2.2
              </span>
            </td>
            <td>
              <span data-position="68841" data-size="8">
                癌症發生順序號碼
              </span>
            </td>
            <td>
              <span data-position="68866" data-size="14">
                Condition.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="68929" data-size="3">
                2.3
              </span>
            </td>
            <td>
              <span data-position="68939" data-size="4">
                個案分類
              </span>
            </td>
            <td>
              <span data-position="68964" data-size="18">
                Condition.category
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69027" data-size="5">
                2.3.1
              </span>
            </td>
            <td>
              <span data-position="69037" data-size="6">
                診斷狀態分類
              </span>
            </td>
            <td>
              <span data-position="69062" data-size="18">
                Condition.category
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69125" data-size="5">
                2.3.2
              </span>
            </td>
            <td>
              <span data-position="69135" data-size="6">
                治療狀態分類
              </span>
            </td>
            <td>
              <span data-position="69160" data-size="18">
                Condition.category
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69223" data-size="3">
                2.4
              </span>
            </td>
            <td>
              <span data-position="69233" data-size="6">
                首次就診日期
              </span>
            </td>
            <td>
              <span data-position="69258" data-size="22">
                Encounter.period.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69321" data-size="3">
                2.5
              </span>
            </td>
            <td>
              <span data-position="69331" data-size="6">
                最初診斷日期
              </span>
            </td>
            <td>
              <span data-position="69356" data-size="27">
                Condition.onsetPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69419" data-size="3">
                2.6
              </span>
            </td>
            <td>
              <span data-position="69429" data-size="4">
                原發部位
              </span>
            </td>
            <td>
              <span data-position="69454" data-size="18">
                Condition.bodySite
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69517" data-size="3">
                2.7
              </span>
            </td>
            <td>
              <span data-position="69527" data-size="2">
                側性
              </span>
            </td>
            <td>
              <span data-position="69552" data-size="18">
                Condition.bodySite
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69615" data-size="3">
                2.8
              </span>
            </td>
            <td>
              <span data-position="69625" data-size="4">
                組織型態
              </span>
            </td>
            <td>
              <span data-position="69650" data-size="19">
                Condition.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69713" data-size="3">
                2.9
              </span>
            </td>
            <td>
              <span data-position="69723" data-size="3">
                性態碼
              </span>
            </td>
            <td>
              <span data-position="69748" data-size="19">
                Condition.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69811" data-size="6">
                2.10.1
              </span>
            </td>
            <td>
              <span data-position="69821" data-size="7">
                臨床分級/分化
              </span>
            </td>
            <td>
              <span data-position="69846" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="69909" data-size="6">
                2.10.2
              </span>
            </td>
            <td>
              <span data-position="69919" data-size="7">
                病理分級/分化
              </span>
            </td>
            <td>
              <span data-position="69944" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="70007" data-size="4">
                2.11
              </span>
            </td>
            <td>
              <span data-position="70017" data-size="6">
                癌症確診方式
              </span>
            </td>
            <td>
              <span data-position="70042" data-size="18">
                Condition.evidence
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="70105" data-size="4">
                2.12
              </span>
            </td>
            <td>
              <span data-position="70115" data-size="9">
                首次顯微鏡證實日期
              </span>
            </td>
            <td>
              <span data-position="70140" data-size="23">
                Condition.onsetDateTime
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="70203" data-size="5">
                4.1.1
              </span>
            </td>
            <td>
              <span data-position="70213" data-size="6">
                首次手術日期
              </span>
            </td>
            <td>
              <span data-position="70238" data-size="27">
                Procedure.performedDateTime
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="70301" data-size="5">
                4.1.4
              </span>
            </td>
            <td>
              <span data-position="70311" data-size="12">
                申報醫院原發部位手術方式
              </span>
            </td>
            <td>
              <span data-position="70336" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="70399" data-size="7">
                4.2.1.3
              </span>
            </td>
            <td>
              <span data-position="70409" data-size="8">
                放射治療開始日期
              </span>
            </td>
            <td>
              <span data-position="70434" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="70497" data-size="7">
                4.2.1.7
              </span>
            </td>
            <td>
              <span data-position="70507" data-size="6">
                放射治療機構
              </span>
            </td>
            <td>
              <span data-position="70532" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="70595" data-size="5">
                4.3.3
              </span>
            </td>
            <td>
              <span data-position="70605" data-size="8">
                申報醫院化學治療
              </span>
            </td>
            <td>
              <span data-position="70630" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="70693" data-size="5">
                4.3.4
              </span>
            </td>
            <td>
              <span data-position="70703" data-size="12">
                申報醫院化學治療開始日期
              </span>
            </td>
            <td>
              <span data-position="70728" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="70791" data-size="5">
                4.3.6
              </span>
            </td>
            <td>
              <span data-position="70801" data-size="13">
                申報醫院荷爾蒙/類固醇治療
              </span>
            </td>
            <td>
              <span data-position="70826" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="70889" data-size="5">
                4.3.7
              </span>
            </td>
            <td>
              <span data-position="70899" data-size="17">
                申報醫院荷爾蒙/類固醇治療開始日期
              </span>
            </td>
            <td>
              <span data-position="70924" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="70987" data-size="5">
                4.3.9
              </span>
            </td>
            <td>
              <span data-position="70997" data-size="8">
                申報醫院免疫治療
              </span>
            </td>
            <td>
              <span data-position="71022" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="71085" data-size="6">
                4.3.10
              </span>
            </td>
            <td>
              <span data-position="71095" data-size="12">
                申報醫院免疫治療開始日期
              </span>
            </td>
            <td>
              <span data-position="71120" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="71183" data-size="6">
                4.3.11
              </span>
            </td>
            <td>
              <span data-position="71193" data-size="14">
                骨髓/幹細胞移植或內分泌處置
              </span>
            </td>
            <td>
              <span data-position="71218" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="71281" data-size="6">
                4.3.12
              </span>
            </td>
            <td>
              <span data-position="71291" data-size="22">
                申報醫院骨髓/幹細胞移植或內分泌處置開始日期
              </span>
            </td>
            <td>
              <span data-position="71316" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="71379" data-size="6">
                4.3.14
              </span>
            </td>
            <td>
              <span data-position="71389" data-size="8">
                申報醫院標靶治療
              </span>
            </td>
            <td>
              <span data-position="71414" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="71477" data-size="6">
                4.3.15
              </span>
            </td>
            <td>
              <span data-position="71487" data-size="12">
                申報醫院標靶治療開始日期
              </span>
            </td>
            <td>
              <span data-position="71512" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="71575" data-size="3">
                4.4
              </span>
            </td>
            <td>
              <span data-position="71585" data-size="8">
                申報醫院緩和照護
              </span>
            </td>
            <td>
              <span data-position="71610" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="71673" data-size="5">
                4.5.1
              </span>
            </td>
            <td>
              <span data-position="71683" data-size="4">
                其他治療
              </span>
            </td>
            <td>
              <span data-position="71708" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="71771" data-size="5">
                4.5.2
              </span>
            </td>
            <td>
              <span data-position="71781" data-size="8">
                其他治療開始日期
              </span>
            </td>
            <td>
              <span data-position="71806" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="71869" data-size="3">
                6.1
              </span>
            </td>
            <td>
              <span data-position="71879" data-size="3">
                摘錄者
              </span>
            </td>
            <td>
              <span data-position="71904" data-size="23">
                Practitioner.identifier
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="71967" data-size="3">
                7.1
              </span>
            </td>
            <td>
              <span data-position="71977" data-size="2">
                身高
              </span>
            </td>
            <td>
              <span data-position="72002" data-size="58">
                Observation.valueQuantity/Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="72065" data-size="3">
                7.2
              </span>
            </td>
            <td>
              <span data-position="72075" data-size="2">
                體重
              </span>
            </td>
            <td>
              <span data-position="72100" data-size="58">
                Observation.valueQuantity/Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="72163" data-size="3">
                7.3
              </span>
            </td>
            <td>
              <span data-position="72173" data-size="4">
                吸菸行為
              </span>
            </td>
            <td>
              <span data-position="72198" data-size="42">
                Observation.component.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="72261" data-size="3">
                7.4
              </span>
            </td>
            <td>
              <span data-position="72271" data-size="5">
                嚼檳榔行為
              </span>
            </td>
            <td>
              <span data-position="72296" data-size="42">
                Observation.component.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="72359" data-size="3">
                7.5
              </span>
            </td>
            <td>
              <span data-position="72369" data-size="4">
                喝酒行為
              </span>
            </td>
            <td>
              <span data-position="72394" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={h3_style}>臺灣癌症登記長表格式轉換FHIR Profile對照</p>
      <p>
        <center>表10-1、臺灣癌症登記長表格式轉換FHIR Profile對照表</center>
      </p>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th style={{ width: '10%' }}></th>
            <th style={{ width: '40%' }}>
              <span data-position="72579" data-size="6">
                癌登欄位名稱
              </span>
            </th>
            <th>
              <span data-position="72604" data-size="4">
                FHIR
              </span>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>
              <span data-position="72767" data-size="3">
                1.1
              </span>
            </td>
            <td>
              <span data-position="72779" data-size="6">
                申報醫院代碼
              </span>
            </td>
            <td>
              <span data-position="72804" data-size="23">
                Organization.identifier
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="72867" data-size="3">
                1.2
              </span>
            </td>
            <td>
              <span data-position="72879" data-size="4">
                病歷號碼
              </span>
            </td>
            <td>
              <span data-position="72904" data-size="18">
                Patient.identifier
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="72967" data-size="3">
                1.3
              </span>
            </td>
            <td>
              <span data-position="72979" data-size="2">
                姓名
              </span>
            </td>
            <td>
              <span data-position="73004" data-size="12">
                Patient.name
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="73023" data-size="3">
                1.4
              </span>
            </td>
            <td>
              <span data-position="73035" data-size="7">
                身分證統一編號
              </span>
            </td>
            <td>
              <span data-position="73060" data-size="18">
                Patient.identifier
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="73123" data-size="3">
                1.5
              </span>
            </td>
            <td>
              <span data-position="73135" data-size="2">
                性別
              </span>
            </td>
            <td>
              <span data-position="73160" data-size="14">
                Patient.gender
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="73223" data-size="3">
                1.6
              </span>
            </td>
            <td>
              <span data-position="73235" data-size="4">
                出生日期
              </span>
            </td>
            <td>
              <span data-position="73260" data-size="17">
                Patient.birthDate
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="73323" data-size="3">
                1.7
              </span>
            </td>
            <td>
              <span data-position="73335" data-size="5">
                戶籍地代碼
              </span>
            </td>
            <td>
              <span data-position="73360" data-size="26">
                Patient.address.postalCode
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="73423" data-size="3">
                2.1
              </span>
            </td>
            <td>
              <span data-position="73435" data-size="4">
                診斷年齡
              </span>
            </td>
            <td>
              <span data-position="73460" data-size="18">
                Condition.onsetAge
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="73523" data-size="3">
                2.2
              </span>
            </td>
            <td>
              <span data-position="73535" data-size="8">
                癌症發生順序號碼
              </span>
            </td>
            <td>
              <span data-position="73560" data-size="14">
                Condition.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="73623" data-size="3">
                2.3
              </span>
            </td>
            <td>
              <span data-position="73635" data-size="4">
                個案分類
              </span>
            </td>
            <td>
              <span data-position="73660" data-size="18">
                Condition.category
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="73723" data-size="5">
                2.3.1
              </span>
            </td>
            <td>
              <span data-position="73735" data-size="6">
                診斷狀態分類
              </span>
            </td>
            <td>
              <span data-position="73760" data-size="18">
                Condition.category
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="73823" data-size="5">
                2.3.2
              </span>
            </td>
            <td>
              <span data-position="73835" data-size="6">
                治療狀態分類
              </span>
            </td>
            <td>
              <span data-position="73860" data-size="18">
                Condition.category
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="73923" data-size="3">
                2.4
              </span>
            </td>
            <td>
              <span data-position="73935" data-size="6">
                首次就診日期
              </span>
            </td>
            <td>
              <span data-position="73960" data-size="22">
                Encounter.period.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="74023" data-size="3">
                2.5
              </span>
            </td>
            <td>
              <span data-position="74035" data-size="6">
                最初診斷日期
              </span>
            </td>
            <td>
              <span data-position="74060" data-size="27">
                Condition.onsetPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="74123" data-size="3">
                2.6
              </span>
            </td>
            <td>
              <span data-position="74135" data-size="4">
                原發部位
              </span>
            </td>
            <td>
              <span data-position="74160" data-size="18">
                Condition.bodySite
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="74223" data-size="3">
                2.7
              </span>
            </td>
            <td>
              <span data-position="74235" data-size="2">
                側性
              </span>
            </td>
            <td>
              <span data-position="74260" data-size="18">
                Condition.bodySite
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="74323" data-size="3">
                2.8
              </span>
            </td>
            <td>
              <span data-position="74335" data-size="4">
                組織型態
              </span>
            </td>
            <td>
              <span data-position="74360" data-size="19">
                Condition.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="74423" data-size="3">
                2.9
              </span>
            </td>
            <td>
              <span data-position="74435" data-size="3">
                性態碼
              </span>
            </td>
            <td>
              <span data-position="74460" data-size="19">
                Condition.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="74523" data-size="6">
                2.10.1
              </span>
            </td>
            <td>
              <span data-position="74535" data-size="7">
                臨床分級/分化
              </span>
            </td>
            <td>
              <span data-position="74560" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="74623" data-size="6">
                2.10.2
              </span>
            </td>
            <td>
              <span data-position="74635" data-size="7">
                病理分級/分化
              </span>
            </td>
            <td>
              <span data-position="74660" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="74723" data-size="4">
                2.11
              </span>
            </td>
            <td>
              <span data-position="74735" data-size="6">
                癌症確診方式
              </span>
            </td>
            <td>
              <span data-position="74760" data-size="18">
                Condition.evidence
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="74823" data-size="4">
                2.12
              </span>
            </td>
            <td>
              <span data-position="74835" data-size="9">
                首次顯微鏡證實日期
              </span>
            </td>
            <td>
              <span data-position="74860" data-size="23">
                Condition.onsetDateTime
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="74923" data-size="4">
                2.13
              </span>
            </td>
            <td>
              <span data-position="74935" data-size="4">
                腫瘤大小
              </span>
            </td>
            <td>
              <span data-position="74960" data-size="58">
                Observation.valueQuantity/Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="75023" data-size="6">
                2.13.1
              </span>
            </td>
            <td>
              <span data-position="75035" data-size="4">
                神經侵襲
              </span>
            </td>
            <td>
              <span data-position="75060" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="75123" data-size="6">
                2.13.2
              </span>
            </td>
            <td>
              <span data-position="75135" data-size="8">
                淋巴管或血管侵犯
              </span>
            </td>
            <td>
              <span data-position="75160" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="75223" data-size="4">
                2.14
              </span>
            </td>
            <td>
              <span data-position="75235" data-size="9">
                區域淋巴結檢查數目
              </span>
            </td>
            <td>
              <span data-position="75260" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="75323" data-size="4">
                2.15
              </span>
            </td>
            <td>
              <span data-position="75335" data-size="9">
                區域淋巴結侵犯數目
              </span>
            </td>
            <td>
              <span data-position="75360" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="75423" data-size="3">
                3.1
              </span>
            </td>
            <td>
              <span data-position="75435" data-size="13">
                診斷性及分期性手術處置日期
              </span>
            </td>
            <td>
              <span data-position="75460" data-size="27">
                Procedure.performedDateTime
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="75523" data-size="3">
                3.2
              </span>
            </td>
            <td>
              <span data-position="75535" data-size="13">
                外院診斷性及分期性手術處置
              </span>
            </td>
            <td>
              <span data-position="75560" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="75623" data-size="3">
                3.3
              </span>
            </td>
            <td>
              <span data-position="75635" data-size="15">
                申報醫院診斷性及分期性手術處置
              </span>
            </td>
            <td>
              <span data-position="75660" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="75723" data-size="3">
                3.4
              </span>
            </td>
            <td>
              <span data-position="75735" data-size="3">
                臨床T
              </span>
            </td>
            <td>
              <span data-position="75760" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="75823" data-size="3">
                3.5
              </span>
            </td>
            <td>
              <span data-position="75835" data-size="3">
                臨床N
              </span>
            </td>
            <td>
              <span data-position="75860" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="75923" data-size="3">
                3.6
              </span>
            </td>
            <td>
              <span data-position="75935" data-size="3">
                臨床M
              </span>
            </td>
            <td>
              <span data-position="75960" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="76023" data-size="3">
                3.7
              </span>
            </td>
            <td>
              <span data-position="76035" data-size="6">
                臨床期別組合
              </span>
            </td>
            <td>
              <span data-position="76060" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="76123" data-size="3">
                3.8
              </span>
            </td>
            <td>
              <span data-position="76135" data-size="9">
                臨床分期字根/字首
              </span>
            </td>
            <td>
              <span data-position="76160" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="76223" data-size="4">
                3.10
              </span>
            </td>
            <td>
              <span data-position="76235" data-size="3">
                病理T
              </span>
            </td>
            <td>
              <span data-position="76260" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="76323" data-size="4">
                3.11
              </span>
            </td>
            <td>
              <span data-position="76335" data-size="3">
                病理N
              </span>
            </td>
            <td>
              <span data-position="76360" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="76423" data-size="4">
                3.12
              </span>
            </td>
            <td>
              <span data-position="76435" data-size="3">
                病理M
              </span>
            </td>
            <td>
              <span data-position="76460" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="76523" data-size="4">
                3.13
              </span>
            </td>
            <td>
              <span data-position="76535" data-size="6">
                病理期別組合
              </span>
            </td>
            <td>
              <span data-position="76560" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="76623" data-size="4">
                3.14
              </span>
            </td>
            <td>
              <span data-position="76635" data-size="9">
                病理分期字根/字首
              </span>
            </td>
            <td>
              <span data-position="76660" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="76723" data-size="4">
                3.16
              </span>
            </td>
            <td>
              <span data-position="76735" data-size="13">
                AJCC癌症分期版本與章節
              </span>
            </td>
            <td>
              <span data-position="76760" data-size="18">
                Observation.method
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="76823" data-size="4">
                3.17
              </span>
            </td>
            <td>
              <span data-position="76835" data-size="6">
                其他分期系統
              </span>
            </td>
            <td>
              <span data-position="76860" data-size="18">
                Observation.method
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="76923" data-size="4">
                3.19
              </span>
            </td>
            <td>
              <span data-position="76935" data-size="14">
                其他分期系統期別(臨床分期)
              </span>
            </td>
            <td>
              <span data-position="76960" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="77023" data-size="4">
                3.21
              </span>
            </td>
            <td>
              <span data-position="77035" data-size="14">
                其他分期系統期別(病理分期)
              </span>
            </td>
            <td>
              <span data-position="77060" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="77123" data-size="3">
                4.1
              </span>
            </td>
            <td>
              <span data-position="77135" data-size="8">
                首次療程開始日期
              </span>
            </td>
            <td>
              <span data-position="77160" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="77223" data-size="5">
                4.1.1
              </span>
            </td>
            <td>
              <span data-position="77235" data-size="6">
                首次手術日期
              </span>
            </td>
            <td>
              <span data-position="77260" data-size="27">
                Procedure.performedDateTime
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="77323" data-size="5">
                4.1.2
              </span>
            </td>
            <td>
              <span data-position="77335" data-size="14">
                原發部位最確切的手術切除日期
              </span>
            </td>
            <td>
              <span data-position="77360" data-size="27">
                Procedure.performedDateTime
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="77423" data-size="5">
                4.1.3
              </span>
            </td>
            <td>
              <span data-position="77435" data-size="10">
                外院原發部位手術方式
              </span>
            </td>
            <td>
              <span data-position="77460" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="77523" data-size="5">
                4.1.4
              </span>
            </td>
            <td>
              <span data-position="77535" data-size="12">
                申報醫院原發部位手術方式
              </span>
            </td>
            <td>
              <span data-position="77560" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="77623" data-size="7">
                4.1.4.1
              </span>
            </td>
            <td>
              <span data-position="77635" data-size="4">
                微創手術
              </span>
            </td>
            <td>
              <span data-position="77660" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="77723" data-size="5">
                4.1.5
              </span>
            </td>
            <td>
              <span data-position="77735" data-size="8">
                原發部位手術邊緣
              </span>
            </td>
            <td>
              <span data-position="77760" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="77823" data-size="7">
                4.1.5.1
              </span>
            </td>
            <td>
              <span data-position="77835" data-size="10">
                原發部位手術切緣距離
              </span>
            </td>
            <td>
              <span data-position="77860" data-size="58">
                Observation.valueQuantity/Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="77923" data-size="5">
                4.1.6
              </span>
            </td>
            <td>
              <span data-position="77935" data-size="11">
                外院區域淋巴結手術範圍
              </span>
            </td>
            <td>
              <span data-position="77960" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="78023" data-size="5">
                4.1.7
              </span>
            </td>
            <td>
              <span data-position="78035" data-size="13">
                申報醫院區域淋巴結手術範圍
              </span>
            </td>
            <td>
              <span data-position="78060" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="78123" data-size="5">
                4.1.8
              </span>
            </td>
            <td>
              <span data-position="78135" data-size="10">
                外院其他部位手術方式
              </span>
            </td>
            <td>
              <span data-position="78160" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="78223" data-size="5">
                4.1.9
              </span>
            </td>
            <td>
              <span data-position="78235" data-size="12">
                申報醫院其他部位手術方式
              </span>
            </td>
            <td>
              <span data-position="78260" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="78323" data-size="6">
                4.1.10
              </span>
            </td>
            <td>
              <span data-position="78335" data-size="9">
                原發部位未手術原因
              </span>
            </td>
            <td>
              <span data-position="78360" data-size="20">
                Procedure.reasonCode
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="78423" data-size="7">
                4.2.1.1
              </span>
            </td>
            <td>
              <span data-position="78435" data-size="12">
                放射治療臨床標靶體積摘要
              </span>
            </td>
            <td>
              <span data-position="78460" data-size="19">
                Procedure.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="78523" data-size="7">
                4.2.1.2
              </span>
            </td>
            <td>
              <span data-position="78535" data-size="6">
                放射治療儀器
              </span>
            </td>
            <td>
              <span data-position="78560" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="78623" data-size="7">
                4.2.1.3
              </span>
            </td>
            <td>
              <span data-position="78635" data-size="8">
                放射治療開始日期
              </span>
            </td>
            <td>
              <span data-position="78660" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="78723" data-size="7">
                4.2.1.4
              </span>
            </td>
            <td>
              <span data-position="78735" data-size="8">
                放射治療結束日期
              </span>
            </td>
            <td>
              <span data-position="78760" data-size="29">
                Procedure.performedPeriod.end
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="78823" data-size="7">
                4.2.1.5
              </span>
            </td>
            <td>
              <span data-position="78835" data-size="9">
                放射治療與手術順序
              </span>
            </td>
            <td>
              <span data-position="78860" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="78923" data-size="7">
                4.2.1.6
              </span>
            </td>
            <td>
              <span data-position="78935" data-size="12">
                區域治療與全身性治療順序
              </span>
            </td>
            <td>
              <span data-position="78960" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="79023" data-size="7">
                4.2.1.8
              </span>
            </td>
            <td>
              <span data-position="79035" data-size="8">
                放射治療執行狀態
              </span>
            </td>
            <td>
              <span data-position="79060" data-size="19">
                Procedure.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="79123" data-size="7">
                4.2.2.1
              </span>
            </td>
            <td>
              <span data-position="79135" data-size="8">
                體外放射治療技術
              </span>
            </td>
            <td>
              <span data-position="79160" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="79223" data-size="9">
                4.2.2.2.1
              </span>
            </td>
            <td>
              <span data-position="79235" data-size="12">
                最高放射劑量臨床標靶體積
              </span>
            </td>
            <td>
              <span data-position="79260" data-size="19">
                Procedure.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="79323" data-size="9">
                4.2.2.2.2
              </span>
            </td>
            <td>
              <span data-position="79335" data-size="14">
                最高放射劑量臨床標靶體積劑量
              </span>
            </td>
            <td>
              <span data-position="79360" data-size="19">
                Procedure.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="79423" data-size="9">
                4.2.2.2.3
              </span>
            </td>
            <td>
              <span data-position="79435" data-size="16">
                最高放射劑量臨床標靶體積治療次數
              </span>
            </td>
            <td>
              <span data-position="79460" data-size="19">
                Procedure.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="79523" data-size="9">
                4.2.2.3.1
              </span>
            </td>
            <td>
              <span data-position="79535" data-size="12">
                較低放射劑量臨床標靶體積
              </span>
            </td>
            <td>
              <span data-position="79560" data-size="19">
                Procedure.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="79623" data-size="9">
                4.2.2.3.2
              </span>
            </td>
            <td>
              <span data-position="79635" data-size="14">
                較低放射劑量臨床標靶體積劑量
              </span>
            </td>
            <td>
              <span data-position="79660" data-size="19">
                Procedure.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="79723" data-size="9">
                4.2.2.3.3
              </span>
            </td>
            <td>
              <span data-position="79735" data-size="16">
                較低放射劑量臨床標靶體積治療次數
              </span>
            </td>
            <td>
              <span data-position="79760" data-size="19">
                Procedure.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="79823" data-size="7">
                4.2.3.1
              </span>
            </td>
            <td>
              <span data-position="79835" data-size="8">
                其他放射治療儀器
              </span>
            </td>
            <td>
              <span data-position="79860" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="79923" data-size="7">
                4.2.3.2
              </span>
            </td>
            <td>
              <span data-position="79935" data-size="8">
                其他放射治療技術
              </span>
            </td>
            <td>
              <span data-position="79960" data-size="19">
                Procedure.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="80023" data-size="9">
                4.2.3.3.1
              </span>
            </td>
            <td>
              <span data-position="80035" data-size="12">
                其他放射治療臨床標靶體積
              </span>
            </td>
            <td>
              <span data-position="80060" data-size="19">
                Procedure.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="80123" data-size="9">
                4.2.3.3.2
              </span>
            </td>
            <td>
              <span data-position="80135" data-size="14">
                其他放射治療臨床標靶體積劑量
              </span>
            </td>
            <td>
              <span data-position="80160" data-size="19">
                Procedure.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="80223" data-size="9">
                4.2.3.3.3
              </span>
            </td>
            <td>
              <span data-position="80235" data-size="16">
                其他放射治療臨床標靶體積治療次數
              </span>
            </td>
            <td>
              <span data-position="80260" data-size="19">
                Procedure.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="80323" data-size="5">
                4.3.1
              </span>
            </td>
            <td>
              <span data-position="80335" data-size="9">
                全身性治療開始日期
              </span>
            </td>
            <td>
              <span data-position="80360" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="80423" data-size="5">
                4.3.2
              </span>
            </td>
            <td>
              <span data-position="80435" data-size="6">
                外院化學治療
              </span>
            </td>
            <td>
              <span data-position="80460" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="80523" data-size="5">
                4.3.3
              </span>
            </td>
            <td>
              <span data-position="80535" data-size="8">
                申報醫院化學治療
              </span>
            </td>
            <td>
              <span data-position="80560" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="80623" data-size="5">
                4.3.4
              </span>
            </td>
            <td>
              <span data-position="80635" data-size="12">
                申報醫院化學治療開始日期
              </span>
            </td>
            <td>
              <span data-position="80660" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="80723" data-size="5">
                4.3.5
              </span>
            </td>
            <td>
              <span data-position="80735" data-size="11">
                外院荷爾蒙/類固醇治療
              </span>
            </td>
            <td>
              <span data-position="80760" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="80823" data-size="5">
                4.3.6
              </span>
            </td>
            <td>
              <span data-position="80835" data-size="13">
                申報醫院荷爾蒙/類固醇治療
              </span>
            </td>
            <td>
              <span data-position="80860" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="80923" data-size="5">
                4.3.7
              </span>
            </td>
            <td>
              <span data-position="80935" data-size="17">
                申報醫院荷爾蒙/類固醇治療開始日期
              </span>
            </td>
            <td>
              <span data-position="80960" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="81023" data-size="5">
                4.3.8
              </span>
            </td>
            <td>
              <span data-position="81035" data-size="6">
                外院免疫治療
              </span>
            </td>
            <td>
              <span data-position="81060" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="81123" data-size="5">
                4.3.9
              </span>
            </td>
            <td>
              <span data-position="81135" data-size="8">
                申報醫院免疫治療
              </span>
            </td>
            <td>
              <span data-position="81160" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="81223" data-size="6">
                4.3.10
              </span>
            </td>
            <td>
              <span data-position="81235" data-size="12">
                申報醫院免疫治療開始日期
              </span>
            </td>
            <td>
              <span data-position="81260" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="81323" data-size="6">
                4.3.11
              </span>
            </td>
            <td>
              <span data-position="81335" data-size="14">
                骨髓/幹細胞移植或內分泌處置
              </span>
            </td>
            <td>
              <span data-position="81360" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="81423" data-size="6">
                4.3.12
              </span>
            </td>
            <td>
              <span data-position="81435" data-size="22">
                申報醫院骨髓/幹細胞移植或內分泌處置開始日期
              </span>
            </td>
            <td>
              <span data-position="81460" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="81523" data-size="6">
                4.3.13
              </span>
            </td>
            <td>
              <span data-position="81535" data-size="6">
                外院標靶治療
              </span>
            </td>
            <td>
              <span data-position="81560" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="81623" data-size="6">
                4.3.14
              </span>
            </td>
            <td>
              <span data-position="81635" data-size="8">
                申報醫院標靶治療
              </span>
            </td>
            <td>
              <span data-position="81660" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="81723" data-size="6">
                4.3.15
              </span>
            </td>
            <td>
              <span data-position="81735" data-size="12">
                申報醫院標靶治療開始日期
              </span>
            </td>
            <td>
              <span data-position="81760" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="81823" data-size="3">
                4.4
              </span>
            </td>
            <td>
              <span data-position="81835" data-size="8">
                申報醫院緩和照護
              </span>
            </td>
            <td>
              <span data-position="81860" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="81923" data-size="5">
                4.5.1
              </span>
            </td>
            <td>
              <span data-position="81935" data-size="4">
                其他治療
              </span>
            </td>
            <td>
              <span data-position="81960" data-size="14">
                Procedure.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="82023" data-size="5">
                4.5.2
              </span>
            </td>
            <td>
              <span data-position="82035" data-size="8">
                其他治療開始日期
              </span>
            </td>
            <td>
              <span data-position="82060" data-size="31">
                Procedure.performedPeriod.start
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="82123" data-size="3">
                5.1
              </span>
            </td>
            <td>
              <span data-position="82135" data-size="13">
                首次復發或癌症狀態追蹤日期
              </span>
            </td>
            <td>
              <span data-position="82160" data-size="29">
                Observation.effectiveDateTime
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="82223" data-size="3">
                5.2
              </span>
            </td>
            <td>
              <span data-position="82235" data-size="6">
                首次復發形式
              </span>
            </td>
            <td>
              <span data-position="82260" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="82323" data-size="3">
                5.3
              </span>
            </td>
            <td>
              <span data-position="82335" data-size="9">
                最後聯絡或死亡日期
              </span>
            </td>
            <td>
              <span data-position="82360" data-size="17">
                Patient.extension
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="82385" data-size="3">
                5.4
              </span>
            </td>
            <td>
              <span data-position="82397" data-size="4">
                生存狀態
              </span>
            </td>
            <td>
              <span data-position="82422" data-size="23">
                Patient.deceasedBoolean
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="82450" data-size="3">
                6.1
              </span>
            </td>
            <td>
              <span data-position="82462" data-size="3">
                摘錄者
              </span>
            </td>
            <td>
              <span data-position="82487" data-size="23">
                Practitioner.identifier
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="82515" data-size="3">
                7.1
              </span>
            </td>
            <td>
              <span data-position="82527" data-size="2">
                身高
              </span>
            </td>
            <td>
              <span data-position="82552" data-size="58">
                Observation.valueQuantity/Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="82615" data-size="3">
                7.2
              </span>
            </td>
            <td>
              <span data-position="82627" data-size="2">
                體重
              </span>
            </td>
            <td>
              <span data-position="82652" data-size="58">
                Observation.valueQuantity/Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="82715" data-size="3">
                7.3
              </span>
            </td>
            <td>
              <span data-position="82727" data-size="4">
                吸菸行為
              </span>
            </td>
            <td>
              <span data-position="82752" data-size="42">
                Observation.component.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="82800" data-size="3">
                7.4
              </span>
            </td>
            <td>
              <span data-position="82812" data-size="5">
                嚼檳榔行為
              </span>
            </td>
            <td>
              <span data-position="82837" data-size="42">
                Observation.component.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="82884" data-size="3">
                7.5
              </span>
            </td>
            <td>
              <span data-position="82896" data-size="4">
                喝酒行為
              </span>
            </td>
            <td>
              <span data-position="82921" data-size="32">
                Observation.valueCodeableConcept
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="82958" data-size="3">
                7.6
              </span>
            </td>
            <td>
              <span data-position="82970" data-size="13">
                首次治療前生活功能狀態評估
              </span>
            </td>
            <td>
              <span data-position="82992" data-size="14">
                Condition.code
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="83011" data-size="3">
                8.1
              </span>
            </td>
            <td>
              <span data-position="83023" data-size="9">
                癌症部位特定因子1
              </span>
            </td>
            <td>
              <span data-position="83048" data-size="23">
                Observation.valueString
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="83076" data-size="3">
                8.2
              </span>
            </td>
            <td>
              <span data-position="83088" data-size="9">
                癌症部位特定因子2
              </span>
            </td>
            <td>
              <span data-position="83113" data-size="23">
                Observation.valueString
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="83141" data-size="3">
                8.3
              </span>
            </td>
            <td>
              <span data-position="83153" data-size="9">
                癌症部位特定因子3
              </span>
            </td>
            <td>
              <span data-position="83178" data-size="23">
                Observation.valueString
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="83241" data-size="3">
                8.4
              </span>
            </td>
            <td>
              <span data-position="83253" data-size="9">
                癌症部位特定因子4
              </span>
            </td>
            <td>
              <span data-position="83278" data-size="23">
                Observation.valueString
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="83341" data-size="3">
                8.5
              </span>
            </td>
            <td>
              <span data-position="83353" data-size="9">
                癌症部位特定因子5
              </span>
            </td>
            <td>
              <span data-position="83378" data-size="23">
                Observation.valueString
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="83441" data-size="3">
                8.6
              </span>
            </td>
            <td>
              <span data-position="83453" data-size="9">
                癌症部位特定因子6
              </span>
            </td>
            <td>
              <span data-position="83478" data-size="23">
                Observation.valueString
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="83541" data-size="3">
                8.7
              </span>
            </td>
            <td>
              <span data-position="83553" data-size="9">
                癌症部位特定因子7
              </span>
            </td>
            <td>
              <span data-position="83578" data-size="23">
                Observation.valueString
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="83641" data-size="3">
                8.8
              </span>
            </td>
            <td>
              <span data-position="83653" data-size="9">
                癌症部位特定因子8
              </span>
            </td>
            <td>
              <span data-position="83678" data-size="23">
                Observation.valueString
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="83741" data-size="3">
                8.9
              </span>
            </td>
            <td>
              <span data-position="83753" data-size="9">
                癌症部位特定因子9
              </span>
            </td>
            <td>
              <span data-position="83778" data-size="23">
                Observation.valueString
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="83841" data-size="4">
                8.10
              </span>
            </td>
            <td>
              <span data-position="83853" data-size="10">
                癌症部位特定因子10
              </span>
            </td>
            <td>
              <span data-position="83878" data-size="23">
                Observation.valueString
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Track10_Specification_content = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <div>
      <ul class="part in-view" data-startline="1617" data-endline="1620" data-position="83963" data-size="0">
        <li class="" data-startline="1617" data-endline="1620" data-position="83965" data-size="0">
          <span data-position="83965" data-size="16">
            台灣癌症登記短表與長表實作指引:
          </span>
          <ul data-position="83987" data-size="0">
            <li class="" data-startline="1618" data-endline="1618" data-position="83989" data-size="0">
              <a href="https://mitw.dicom.org.tw/IG/TWCR_LF/" target="_blank" rel="noopener">
                <span data-position="83990" data-size="12">
                  台灣癌症登記長表實作指引
                </span>
              </a>
            </li>
            <li class="" data-startline="1619" data-endline="1620" data-position="84049" data-size="0">
              <a href="https://mitw.dicom.org.tw/IG/TWCR_SF/" target="_blank" rel="noopener">
                <span data-position="84050" data-size="12">
                  台灣癌症登記短表實作指引
                </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <p>涉及到的角色 (Actors)以及交易(Transactions)，說明如下:</p>
      <p style={h3_style}>角色(Actors)</p>
      <p>1.台灣癌症登記短表與長表(TCR)角色整理</p>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th>
              <strong data-position="84190" data-size="0">
                <span data-position="84192" data-size="7">
                  Keyword
                </span>
              </strong>
            </th>
            <th>
              <strong data-position="84208" data-size="0">
                <span data-position="84210" data-size="2">
                  名稱
                </span>
              </strong>
            </th>
            <th>
              <strong data-position="84233" data-size="0">
                <span data-position="84235" data-size="2">
                  描述
                </span>
              </strong>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>
              <span data-position="84307" data-size="12">
                TCR_SF_CREATOR
              </span>
            </td>
            <td>
              <span data-position="84325" data-size="22">
                TCR Short Form Creator
              </span>
            </td>
            <td>
              <span data-position="84351" data-size="12">
                台灣癌症登記短表資料產生
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="84364" data-size="12">
                TCR_LF_CREATOR
              </span>
            </td>
            <td>
              <span data-position="84382" data-size="21">
                TCR Long Form Creator
              </span>
            </td>
            <td>
              <span data-position="84407" data-size="12">
                台灣癌症登記長表資料產生
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="84421" data-size="13">
                TCR_SF_Consumer
              </span>
            </td>
            <td>
              <span data-position="84439" data-size="23">
                TCR Short Form Consumer
              </span>
            </td>
            <td>
              <span data-position="84465" data-size="12">
                台灣癌症登記短表資料檢視
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="84478" data-size="13">
                TCR_LF_Consumer
              </span>
            </td>
            <td>
              <span data-position="84496" data-size="22">
                TCR Long Form Consumer
              </span>
            </td>
            <td>
              <span data-position="84522" data-size="12">
                台灣癌症登記長表資料檢視
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="84536" data-size="13">
                TCR_Repository
              </span>
            </td>
            <td>
              <span data-position="84554" data-size="14">
                TCR Repository
              </span>
            </td>
            <td>
              <span data-position="84580" data-size="44">
                台灣癌症登記儲存庫(Taiwan Cancer Registry Repository)
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={h3_style}>交易(Transactions)</p>
      <p>1.台灣癌症登記短表與長表(TCR)交易整理</p>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th>
              <strong data-position="84676" data-size="0">
                <span data-position="84678" data-size="2">
                  編號
                </span>
              </strong>
            </th>
            <th>
              <strong data-position="84684" data-size="0">
                <span data-position="84686" data-size="2">
                  名稱
                </span>
              </strong>
            </th>
            <th>
              <strong data-position="84713" data-size="0">
                <span data-position="84715" data-size="2">
                  描述
                </span>
              </strong>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>
              <span data-position="84773" data-size="7">
                MITW-43
              </span>
            </td>
            <td>
              <span data-position="84781" data-size="21">
                Create TCR Short Form
              </span>
            </td>
            <td>
              <span data-position="84813" data-size="12">
                產生台灣癌症登記短表資料
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="84827" data-size="7">
                MITW-44
              </span>
            </td>
            <td>
              <span data-position="84835" data-size="29">
                Query/Retrieve TCR Short Form
              </span>
            </td>
            <td>
              <span data-position="84867" data-size="12">
                台灣癌症登記短表資料檢視
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="84880" data-size="7">
                MITW-45
              </span>
            </td>
            <td>
              <span data-position="84888" data-size="20">
                Create TCR Long Form
              </span>
            </td>
            <td>
              <span data-position="84920" data-size="12">
                產生台灣癌症登記長表資料
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="84933" data-size="7">
                MITW-46
              </span>
            </td>
            <td>
              <span data-position="84941" data-size="28">
                Query/Retrieve TCR Long Form
              </span>
            </td>
            <td>
              <span data-position="84973" data-size="12">
                台灣癌症登記長表資料檢視
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={h3_style}>角色與交易關係圖</p>
      <img src={track10_2} alt="trackImg" width="40%" onClick={() => setLightboxOpen(true)} />
      {lightboxOpen && (
        <Lightbox
          imageLoadErrorMessage="無法載入圖片"
          imagePadding={window.innerWidth / 10}
          mainSrc={track10_2}
          onCloseRequest={() => setLightboxOpen(false)}
        />
      )}
    </div>
  )
}

const Track10_Author_content = () => {
  return (
    <div>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>角色</th>
            <th style={{ width: '15%' }}>姓名</th>
            <th>
              <span data-position="85090" data-size="4">
                所屬單位
              </span>
            </th>
            <th>
              <span data-position="85099" data-size="2">
                貢獻
              </span>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>
              <span data-position="89007" data-size="3">
                召集人
              </span>
            </td>
            <td>
              <span data-position="89013" data-size="3">
                連中岳
              </span>
            </td>
            <td>
              <span data-position="89021" data-size="16">
                國立臺北護理健康大學－資訊管理系
              </span>
            </td>
            <td>
              <span data-position="89040" data-size="20">
                專案管理、系統分析與設計, 聯測情境設計
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="89065" data-size="4">
                IG作者
              </span>
            </td>
            <td>
              <span data-position="89072" data-size="3">
                郭俐君
              </span>
            </td>
            <td>
              <span data-position="89080" data-size="16">
                國立臺北護理健康大學－資訊管理系
              </span>
            </td>
            <td>
              <span data-position="89099" data-size="20">
                Profiling, 製作FHIR IG
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="89149" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="89155" data-size="3">
                丁子芸
              </span>
            </td>
            <td>
              <span data-position="89163" data-size="16">
                國立臺北護理健康大學－資訊管理系
              </span>
            </td>
            <td>
              <span data-position="89182" data-size="17">
                Profiling 系統分析與設計
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="89230" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="89236" data-size="3">
                朱原嘉
              </span>
            </td>
            <td>
              <span data-position="89242" data-size="11">
                臺北榮民總醫院-資訊室
              </span>
            </td>
            <td>
              <span data-position="89256" data-size="4">
                測試支援
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export {
  Track10_Summary_content,
  Track10_Benefits_content,
  Track10_details_content,
  Track10_SystemsAffected_content,
  Track10_Specification_content,
  Track10_Author_content,
}
