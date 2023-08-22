import ReactPlayer from 'react-player/youtube'

import track6_1 from '../../../../assets/WG6_1.png'
import track6_2 from '../../../../assets/WG6_2.png'
import track6_2_1 from '../../../../assets/wg6_2_1.png'
const h3_style = {
  fontWeight: 'bold',
  fontSize: '1.5em',
}
const Track6_Summary_content = () => {
  return (
    <div>
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
    </div>
  )
}

const Track6_Benefits_content = () => {
  return (
    <div>
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
    </div>
  )
}

const Track6_details_content = () => {
  return <div></div>
}

const Track6_SystemsAffected_content = () => {
  return (
    <div>
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
      <p style={h3_style}>情境1 – 產生新的基因定序資訊(MolecularSequence)以及變異點資料(Observation) - (Source)</p>
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

      <p style={h3_style}>情境2 – 調閱臨床序列 Germline Testing (Consumer)</p>
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
    </div>
  )
}

const Track6_Specification_content = () => {
  return (
    <div>
      <p style={h3_style}>角色(Actors)</p>
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
        <tbody style={{ textAlign: 'left' }}>
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
      <p style={h3_style}>交易(Transactions)</p>
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
        <tbody style={{ textAlign: 'left' }}>
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

      <p style={h3_style}>角色與交易關係圖</p>
      <p>1. 基因體標記(GEN)之角色與交易關係圖</p>
      <img src={track6_2_1} width={'100%'} />
    </div>
  )
}

const Track6_Author_content = () => {
  return (
    <div>
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
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr>
            <td>
              <span data-position="53402" data-size="2">
                招集人
              </span>
            </td>
            <td>
              <span data-position="53407" data-size="3">
                連中岳
              </span>
            </td>
            <td>
              <span data-position="53415" data-size="21">
                國立臺北護理健康大學－資訊管理系{' '}
              </span>
            </td>
            <td>
              <span data-position="53438" data-size="17">
                聯測測試情境設計
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="53465" data-size="2">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="53470" data-size="3">
                李建興{' '}
              </span>
            </td>
            <td>
              <span data-position="53478" data-size="4">
                國立陽明交通大學 - 生物醫學資訊學研究所{' '}
              </span>
            </td>
            <td>
              <span data-position="53485" data-size="4">
                Profiling, 開發開源工具
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="53496" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="53502" data-size="3">
                陳亭均{' '}
              </span>
            </td>
            <td>
              <span data-position="53508" data-size="13">
                費斯科技{' '}
              </span>
            </td>
            <td>
              <span data-position="53524" data-size="2">
                系統分析
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="53533" data-size="3">
                貢獻者
              </span>
            </td>
            <td>
              <span data-position="53539" data-size="3">
                蕭嘉宏{' '}
              </span>
            </td>
            <td>
              <span data-position="53545" data-size="16">
                慈濟大學 - 醫學資訊學系{' '}
              </span>
            </td>
            <td>
              <span data-position="53564" data-size="8">
                諮詢{' '}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export {
  Track6_Summary_content,
  Track6_Benefits_content,
  Track6_details_content,
  Track6_SystemsAffected_content,
  Track6_Specification_content,
  Track6_Author_content,
}
