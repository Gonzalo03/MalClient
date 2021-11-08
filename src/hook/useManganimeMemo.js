import { useMemo } from "react";


export const useManganimeMemo = (avgManganime) => {

      const animeMemo = useMemo(() => {
        const avg = avgManganime.reduce((a, b) => a + b, 0);
        return (avg / avgManganime.length).toString();
      }, [avgManganime]);
    
    return animeMemo.substr(0, animeMemo.indexOf('.') + 2);
}