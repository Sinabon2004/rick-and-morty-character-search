import { useEffect, useState } from 'react'

interface debounce {
  callbackFn: () => void;
  ms: number;
}

export function useDebounce({ callbackFn, ms }: debounce) {
    const [debounceVal, setDebounceVal] = useState<()=> void>(callbackFn);
    useEffect(()=>{
      const timeout = setTimeout(()=>{
        setDebounceVal(callbackFn)
      }, ms)

      return () => {clearTimeout(timeout)}
    }, [callbackFn, ms])

    return debounceVal
}
