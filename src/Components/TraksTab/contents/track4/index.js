import ReactPlayer from 'react-player/youtube'
import track4_1 from '../../../../assets/track4_1.png'
import track4_2 from '../../../../assets/track4_2.png'
import track4_3 from '../../../../assets/track4_3.png'
import track4_4 from '../../../../assets/track4_4.png'
import track4_5 from '../../../../assets/WG4_5.png'
import track4_6 from '../../../../assets/track4_5.png'
import track4_7 from '../../../../assets/track4_6.png'
import track4_8 from '../../../../assets/track4_7.png'

import Lightbox from 'react-image-lightbox'
import { useState } from 'react'

const h3_style = {
  fontWeight: 'bold',
  fontSize: '1.5em',
}
const Track4_Summary_content = () => {
  return (
    <div>
      <p style={h3_style}>影像與標記互通 </p>
      <p>
        測試醫學影像以及數位病理影像儲存管理主機 (Source)以及顯示端
        (Consumer)能依照DICOM或DICOMweb標準查詢與調閱DICOM影像以及能正確顯示影像以及標記，已達到影像顯示一致性(Display
        Consistency)。影像包含: (1)一般醫學影像如:X光、磁振造影、電腦斷層、超音波等、以及(2)超大尺寸數位病理影像(Whole
        Slide
        Image)。在影像標記註解部分，透過影像與標記標準化，用來解決影像與標記異質性系統之互通性。標註格式可能是影像分割形式的點陣圖型、透過座標定義輪廓之向量圖型等，本賽道主要針對註解標示影像的關注區(regions
        of interest,
        ROIs)的標準化進行驗證。亦希望參加者能提供簡單的標記，作為標準化影像的示範案例，提供異質性系統互通，作為加速影像標準化。
      </p>
      <p style={h3_style}>影像報告與影像整合 </p>
      <p>
        本工作小組提出一個基礎文字(Basic Text)的影像報告格式，結合此報告有關的資訊，包含:
        病患、檢查資訊、影像連結等，以此來產生一個可交換的影像報告格式，作為電子病歷交換需求。本賽道將以HL7
        FHIR為核心架構設計不同的Profile，並以FHIR IG方式呈現。本賽以臺灣核心實作指引 (TW core IG)為基礎向上設計，透過HL7
        FHIR格式設計醫學影像(包含content: 放射影像以及數位病理影像)之影像索以及影像報告(包含:
        放射影像以及數位病理影像)並上傳至影像報告儲存中心 (Report
        Repository)，結合影像報告與DICOM影像之整合情境，建構電子病歷交換中心(EEC)之跨院調閱單張「醫療影像及報告」設計案例，作為FHIR以及DICOM整合的使用情境。
      </p>
      <p style={h3_style}>影像檢查流程 </p>
      <p>
        提供場域針對DICOM相關的醫療儀器與HIS、PACS互通之應用驗證。例如:
        國內廠商自行研發超音波儀器，但苦於現有PACS與HIS廠商進行驗證，每次需要都需要在個別的醫院進行介接測試，本情境提供一個良好的技術交流場域，讓國內外多家廠商聯合測試，已證明產品符合國際醫學資訊標準規範。聯測驗證標準比照國際IHE聯測規格，提供測試IHE
        SWF(Scheduled Worflow)規範，讓國內業者能依據IHE SWF實作產品作為開拓國際市場前的產品標準化驗證。
      </p>
      <div width="100%">
        <p style={{ fontWeight: 'bold' }}>賽道介紹</p>
        <ReactPlayer url="https://youtu.be/WAIDi2cHnKw" width="100%" />
      </div>
    </div>
  )
}

