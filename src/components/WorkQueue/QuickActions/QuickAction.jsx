import action from '../../../data/actions.json';
import { WrapperBar } from '../../shared/ui/WrapperBar/WrapperBar';
import * as SC from './QuickAction.styled';

export const QuickAction = () => {
  return (
    <WrapperBar title={'Quick Action'}>
      <SC.QuickActionslist>
        {action.map(({ id, name }) => (
          <li key={id}>
            <SC.QuickBtn>{name}</SC.QuickBtn>
          </li>
        ))}
      </SC.QuickActionslist>
    </WrapperBar>
  );
};
