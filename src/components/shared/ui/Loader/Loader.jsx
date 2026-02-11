import { PulseLoader } from 'react-spinners';
import * as LSC from './Loader.styled';

export const Loader = () => {
  return (
    <LSC.LoaderWrapper>
      <PulseLoader color="#3b82f5" size={25} />
    </LSC.LoaderWrapper>
  );
};
