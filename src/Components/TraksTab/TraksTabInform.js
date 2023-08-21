import logo from '../../assets/Logo.png'
import track4_1 from '../../assets/track4_1.png'
import track4_2 from '../../assets/track4_2.png'
import track4_3 from '../../assets/track4_3.png'

import track4_4 from '../../assets/track4_4.png'
import track4_5 from '../../assets/WG4_5.png'
import track4_6 from '../../assets/track4_5.png'
import track4_7 from '../../assets/track4_6.png'
import track4_8 from '../../assets/track4_7.png'

import track5_1 from '../../assets/WG5_1.png'
import track5_2 from '../../assets/WG5_2.png'

import track6_1 from '../../assets/WG6_1.png'
import track6_2 from '../../assets/WG6_2.png'

import track7_1 from '../../assets/WG7_1.png'
import track7_2 from '../../assets/WG7_2.png'

import track8_1 from '../../assets/WG8_1.png'
import track8_2 from '../../assets/WG8_2.png'
import track8_3 from '../../assets/WG8_3.png'
import track8_4 from '../../assets/WG8_4.png'
import track8_5 from '../../assets/WG8_5.png'

import track9_1 from '../../assets/WG9_1.png'
import track9_2 from '../../assets/WG9_2.png'

import track10_1 from '../../assets/WG10_1.png'
import track10_2 from '../../assets/WG10_2.png'

import ImgDialog from '../Dialog/Dialog'

//有需要輪播圖的話import後放入Img:[]
// 圖片放入<ImgDialog Img={Ts1} Width={"80%"} />頁面終能放大圖片顯示
// Img={Ts1}裡面引入圖片
// Width={"80%"}一般檢視頁面中的大小
import ReactPlayer from 'react-player/youtube'

import {
  Track1_details_content,
  Track1_Benefits_content,
  Track1_Summary_content,
  Track1_SystemsAffected_content,
  Track1_Specification_content,
  Track1_Author_content,
} from './contents/track1/index'

import {
  Track2_details_content,
  Track2_Benefits_content,
  Track2_Summary_content,
  Track2_SystemsAffected_content,
  Track2_Specification_content,
  Track2_Author_content,
} from './contents/track2/index'

import {
  Track3_Summary_content,
  Track3_Benefits_content,
  Track3_details_content,
  Track3_SystemsAffected_content,
  Track3_Specification_content,
  Track3_Author_content,
} from './contents/track3/index'

import {
  Track4_Summary_content,
  Track4_Benefits_content,
  Track4_details_content,
  Track4_SystemsAffected_content,
  Track4_Specification_content,
  Track4_Author_content,
} from './contents/track4/index'

