import { NavLink } from 'react-router-dom';
import { quickActions } from '../../../helpers/utils/quickActions';
import { WrapperBar } from '../../shared/WrapperBar/WrapperBar';
import * as SC from './QuickAction.styled';

export const QuickAction = () => {
  return (
    <WrapperBar title={'Quick Action'}>
      <SC.QuickActionslist>
        {quickActions.map(({ id, name, href }) => (
          <li key={id}>
            <SC.QuickBtn>{name}</SC.QuickBtn>
          </li>
        ))}
      </SC.QuickActionslist>
    </WrapperBar>
  );
};
