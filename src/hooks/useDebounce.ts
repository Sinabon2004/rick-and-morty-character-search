import { useEffect, useState } from 'react'

interface debounce {
  callbackFn: string;
  ms: number;
}

export function useDebounce({ callbackFn, ms }: debounce) {
    const [debounceVal, setDebounceVal] = useState<string>(callbackFn);
    useEffect(()=>{
      const timeout = setTimeout(()=>{
        setDebounceVal(callbackFn)
      }, ms)

      return () => {clearTimeout(timeout)}
    }, [callbackFn, ms])

    return debounceVal
}
