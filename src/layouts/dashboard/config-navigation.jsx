import SvgColor from 'src/components/svg-color';
import MessageIcon from '@mui/icons-material/Message';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import QuizIcon from '@mui/icons-material/Quiz';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import WalletIcon from '@mui/icons-material/Wallet';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'MyCourse',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Calendar',
    path: '/user',
    icon: <CalendarTodayIcon/>,
  },
  {
    title: 'Resource',
    path: '/products',
    icon: <ImportContactsIcon/>,
  },
  {
    title: 'Quiz',
    path: '/blog',
    icon: <QuizIcon/>,
  },
  {
    title: 'Message',
    path: '/login',
    icon: <MessageIcon />,
  },
  {
    title: 'MyStatus',
    path: '/404',
    icon: <QueryStatsIcon/>,
  },
  {
    title: 'Wallet',
    path: '/404',
    icon: <WalletIcon/>,
  },
  {
    title: 'MyAccount',
    path: '/404',
    icon: <AccountBoxIcon/>,
  },
];

export default navConfig;
