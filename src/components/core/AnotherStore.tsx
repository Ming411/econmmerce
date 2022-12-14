import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {itemCount} from '../../helpers/cart';

export const TotalContext = React.createContext<[number, Dispatch<SetStateAction<number>>]>([
  0,
  () => null
]);
interface Props {
  children: React.ReactNode;
}
const AnotherStore: FC<Props> = ({children}) => {
  const [count, setCount] = useState<number>(itemCount());
  return <TotalContext.Provider value={[count, setCount]}>{children}</TotalContext.Provider>;
};

export default AnotherStore;
