import * as SC from './WrapperBar.styled';
export const WrapperBar = ({ children, title }) => {
  return (
    <SC.WrapperBar>
      <SC.Title> {title}</SC.Title>

      {children}
    </SC.WrapperBar>
  );
};