const Track4_Benefits_content = () => {
  return (
    <div>
      <p>
        隨著人工智慧與機器學習(AI/ML)的快速發展，需要加快標準化的醫學影像分析工作流程的軟體開發流程(SDLC)，以及採取更加敏捷的開發方法。參加單位可使用實際或是產品雛型參加此賽道，由於這需要大量的前期開發工作，因此參加者需要具備較高的技術門檻。這也鼓勵參加單位早期投資，希望此標準足夠成熟，進而早期布局，以證明投資的合理性。早日切入醫學影像市場。為了簡化標準化開發流程並鼓勵產業早期實施和測試。透過聯測提供實證場域，鼓勵醫學影像分析專家、軟體工程師、開源工作者參加，並投入開發開源試驗，建立提供醫學影像標準化系統的產品概念驗證(Proof
        of Concept)。 透過自動化排程檢查確保特定數據僅輸入一次來防止手動數據輸入錯誤，用來
        <span style={{ fontWeight: 'bold', margin: 0 }}>減少錯誤並增加醫護人員效率</span>
        ，且自動化排程可由統一的檢查單號(申請序號)，可作為檢查流程中的追蹤與識別目前檢查的狀態，減少操作人員在跨系統之間的溝通成本的時間，且能減少病人丟失、或是檢查漏失等情況發生，來
        <span style={{ fontWeight: 'bold' }}>提高檢查量。</span>
      </p>
      <p>
        透過導入標準作業流程以及病歷格式導入國際標準，避免業者與醫院資訊系統進行系統整合時，採用自訂的界接規格，減少自訂規格的時間與成本以及減少測試的時間以及因為跨系統之間的整合產生的費用，例如:維護費、界接費、系統修改等。透過此賽道的驗測，提供一個良好的實證場域，讓業者在產品與系統導入到醫院之前，能有效地域同業進行實際系統驗證，可大幅
        <span style={{ fontWeight: 'bold' }}>降低部屬的成本與時間。</span>
      </p>
    </div>
  )
}

const Track4_details_content = () => {
  return (
    <div>
      <ul style={{ listStyleType: 'decimal', margin: 0 }}>
        本賽道的情境描述如下:
        <li>
          <span style={{ fontWeight: 'bold' }}>影像與標記互通:</span>
          目的在於驗證DICOM格式之醫學影像以及數位病理影像以及人工智慧標記與註解之呈現，利用DICOM與FHIR的傳輸協定進行跨系統間的查詢與調閱，並能夠在不同的系統重呈現影像與標記註解顯示的一致性。影像的標記註解支援ICOM以及FHIR
          SVG格式，使用者可透過自選的格式來驗證影像與標記註解的互通性。
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>影像報告與影像整合:</span>
          提供一個影像與報告交換情境，從製作FHIR放射影像索引及放射報告並上傳至影像報告儲存中心 (Report Repository)
          結合影像報告與DICOM影像整合情境，以FHIR以及DICOMweb機制作為傳輸協定。採用以臺灣核心實作指引 (TW core
          IG)為基礎向上設計，設計成電子病歷交換中心(EEC)之跨院調閱單張 「醫療影像及報告」 設計案例。
        </li>
        <li>
          <span style={{ fontWeight: 'bold' }}>影像檢查流程:</span>
          影像檢查流程情境為提供場域針對DICOM相關的醫療儀器與HIS、PACS互通之應用驗證。 例:
          國內廠商自行研發超音波儀器，但苦於現有PACS與HIS廠商進行驗證，每次需要都需要在個別的醫院進行介接測試。此情境提供提供一個良好的實證場域，讓國內外多家廠商聯合測試，已證明產品符合國際醫學資訊標準規範。此項目將與影像與AI結果結合，提供HIS、儀器製造商以及PACS互通之應用驗證。
        </li>
      </ul>
    </div>
  )
}

