import { CgMoreVerticalO } from 'react-icons/cg';
import * as SC from '../../../components/shared/ui/Table/Table.styled';
import { Avatar } from '../../../components/shared/ui/Avatar/Avatar';
import { accountDataMap } from './columns';

export const workRenderMap = {
  ORIGINATOR: (row) => (
    <SC.TdWrapper>
      <Avatar name={`${row.firstName} ${row.lastName}`} />
      {row.firstName} {row.lastName}
    </SC.TdWrapper>
  ),

  'CLIENT/LINE': (row) => (
    <>
      {row.company.name}
      <br />
      <SC.Span>{row.company.department}</SC.Span>
    </>
  ),

  TYPE: (row) => row.crypto.coin,

  STATUS: (row) => (
    <SC.Flex>
      <SC.ColorPoint $statusQueue={row.statusQueue} />
      <span>{row.statusQueue}</span>
    </SC.Flex>
  ),

  CREATED: () => (
    <SC.TdWrapper>
      04/02/2026
      <CgMoreVerticalO size={16} />
    </SC.TdWrapper>
  ),
};

export const accountRenderMap = {
  'ACCOUNT NAME/TYPE': (row) => (
    <>
      {row.company.name}
      <br />
      <SC.Span>{row.company.department}</SC.Span>
    </>
  ),

  LINE: (row) => row.bank.cardType,

  BROKER: (row) => row.lastName,

  'RENEWAL DATE': () => '04/05/2026',

  PREMIUM: (row) => accountDataMap[row.id]?.PREMIUM || '-',

  'RATED PREMIUM': (row) => accountDataMap[row.id]?.RATED_PREMIUM || '-',

  'LOSS RATIO': (row) => {
    const ratio = accountDataMap[row.id]?.LOSS_RATIO;
    return ratio ? (
      <SC.LossRatio color={ratio.color}>{ratio.value}</SC.LossRatio>
    ) : (
      '-'
    );
  },

  APPETITE: (row) => {
    const appetite = accountDataMap[row.id]?.APPETITE;
    return <SC.AppetiteRation>{appetite}</SC.AppetiteRation>;
  },

  STATUS: (row) => {
    const status = accountDataMap[row.id]?.STATUS || '-';

    return (
      <SC.Flex>
        <SC.ColorPoint $statusQueue={status} />
        <span>{status}</span>
      </SC.Flex>
    );
  },

  TRIAGE: (row) => {
    const triange = accountDataMap[row.id]?.TRIAGE || '-';
    return <SC.Triage>{triange}</SC.Triage>;
  },

  WINNABILITY: (row) => {
    const winnabitity = accountDataMap[row.id]?.WINNABILITY || '-';
    return (
      <SC.IconWrapper>
        {winnabitity}
        <CgMoreVerticalO size={16} />
      </SC.IconWrapper>
    );
  },
};
