import ReactPlayer from 'react-player/youtube'
import { useState } from 'react'
import Lightbox from 'react-image-lightbox'

import track5_2 from '../../../../assets/WG5_2.png'
import wg5_1_1 from '../../../../assets/Wg5_1_1.png'
import wg5_1_2 from '../../../../assets/wg5_1_2.png'
import wg5_2_1 from '../../../../assets/wg5_2_1.png'

const h3_style = {
  fontWeight: 'bold',
  fontSize: '1.5em',
}
const Track5_Summary_content = () => {
  return (
    <div>
      <p>
        醫療健康照護的領域中，資料交換的需求能夠有助於病人連續性照護、醫療資料整合、照護資料應用，然而，不同醫療系統中的資料格式各有差異、資料結構以及欄位內容的標準亦有所落差。
      </p>
      <p>
        臺灣屬於健保單一給付制度的醫療給付架構，大部分格式、資料標準以健保申報為主，在互操作性上雖然已有既定的架構與規格，但對於醫療醫療單位間之資料交換還是有所落差，大多數的需求都需【客製化】、【唯一化】，每當有資料交換需求或是產生新的傳輸資料架構，往往醫療院所皆須從不同來源的資料重新產製符合格式之資料。
      </p>
      <p>
        有鑑於此，著手推動統一標準合適的FHIR資料架構，定義完善的資料內容、交換項目，當【交換單張】的需求產生時，可以快速地萃取出需要的資料、以及使用統一的前端介面進行讀取、同時加速資料儲存的效率。
      </p>
      <br />
      <p>
        今年度照護協調內容主要以慢性病電子處方箋、電子病歷交換中心(EEC)及健保健康存摺(NHI
        myHealthBank)現有單張規範為基礎，進行資料內容的定義，並將其以台灣現有參考台灣FHIR核心實作指引(Tw Core
        IG)規範為基礎進行設計，納入整體交換架構規範中，期望讓已經有其基礎的醫療院所、醫療資訊服務提供商可以加速落實互操作架構開發，並推動我國醫療單張跨機構交換之效率。
      </p>
      <div width="100%">
        <p style={{ fontWeight: 'bold' }}>賽道介紹</p>
        <ReactPlayer url="https://youtu.be/u9skDJcMxXo" width="100%" />
      </div>
    </div>
  )
}

const Track5_Benefits_content = () => {
  return (
    <div>
      <p>
        醫療健康照護場域中有許多跨院醫療照護團隊持續性照護的需求，例如轉診轉院、慢性病照護、癌病治療/照護、長期照護等，相關資料不只在醫療專業人員手上處理業務使用，民眾本身也有了解並持有自身電子健康檔案(PHR)的權利，且能促進民眾本身的健康識能。台灣除了民眾向就醫院所申請病歷以外，在衛生福利部不同單位間已有分別建立不同格式之電子病歷、健康資料互通交換格式與規範，本工作小組目標以衛福部下一代主要資訊標準FHIR為核心，向前相容各種已存在之電子交換格式，協助相關醫療健康照護資料更容易歸人彙整於單一標準上，促進不同醫療健康照護機構與專業人員及相關系統可更容易有效率的整合資訊並應用。
      </p>
      <p>
        本工作小組依據既有非FHIR標準之互通標準，以FHIR標準設計符合台灣醫療照護應用情境資訊需求之慢性處方箋、電子病歷交換、健康存摺資料
        FHIR Resource
        規範與通用系統互通操作應用流程，提供產業應用交流與參考，以達到基本的跨系統互通性，並相容衛生福利部台灣核心實作指引(TW
        FHIR Core IG)規範。
      </p>
    </div>
  )
}

