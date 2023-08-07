import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as qs from 'qs';

// const [state, setState] = useState()

type IUseQueryStringResponse<T> = [
  query: any,
  setQuery: (params: any) => void
];

export const useQueryString = <T>(defaultValue?: T): IUseQueryStringResponse<T> => {
  const {pathname, search} = useLocation();
  const navigate = useNavigate();

  const query = useMemo (
    () => qs.parse(search, {
      ignoreQueryPrefix: true,
    }) as T,
    [search]
  );

  const setQuery = useCallback(
    (data: T) => {
      
      const currenQuery = Object.assign({},query,data)
      // transform data to string
      // replace route with data

      navigate({pathname,search: qs.stringify(currenQuery) },{
        replace: true,

      });
    }, 
    [search]
  );

  useEffect(() => {
    if(defaultValue){
      setQuery(defaultValue)
    }
  },[]);


  return [query, setQuery]
}