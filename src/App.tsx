import {
  FC,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Tooltip } from '@yamada-ui/react';

import './style.css';

const useLatestRef = <T extends any>(value: T) => {
  const ref = useRef<T | null>(null);

  ref.current = value;

  return ref as MutableRefObject<T>;
};

export const App: FC<{ name: string }> = ({ name }) => {
  const ref = useRef({ value: 0 });
  const [cnt, setCnt] = useState(0);
  const refCnt = useLatestRef({ value: 0 });

  const onClick = useCallback(() => {
    refCnt.current = { value: 1 };
    setCnt(cnt + 1);
  }, [cnt]);

  // useEffect(() => {
  //   console.log('yeah', ref.current);
  // });

  console.log(refCnt.current.value);

  return (
    <>
      <button>{Math.floor(Math.random() * 10)}</button>
      <p>Unchanged content</p>
    </>
  );
};
