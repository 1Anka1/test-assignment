import { CiHome, CiUser } from 'react-icons/ci';
import { FaUserGroup } from 'react-icons/fa6';
import { GoFileSymlinkFile, GoOrganization } from 'react-icons/go';
import { LuGoal } from 'react-icons/lu';

export const Icons = [
  {
    id: 0,
    href: 'dashboard',
    title: 'Dashboard',
    icon: <CiHome size={25} />,
  },
  {
    id: 1,
    href: 'account',
    title: 'Account',
    icon: <CiUser size={25} />,
  },
  {
    id: 2,
    href: 'brokers',
    title: 'Brokers',
    icon: <FaUserGroup size={25} />,
  },
  {
    id: 3,
    href: 'submissions',
    title: 'Submissions',
    icon: <GoFileSymlinkFile size={25} />,
  },
  {
    id: 4,
    href: 'organization',
    title: 'Organization',
    icon: <GoOrganization size={25} />,
  },
  {
    id: 5,
    href: 'goals&rules',
    title: 'Goals & Rules',
    icon: <LuGoal size={25} />,
  },
];
