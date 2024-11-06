import React, {useEffect} from 'react'
import {ContextProvider} from '../contextProvider'
import CardProducts from './CardProducts'
import CardPrice from './CardPrice'
import useSWR from 'swr'
import {fetcher, key} from '../fetchAPI/fetch'

const Container = ({value}) => {
  const {data = []} = useSWR(key, fetcher)
  return (
    <div className="flex items-center justify-between main h-[100vh] max-w-[760px] m-auto z-10 container">
      <ContextProvider value={{...value, data}}>
        <CardProducts></CardProducts>
        <CardPrice></CardPrice>
      </ContextProvider>
    </div>
  )
}

export default Container
