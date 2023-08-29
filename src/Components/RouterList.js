import News from '../Pages/News/News'
import Introduction from '../Pages/Introduction/Introduction'
import Signup from '../Pages/Signup/Signup'
import Specification from '../Pages/Specification/Specification'
import Traks from '../Pages/Traks/Traks'
import Result from '../Pages/Result/Result'
import Successcase from '../Pages/Successcase/Successcase'
import Member from '../Pages/Member/Member'
import Contributor from '../Pages/Contributor/Contributor'
import Recruit from '../Pages/Recruit/Recruit'
import Workgroupactivity from '../Pages/Workgroupactivity/Workgroupactivity'
import Relatedactivity from '../Pages/Relatedactivity/Relatedactivity'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
const iconStyle = {
  marginLeft: '5px',
}
const routerList = [
  {
    name: '最新消息',
    icon: null,
    path: '/News',
    Component: <News />,
  },
  {
    name: '論壇',
    path: '/',
    liComponent: '',
  },
  {
    name: '簡介',
    icon: null,
    path: '/Introduction',
    Component: <Introduction />,
  },
  {
    name: '報名',
    path: '/Signup',
    Component: <Signup />,
  },
  {
    name: '招募',
    path: '/Recruit',
    Component: <Recruit />,
  },
  {
    name: '團隊介紹',
    iconOpened: <AiFillCaretUp style={iconStyle} />,
    iconClosed: <AiFillCaretDown style={iconStyle} />,
    path: '',
    Component: '',
    li: [
      { liname: '賽道工作小組', lipath: '/Contributor', liComponent: <Contributor /> },
      {
        liname: '督察員',
        lipath: '/Member',
        liComponent: <Recruit />,
      },
    ],
  },
  {
    name: '規格與資源',
    icon: null,
    path: '/Specification',
    Component: <Specification />,
  },
  {
    name: '賽道',
    icon: null,
    path: '/Tracks',
    Component: <Traks />,
  },
  {
    name: '活動',
    iconOpened: <AiFillCaretUp style={iconStyle} />,
    iconClosed: <AiFillCaretDown style={iconStyle} />,
    path: '',
    Component: '',
    li: [
      {
        liname: '工作小組',
        lipath: '/Workgroupactivity',
        liComponent: <Workgroupactivity />,
      },
      {
        liname: '相關活動',
        lipath: '/Relatedactivity',
        liComponent: <Relatedactivity />,
      },
    ],
  },
  {
    name: '2022聯測松結果',
    icon: null,
    path: '/Result',
    Component: <Result />,
  },
  {
    name: '歷年活動',

    iconOpened: <AiFillCaretUp style={iconStyle} />,
    iconClosed: <AiFillCaretDown style={iconStyle} />,
    path: '',
    Component: '',
    li: [
      {
        liname: '2022年 MI-TW 聯測工作坊',
        lipath: 'https://mitw.dicom.org.tw/2022/',
        liComponent: '',
      },
      {
        liname: '2021年 MI-TW 聯測工作坊',
        lipath: 'https://mitw.dicom.org.tw/2021/',
        liComponent: '',
      },
      {
        liname: '2020年 MI-TW 聯測工作坊',
        lipath: 'https://mitw.dicom.org.tw/2020/',
        liComponent: '',
      },
    ],
  },
  {
    name: '成果發表',
    icon: null,
    path: '/Successcase',
    Component: <Successcase />,
  },
]

export { routerList }