const Track4_SystemsAffected_content = () => {
  return (
    <div>
      <p> 本規範涉及涉及的系统有：</p>
      <p style={h3_style}>醫院資訊系統(Hosptial Information System, HIS)</p>
      <ul>
        <li style={{ fontWeight: 'bold' }}>
          病患註冊系統 - ADT (Admission/Discharge/Transfer)
          <ul>
            <li>
              <strong>系統功能簡介: </strong>
              負責新增或修改病患基本資料以及就醫資訊。在聯測情境的定義為部門資訊系統用來註冊新病人。
            </li>
            <li>
              <strong>採用標準: </strong>HL7 V2.3, HL7 V 2.5
            </li>
          </ul>
        </li>
        <li style={{ fontWeight: 'bold' }}>
          部門排程與開單系統 - OF (Department System Scheduler/Order Filler)
          <ul>
            <li>
              <strong>系統功能簡介: </strong>
              部門資訊系統（例如，放射科或檢驗科），提供與從外部系統或通過部門系統的用戶界面接收的醫令管理相關功能。根據檢查流程作業，讓程序可用於批價。實際導致收費的動作/事件由參與者定義。
            </li>
            <li>
              <strong>採用標準: </strong>HL7 V2.3, HL7 V 2.5, DICOM Modality Worklist
            </li>
          </ul>
        </li>
        <li style={{ fontWeight: 'bold' }}>
          醫令系統 - OP (Order Placer)
          <ul>
            <li>
              <strong>系統功能簡介: </strong>
              提供醫院的各個部門產生檢查單並將這些檢查單分發給正確部門。例如: 開立影像檢查單，以HL7 v2訊息(HL7
              message)標準提供造影工作清單(Modality Worklist)上的造影檢查單之新增、刪除、修改等功能。
            </li>
            <li>
              <strong>採用標準: </strong>HL7 V2.3, HL7 V 2.5
            </li>
          </ul>
        </li>
      </ul>
      <p style={h3_style}>放射科資訊系統(Radiology Information Systm, RIS)</p>
      <ul>
        <li style={{ fontWeight: 'bold' }}>
          影像檢查程序管理系統 - PPSM (Performed Procedure Step Manager)
          <ul>
            <li>
              <strong>系統功能簡介: </strong>實作「DICOM Modality Performed Procedure
              Step」，管理從檢查儀器(Modality)或影像產生設備(Image Creator)傳送到發到OF以及IM。
            </li>
            <li>
              <strong>採用標準: </strong>DICOM MPPS
            </li>
          </ul>
        </li>
        <li style={{ fontWeight: 'bold' }}>
          影像管理與儲存系統 - IM (Image Manager/Image Archive)
          <ul>
            <li>
              <strong>系統功能簡介: </strong> 用於管理DICOM影像儲存與管理，此系統也稱為PACS
              Server，用於符合DICOM標準格式之影像、波型、結構化報告、標記註解等類型的儲存與管理，並支援標準化DICOM、DICOMweb查詢與調閱協定。DICOM協定常用支援為C-STORE,
              C-FIND, C-MOVE, C-GET等；DICOMweb支援QIDO-RS、WADO-RS/WAOD-URI、STOW-RS等。
            </li>
            <li>
              <strong>採用標準: </strong>DICOM, DICOMweb
            </li>
          </ul>
        </li>
        <li style={{ fontWeight: 'bold' }}>
          影像佐證建構系統 - EC (Evidence Creator)
          <ul>
            <li>
              <strong>系統功能簡介: </strong>
              <ul>
                <li>
                  在醫學資訊整合系統中，產生已完成檢查的相關影像、關鍵影像(key Image
                  Noate)、標記註解、結構化報告等，並可將結果傳送至影像儲存系統。此系統大多由輔助決策系統或是人工智慧模型產生標準化之DICOM
                  AI結果(AI Resutls)，例如: GSPS, RTSS, SEG等，上傳至影像儲存系統，並提供影像檢視器之顯示。其驗證包含:
                  格式驗證以及傳輸協定驗證(請參考 醫療儀器設備說明)
                </li>
                <li>
                  影像標記註解亦可支援FHIR格式儲存，可將結果以FHIR方式上傳報告儲存系統中。通過度取資料後經過處理所產生的影像佐證物件，例如:
                  影像或是量測資訊的系統。常見有電腦輔助診斷系統、影像標記系統等。
                </li>
              </ul>
            </li>
            <li>
              <strong>採用標準: </strong>DICOM, FHIR
            </li>
          </ul>
        </li>

        <li style={{ fontWeight: 'bold' }}>
          醫療儀器設備 -MOD (Modality)
          <ul>
            <li>
              <strong>系統功能簡介: </strong>
              擷取或產生醫學影像之儀器或系統。參加對象以國內外醫療儀器製造商在台灣銷售為主，包含:
              超音波、心電圖、X光機、內視鏡等。主要驗證儀器是否符合DICOM以下規格
              <ul>
                <li>
                  <strong>影像格式驗證: </strong> 針對儀器製造商提供之符合性宣稱(Conformance
                  Statement)，針對儀器端產生之DICOM物件進行格式驗證，以符合DICOM PS 3.3 SOP Class
                  UID定義的格式規範。例如:產生的超音波影像是否符合DICOM格式、具備必要欄位、儲存的數值符合欄位規範、OID與UID之正確性等。
                </li>
                <li>
                  <strong>傳輸協定驗證: </strong>
                  針對儀器製造商提供之符合性宣稱(Conformance Statement)，驗證傳輸功能是否符合DICOM規範，例如: C-STORE,
                  Storage Commitment, MPPS, C-FIND-MWL等功能。
                </li>
              </ul>
            </li>
            <li>
              <strong>採用標準: </strong>DICOM
            </li>
          </ul>
        </li>
      </ul>
      <p style={h3_style}>報告系統 (Report System)</p>
      <ul>
        <li style={{ fontWeight: 'bold' }}>
          放射影像報告儲存系統(Report Repository)
          <ul>
            <li>
              <strong>系統功能簡介: </strong>
              用於儲存與管理影像報告的資料庫，支援標準化FHIR
              DiagnosticReport以及ImagingStudy查詢與調閱。亦可支援FHIR格式之影像發現以及影像標記註。
            </li>
          </ul>
        </li>
        <li style={{ fontWeight: 'bold' }}>
          報告顯示/編輯系統(Reporting System)
          <ul>
            <li>
              <strong>系統功能簡介: </strong>
              <ul>
                <li>
                  用於顯示以及編影像報告，可支援標準化FHIR
                  診斷報告(DiagnosticReport)以及影像索引(ImagingStudy)的查詢與調閱以及上傳，影像整合報告部分，可透過影像索引(ImagingStudy)組合影像對應的WADO連結，並可向影像儲存系統以DICOM/DICOMweb的方式調閱影像以及影像的標記註解至影像顯示系統顯示。
                </li>
                <li>
                  影像發現以及影像標記註解亦可支援FHIR格式儲存，可從報告儲存系統中調閱影像發現以及影像標記並顯示在影像顯示系統中。
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p style={h3_style}>顯示系統</p>
      <ul>
        <li style={{ fontWeight: 'bold' }}>
          (數位病理)影像顯示系統 - ID(Image Display)
          <ul>
            <li>
              <strong>系統功能簡介: </strong>
              提供DICOM數位病理影像或一般醫學影像之顯示、影像處理，標記註解等功能，此系統通常結合影像報告系統，影像從影像儲存系統調閱後，用來提供病理科醫師或是臨床醫師查看影像以及對應報告。
            </li>
            <li>
              <strong>採用標準: </strong>DICOM
            </li>
          </ul>
        </li>
      </ul>
      <p style={h3_style}>影像檢查流程</p>
      <strong>本工作小組制定的使用情境依序說明如下:</strong>
      <p style={h3_style}>情境1:影像與標記互通</p>
      <ul>
        <li>
          測試一般影像以及病理影像儲存管理主機(Source)以及顯示端(Consumer)能依照DICOMweb標準查詢與調閱。能夠正確顯示影像以及標記註解，根據測試腳本完成基本功能的操作(移動到特定位置、縮放、切換不同Layer層等)，確保相同影像在不同系統中能呈顯一致(Dispaly
          Consistency)。
        </li>
        <li>
          使用DICOM/DICOMweb階層式查詢方式查詢影像儲存系統，依照DICOM階層式架構回傳結果。可選擇使用DICOM(C-STORE)或是使用WADO-URI或WADO-RS調閱影像，並顯示結果。
        </li>
        <li>
          影像標記與註解格式可能是影像分割形式的點陣圖型、透過座標定義輪廓之向量圖型等，本情境主要針對註解標示影像的關注區(regions
          of interest,
          ROIs)的標準化進行驗證。亦希望參加者能提供簡單的標記，作為標準化醫學影像以及病理影像的示範案例，提供異質性系統互通。
        </li>
        <li>影像標記註解部分，DICOM支援標記規格，例如: GSPS, RTSS, SEG等。FHIR標記註解部分支援SVG格式。</li>
        <li>
          病理影像部分能夠支援顯示DICOM Supplement 145定義的超大尺寸數位病理影像(Whole Slide Image, WSI)，並能正確顯示。
          <ul>
            <li>
              使用DICOMweb階層式查詢方式查詢DICOMweb主機，依照DICOM階層式架構回傳結果。使用WADO-URI或WADO-RS調閱影像。
            </li>
            <li>產生DICOM數位病理影像並透過DICOM標準協定上傳至PACS Servers</li>
            <li>
              產生TID 1500結構化報告或是DIOCM ANN (DICOM Supplement 222: Whole Slide Microscopy Bulk Annotations Storage
              SOP Class格式作為標記註解格式
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <strong>情境1-1: 醫學影像及DICOM標記呈現</strong>
          <p>
            使用DICOM/DICOMweb階層式查詢方式查詢影像儲存系統，並將回傳影像以及標記註解，且能正確顯示。根據測試腳本完成基本功能的操作(移動到特定位置、縮放、切換不同Layer層等)，確保相同影像在不同系統中能呈顯一致(Display
            Consistency)。
          </p>
          <ul>
            <li>
              <strong>使用資料:</strong>
              <ul>
                <li>醫學影像(DICOM)</li>
                <li>影像標記與註解(DICOM SR, GSPS, RTSS, SEG, etc)</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>情境1-2: 病理全切片及DICOM標記呈現</strong>
          <p>
            使用DICOM/DICOMweb階層式查詢方式查詢影像儲存系統，並將回傳數位全切片病理影像(Whole Slide Image,
            WSI)，且能正確顯示。根據測試腳本完成基本功能的操作(移動到特定位置、縮放、切換不同Layer層等)，確保相同影像在不同系統中能呈顯一致(Display
            Consistency)。
          </p>
          <ul>
            <li>
              <strong>使用資料:</strong>
              <ul>
                <li>醫學影像(DICOM)</li>
                <li>影像標記與註解(FHIR Observation)</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>情境1-3: 醫學影像及FHIR標記呈現</strong>
          <p>
            使用DICOM/DICOMweb階層式查詢方式查詢影像儲存系統，並將回傳影像，且能從FHIR影像報告儲存中心 (Report
            Repository)調閱FHIR標記且能正確顯示。根據測試腳本完成基本功能的操作(移動到特定位置、縮放、切換不同Layer層等)，確保相同影像在不同系統中能呈顯一致(Display
            Consistency)。
          </p>
          <ul>
            <li>
              <strong>使用資料:</strong>
              <ul>
                <li>醫學影像(DICOM)</li>
                <li>影像標記與註解(FHIR Observation)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>情境1-4: 醫學影像及DICOM標記呈現</strong>
          <p>
            使用DICOM/DICOMweb階層式查詢方式查詢影像儲存系統，並將回傳影像以及標記註解，且能正確顯示。根據測試腳本完成基本功能的操作(移動到特定位置、縮放、切換不同Layer層等)，確保相同影像在不同系統中能呈顯一致(Display
            Consistency)。
          </p>
        </li>
      </ul>
      <p style={h3_style}>情境2:報告及影像整合</p>
      <p>
        製作FHIR放射影像索引及放射報告並上傳至影像報告儲存中心 (Report Repository)
        結合影像報告與DICOM影像整合情境，以臺灣核心實作指引 (TW core
        IG)為基礎向上設計，成為電子病歷交換中心(EEC)之跨院調閱單張「醫療影像及報告」設計案例。
      </p>
      <ul>
        <li>針對影像報告以及對應的DICOM影像、DICOM標記註解解進行存取調閱、並能正確顯示。</li>
        <li>產生FHIR 診斷報告(DiagnosticReport)以及影像索引(ImagingStudy)並以FHIR方式上傳至報告儲存系統。</li>
        <li>
          使用FHIR方式用於查尋與調閱診斷報告(DiagnosticReport)以及影像索引(ImagingStudy)，並能整合報告對應的影像，且適當使用影像檢視器開啟影像與標記。
        </li>
        <li>
          <strong>情境2-1: 醫學影像報告及影像整合</strong>
          <p>
            製作FHIR放射影像索引及放射報告並上傳至影像報告儲存中心 (Report Repository) 結合影像報告與DICOM影像整合情境
          </p>
          <ul>
            <li>
              <strong>使用資料:</strong>
              <ul>
                <li>放射影像報告 (FHIR DiagnosticReport)</li>
                <li>影像索引(FHIR ImagingStudy)</li>
                <li>醫學影像(DICOM)</li>
                <li>影像標記與註解(DICOM SR, GSPS, RTSS, SEG, etc)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>情境2-2: 數位病理影像報告及影像整合</strong>
          <p>
            製作FHIR病理影像索引及病理報告並上傳至影像報告儲存中心 (Report Repository) 結合影像報告與DICOM
            WSI影像整合情境
          </p>
          <ul>
            <li>
              <strong>使用資料:</strong>
              <ul>
                <li>病理影像報告 (FHIR DiagnosticReport)</li>
                <li>影像索引(FHIR ImagingStudy)</li>
                <li>WSI影像(DICOM)</li>
                <li>WSI影像標記與註解(DICOM ANN, DICOM SR)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>情境2-3: 影像、標記與影像發現整合</strong>
          <p>
            製作FHIR影像索引及影像報告並上傳至影像報告儲存中心 (Report Repository)
            結合影像報告與影像發現與標記註解整合情境
          </p>
          <ul>
            <li>
              <strong>使用資料:</strong>
              <ul>
                <li>病理影像報告 (FHIR DiagnosticReport)</li>
                <li>影像索引(FHIR ImagingStudy)</li>
                <li>醫學影像(DICOM)</li>
                <li>影像發現與標記(FHIR Observation)</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        下圖為影像報告的Profile設計結構，包含: (1) 放射影像報告/病理影像報告 (FHIR DiagnosticReport)、(2)影像索引(FHIR
        ImagingStudy)。
      </p>
      <p style={{ fontWeight: 'bold' }}>放射影像報告/病理影像報告 (FHIR DiagnosticReport)設計結構示意圖</p>
      <center>
        <img src={track4_1} Width="100%" />
      </center>
      <p style={{ fontWeight: 'bold' }}>影像索引(FHIR ImagingStudy)設計結構示意圖</p>
      <center>
        <img src={track4_2} Width={'100%'} />
      </center>
      <li>
        <a target="_blank" href="https://build.fhir.org/imagingstudy-mappings.html">
          DICOM TAG與FHIR對照表
        </a>
      </li>
      <h5 style={{ fontWeight: 'bold' }}>情境1與情境2角色與交易關係圖</h5>
      <center>
        <img src={track4_3} Width={'100%'} />
      </center>
      <div>
        <p style={h3_style}>情境3:影像檢查流程(SWF)</p>
        <span>此情境為建立一個醫學影像的造影檢查流程，此情境完全依照</span>
        <a target="_blank" href="https://wiki.ihe.net/index.php/Scheduled_Workflow">
          IHE Scheduled Workflow Profile
        </a>
        <span>的聯測規範提供參加者驗證系統與產品。</span>
        <ul style={{ margin: 0, listStyleType: 'disc' }}>
          <li>ADT</li>
          <li>Order Palcer</li>
          <li>DDS/Order Filler</li>
          <li>Acquisition Modality</li>
          <li>Image Manager/Image Archive</li>
          <li>Image Display</li>
          <li>Performed Procedure Step Manage</li>
          <li>Evidence Creator</li>
        </ul>
        <p>
          <strong>備註:</strong>
          此情境採用互通性聯測機制，同一情境測試項目需滿足IHE聯測規範，即需三家不同公司或是機構進行交互驗證方可通過聯測。
        </p>
      </div>
    </div>
  )
}

const Track4_Specification_content = () => {
  const [srcImg, setSrcImg] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <div>
      <p>涉及到的角色 (Actors)以及交易(Transactions)，說明如下:</p>
      <h3 style={{ fontWeight: 'bold' }}>角色(Actors)</h3>
      <p>1.影像、結構化影像報告(IMAGE)角色整理</p>
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
            <td>IMG_REPORT_CREATOR</td>
            <td>Imaging Report Creator</td>
            <td>新增影像報告角色</td>
          </tr>
          <tr>
            <td>IMG_STUDY_CREATOR</td>
            <td>ImageStudy Creator</td>
            <td>新增影像索引角色</td>
          </tr>
          <tr>
            <td>OBS_ANN_CREATOR</td>
            <td>Observation-Annotation Creator</td>
            <td>新增影像標記(FHIR)角色</td>
          </tr>
          <tr>
            <td>IMG_REPORT_CONSUMER</td>
            <td>Imaging Report Consumer</td>
            <td>查詢與調閱影像報告角色</td>
          </tr>
          <tr>
            <td>IMG_STUDY_CONSUMER</td>
            <td>Imaging Consumer</td>
            <td>查詢與調閱影像索引角色</td>
          </tr>
          <tr>
            <td>OBS_ANN_CONSUMER</td>
            <td>Observation-Annotation Consumer</td>
            <td>查詢與調閱影像標記(FHIR)角色</td>
          </tr>
          <tr>
            <td>IMG_REPORT_REPOSITORY</td>
            <td>Report Repository</td>
            <td>影像報告儲存庫</td>
          </tr>
          <tr>
            <td>OBS_ANN_REPOSITORY</td>
            <td>Observation-Annotation Repository</td>
            <td>影像標記(FHIR)儲存庫</td>
          </tr>
          <tr>
            <td>IMG_DOC_CONSUMER</td>
            <td>Imaging Document Consumer</td>
            <td>調閱影像角色</td>
          </tr>
          <tr>
            <td>IMG_DOC_RESPONDER</td>
            <td>Imaging Document Responder</td>
            <td>影像檢索資料提供者</td>
          </tr>
          <tr>
            <td>IM</td>
            <td>Image Manager / Image Archive</td>
            <td>影像儲存庫</td>
          </tr>
        </tbody>
      </table>

      <p>2.數位病理影像存取(PATH)角色整理</p>
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
            <td>WSI_ANN_CREATOR</td>
            <td>WSI Annotation Creator</td>
            <td>新增影像標記角色</td>
          </tr>
          <tr>
            <td>WSI_CONSUMER</td>
            <td>WSI Consumer</td>
            <td>查詢與調閱影像角色</td>
          </tr>
          <tr>
            <td>WSI_ANN_CONSUMER</td>
            <td>WSI ANN Consumer</td>
            <td>查詢與調閱影像標記(DICOM ANN)角色</td>
          </tr>
          <tr>
            <td>WSI_REPOSITORY</td>
            <td>WSI Repository</td>
            <td>影像與標記儲存庫</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ fontWeight: 'bold' }}>交易(Transactions)</h3>
      <p>1.影像、結構化影像報告(IMAGE)交易整理</p>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>
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
            <td>RAD-18</td>
            <td>Creator Images Stored</td>
            <td>產生影像儲存至影像儲存庫</td>
          </tr>
          <tr>
            <td>RAD-16</td>
            <td>Retrieves Images</td>
            <td>從影像檢索資料提供者與影像儲存庫查詢與調閱影像</td>
          </tr>
          <tr>
            <td>RAD-107</td>
            <td>WADO-RS Retrieve</td>
            <td>使用WADO-RS調閱DICOM SOP實例</td>
          </tr>
          <tr>
            <td>MITW-29</td>
            <td>ImagingStudy Create</td>
            <td>新增影像索引</td>
          </tr>
          <tr>
            <td>MITW-30</td>
            <td>ImagingStudy Query/Retrieve</td>
            <td>查詢與調閱影像索引</td>
          </tr>
          <tr>
            <td>MITW-31</td>
            <td>Image Report Create</td>
            <td>新增影像報告</td>
          </tr>
          <tr>
            <td>MITW-32</td>
            <td>Image Report Query/Retrieve</td>
            <td>查詢與調閱影像報告</td>
          </tr>
          <tr>
            <td>MITW-35</td>
            <td>Observation-Annotation Create</td>
            <td>新增影像標記(FHIR)</td>
          </tr>
          <tr>
            <td>MITW-36</td>
            <td>Observation-annotation Query/Retrieve</td>
            <td>查詢與調閱影像標記(FHIR)</td>
          </tr>
          <tr>
            <td>MITW-61</td>
            <td>Image Report Bundle Create</td>
            <td>新增影像報告文件打包</td>
          </tr>
        </tbody>
      </table>

      <p>2.影像、結構化影像報告(IMAGE)交易整理</p>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>
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
            <td>RAD-129</td>
            <td>QIDO-RS Query</td>
            <td>使用QIDO-RS查詢DICOM SOP實例</td>
          </tr>
          <tr>
            <td>RAD-107</td>
            <td>WADO-RS Retrieve</td>
            <td>使用WADO-RS調閱DICOM SOP實例</td>
          </tr>
          <tr>
            <td>RAD-108</td>
            <td>Store Instances over the Web</td>
            <td>使用STOW-RS傳輸DICOM SOP實例</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ fontWeight: 'bold' }}>角色與交易關係圖</h3>
      <ul>
        <li>醫學影像與DICOM標記互通之角色與交易關係圖</li>
        <center>
          <img
            src={track4_4}
            width="20%"
            onClick={() => {
              setSrcImg(track4_4)
              setLightboxOpen(true)
            }}
          />
          {/* <img src={track4_4} Width={'20%'} /> */}
        </center>
        <center>
          <img
            src={track4_5}
            width="40%"
            onClick={() => {
              setSrcImg(track4_5)
              setLightboxOpen(true)
            }}
          />
          {/* <img src={track4_5} Width={'40%'} /> */}
        </center>
        <li>影像、結構化影像報告(IMAGE)、FHIR標記之角色與交易關係圖</li>
        <center>
          <img
            src={track4_6}
            width="80%"
            onClick={() => {
              setSrcImg(track4_6)
              setLightboxOpen(true)
            }}
          />
          {/* <img src={track4_6} Width={'80%'} /> */}
        </center>
        <li>數位病理影像存取(PATH)之角色與交易關係圖 </li>
        <center>
          <img
            src={track4_7}
            width="30%"
            onClick={() => {
              setSrcImg(track4_7)
              setLightboxOpen(true)
            }}
          />
          {/* <img src={track4_7} Width={'30%'} /> */}
        </center>
        <li>影像檢查流程之角色與交易關係圖</li>
        <center>
          <img
            src={track4_8}
            width="50%"
            onClick={() => {
              setSrcImg(track4_8)
              setLightboxOpen(true)
            }}
          />
          {/* <img src={track4_8} Width={'50%'} /> */}
        </center>
      </ul>
      <h3 style={{ fontWeight: 'bold' }}>角色能力聲明</h3>
      <ul>
        <li>
          放射影像報告/病理影像報告用戶端以及伺服端須符合以下能力聲明，參考
          <a href="https://twcore.mohw.gov.tw/ig/twcore/CapabilityStatement-CapabilityStatementTWCoreClient.html#diagnosticReport">
            CapabilityStatement: 臺灣核心-用戶端(TW Core Client) - DiagnosticReport
          </a>
          以及
          <a href="https://twcore.mohw.gov.tw/ig/twcore/CapabilityStatement-CapabilityStatementTWCoreServer.html#diagnosticReport">
            CapabilityStatement: 臺灣核心-伺服端(TW Core Server) - DiagnosticReport
          </a>
        </li>
      </ul>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th width="20%">符合性(Conformance)</th>
            <th width="10%">參數</th>
            <th width="10%">類型</th>
            <th>範例</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>必須(SHALL)</td>
            <td>_id</td>
            <td>token</td>
            <td>
              GET [base]/DiagnosticReport?_id=[id]
              <br />
              GET [base]/DiagnosticReport/[id]
            </td>
          </tr>
          <tr>
            <td>必須(SHALL)</td>
            <td>status</td>
            <td>token</td>
            <td>GET [base]/DiagnosticReport?status=[code]</td>
          </tr>
          <tr>
            <td>必須(SHALL)</td>
            <td>subject</td>
            <td>reference</td>
            <td>{`GET [base]/DiagnosticReport?subject={Type/}[id]`}</td>
          </tr>
          <tr>
            <td>必須(SHALL)</td>
            <td>category</td>
            <td>token</td>
            <td>{`GET [base]/DiagnosticReport?category={system`}</td>
          </tr>
          <tr>
            <td>必須(SHALL)</td>
            <td>code</td>
            <td>token</td>
            <td>{`GET [base]/DiagnosticReport?code={system`}</td>
          </tr>
          <tr>
            <td>必須(SHALL)</td>
            <td>date</td>
            <td>date</td>
            <td>{`GET [base]/DiagnosticReport?date={gt`}</td>
          </tr>
        </tbody>
      </table>
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

