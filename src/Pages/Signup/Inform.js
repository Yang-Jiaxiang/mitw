import recruit from '../../assets/recruitment.png'
import chat from '../../assets/chat.png'
import meet from '../../assets/meeting.png'
import track from '../../assets/running-track.png'

const Inform = [
  {
    title: '聯測松賽道報名',
    link: process.env.REACT_APP_REGISTRATION_PATH,
    disable: false,
    icon: track,
  },
  {
    title: '聯測松督察員報名',
    disable: true,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSd277k6jdIutskEV6cjrQ5McT0K2AqZGg-41-VoerAfi8nuCQ/viewform?usp=sf_link',
    icon: recruit,
  },
  { title: '聯測松論壇報名', link: process.env.REACT_APP_MITW_FORUM_PATH, disable: false, icon: chat },
  { title: '聯測松工作坊報名', link: '', disable: false, icon: meet },
]
export { Inform }