const Track5_details_content = () => {
  return (
    <div>
      {/* <p style={h3_style}>Scenario 1: 慢性處方箋開立與領用藥流程</p>
      <p style={h3_style}>Scenario 2: 現有PHR互通格式匯入_EEC門診病歷Bundle</p>
      <p style={h3_style}>Scenario 3: 現有PHR互通格式匯入_EEC出院病摘Bundle</p>
      <p style={h3_style}>Scenario 4: 現有PHR互通格式匯入_EEC檢驗報告Bundle</p>
      <p style={h3_style}>Scenario 5: 現有PHR互通格式匯入_EEC醫學影像報告Bundle (與 Track#4 Scenario 2-1 整合)</p>
      <p style={h3_style}>Scenario 6: 現有PHR互通格式匯入_健保健康存摺Bundle</p>
      <p style={h3_style}>Scenario 7: Long-Term Services and Supports (eLTSS)</p> */}
      <li>SC1-慢性處方箋開立與領用藥流程</li>
      <li>SC2-現有EHR互通格式匯入_EEC門診病歷Bundle</li>
      <li>SC3-現有EHR互通格式匯入_EEC出院病摘Bundle</li>
      <li>SC4-現有EHR互通格式匯入_EEC檢驗報告Bundle</li>
      <li>SC5-現有EHR互通格式匯入_EEC醫學影像報告Bundle (整合至 Track#4 Scenario 2-1,請參照該情境之規範)</li>
      <li>SC6-現有EHR互通格式匯入_健保健康存摺Bundle</li>
      <li>SC7- Long-Term Services and Supports (eLTSS)</li>
      <center>
        <img src={wg5_1_1} style={{ width: '100%', marginBottom: '1rem' }} />
        <img src={wg5_1_2} style={{ width: '100%' }} />
      </center>
    </div>
  )
}

const Track5_SystemsAffected_content = () => {
  return (
    <div>
      <p style={h3_style}></p>
      <p></p>
    </div>
  )
}

const Track5_Specification_content = () => {
  const [srcImg, setSrcImg] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <div>
      <p style={h3_style}>角色(Actors)</p>
      <p>1. 照護協調(COLLCARE)角色整理</p>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th style={{ width: '30%' }}>
              <strong data-position="47948" data-size="0">
                <span data-position="47950" data-size="7">
                  Keyword
                </span>
              </strong>
            </th>
            <th>
              <strong data-position="47978" data-size="0">
                <span data-position="47980" data-size="4">
                  Name
                </span>
              </strong>
            </th>
            <th>
              <strong data-position="48020" data-size="0">
                <span data-position="48022" data-size="11">
                  Description
                </span>
              </strong>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>
              <span data-position="47439" data-size="12">
                CARE_PROVIDER
              </span>
            </td>
            <td>
              <span data-position="47465" data-size="13">
                Care Provider
              </span>
            </td>
            <td>
              <span data-position="47502" data-size="6">
                照護提供機構
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="47519" data-size="11">
                PHARMACY_APP
              </span>
            </td>
            <td>
              <span data-position="47545" data-size="20">
                Pharmacy Application
              </span>
            </td>
            <td>
              <span data-position="47583" data-size="6">
                藥局資訊系統
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="47597" data-size="22">
                PRESCRIPTION_REPOSITORY
              </span>
            </td>
            <td>
              <span data-position="47623" data-size="23">
                Prescription Repository
              </span>
            </td>
            <td>
              <span data-position="47661" data-size="6">
                處方箋儲存庫
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="47677" data-size="12">
                EEC_OS_CREATOR
              </span>
            </td>
            <td>
              <span data-position="47703" data-size="30">
                EEC Outpatient Summary Creator
              </span>
            </td>
            <td>
              <span data-position="47741" data-size="11">
                EEC門診病歷文件產生
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="47757" data-size="13">
                EEC_OS_CONSUMER
              </span>
            </td>
            <td>
              <span data-position="47783" data-size="31">
                EEC Outpatient Summary Consumer
              </span>
            </td>
            <td>
              <span data-position="47821" data-size="9">
                EEC門診病歷調閱
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="47837" data-size="12">
                EEC_DS_CREATOR
              </span>
            </td>
            <td>
              <span data-position="47863" data-size="29">
                EEC Discharge Summary Creator
              </span>
            </td>
            <td>
              <span data-position="47901" data-size="9">
                EEC出院病摘產生
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="47917" data-size="13">
                EEC_DS_CONSUMER
              </span>
            </td>
            <td>
              <span data-position="47943" data-size="30">
                EEC Discharge Summary Consumer
              </span>
            </td>
            <td>
              <span data-position="47981" data-size="11">
                EEC出院病摘文件調閱
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="47997" data-size="13">
                EEC_LAB_CREATOR
              </span>
            </td>
            <td>
              <span data-position="48023" data-size="29">
                EEC Laboratory Report Creator
              </span>
            </td>
            <td>
              <span data-position="48061" data-size="11">
                EEC檢驗檢查報告產生
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="48077" data-size="16">
                IMG_REPORT_CREATOR
              </span>
            </td>
            <td>
              <span data-position="48103" data-size="22">
                Imaging Report Creator
              </span>
            </td>
            <td>
              <span data-position="48141" data-size="15">
                新增影像報告角色 (賽道#4)
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="48161" data-size="15">
                IMG_STUDY_CREATOR
              </span>
            </td>
            <td>
              <span data-position="48187" data-size="18">
                ImageStudy Creator
              </span>
            </td>
            <td>
              <span data-position="48225" data-size="15">
                新增影像索引角色 (賽道#4)
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="48244" data-size="17">
                IMG_REPORT_CONSUMER
              </span>
            </td>
            <td>
              <span data-position="48270" data-size="23">
                Imaging Report Consumer
              </span>
            </td>
            <td>
              <span data-position="48308" data-size="18">
                查詢與調閱影像報告角色 (賽道#4)
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="48331" data-size="16">
                IMG_STUDY_CONSUMER
              </span>
            </td>
            <td>
              <span data-position="48357" data-size="16">
                Imaging Consumer
              </span>
            </td>
            <td>
              <span data-position="48395" data-size="18">
                查詢與調閱影像索引角色 (賽道#4)
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={h3_style}>交易(Transactions)</p>
      <p>1. 照護協調(COLLCARE)交易整理</p>
      <p style={h3_style}>處方調劑與個人健康管理系統</p>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>
              <strong data-position="49130" data-size="0">
                <span data-position="49132" data-size="2">
                  編號
                </span>
              </strong>
            </th>
            <th>
              <strong data-position="49144" data-size="0">
                <span data-position="49146" data-size="2">
                  名稱
                </span>
              </strong>
            </th>
            <th>
              <strong data-position="49196" data-size="0">
                <span data-position="49198" data-size="2">
                  描述
                </span>
              </strong>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>
              <span data-position="48634" data-size="6">
                MITW-5
              </span>
            </td>
            <td>
              <span data-position="48644" data-size="31">
                Create/Update MedicationRequest
              </span>
            </td>
            <td>
              <span data-position="48687" data-size="11">
                新增與更新用藥處方資料
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="48703" data-size="6">
                MITW-6
              </span>
            </td>
            <td>
              <span data-position="48713" data-size="32">
                Qurey/Retrieve MedicationRequest
              </span>
            </td>
            <td>
              <span data-position="48756" data-size="11">
                查詢與調閱用藥處方資料
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="48772" data-size="6">
                MITW-7
              </span>
            </td>
            <td>
              <span data-position="48782" data-size="31">
                Create MedicationAdministration
              </span>
            </td>
            <td>
              <span data-position="48825" data-size="8">
                新增用藥紀錄資料
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="48843" data-size="6">
                MITW-8
              </span>
            </td>
            <td>
              <span data-position="48853" data-size="39">
                Qurey/Retrieve MedicationAdministration
              </span>
            </td>
            <td>
              <span data-position="48896" data-size="11">
                查詢語調月用藥紀錄資料
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="48912" data-size="7">
                MITW-67
              </span>
            </td>
            <td>
              <span data-position="48922" data-size="25">
                Create MedicationDispense
              </span>
            </td>
            <td>
              <span data-position="48965" data-size="8">
                新增藥物處方調劑
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="48983" data-size="7">
                MITW-68
              </span>
            </td>
            <td>
              <span data-position="48993" data-size="33">
                Query/Retrieve MedicationDispense
              </span>
            </td>
            <td>
              <span data-position="49036" data-size="8">
                藥物處方調劑調閱
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="49054" data-size="7">
                MITW-69
              </span>
            </td>
            <td>
              <span data-position="49064" data-size="14">
                Create NHI PHR
              </span>
            </td>
            <td>
              <span data-position="49107" data-size="6">
                健康存摺新增
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="49126" data-size="7">
                MITW-62
              </span>
            </td>
            <td>
              <span data-position="49136" data-size="22">
                Query/Retrieve NHI PHR
              </span>
            </td>
            <td>
              <span data-position="49179" data-size="9">
                NNI健康存摺調閱
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={h3_style}>電子病歷交換中心(EEC)</p>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>
              <strong data-position="49130" data-size="0">
                <span data-position="49132" data-size="2">
                  編號
                </span>
              </strong>
            </th>
            <th>
              <strong data-position="49144" data-size="0">
                <span data-position="49146" data-size="2">
                  名稱
                </span>
              </strong>
            </th>
            <th>
              <strong data-position="49196" data-size="0">
                <span data-position="49198" data-size="2">
                  描述
                </span>
              </strong>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>
              <span data-position="49386" data-size="7">
                MITW-55
              </span>
            </td>
            <td>
              <span data-position="49396" data-size="44">
                Create EEC Outpatient Medical Summary Bundle
              </span>
            </td>
            <td>
              <span data-position="49444" data-size="13">
                EEC門診病歷文件打包上傳
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="49464" data-size="7">
                MITW-56
              </span>
            </td>
            <td>
              <span data-position="49474" data-size="45">
                Query/Retrieve EEC Outpatient Medical Summary
              </span>
            </td>
            <td>
              <span data-position="49522" data-size="9">
                EEC門診病歷調閱
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="49542" data-size="7">
                MITW-57
              </span>
            </td>
            <td>
              <span data-position="49552" data-size="35">
                Create EEC Discharge Summary Bundle
              </span>
            </td>
            <td>
              <span data-position="49600" data-size="13">
                EEC出院病摘文件打包上傳
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="49620" data-size="7">
                MITW-58
              </span>
            </td>
            <td>
              <span data-position="49630" data-size="36">
                Query/Retrieve EEC Discharge Summary
              </span>
            </td>
            <td>
              <span data-position="49678" data-size="9">
                EEC出院病摘調閱
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="49698" data-size="7">
                MITW-59
              </span>
            </td>
            <td>
              <span data-position="49708" data-size="35">
                Create EEC Laboratory Report Bundle
              </span>
            </td>
            <td>
              <span data-position="49756" data-size="15">
                EEC檢驗檢查報告文件打包上傳
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="49776" data-size="7">
                MITW-60
              </span>
            </td>
            <td>
              <span data-position="49786" data-size="36">
                Query/Retrieve EEC Laboratory Report
              </span>
            </td>
            <td>
              <span data-position="49834" data-size="11">
                EEC檢驗檢查報告調閱
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="49854" data-size="7">
                MITW-62
              </span>
            </td>
            <td>
              <span data-position="49864" data-size="22">
                Query/Retrieve NIH PHR
              </span>
            </td>
            <td>
              <span data-position="49912" data-size="9">
                NIH健康存摺調閱
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="49932" data-size="7">
                MITW-31
              </span>
            </td>
            <td>
              <span data-position="49942" data-size="19">
                Image Report Create
              </span>
            </td>
            <td>
              <span data-position="49990" data-size="13">
                新增影像報告 (賽道#4)
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="50006" data-size="7">
                MITW-61
              </span>
            </td>
            <td>
              <span data-position="50016" data-size="26">
                Image Report Bundle Create
              </span>
            </td>
            <td>
              <span data-position="50064" data-size="16">
                新增影像報告文件打包(賽道#4)
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="50085" data-size="7">
                MITW-30
              </span>
            </td>
            <td>
              <span data-position="50095" data-size="27">
                ImagingStudy Query/Retrieve
              </span>
            </td>
            <td>
              <span data-position="50143" data-size="16">
                查詢與調閱影像索引 (賽道#4)
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="50165" data-size="7">
                MITW-32
              </span>
            </td>
            <td>
              <span data-position="50175" data-size="27">
                Image Report Query/Retrieve
              </span>
            </td>
            <td>
              <span data-position="50223" data-size="16">
                查詢與調閱影像報告 (賽道#4)
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <p style={h3_style}>角色與交易關係圖</p>
      <ul>
        <li>處方調劑與個人健康管理系統</li>
      </ul>
      <img
        src={wg5_2_1}
        width="30%"
        onClick={() => {
          setSrcImg(wg5_2_1)
          setLightboxOpen(true)
        }}
      />

      <center>
        <img
          src={track5_2}
          Width="100%"
          onClick={() => {
            setSrcImg(track5_2)
            setLightboxOpen(true)
          }}
        />
      </center>

      {lightboxOpen && (
        <Lightbox
          imageLoadErrorMessage="無法載入圖片"
          imagePadding={window.innerWidth / 10}
          mainSrc={srcImg}
          onCloseRequest={() => setLightboxOpen(false)}
        />
      )}
    </div>
  )
}

const Track5_Author_content = () => {
  return (
    <div>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>角色</th>
            <th style={{ width: '15%' }}>姓名</th>
            <th>
              <span data-position="50223" data-size="4">
                所屬單位
              </span>
            </th>
            <th>
              <span data-position="50232" data-size="2">
                貢獻
              </span>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>
              <span data-position="50293" data-size="2">
                召集人
              </span>
            </td>
            <td>
              <span data-position="50300" data-size="3">
                李祥豪
              </span>
            </td>
            <td>
              <span data-position="50306" data-size="12">
                台灣醫學資訊學會 秘書長
              </span>
            </td>
            <td>專案管理、聯測情境設計, Profiling</td>
          </tr>
          <tr>
            <td>
              <span data-position="50367" data-size="2">
                作者
              </span>
            </td>
            <td>
              <span data-position="50374" data-size="3">
                李修安
              </span>
            </td>
            <td>
              <span data-position="50380" data-size="22">
                國家衛生研究院 - 癌症研究所 博士後研究員
              </span>
            </td>
            <td>EEC Profiling,聯測情境設計</td>
          </tr>
          <tr>
            <td>
              <span data-position="50434" data-size="2">
                作者
              </span>
            </td>
            <td>
              <span data-position="50441" data-size="3">
                楊宇凡
              </span>
            </td>
            <td>
              <span data-position="50447" data-size="10">
                矽塔資訊服務有限公司
              </span>
            </td>
            <td>eTLSS Profiling,聯測情境設計</td>
          </tr>
          <tr>
            <td>
              <span data-position="50497" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="50503" data-size="3">
                劉貞沂
              </span>
            </td>
            <td>
              <span data-position="50509" data-size="18">
                國立臺北護理健康大學 - 資訊管理系
              </span>
            </td>
            <td>資料對照與文件設計</td>
          </tr>
          <tr>
            <td>
              <span data-position="50566" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="50572" data-size="3">
                吳品樺
              </span>
            </td>
            <td>
              <span data-position="50578" data-size="18">
                國立臺北護理健康大學 - 資訊管理系
              </span>
            </td>
            <td>資料對照與文件設計</td>
          </tr>
          <tr>
            <td>
              <span data-position="50635" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="50641" data-size="3">
                燕洛嫺
              </span>
            </td>
            <td>
              <span data-position="50647" data-size="18">
                國立臺北護理健康大學 - 資訊管理系
              </span>
            </td>
            <td>資料對照與文件設計</td>
          </tr>
          <tr>
            <td>
              <span data-position="50704" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="50710" data-size="3">
                黃子庭
              </span>
            </td>
            <td>
              <span data-position="50716" data-size="18">
                國立臺北護理健康大學 - 資訊管理系
              </span>
            </td>
            <td>資料對照與文件設計</td>
          </tr>
          <tr>
            <td>
              <span data-position="50773" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="50779" data-size="3">
                黃睿駿
              </span>
            </td>
            <td>
              <span data-position="50785" data-size="18">
                國立臺北護理健康大學 - 資訊管理系
              </span>
            </td>
            <td>EEC Profiling</td>
          </tr>{' '}
          <tr>
            <td>
              <span data-position="50773" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="50779" data-size="3">
                楊宗翰
              </span>
            </td>
            <td>
              <span data-position="50785" data-size="18">
                國立陽明交通大學 - 生物醫學資訊研究所
              </span>
            </td>
            <td>連續處方箋流程與健康存摺工作小組</td>
          </tr>
          <tr>
            <td>
              <span data-position="50773" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="50779" data-size="3">
                龔筠庭
              </span>
            </td>
            <td>
              <span data-position="50785" data-size="18">
                國泰金融控股公司 - 數位數據暨科技發展中心
              </span>
            </td>
            <td>連續處方箋流程與健康存摺工作小組</td>
          </tr>{' '}
          <tr>
            <td>
              <span data-position="50773" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="50779" data-size="3">
                彭群芳
              </span>
            </td>
            <td>
              <span data-position="50785" data-size="18">
                國泰金融控股公司 - 數位數據暨科技發展中心
              </span>
            </td>
            <td>連續處方箋流程與健康存摺工作小組</td>
          </tr>{' '}
          <tr>
            <td>
              <span data-position="50773" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="50779" data-size="3">
                廖銘宏
              </span>
            </td>
            <td>
              <span data-position="50785" data-size="18">
                國泰金融控股公司 - 數位數據暨科技發展中心
              </span>
            </td>
            <td>連續處方箋流程與健康存摺工作小組</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export {
  Track5_Summary_content,
  Track5_Benefits_content,
  Track5_details_content,
  Track5_SystemsAffected_content,
  Track5_Specification_content,
  Track5_Author_content,
}
