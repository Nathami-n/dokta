'use client'
import { useCountries } from '@/app/utils/useCountries'
import {
  Select, 
  SelectContent, 
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
  SelectItem
} from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton';
import dynamic from 'next/dynamic';
import Map from '@/app/components/map/Map'
import { ButtonBar } from '@/app/components';
import { useState } from 'react';
import { createLocation } from '@/app/actions/userActions';

const Location = ({
  params
}: {params: {id: string}}) => {
  const {getAllCountries, getCountryByValue} = useCountries();
  const allCountries = getAllCountries();
  const [location, setLocation] = useState('');
  const LazyMap = dynamic(()=> import('@/app/components/map/Map'), {
    ssr: false,
    loading: ()=> <Skeleton className='h-[50vh] w-full'/>
  })
  return (
    <>
    <div 
    className="
    mx-auto
    max-w-7xl
    mb-36
    "
    >
      <h2 className="
      text-3xl
      font-semibold
      tracking-tight
      transition-colors
      text-center
      mt-8
      mb-8
      "> Where are you located?
      </h2>
      <form 
      action={createLocation}
      >
        <input type='hidden' name="docId" value={params.id}/>
        <input type='hidden' name="country" value={location}/>
      <div className="
      max-w-7xl
      mx-auto
      ">
        <div className="mb-5 p-4">
          <Select required onValueChange={(value) => setLocation(value)}>
          <SelectTrigger 
          className='
            max-w-5xl
            mx-auto
          '>
            <SelectValue placeholder='Select Country'/>
          </SelectTrigger>
          <SelectContent>
          <SelectGroup>
            <SelectLabel>Countries</SelectLabel>
            {allCountries.map((country)=> {
              return (
                <SelectItem key={country.value} value={country.value}>
                  {country.flag} {country.label}/{country.region}
                </SelectItem>
              )
            })}
          </SelectGroup>
          </SelectContent>
          </Select>
        </div>
        <LazyMap location={location}/>
      </div>
      <ButtonBar/>
      </form>
    </div>
    </>
  ) 
}

export default Location