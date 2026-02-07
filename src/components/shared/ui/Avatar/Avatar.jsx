import * as SC from './Avatar.styled';

export const Avatar = ({ name }) => {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');
  return <SC.Avatar>{initials}</SC.Avatar>;
};
