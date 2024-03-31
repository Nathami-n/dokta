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

const Location = () => {
  const {getAllCountries, getCountryByValue} = useCountries();
  const allCountries = getAllCountries();
  return (
    <>
    <div 
    className="
    mx-auto
    max-w-7xl
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
      <form>
      <div className="
      max-w-7xl
      mx-auto
      ">
        <div className="mb-5 p-4">
          <Select required>
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
      </div>
      </form>
    </div>
    </>
  ) 
}

export default Location