const Track4_Author_content = () => {
  return (
    <div>
      <table class="table table-striped table-bordered" border="1">
        <thead>
          <tr>
            <th style={{ width: '15%' }}>角色</th>
            <th style={{ width: '15%' }}>姓名</th>
            <th width="40%">所屬單位</th>
            <th width="30%">貢獻</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>召集人</td>
            <td>連中岳</td>
            <td>國立臺北護理健康大學－資訊管理系</td>
            <td>專案管理、Profiling, 系統分析與設計, 開發工具, 聯測測試情境</td>
          </tr>
          <tr>
            <td>IG作者</td>
            <td>丁子芸</td>
            <td>國立臺北護理健康大學－資訊管理系</td>
            <td>FHIR報告規格設計</td>
          </tr>

          <tr>
            <td>貢獻者</td>
            <td>蕭嘉宏</td>
            <td>慈濟大學 - 醫學資訊學系</td>
            <td>SVG Annoation設計, 諮詢</td>
          </tr>
          <tr>
            <td>貢獻者</td>
            <td>洪彬彬</td>
            <td>慈濟大學 - 醫學資訊學系</td>
            <td>SVG Annoation設計</td>
          </tr>
          <tr>
            <td>貢獻者</td>
            <td>李沁霖</td>
            <td>國立陽交通大學 - 生物醫學工程學系</td>
            <td>開源工具開發, 聯測情境設計</td>
          </tr>
          <tr>
            <td>貢獻者</td>
            <td>郭俐君</td>
            <td>國立臺北護理健康大學－資訊管理系</td>
            <td>聯測情境設計</td>
          </tr>
          <tr>
            <td>貢獻者</td>
            <td>鄧瑞均</td>
            <td>國立臺北護理健康大學－資訊管理系</td>
            <td>測試, 工具開發, 測試</td>
          </tr>
          <tr>
            <td>貢獻者</td>
            <td>陳紹瑜</td>
            <td>國立臺北護理健康大學－資訊管理系</td>
            <td>病理影像聯測情境設計, 開源工具開發</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export {
  Track4_Summary_content,
  Track4_Benefits_content,
  Track4_details_content,
  Track4_SystemsAffected_content,
  Track4_Specification_content,
  Track4_Author_content,
}