export const TraksTabInform = [
  {
    Id: '1',
    TabTitle: '01',
    ContentTitle: '病人基本資料',
    Img: '',
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1h_pxZWnYVmIbqtN7wJoaXoR-Zq7N0q3d/preview',
        content: <Track1_Summary_content />,
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: <Track1_Benefits_content />,
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: <Track1_details_content />,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <Track1_SystemsAffected_content />,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: <Track1_Specification_content />,
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: <></>,
      },
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <Track1_Author_content />,
      },
    ],
  },
  {
    Id: '2',
    TabTitle: '02',
    ContentTitle: '生理量測數據',
    Img: '',
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1IE4n9qyKPifLtp8zDTE-jfCIQXICGUre/view',
        content: <Track2_Summary_content />,
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: <Track2_Benefits_content />,
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: <Track2_details_content />,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <Track2_SystemsAffected_content />,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: <Track2_Specification_content />,
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: <></>,
      },
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <Track2_Author_content />,
      },
    ],
  },
  {
    Id: '3',
    TabTitle: '03',
    ContentTitle: '用藥、文件打包及服務請求',
    Img: [],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1i1U1ZAqbeIqMFV87JqD8xahGNHGeO9NZ/preview',
        content: <Track3_Summary_content />,
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: <Track3_Benefits_content />,
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: <Track3_details_content />,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <Track3_details_content />,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: <Track3_Specification_content />,
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: <></>,
      },
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <Track3_Author_content />,
      },
    ],
  },
  {
    Id: '4',
    TabTitle: '04',
    ContentTitle: '醫學影像與病理',
    Img: [],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1h_0AxAD4jwWEkW4Bh5p9YwvLIYO12Krq/preview',
        content: <Track4_Summary_content />,
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: <Track4_Benefits_content />,
      },
      {
        id: '3',
        Sc: '詳細資訊(Details) ',
        content: <Track4_details_content />,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <Track4_SystemsAffected_content />,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: <Track4_Specification_content />,
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: (
          <>
            <ul>
              <li>
                相關標準
                <ul>
                  <li>
                    <a href="https://twcore.mohw.gov.tw/ig/">臺灣核心實作指引</a>
                  </li>
                  <li>
                    <a href="https://wiki.ihe.net/index.php/Scheduled_Workflow">IHE Scheduled Workflow Profle</a>
                  </li>
                  <li>
                    <a href="https://wiki.ihe.net/index.php/Web-based_Image_Access">
                      IHE Web-based Image Access Profle
                    </a>
                  </li>
                  <li>
                    <a href="https://wiki.ihe.net/index.php/Digital_Pathology_Workflow_-_Image_Acquisition">
                      Digital Pathology Workflow - Image Acquisition
                    </a>
                  </li>
                  <li>
                    <a href="https://mitw.dicom.org.tw/IG/NSCLC/Imageprofiles.html">醫療影像及報告實作指引</a>
                  </li>
                </ul>
              </li>
              <li>常見問題</li>
              <li>
                參考文章
                <ul>
                  <li>
                    <a href="https://news.gbimonthly.com/tw/celebrity/show.php?num=37353">
                      善用健保制定資料儲存標準，建置差異化影像資料庫
                    </a>
                  </li>
                </ul>
              </li>
              <li>參考網址</li>
            </ul>
          </>
        ),
      },
      ,
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <Track4_Author_content />,
      },
    ],
  },
  {
    Id: '5',
    TabTitle: '05',
    ContentTitle: '照護協調',
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1i6_qOodMipdgk0LyzS-_znmtvBkGBC2x/preview',
        content: (
          <>
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
          </>
        ),
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: (
          <>
            <p>
              醫療健康照護場域中有許多跨院醫療照護團隊持續性照護的需求，例如轉診轉院、慢性病照護、癌病治療/照護、長期照護等，相關資料不只在醫療專業人員手上處理業務使用，民眾本身也有了解並持有自身電子健康檔案(PHR)的權利，且能促進民眾本身的健康識能。台灣除了民眾向就醫院所申請病歷以外，在衛生福利部不同單位間已有分別建立不同格式之電子病歷、健康資料互通交換格式與規範，本工作小組目標以衛福部下一代主要資訊標準FHIR為核心，向前相容各種已存在之電子交換格式，協助相關醫療健康照護資料更容易歸人彙整於單一標準上，促進不同醫療健康照護機構與專業人員及相關系統可更容易有效率的整合資訊並應用。
            </p>
            <p>
              本工作小組依據既有非FHIR標準之互通標準，以FHIR標準設計符合台灣醫療照護應用情境資訊需求之慢性處方箋、電子病歷交換、健康存摺資料
              FHIR Resource
              規範與通用系統互通操作應用流程，提供產業應用交流與參考，以達到基本的跨系統互通性，並相容衛生福利部台灣核心實作指引(TW
              FHIR Core IG)規範。
            </p>
          </>
        ),
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: (
          <>
            <h3>Scenario 1: 慢性處方箋開立與領用藥流程</h3>
            <h3>Scenario 2: 現有PHR互通格式匯入_EEC門診病歷Bundle</h3>
            <h3>Scenario 3: 現有PHR互通格式匯入_EEC出院病摘Bundle</h3>
            <h3>Scenario 4: 現有PHR互通格式匯入_EEC檢驗報告Bundle</h3>
            <h3>Scenario 5: 現有PHR互通格式匯入_EEC醫學影像報告Bundle (與 Track#4 Scenario 2-1 整合)</h3>
            <h3>Scenario 6: 現有PHR互通格式匯入_健保健康存摺Bundle</h3>
            <h3>Scenario 7: Long-Term Services and Supports (eLTSS)</h3>
            <center>
              <img src={track5_1} Width="70%" />
            </center>
          </>
        ),
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: (
          <>
            <h3>角色(Actors)</h3>
            <p>1. 照護協調(COLLCARE)角色整理</p>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
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
              <tbody>
                <tr>
                  <td>
                    <span data-position="48120" data-size="19">
                      PRESCRIPTION_CREATOR
                    </span>
                  </td>
                  <td>
                    <span data-position="48146" data-size="28">
                      Medical Prescription Creator
                    </span>
                  </td>
                  <td>
                    <span data-position="48184" data-size="5">
                      產生處方箋
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="48200" data-size="20">
                      PRESCRIPTION_CONSUMER
                    </span>
                  </td>
                  <td>
                    <span data-position="48226" data-size="35">
                      Query/Retrieve Medcial Prescription
                    </span>
                  </td>
                  <td>
                    <span data-position="48264" data-size="8">
                      處方箋查詢與調閱
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="48280" data-size="22">
                      PRESCRIPTION_REPOSITORY
                    </span>
                  </td>
                  <td>
                    <span data-position="48306" data-size="23">
                      Prescription Repository
                    </span>
                  </td>
                  <td>
                    <span data-position="48344" data-size="6">
                      處方箋儲存庫
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="48360" data-size="12">
                      EEC_OS_CREATOR
                    </span>
                  </td>
                  <td>
                    <span data-position="48386" data-size="30">
                      EEC Outpatient Summary Creator
                    </span>
                  </td>
                  <td>
                    <span data-position="48424" data-size="11">
                      EEC門診病歷文件產生
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="48440" data-size="13">
                      EEC_OS_CONSUMER
                    </span>
                  </td>
                  <td>
                    <span data-position="48466" data-size="31">
                      EEC Outpatient Summary Consumer
                    </span>
                  </td>
                  <td>
                    <span data-position="48504" data-size="9">
                      EEC門診病歷調閱
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="48520" data-size="12">
                      EEC_DS_CREATOR
                    </span>
                  </td>
                  <td>
                    <span data-position="48546" data-size="29">
                      EEC Discharge Summary Creator
                    </span>
                  </td>
                  <td>
                    <span data-position="48584" data-size="9">
                      EEC出院病摘產生
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="48600" data-size="13">
                      EEC_DS_CONSUMER
                    </span>
                  </td>
                  <td>
                    <span data-position="48626" data-size="30">
                      EEC Discharge Summary Consumer
                    </span>
                  </td>
                  <td>
                    <span data-position="48664" data-size="11">
                      EEC出院病摘文件調閱
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="48680" data-size="13">
                      EEC_LAB_CREATOR
                    </span>
                  </td>
                  <td>
                    <span data-position="48706" data-size="29">
                      EEC Laboratory Report Creator
                    </span>
                  </td>
                  <td>
                    <span data-position="48744" data-size="11">
                      EEC檢驗檢查報告產生
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="48759" data-size="16">
                      IMG_REPORT_CREATOR
                    </span>
                  </td>
                  <td>
                    <span data-position="48783" data-size="22">
                      Imaging Report Creator
                    </span>
                  </td>
                  <td>
                    <span data-position="48819" data-size="15">
                      新增影像報告角色 (賽道#4)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="48838" data-size="15">
                      IMG_STUDY_CREATOR
                    </span>
                  </td>
                  <td>
                    <span data-position="48862" data-size="18">
                      ImageStudy Creator
                    </span>
                  </td>
                  <td>
                    <span data-position="48898" data-size="15">
                      新增影像索引角色 (賽道#4)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="48915" data-size="17">
                      IMG_REPORT_CONSUMER
                    </span>
                  </td>
                  <td>
                    <span data-position="48939" data-size="23">
                      Imaging Report Consumer
                    </span>
                  </td>
                  <td>
                    <span data-position="48975" data-size="18">
                      查詢與調閱影像報告角色 (賽道#4)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="48997" data-size="16">
                      IMG_STUDY_CONSUMER
                    </span>
                  </td>
                  <td>
                    <span data-position="49021" data-size="16">
                      Imaging Consumer
                    </span>
                  </td>
                  <td>
                    <span data-position="49057" data-size="18">
                      查詢與調閱影像索引角色 (賽道#4)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>交易(Transactions)</h3>
            <p>1. 照護協調(COLLCARE)交易整理</p>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
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
              <tbody>
                <tr>
                  <td>
                    <span data-position="49298" data-size="7">
                      MITW-55
                    </span>
                  </td>
                  <td>
                    <span data-position="49308" data-size="44">
                      Create EEC Outpatient Medical Summary Bundle
                    </span>
                  </td>
                  <td>
                    <span data-position="49356" data-size="13">
                      EEC門診病歷文件打包上傳
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="49376" data-size="7">
                      MITW-56
                    </span>
                  </td>
                  <td>
                    <span data-position="49386" data-size="45">
                      Query/Retrieve EEC Outpatient Medical Summary
                    </span>
                  </td>
                  <td>
                    <span data-position="49434" data-size="9">
                      EEC門診病歷調閱
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="49454" data-size="7">
                      MITW-57
                    </span>
                  </td>
                  <td>
                    <span data-position="49464" data-size="35">
                      Create EEC Discharge Summary Bundle
                    </span>
                  </td>
                  <td>
                    <span data-position="49512" data-size="13">
                      EEC出院病摘文件打包上傳
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="49532" data-size="7">
                      MITW-58
                    </span>
                  </td>
                  <td>
                    <span data-position="49542" data-size="36">
                      Query/Retrieve EEC Discharge Summary
                    </span>
                  </td>
                  <td>
                    <span data-position="49590" data-size="9">
                      EEC出院病摘調閱
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="49610" data-size="7">
                      MITW-59
                    </span>
                  </td>
                  <td>
                    <span data-position="49620" data-size="35">
                      Create EEC Laboratory Report Bundle
                    </span>
                  </td>
                  <td>
                    <span data-position="49668" data-size="15">
                      EEC檢驗檢查報告文件打包上傳
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="49688" data-size="7">
                      MITW-60
                    </span>
                  </td>
                  <td>
                    <span data-position="49698" data-size="36">
                      Query/Retrieve EEC Laboratory Report
                    </span>
                  </td>
                  <td>
                    <span data-position="49746" data-size="11">
                      EEC檢驗檢查報告調閱
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="49766" data-size="7">
                      MITW-62
                    </span>
                  </td>
                  <td>
                    <span data-position="49776" data-size="22">
                      Query/Retrieve NIH PHR
                    </span>
                  </td>
                  <td>
                    <span data-position="49824" data-size="9">
                      NIH健康存摺調閱
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="49844" data-size="7">
                      MITW-31
                    </span>
                  </td>
                  <td>
                    <span data-position="49854" data-size="19">
                      Image Report Create
                    </span>
                  </td>
                  <td>
                    <span data-position="49894" data-size="13">
                      新增影像報告 (賽道#4)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="49911" data-size="7">
                      MITW-61
                    </span>
                  </td>
                  <td>
                    <span data-position="49921" data-size="26">
                      Image Report Bundle Create
                    </span>
                  </td>
                  <td>
                    <span data-position="49961" data-size="16">
                      新增影像報告文件打包(賽道#4)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="49981" data-size="7">
                      MITW-30
                    </span>
                  </td>
                  <td>
                    <span data-position="49991" data-size="27">
                      ImagingStudy Query/Retrieve
                    </span>
                  </td>
                  <td>
                    <span data-position="50031" data-size="16">
                      查詢與調閱影像索引 (賽道#4)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="50052" data-size="7">
                      MITW-32
                    </span>
                  </td>
                  <td>
                    <span data-position="50062" data-size="27">
                      Image Report Query/Retrieve
                    </span>
                  </td>
                  <td>
                    <span data-position="50102" data-size="16">
                      查詢與調閱影像報告 (賽道#4)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>角色與交易關係圖</h3>
            <center>
              <img src={track5_2} Width="70%" />
            </center>
          </>
        ),
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: <></>,
      },
      ,
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: (
          <>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
                    <span data-position="50213" data-size="2">
                      角色
                    </span>
                  </th>
                  <th>
                    <span data-position="50218" data-size="2">
                      姓名
                    </span>
                  </th>
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
                  <th>
                    <span data-position="50238" data-size="4">
                      聯絡方式
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span data-position="50293" data-size="2">
                      作者
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
                  <td></td>
                  <td>
                    <a href="mailto:shvoidlee@gmail.com" target="_blank" rel="noopener">
                      <span data-position="50339" data-size="19">
                        shvoidlee@gmail.com
                      </span>
                    </a>
                  </td>
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
                  <td></td>
                  <td>
                    <a href="mailto:billy72325@gmail.com" target="_blank" rel="noopener">
                      <span data-position="50406" data-size="20">
                        billy72325@gmail.com
                      </span>
                    </a>
                  </td>
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
                  <td></td>
                  <td>
                    <span data-position="50469" data-size="13">
                      ceo@sita.tech
                    </span>
                  </td>
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
                  <td></td>
                  <td>
                    <a href="mailto:jennyliu1003@gmail.com" target="_blank" rel="noopener">
                      <span data-position="50538" data-size="22">
                        jennyliu1003@gmail.com
                      </span>
                    </a>
                  </td>
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
                  <td></td>
                  <td>
                    <a href="mailto:shin66945@gmail.com" target="_blank" rel="noopener">
                      <span data-position="50607" data-size="19">
                        shin66945@gmail.com
                      </span>
                    </a>
                  </td>
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
                  <td></td>
                  <td>
                    <a href="mailto:reachelyen@gmail.com" target="_blank" rel="noopener">
                      <span data-position="50676" data-size="20">
                        reachelyen@gmail.com
                      </span>
                    </a>
                  </td>
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
                  <td></td>
                  <td>
                    <a href="mailto:huangnookashi@gmail.com" target="_blank" rel="noopener">
                      <span data-position="50745" data-size="23">
                        huangnookashi@gmail.com
                      </span>
                    </a>
                  </td>
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
                  <td></td>
                  <td>
                    <a href="mailto:a27114171@gmail.com" target="_blank" rel="noopener">
                      <span data-position="50806" data-size="19">
                        a27114171@gmail.com
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
    ],
  },
  {
    Id: '6',
    TabTitle: '06',
    ContentTitle: '基因體標記',
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1hKZYzOQJKcZStq26u0lrUDKhhaAj5POQ/preview',
        content: (
          <>
            <ul class="part in-view" data-startline="1027" data-endline="1035" data-position="50997" data-size="0">
              <li class="" data-startline="1027" data-endline="1027" data-position="50999" data-size="0">
                <p data-position="50997" data-size="0">
                  <span data-position="50999" data-size="212">
                    次世代定序(Next Generation Sequencing, NGS)是精準醫學(Precision Medicine,
                    PM)的核心技術。隨著精準醫學的發展，基因定序的需求日益增加，NGS分析產生的巨量資料對於研究人員及醫師在管理上是項龐大的負擔，而在生物醫學研究中往往需要針對特定染色體、基因區間等條件研究，要在大量的資料間一一擷取是困難且費時的，且不同分析工具所產生的格式定義不同，造成資料整合不易無法有效應用。
                  </span>
                </p>
              </li>
              <li class="" data-startline="1028" data-endline="1029" data-position="51214" data-size="0">
                <p data-position="51212" data-size="0">
                  <span data-position="51214" data-size="200">
                    基因資料主要處理基因定序後產生的檔案，包含: VCF(Variant Call
                    Format)格式是NGS的通用語言，基因突變資料儲存格式等，提FHIR標準化格式轉換，作為與電子病歷資料整合。根據基因定序的流程，由病人抽血後經過基因定序以及分析產生的變異點資料，經過FHIR格式轉換後儲存至FHIR
                    Server，透過FHIR標準化API存取基因定序資料，流程圖以及FHIR基因資源結構圖請參考下圖。
                  </span>
                </p>
              </li>
              <li class="" data-startline="1030" data-endline="1032" data-position="51418" data-size="0">
                <p data-position="51416" data-size="0">
                  <span data-position="51418" data-size="22">
                    基因 – 基因定序格式轉換FHIR格式流程圖
                  </span>
                  <br />
                  <center>
                    <img src={track6_1} Width="70%" />
                  </center>
                </p>
              </li>
              <li class="" data-startline="1033" data-endline="1035" data-position="51481" data-size="0">
                <p data-position="51479" data-size="0">
                  <span data-position="51481" data-size="17">
                    基因 –本次FHIR基因資源結構圖
                  </span>
                  <br />
                  <center>
                    <img src={track6_2} Width="70%" />
                  </center>
                </p>
              </li>
            </ul>
            <div width="100%">
              <p style={{ fontWeight: 'bold' }}>賽道介紹</p>
              <ReactPlayer url="https://youtu.be/jSYB5ZICec4" width="100%" />
            </div>
          </>
        ),
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: (
          <>
            <ul class="part in-view" data-startline="1037" data-endline="1039" data-position="51556" data-size="0">
              <li class="" data-startline="1037" data-endline="1037" data-position="51558" data-size="0">
                <span data-position="51558" data-size="87">
                  為了協助研究人員與醫師有效管理與調閱NGS分析資料，FHIR Genomic
                  Resource儲存，使用FHIR不僅能整合不同工具的分析結果，亦能解決格式差異難以應用的問題。
                </span>
              </li>
              <li class="" data-startline="1038" data-endline="1039" data-position="51648" data-size="0">
                <span data-position="51648" data-size="167">
                  為提供臨床研究可互操作性的應用，HL7發布基因組學實作指引 (Genomics Implementation
                  Guidance)，定義基因組學資源擴充與架構，並新增MolecularSequence資源作為儲存序列相關資訊，FHIR提煉並簡化基因分析產生的數據，提供標準化框架可依照臨床需求擴增，及有助於跨組織平台交換基因組分析資訊。
                </span>
              </li>
            </ul>
          </>
        ),
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: (
          <>
            <h3></h3>
            <p></p>
          </>
        ),
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: (
          <>
            <p>本規範涉及涉及的系统有：</p>
            <ul class="part in-view" data-startline="1043" data-endline="1045" data-position="51877" data-size="0">
              <li class="" data-startline="1043" data-endline="1043" data-position="51879" data-size="0">
                <strong data-position="51879" data-size="0">
                  <span data-position="51881" data-size="7">
                    資料產生系統:
                  </span>
                </strong>
              </li>
              <li class="" data-startline="1044" data-endline="1045" data-position="51894" data-size="0">
                <strong data-position="51894" data-size="0">
                  <span data-position="51896" data-size="7">
                    資料分析系統:
                  </span>
                </strong>
              </li>
            </ul>

            <h3
              class="part in-view"
              data-startline="1046"
              data-endline="1046"
              id="情境1-–-產生新的基因定序資訊MolecularSequence以及變異點資料Observation---Source"
              data-id="情境1-–-產生新的基因定序資訊MolecularSequence以及變異點資料Observation---Source"
            >
              <a
                class="anchor hidden-xs"
                href="#情境1-–-產生新的基因定序資訊MolecularSequence以及變異點資料Observation---Source"
                title="情境1-–-產生新的基因定序資訊MolecularSequence以及變異點資料Observation---Source"
                smoothhashscroll=""
              >
                <span class="octicon octicon-link"></span>
              </a>
              <span data-position="51912" data-size="66">
                情境1 – 產生新的基因定序資訊(MolecularSequence)以及變異點資料(Observation) - (Source)
              </span>
            </h3>
            <p class="part in-view" data-startline="1047" data-endline="1047" data-position="51979" data-size="0">
              <span data-position="51979" data-size="66">
                FHIR
                Client產生一個新的序列實例(，且透過一個基因規範來表現基因資料以及觀察實例(DNA變異、RNA序列、以及結構變異等)
              </span>
            </p>

            <ul class="part in-view" data-startline="1048" data-endline="1050" data-position="52046" data-size="0">
              <li class="" data-startline="1048" data-endline="1050" data-position="52048" data-size="0">
                <strong data-position="52048" data-size="0">
                  <span data-position="52050" data-size="5">
                    產生文件:
                  </span>
                </strong>
                <ul data-position="52061" data-size="0">
                  <li class="" data-startline="1049" data-endline="1050" data-position="52063" data-size="0">
                    <span data-position="52063" data-size="30">
                      基因定序資訊(FHIR MolecularSequence)
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <h3
              class="part in-view"
              data-startline="1051"
              data-endline="1051"
              id="情境2-–-調閱臨床序列-Germline-Testing-Consumer"
              data-id="情境2-–-調閱臨床序列-Germline-Testing-Consumer"
            >
              <a
                class="anchor hidden-xs"
                href="#情境2-–-調閱臨床序列-Germline-Testing-Consumer"
                title="情境2-–-調閱臨床序列-Germline-Testing-Consumer"
                smoothhashscroll=""
              >
                <span class="octicon octicon-link"></span>
              </a>
              <span data-position="52099" data-size="40">
                情境2 – 調閱臨床序列 Germline Testing (Consumer)
              </span>
            </h3>
            <p class="part in-view" data-startline="1052" data-endline="1052" data-position="52140" data-size="0">
              <span data-position="52140" data-size="45">
                FHIR Client使用給定的病歷號搜索目標基因譜的觀察(Observeration)。
              </span>
            </p>
            <ul class="part in-view" data-startline="1053" data-endline="1055" data-position="52186" data-size="0">
              <li class="" data-startline="1053" data-endline="1055" data-position="52188" data-size="0">
                <strong data-position="52188" data-size="0">
                  <span data-position="52190" data-size="5">
                    產生文件:
                  </span>
                </strong>
                <ul data-position="52201" data-size="0">
                  <li class="" data-startline="1054" data-endline="1055" data-position="52203" data-size="0">
                    <span data-position="52203" data-size="23">
                      變異點資料(FHIR Observation)
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </>
        ),
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: (
          <>
            <h3>角色(Actors)</h3>
            <p>基因體標記(GEN)角色整理</p>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
                    <strong data-position="52290" data-size="0">
                      <span data-position="52292" data-size="7">
                        Keyword
                      </span>
                    </strong>
                  </th>
                  <th>
                    <strong data-position="52307" data-size="0">
                      <span data-position="52309" data-size="2">
                        名稱
                      </span>
                    </strong>
                  </th>
                  <th>
                    <strong data-position="52339" data-size="0">
                      <span data-position="52341" data-size="2">
                        描述
                      </span>
                    </strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span data-position="52412" data-size="10">
                      VAR_CREATOR
                    </span>
                  </td>
                  <td>
                    <span data-position="52429" data-size="23">
                      Genetic Variant Creator
                    </span>
                  </td>
                  <td>
                    <span data-position="52461" data-size="8">
                      新增基因序列角色
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="52472" data-size="10">
                      MOL_CREATOR
                    </span>
                  </td>
                  <td>
                    <span data-position="52489" data-size="26">
                      Molecular Sequence Creator
                    </span>
                  </td>
                  <td>
                    <span data-position="52521" data-size="9">
                      新增基因變異點角色
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="52533" data-size="11">
                      MOL_CONSUMER
                    </span>
                  </td>
                  <td>
                    <span data-position="52550" data-size="26">
                      Molecular Sequence Consume
                    </span>
                  </td>
                  <td>
                    <span data-position="52582" data-size="11">
                      查詢與調閱基因序列角色
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="52596" data-size="11">
                      VAR_CONSUMER
                    </span>
                  </td>
                  <td>
                    <span data-position="52613" data-size="24">
                      Genetic Variant Consumer
                    </span>
                  </td>
                  <td>
                    <span data-position="52645" data-size="12">
                      查詢與調閱基因變異點角色
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="52660" data-size="13">
                      MOL_REPOSITORY
                    </span>
                  </td>
                  <td>
                    <span data-position="52677" data-size="29">
                      Molecular Sequence Repository
                    </span>
                  </td>
                  <td>
                    <span data-position="52709" data-size="7">
                      基因序列儲存庫
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="52719" data-size="13">
                      VAR_REPOSITORY
                    </span>
                  </td>
                  <td>
                    <span data-position="52736" data-size="26">
                      Genetic Variant Repository
                    </span>
                  </td>
                  <td>
                    <span data-position="52768" data-size="8">
                      基因變異點儲存庫
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>交易(Transactions)</h3>
            <p>1. 基因體標記(GEN)交易整理</p>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
                    <strong data-position="52824" data-size="0">
                      <span data-position="52826" data-size="2">
                        編號
                      </span>
                    </strong>
                  </th>
                  <th>
                    <strong data-position="52834" data-size="0">
                      <span data-position="52836" data-size="2">
                        名稱
                      </span>
                    </strong>
                  </th>
                  <th>
                    <strong data-position="52884" data-size="0">
                      <span data-position="52886" data-size="2">
                        描述
                      </span>
                    </strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span data-position="52966" data-size="6">
                      MITW-9
                    </span>
                  </td>
                  <td>
                    <span data-position="52976" data-size="34">
                      MolecularSequence Resource Creator
                    </span>
                  </td>
                  <td>
                    <span data-position="53026" data-size="6">
                      新增基因序列
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="53035" data-size="7">
                      MITW-11
                    </span>
                  </td>
                  <td>
                    <span data-position="53045" data-size="36">
                      Observation-genetics Profile Creator
                    </span>
                  </td>
                  <td>
                    <span data-position="53095" data-size="7">
                      新增基因變異點
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="53104" data-size="7">
                      MITW-10
                    </span>
                  </td>
                  <td>
                    <span data-position="53115" data-size="45">
                      MolecularSequence Resource Query and Retrieve
                    </span>
                  </td>
                  <td>
                    <span data-position="53165" data-size="9">
                      查詢與調閱基因序列
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="53177" data-size="7">
                      MITW-12
                    </span>
                  </td>
                  <td>
                    <span data-position="53188" data-size="47">
                      Observation-genetics Profile Query and Retrieve
                    </span>
                  </td>
                  <td>
                    <span data-position="53238" data-size="10">
                      查詢與調閱基因變異點
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>角色與交易關係圖</h3>
            <p>1. 基因體標記(GEN)之角色與交易關係圖</p>
          </>
        ),
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: <></>,
      },
      ,
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: (
          <>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
                    <span data-position="53322" data-size="2">
                      角色
                    </span>
                  </th>
                  <th>
                    <span data-position="53327" data-size="2">
                      姓名
                    </span>
                  </th>
                  <th>
                    <span data-position="53332" data-size="4">
                      所屬單位
                    </span>
                  </th>
                  <th>
                    <span data-position="53341" data-size="2">
                      貢獻
                    </span>
                  </th>
                  <th>
                    <span data-position="53347" data-size="4">
                      聯絡方式
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span data-position="53402" data-size="2">
                      作者
                    </span>
                  </td>
                  <td>
                    <span data-position="53407" data-size="3">
                      李建興
                    </span>
                  </td>
                  <td>
                    <span data-position="53415" data-size="21">
                      國立陽明交通大學 - 生物醫學資訊學研究所
                    </span>
                  </td>
                  <td>
                    <span data-position="53438" data-size="17">
                      Profiling, 開發開源工具
                    </span>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <span data-position="53465" data-size="2">
                      作者
                    </span>
                  </td>
                  <td>
                    <span data-position="53470" data-size="3">
                      陳亭均
                    </span>
                  </td>
                  <td>
                    <span data-position="53478" data-size="4">
                      費斯科技
                    </span>
                  </td>
                  <td>
                    <span data-position="53485" data-size="4">
                      系統分析
                    </span>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <span data-position="53496" data-size="3">
                      貢獻者
                    </span>
                  </td>
                  <td>
                    <span data-position="53502" data-size="3">
                      蕭嘉宏
                    </span>
                  </td>
                  <td>
                    <span data-position="53508" data-size="13">
                      慈濟大學 - 醫學資訊學系
                    </span>
                  </td>
                  <td>
                    <span data-position="53524" data-size="2">
                      諮詢
                    </span>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <span data-position="53533" data-size="3">
                      貢獻者
                    </span>
                  </td>
                  <td>
                    <span data-position="53539" data-size="3">
                      連中岳
                    </span>
                  </td>
                  <td>
                    <span data-position="53545" data-size="16">
                      國立臺北護理健康大學－資訊管理系
                    </span>
                  </td>
                  <td>
                    <span data-position="53564" data-size="8">
                      聯測測試情境設計
                    </span>
                  </td>
                  <td>
                    <a href="mailto:chungyueh@ntunhs.edu.tw" target="_blank" rel="noopener">
                      <span data-position="53574" data-size="23">
                        chungyueh@ntunhs.edu.tw
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
    ],
  },
  {
    Id: '7',
    TabTitle: '07',
    ContentTitle: '緊急醫療救護',
    Img: [],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1ha7MrS5ZNfAQHGpsE0xf11mbV6kysh3f/preview',
        content: (
          <>
            <p>
              本賽道主要目的在於測試緊急醫療救護情境中，跨系統間的資料交換。生理量測儀器可透過此賽道規範的情境回傳標準化的資料至急救端系統、救護車或責任醫院系統，透過將救護紀錄表及四大急重症表單標準化以解決急救資料互通性的問題。本賽道主要針對上述救護紀錄表與四大急重症表單／病摘使用的
              Resource 進行驗證，並確保未來與電子病歷（TW Core IG）進行資料互通的能力。
            </p>
            <h3>目標:</h3>
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
                  {' '}
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
          </>
        ),
      },
      {
        id: '2',
        Sc: '效益 (Benefits)',
        content: (
          <>
            <p>
              隨著智慧醫療的快速發展，及緊急醫療救護業務的規模增長，需要加快以標準化方式進行各系統與儀器間資料交換，縮短急救反應時間，以提升整體緊急照護醫療品質。參加單位可使用實際或是產品雛形參加此賽道，由於這是較新的賽道，並需要跨多個
              Resource 進行資料交換，因此參加者須要具備較高的技術門檻。MISAT
              鼓勵急救場域相關工作者（醫院急診單位、急重症醫師、EMT）、軟體工程師、開源工作者、儀器開發廠商、系統整合廠商參加，透過早期布局方式建構場域實證以完善本標準，並建立急救照護場域的產品概念驗證（Proof
              of Concept）與服務驗證（Proof of Service）。
            </p>
          </>
        ),
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: (
          <>
            <p>
              聯測分成兩大情境: (1) 核心資料交換(Core Resource)用於定義救護紀錄表 FHIR 標準化，並整合核心救護流程、 (2)
              重大傷病資料交換定義四大急重症表單 FHIR 標準化（OHCA、Trauma、CVA、ACS）、(3)
              生理量測資料交換定義救護車上儀器的生理量測資料，依據情境詳細資訊說明如下:
            </p>
            <br />

            <h3>情境1：核心資料交換(Core Resource)</h3>
            <ul class="part in-view" data-startline="1112" data-endline="1113" data-position="54758" data-size="0">
              <li class="" data-startline="1112" data-endline="1113" data-position="54760" data-size="0">
                <span data-position="54760" data-size="64">
                  本情境參照內政部消防機關救護紀錄表欄位進行定義，可與情境2、情境3等應用情境進行連結，並保留對 TW Core
                  IG 的相容性。
                </span>
              </li>
              <center>
                <img src={track7_1} Width="70%" />
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

            <h3>情境2：重大傷病資料交換</h3>
            <p>
              以 OHCA 及 Trauma 資料交換為主，參考衛福部公告的重大創傷病摘與到院前心跳停止病摘欄位定義聯測項目。其餘 ACS
              與 CVA/Stroke 兩項待標準公告後納入聯測項目。病摘定義的是到院後針對四大急重症的資料交換，並保留對 TW Core
              IG 的相容性。參測單位須在 SC1
              建立救護紀錄表後，方可在本情境單獨進行生理量測資料交換。若參測單位單獨參加本項情境者，也可以使用大會事先建立的範例救護紀錄表進行聯結。
            </p>
            <br />
            <ul class="part in-view" data-startline="1146" data-endline="1155" data-position="55958" data-size="0">
              <li class="" data-startline="1146" data-endline="1148" data-position="55960" data-size="0">
                <span data-position="55960" data-size="15">
                  調閱救護紀錄表，並顯示於畫面上
                </span>
                <ul data-position="55979" data-size="0">
                  <li class="" data-startline="1147" data-endline="1147" data-position="55981" data-size="0">
                    <span data-position="55981" data-size="34">
                      有參測 SC1 的單位，須先在 SC1 新增救護紀錄表後調閱該筆資料
                    </span>
                  </li>
                  <li class="" data-startline="1148" data-endline="1148" data-position="56020" data-size="0">
                    <span data-position="56020" data-size="32">
                      沒有參測 SC1 的單位，須調閱大會事先建立的範例救護紀錄表資料
                    </span>
                  </li>
                </ul>
              </li>
              <li class="" data-startline="1149" data-endline="1151" data-position="56055" data-size="0">
                <span data-position="56055" data-size="85">
                  新增重大傷病資料病摘（Composition），其中各 Resource 必須分別上傳至 FHIR Server 後以 Reference
                  進行聯結，下列至少須完成一項：
                </span>
                <ul data-position="56143" data-size="0">
                  <li class="" data-startline="1150" data-endline="1150" data-position="56145" data-size="0">
                    <span data-position="56145" data-size="15">
                      到院前心跳停止病摘（OHCA）
                    </span>
                  </li>
                  <li class="" data-startline="1151" data-endline="1151" data-position="56165" data-size="0">
                    <span data-position="56165" data-size="14">
                      重大創傷病摘（Trauma）
                    </span>
                  </li>
                </ul>
              </li>
              <li class="" data-startline="1152" data-endline="1155" data-position="56182" data-size="0">
                <span data-position="56182" data-size="18">
                  調閱重大傷病資料表單，並顯示於畫面上
                </span>
                <ul data-position="56203" data-size="0">
                  <li class="" data-startline="1153" data-endline="1153" data-position="56205" data-size="0">
                    <span data-position="56205" data-size="7">
                      以傷病患名稱（
                    </span>
                    <a href="http://Patient.name" target="_blank" rel="noopener">
                      <span data-position="56212" data-size="12">
                        Patient.name
                      </span>
                    </a>
                    <span data-position="56224" data-size="29">
                      ）或唯一識別碼（Patient.Identifier）調閱
                    </span>
                  </li>
                  <li class="" data-startline="1154" data-endline="1155" data-position="56258" data-size="0">
                    <span data-position="56258" data-size="9">
                      以表單 id 調閱
                    </span>
                  </li>
                </ul>
              </li>
            </ul>

            <h3>情境3：生理量測資料交換</h3>
            <p>
              本情境適用於儀器／設備廠商，主要針對救護車上的生理量測數據定義聯測項目。儀器經完成量測後直接上傳至 FHIR
              Server 並與派遣案件（救護紀錄表）聯結，後續可應用於與 EEC 進行資料交換的情境。參測單位須在 SC1
              建立救護紀錄表後，方可在本情境單獨進行生理量測資料交換。若參測單位單獨參加本項情境者，也可以使用主辦單位事先建立的範例救護紀錄表進行聯結。
            </p>
            <br />
            <ul class="part in-view" data-startline="1158" data-endline="1172" data-position="56467" data-size="0">
              <li class="" data-startline="1158" data-endline="1172" data-position="56469" data-size="0">
                <span data-position="56469" data-size="15">
                  調閱救護紀錄表，並顯示於畫面上
                </span>
                <ul data-position="56487" data-size="0">
                  <li class="" data-startline="1159" data-endline="1159" data-position="56489" data-size="0">
                    <span data-position="56489" data-size="33">
                      有參測情境1的單位，須先在情境1 - 新增救護紀錄表後調閱該筆資料
                    </span>
                  </li>
                  <li class="" data-startline="1160" data-endline="1160" data-position="56527" data-size="0">
                    <span data-position="56527" data-size="31">
                      沒有參測情境1 的單位，須調閱大會事先建立的範例救護紀錄表資料
                    </span>
                  </li>
                  <li class="" data-startline="1161" data-endline="1169" data-position="56563" data-size="0">
                    <span data-position="56563" data-size="36">
                      新增生理量測資料（Observation），並至少須要完成以下其中一項：
                    </span>
                    <ul data-position="56604" data-size="0">
                      <li class="" data-startline="1162" data-endline="1162" data-position="56606" data-size="0">
                        <span data-position="56606" data-size="12">
                          12 Leads ECG
                        </span>
                      </li>
                      <li class="" data-startline="1163" data-endline="1163" data-position="56625" data-size="0">
                        <span data-position="56625" data-size="16">
                          Body Temperature
                        </span>
                      </li>
                      <li class="" data-startline="1164" data-endline="1164" data-position="56648" data-size="0">
                        <span data-position="56648" data-size="16">
                          Respiratory Rate
                        </span>
                      </li>
                      <li class="" data-startline="1165" data-endline="1165" data-position="56671" data-size="0">
                        <span data-position="56671" data-size="53">
                          Oxygen saturation in Arterial blood by Pulse oximetry
                        </span>
                      </li>
                      <li class="" data-startline="1166" data-endline="1166" data-position="56731" data-size="0">
                        <span data-position="56731" data-size="34">
                          Capillary refill[Time] of Nail bed
                        </span>
                      </li>
                      <li class="" data-startline="1167" data-endline="1167" data-position="56772" data-size="0">
                        <span data-position="56772" data-size="30">
                          Glucose [Mass/volume] in Blood
                        </span>
                      </li>
                      <li class="" data-startline="1168" data-endline="1168" data-position="56809" data-size="0">
                        <span data-position="56809" data-size="28">
                          Heart rate by Pulse oximetry
                        </span>
                      </li>
                      <li class="" data-startline="1169" data-endline="1169" data-position="56844" data-size="0">
                        <span data-position="56844" data-size="20">
                          Blood Pressure Panel
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li class="" data-startline="1170" data-endline="1172" data-position="56869" data-size="0">
                    <span data-position="56869" data-size="29">
                      調閱傷病患在單一救護紀錄表上的所有量測資料，並顯示於畫面上
                    </span>
                    <ul data-position="56903" data-size="0">
                      <li class="" data-startline="1171" data-endline="1171" data-position="56905" data-size="0">
                        <span data-position="56905" data-size="7">
                          以傷病患名稱（
                        </span>
                        <a href="http://Patient.name" target="_blank" rel="noopener">
                          <span data-position="56912" data-size="12">
                            Patient.name
                          </span>
                        </a>
                        <span data-position="56924" data-size="29">
                          ）或唯一識別碼（Patient.Identifier）調閱
                        </span>
                      </li>
                      <li class="" data-startline="1172" data-endline="1172" data-position="56960" data-size="0">
                        <span data-position="56960" data-size="9">
                          以表單 id 調閱
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

            <h3>賽道通過基準</h3>
            <ul class="part in-view" data-startline="1174" data-endline="1182" data-position="56981" data-size="0">
              <li class="" data-startline="1174" data-endline="1174" data-position="56983" data-size="0">
                <span data-position="56983" data-size="49">
                  本賽道各情境的通過基準為獨立判斷，參測單位完成所有標記為 R（必須）的聯測步驟時，才算完成該情境。
                </span>
              </li>
              <li class="" data-startline="1175" data-endline="1175" data-position="57035" data-size="0">
                <span data-position="57035" data-size="30">
                  參測單位通過一情境時，將會於核發的通過證明上註記通過的情境。
                </span>
              </li>
              <li class="" data-startline="1176" data-endline="1182" data-position="57068" data-size="0">
                <span data-position="57068" data-size="57">
                  僅完成部分項目者，核發的通過證明將註記「部分通過」與其通過項目，並於官網聯測松結果（Matrix）公告通過的項目。
                </span>
                <ul data-position="57128" data-size="0">
                  <li class="" data-startline="1177" data-endline="1182" data-position="57130" data-size="0">
                    <span data-position="57130" data-size="57">
                      例如 A 廠商通過 SC1（所有交換項目）、SC3（僅有 12 Leads ECG），核發的通過證明將會如下註記：
                    </span>
                    <ul data-position="57192" data-size="0">
                      <li class="" data-startline="1178" data-endline="1178" data-position="57194" data-size="0">
                        <span data-position="57194" data-size="10">
                          參測單位： A 廠商
                        </span>
                      </li>
                      <li class="" data-startline="1179" data-endline="1179" data-position="57211" data-size="0">
                        <span data-position="57211" data-size="25">
                          參測賽道： Track #7 緊急醫療救護情境賽道
                        </span>
                      </li>
                      <li class="" data-startline="1180" data-endline="1182" data-position="57243" data-size="0">
                        <span data-position="57243" data-size="5">
                          通過項目：
                        </span>
                        <ul data-position="57255" data-size="0">
                          <li class="" data-startline="1181" data-endline="1181" data-position="57257" data-size="0">
                            <span data-position="57257" data-size="34">
                              Scenario 1（完全通過）：通過所有流程，及所有資料交換項目。
                            </span>
                          </li>
                          <li class="" data-startline="1182" data-endline="1182" data-position="57300" data-size="0">
                            <span data-position="57300" data-size="46">
                              Scenario 3（部分通過）：通過所有流程，及以下資料交換項目：12 Leads ECG
                            </span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </>
        ),
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: <></>,
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: (
          <>
            <h3>角色(Actors)</h3>
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
              <tbody>
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

            <h3>交易(Transactions)</h3>
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
              <tbody>
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

            <h3>角色與交易關係圖</h3>
            <p>1. 緊急醫療救護(EMS)之角色與交易關係圖</p>
            <center>
              <img src={track7_2} Width="70%" />
            </center>
          </>
        ),
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: (
          <>
            <ol class="part in-view" data-startline="1207" data-endline="1212" data-position="58026" data-size="0">
              <li class="" data-startline="1207" data-endline="1207" data-position="58029" data-size="0">
                <a
                  href="https://www.nfa.gov.tw/pro/index.php?code=list&amp;flag=detail&amp;ids=115&amp;article_id=6639"
                  target="_blank"
                  rel="noopener"
                >
                  <span data-position="58030" data-size="16">
                    內政部消防署－消防機關救護紀錄表
                  </span>
                </a>
              </li>
              <li class="" data-startline="1208" data-endline="1208" data-position="58135" data-size="0">
                <a
                  href="https://emr.mohw.gov.tw/emr/doc/110/%E5%88%B0%E9%99%A2%E5%89%8D%E5%BF%83%E8%B7%B3%E5%81%9C%E6%AD%A2(OHCA)%E7%97%85%E6%91%98%E4%BA%A4%E6%8F%9B%E6%AC%84%E4%BD%8D%E8%88%87%E6%A0%BC%E5%BC%8F%E4%B9%8B%E6%A8%99%E6%BA%96%E8%A6%8F%E7%AF%84_1101213.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span data-position="58136" data-size="25">
                    EEC 到院前心跳停止病摘交換欄位與格式之標準規範
                  </span>
                </a>
              </li>
              <li class="" data-startline="1209" data-endline="1209" data-position="58411" data-size="0">
                <a
                  href="https://emr.mohw.gov.tw/emr/doc/110/%E9%87%8D%E5%A4%A7%E5%89%B5%E5%82%B7(TRAUMA)%E7%97%85%E6%91%98%E4%BA%A4%E6%8F%9B%E6%AC%84%E4%BD%8D%E8%88%87%E6%A0%BC%E5%BC%8F%E4%B9%8B%E6%A8%99%E6%BA%96%E8%A6%8F%E7%AF%84_1101213.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span data-position="58412" data-size="22">
                    EEC 重大創傷病摘交換欄位與格式之標準規範
                  </span>
                </a>
              </li>
              <li class="" data-startline="1210" data-endline="1210" data-position="58659" data-size="0">
                <a
                  href="https://emr.mohw.gov.tw/emr/doc/110/%E6%80%A5%E8%A8%BA%E7%97%85%E6%91%98%E4%BA%A4%E6%8F%9B%E6%AC%84%E4%BD%8D%E8%88%87%E6%A0%BC%E5%BC%8F%E4%B9%8B%E6%A8%99%E6%BA%96%E8%A6%8F%E7%AF%84_1101116.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span data-position="58660" data-size="20">
                    EEC 急診病摘交換欄位與格式之標準規範
                  </span>
                </a>
              </li>
              <li class="" data-startline="1211" data-endline="1211" data-position="58879" data-size="0">
                <a href="https://fhir.ch/ig/ch-ems/index.html" target="_blank" rel="noopener">
                  <span data-position="58880" data-size="20">
                    瑞士緊急醫療實作指引 CH.EMS.IG
                  </span>
                </a>
              </li>
              <li class="" data-startline="1212" data-endline="1212" data-position="58943" data-size="0">
                <a href="https://build.fhir.org/ig/HL7/fhir-ips/" target="_blank" rel="noopener">
                  <span data-position="58944" data-size="13">
                    FHIR IPS 實作指引
                  </span>
                </a>
              </li>
            </ol>
          </>
        ),
      },
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: (
          <>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>角色</th>
                  <th>姓名</th>
                  <th>所屬單位</th>
                  <th>貢獻</th>
                  <th>聯絡方式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>作者</td>
                  <td>楊宇凡</td>
                  <td>社團法人台灣醫療影像資訊標準協會 副秘書長</td>
                  <td>Profiling, 聯測測試情境</td>
                  <td>ceo@sita.tech</td>
                </tr>
                <tr>
                  <td>作者</td>
                  <td>李修安</td>
                  <td>國家衛生研究院 - 癌症研究所 博士後研究員</td>
                  <td>Profiling, 聯測測試情境</td>
                  <td>billy72325@gmail.com</td>
                </tr>
                <tr>
                  <td>貢獻者</td>
                  <td>黃睿駿</td>
                  <td>國立臺北護理健康大學 - 資訊管理系</td>
                  <td>聯測測試情境</td>
                  <td>a27114171@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
    ],
  },
  {
    Id: '8',
    TabTitle: '08',
    ContentTitle: '醫療保險理賠',
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1hKaNzFpLGFickoMrXprAbhf3TttIUq74/preview',
        content: (
          <>
            <p>
              為了同解決病患(保戶)、醫院、保險公司三方的關於保險給付的問題，本工作小組提出一個適用於台灣保險理賠情境的技術規格，讓保戶在申請保險理賠時能以電子化方式申請。本賽道將以HL7
              FHIR為核心架構設計不同的Profile，並以FHIR
              IG方式呈現，建構醫療收據與診斷證明書的資料格式，因應資料互通性的需求。
            </p>
            <br />
            <h3>目的</h3>
            <p>
              透過醫院與保險公司合作，在病患同意的情況下，透過將醫院開立的收據以及診斷證明書數位化後，根據本計畫設計的FHIR實作指引產生國際標準FHIR格式文件後，以FHIR
              RESTful
              API方式傳輸至保險公司的交換中心進行保險審核。完成核保後再由保險公司逕付保險費用給醫院，並且讓病人不需要代墊保險理賠金額，省去大量的時間成本。醫院也會節省核發紙本診斷證明書以及收據，保險公司也會節省人力成本，民眾也不需要先行墊付費用，已達到病患、醫院以及保險公司三贏的局面。期望能善患者的照護，提高醫療保健服務的效率，並降低醫療保健的成本。
            </p>
            <center>
              <img src={track8_1} Width="70%" />
            </center>

            <div width="100%">
              <p style={{ fontWeight: 'bold' }}>賽道介紹</p>
              <ReactPlayer url="https://youtu.be/HeQocyAPPLY" width="100%" />
            </div>
            <div width="100%" style={{ marginTop: '1rem' }}>
              <p style={{ fontWeight: 'bold' }}>賽道簡報</p>
            </div>
          </>
        ),
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: (
          <>
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
          </>
        ),
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: (
          <>
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
          </>
        ),
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: (
          <>
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
            <h3>情境1:理賠申請文件打包上傳</h3>
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
                        <img src={track8_2} Width="70%" />
                      </center>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

            <h3>情境2:理賠申請補件打包上傳</h3>
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
                    <img src={track8_3} Width="70%" />
                  </center>
                </p>
              </li>
            </ul>

            <h3>情境3: 理賠申請調閱</h3>
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
                  <img src={track8_4} Width="70%" />
                </center>
              </li>
            </ul>
          </>
        ),
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: (
          <>
            <h3>規格</h3>
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
            <h3>角色(Actors)</h3>
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
                <tbody>
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
            <h3>交易(Transactions)</h3>
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
                <tbody>
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
            <h3>角色與交易關係圖</h3>
            <center>
              <img src={track8_5} Width="70%" />
            </center>
          </>
        ),
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: <></>,
      },
      ,
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: (
          <>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>角色</th>
                  <th>姓名</th>
                  <th>所屬單位</th>
                  <th>貢獻</th>
                  <th>聯絡方式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>作者</td>
                  <td>李麗惠</td>
                  <td>國立臺北護理健康大學 - 健康事業管理系</td>
                  <td>Profiling, 製作FHIR IG</td>
                  <td></td>
                </tr>
                <tr>
                  <td>作者</td>
                  <td>林伃瑤</td>
                  <td>國立臺北護理健康大學－健康事業管理系</td>
                  <td>製作FHIR IG</td>
                  <td></td>
                </tr>
                <tr>
                  <td>作者</td>
                  <td>曾鈺珈</td>
                  <td>國立臺北護理健康大學－健康事業管理系</td>
                  <td>製作FHIR IG</td>
                  <td></td>
                </tr>
                <tr>
                  <td>貢獻者</td>
                  <td>連中岳</td>
                  <td>國立臺北護理健康大學－資訊管理系</td>
                  <td>系統分析, 聯測情境設計</td>
                  <td>chungyueh@ntunhs.edu.tw</td>
                </tr>
                <tr>
                  <td>貢獻者</td>
                  <td>龔筠庭</td>
                  <td>國泰金控數位數據暨科技發展中心</td>
                  <td>系統分析</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
    ],
  },
  {
    Id: '9',
    TabTitle: '09',
    ContentTitle: '遠距醫療',
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1i7S_51kmXbWLE8ZGRL6fDVJBnnRM0tEk/preview',
        content: (
          <>
            <p>
              遠距醫療照護的需求隨著COVID-19疫情與產業發展快速演進，衛生福利部也研議逐步放寬【通訊診察治療辦法】的適用範圍，但截至目前遠距醫療照護資料流程與標準尚未有一致性的規範，各級政府、醫療體系、醫療照護院所之間對於遠距醫療照護涉及的資料範圍、欄位等均無統一的標準支持。故本工作小組在今年2023聯測預計新增遠距醫療相關的情境主題，預計先以衛福部的遠距醫療相關計畫為基礎，發展遠距醫療常用情境的FHIR互通標準。預計相關應用情境包括:
            </p>
            <p>Scenario 0: OAuth2 Access Token 存取認證 (與大會OAuth動態Token驗證整合)</p>
            <p>Scenario 1: 遠距醫療病患基本資料維護</p>
            <p>Scenario 2: 遠距端掛號作業</p>
            <p>Scenario 3: 在地端檢驗檢查上傳與遠距端診斷結果回傳</p>
            <p>Scenario 4: 在地端診療診斷結果上傳</p>{' '}
            <div width="100%">
              <p style={{ fontWeight: 'bold' }}>賽道介紹</p>
              <ReactPlayer url="https://youtu.be/HzZla7PIvjA" width="100%" />
            </div>
          </>
        ),
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: (
          <>
            <p>
              以衛福部建置之偏鄉離島遠距醫療服務及全民健康保險遠距醫療給付計畫為基礎，將遠距醫療門診服務的資訊處理流程初步規劃設計，以FHIR標準呈現遠距醫療門診作業流程中的資訊欄位、資訊交易，提供台灣產業在發展遠距醫療服務時的標準化參考依據。FHIR標準化的情境流程可供醫院相關資訊系統、廠商相關遠距醫療服務系統及政府單位遠距醫療相關平台，在開發或規劃階段可依據標準進行廠商中立的資訊流程設計與實做，促進遠距醫療跨單位系統互通性整合。
            </p>
          </>
        ),
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: <></>,
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: (
          <>
            <p>本規範涉及涉及的系统有：</p>
            <ul class="part in-view" data-startline="1351" data-endline="1354" data-position="64265" data-size="0">
              <li class="" data-startline="1351" data-endline="1351" data-position="64267" data-size="0">
                <strong data-position="64267" data-size="0">
                  <span data-position="64269" data-size="7">
                    遠距醫療系統:
                  </span>
                </strong>
              </li>
              <li class="" data-startline="1352" data-endline="1352" data-position="64282" data-size="0">
                <strong data-position="64282" data-size="0">
                  <span data-position="64284" data-size="7">
                    電子病歷系統:
                  </span>
                </strong>
              </li>
              <li class="" data-startline="1353" data-endline="1354" data-position="64297" data-size="0">
                <strong data-position="64297" data-size="0">
                  <span data-position="64299" data-size="9">
                    遠距醫療交換中心:
                  </span>
                </strong>
              </li>
            </ul>
            <p>
              <strong>本工作小組制定的使用情境依序說明如下:</strong>
            </p>
            <h3>情境1:遠距醫療病患基本資料維護</h3>
            <center>
              <img src={track9_1} Width="70%" />
            </center>
            <h3>情境2:遠距端掛號作業</h3>
            <center>
              <img src={track9_1} Width="70%" />
            </center>
            <h3>情境3:在地端檢驗檢查上傳與遠距端診斷結果回傳</h3>
            <center>
              <img src={track9_1} Width="70%" />
            </center>
            <h3>情境4:在地端診療診斷結果上傳</h3>
            <center>
              <img src={track9_1} Width="70%" />
            </center>
          </>
        ),
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: (
          <>
            <h3>角色(Actors)</h3>
            <p>1.遠距醫療(TELMED)角色整理</p>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
                    <strong data-position="64735" data-size="0">
                      <span data-position="64737" data-size="7">
                        Keyword
                      </span>
                    </strong>
                  </th>
                  <th>
                    <strong data-position="64755" data-size="0">
                      <span data-position="64757" data-size="2">
                        名稱
                      </span>
                    </strong>
                  </th>
                  <th>
                    <strong data-position="64783" data-size="0">
                      <span data-position="64785" data-size="2">
                        描述
                      </span>
                    </strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span data-position="64863" data-size="11">
                      TELMED_LOCAL
                    </span>
                  </td>
                  <td>
                    <span data-position="64884" data-size="25">
                      Telemedicine local Client
                    </span>
                  </td>
                  <td>
                    <span data-position="64913" data-size="7">
                      遠距診療在地端
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="64921" data-size="12">
                      TELMED_REMOTE
                    </span>
                  </td>
                  <td>
                    <span data-position="64942" data-size="26">
                      Telemedicine remote client
                    </span>
                  </td>
                  <td>
                    <span data-position="64971" data-size="7">
                      遠距診療遠距端
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="64980" data-size="16">
                      TELMED_REPOSITORY
                    </span>
                  </td>
                  <td>
                    <span data-position="65001" data-size="22">
                      Telmedicine repository
                    </span>
                  </td>
                  <td>
                    <span data-position="65030" data-size="7">
                      遠距診療儲存庫
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>交易(Transactions)</h3>
            <p>1.台遠距醫療(TELMED)交易整理</p>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
                    <span data-position="65086" data-size="7">
                      Keyword
                    </span>
                  </th>
                  <th>
                    <span data-position="65096" data-size="4">
                      Name
                    </span>
                  </th>
                  <th>
                    <span data-position="65152" data-size="11">
                      Description
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span data-position="65260" data-size="7">
                      MITW-47
                    </span>
                  </td>
                  <td>
                    <span data-position="65270" data-size="35">
                      Patient the Manage for Telemedicine
                    </span>
                  </td>
                  <td>
                    <span data-position="65326" data-size="12">
                      遠距醫療個案基本資料維護
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="65347" data-size="7">
                      MITW-48
                    </span>
                  </td>
                  <td>
                    <span data-position="65357" data-size="43">
                      Query/Retrieve the Patient for Telemedicine
                    </span>
                  </td>
                  <td>
                    <span data-position="65413" data-size="12">
                      遠距醫療個案基本資料查詢
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="65434" data-size="7">
                      MITW-49
                    </span>
                  </td>
                  <td>
                    <span data-position="65444" data-size="37">
                      Manage the Encounter for Telemedicine
                    </span>
                  </td>
                  <td>
                    <span data-position="65500" data-size="8">
                      遠距診療掛號作業
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="65521" data-size="7">
                      MITW-50
                    </span>
                  </td>
                  <td>
                    <span data-position="65531" data-size="45">
                      Query/Retrieve the Encounter for Telemedicine
                    </span>
                  </td>
                  <td>
                    <span data-position="65587" data-size="9">
                      遠距診療掛號查詢˙
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="65608" data-size="7">
                      MITW-51
                    </span>
                  </td>
                  <td>
                    <span data-position="65618" data-size="52">
                      Create the Laboratory Result bundle for Telemedicine
                    </span>
                  </td>
                  <td>
                    <span data-position="65674" data-size="16">
                      檢驗檢查文件打包上傳用於遠距醫療
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="65695" data-size="7">
                      MITW-52
                    </span>
                  </td>
                  <td>
                    <span data-position="65705" data-size="53">
                      Query/Retrieve the Laboratory Result for Telemedicine
                    </span>
                  </td>
                  <td>
                    <span data-position="65761" data-size="12">
                      檢驗檢查查詢用於遠距醫療
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="65782" data-size="7">
                      MITW-53
                    </span>
                  </td>
                  <td>
                    <span data-position="65792" data-size="51">
                      Create the Diagnosis Result Bundle for Telemedicine
                    </span>
                  </td>
                  <td>
                    <span data-position="65848" data-size="10">
                      診斷結果文件打包上傳
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="65869" data-size="7">
                      MITW-54
                    </span>
                  </td>
                  <td>
                    <span data-position="65879" data-size="52">
                      Query/Retrieve the Diagnosis Result for Telemedicine
                    </span>
                  </td>
                  <td>
                    <span data-position="65935" data-size="6">
                      診斷結果查詢
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <h3>角色與交易關係圖</h3>
            <center>
              <img src={track9_2} Width="70%" />
            </center>
          </>
        ),
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: <></>,
      },
      ,
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: <></>,
      },
    ],
  },
  {
    Id: '10',
    TabTitle: '10',
    ContentTitle: '癌症登記',
    Img: [{ img: logo }, { img: logo }, { img: logo }],
    List: [
      {
        id: '1',
        Sc: '簡介 (Summary)',
        profile: 'https://drive.google.com/file/d/1hLXvniYeCK1V8H2lQHwVQKtYh8hM_wnS/preview',
        content: (
          <>
            <ul class="part in-view" data-startline="1410" data-endline="1414" data-position="66206" data-size="0">
              <li class="" data-startline="1410" data-endline="1410" data-position="66208" data-size="0">
                <span data-position="66208" data-size="155">
                  癌症登記做為管理、儲存、分析癌症患者相關數據的基礎，記錄了病患的就醫資訊，綜上所述，早期診斷及正確的治療方案對癌症的影響甚大，透過癌症登記資料可以得到良好的改善，各個國家的相關法規也開始要求收集病患的癌症資料，並依據各自的文化及需求規範，訂定相應的措施及標準，以盡可能收集完整的癌症病歷、診斷及治療的臨床資訊。
                </span>
              </li>
              <li class="" data-startline="1411" data-endline="1411" data-position="66366" data-size="0">
                <span data-position="66366" data-size="158">
                  為了掌握癌症患者的狀況及診療情形，臺灣衛生福利部國民健康署癌症登記中心建立臺灣癌症資料庫（Taiwan
                  Cancer Database,
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
          </>
        ),
      },
      {
        id: '2',
        Sc: '效益 (Benefits) ',
        content: (
          <>
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
          </>
        ),
      },
      {
        id: '3',
        Sc: '詳細資訊(Details)',
        content: (
          <>
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
          </>
        ),
      },
      {
        id: '4',
        Sc: '涉及系統(Systems Affected)',
        content: (
          <>
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
            <h3>情境1:癌登短表交換</h3>
            <li>
              癌症登記短表上傳系統(Creator)，依照臺灣癌症登記短表 FHIR IG規格將資料轉換為 FHIR
              格式，並以Bundle格式上傳TCR FHIR儲存庫
            </li>
            <h3>情境2:癌登短表交換</h3>
            <li>
              癌症登記長表上傳系統(Creator)，依照臺灣癌症登記短表 FHIR IG規格將資料轉換為 FHIR
              格式，並以Bundle格式上傳TCR FHIR儲存庫
            </li>
            <center>
              <img src={track10_1} Width="70%" />
            </center>
            <p>
              表10-1以及表10-2為台灣癌症登記癌登的Profile設計對照台灣癌症登記格式對照表。Profile主要設計概念包含: (1)
              病患基本資料(Patient)、(2)醫事機構資訊(Organization)、(3)醫事人員資訊(Practitioner)、(4)病患就診資訊(首次就診日期)(Encounter)、(5)癌症診斷資訊(Condition)、(6)癌症登錄相關資訊(Observation)、(7)癌症治療相關(Procedure)。
            </p>
            <h3>臺灣癌症登記短表格式轉換FHIR Profile對照</h3>
            <p>
              <center>表10-1、臺灣癌症登記短表格式轉換FHIR Profile對照表</center>
            </p>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th></th>
                  <th>
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
              <tbody>
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
                    <a href="http://Patient.name" target="_blank" rel="noopener">
                      <span data-position="68278" data-size="12">
                        Patient.name
                      </span>
                    </a>
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
            <h3>臺灣癌症登記長表格式轉換FHIR Profile對照</h3>
            <p>
              <center>表10-1、臺灣癌症登記長表格式轉換FHIR Profile對照表</center>
            </p>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th></th>
                  <th>
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
              <tbody>
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
                    <a href="http://Patient.name" target="_blank" rel="noopener">
                      <span data-position="73004" data-size="12">
                        Patient.name
                      </span>
                    </a>
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
          </>
        ),
      },
      {
        id: '5',
        Sc: '規格(Specification)',
        content: (
          <>
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
            <h3>角色(Actors)</h3>
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
              <tbody>
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
            <h3>交易(Transactions)</h3>
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
              <tbody>
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
            <h3>角色與交易關係圖</h3>
            <center>
              <img src={track10_2} Width="70%" />
            </center>
          </>
        ),
      },
      {
        id: '6',
        Sc: '其他(See Also)',
        content: <></>,
      },
      ,
      {
        id: '7',
        Sc: '作者與貢獻者',
        content: (
          <>
            <table class="table table-striped table-bordered" border="1">
              <thead>
                <tr>
                  <th>
                    <span data-position="85080" data-size="2">
                      角色
                    </span>
                  </th>
                  <th>
                    <span data-position="85085" data-size="2">
                      姓名
                    </span>
                  </th>
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
                  <th>
                    <span data-position="85104" data-size="4">
                      聯絡方式
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span data-position="85153" data-size="2">
                      作者
                    </span>
                  </td>
                  <td>
                    <span data-position="85158" data-size="3">
                      郭俐君
                    </span>
                  </td>
                  <td>
                    <span data-position="85166" data-size="16">
                      國立臺北護理健康大學－資訊管理系
                    </span>
                  </td>
                  <td>
                    <span data-position="85185" data-size="20">
                      Profiling, 製作FHIR IG
                    </span>
                  </td>
                  <td>
                    <a href="mailto:lily220487@gmail.com" target="_blank" rel="noopener">
                      <span data-position="85207" data-size="20">
                        lily220487@gmail.com
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="85235" data-size="2">
                      作者
                    </span>
                  </td>
                  <td>
                    <span data-position="85240" data-size="3">
                      丁子芸
                    </span>
                  </td>
                  <td>
                    <span data-position="85248" data-size="16">
                      國立臺北護理健康大學－資訊管理系
                    </span>
                  </td>
                  <td>
                    <span data-position="85267" data-size="9">
                      Profiling
                    </span>
                  </td>
                  <td>
                    <a href="mailto:aewqoo832456@gmail.com" target="_blank" rel="noopener">
                      <span data-position="85279" data-size="22">
                        aewqoo832456@gmail.com
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="85307" data-size="2">
                      作者
                    </span>
                  </td>
                  <td>
                    <span data-position="85312" data-size="3">
                      連中岳
                    </span>
                  </td>
                  <td>
                    <span data-position="85320" data-size="16">
                      國立臺北護理健康大學－資訊管理系
                    </span>
                  </td>
                  <td>
                    <span data-position="85339" data-size="19">
                      Profiling, 聯測測試情境設計
                    </span>
                  </td>
                  <td>
                    <a href="mailto:chungyueh@ntunhs.edu.tw" target="_blank" rel="noopener">
                      <span data-position="85360" data-size="23">
                        chungyueh@ntunhs.edu.tw
                      </span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span data-position="85388" data-size="3">
                      貢獻者
                    </span>
                  </td>
                  <td>
                    <span data-position="85394" data-size="3">
                      朱原嘉
                    </span>
                  </td>
                  <td>
                    <span data-position="85400" data-size="11">
                      臺北榮民總醫院-資訊室
                    </span>
                  </td>
                  <td>
                    <span data-position="85414" data-size="4">
                      測試支援
                    </span>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </>
        ),
      },
    ],
  },
]
