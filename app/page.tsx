import { useCountries } from "./utils/useCountries"
import { fetchService } from "./utils/FetchData";
const Home =  async () => {
  const {getCountryByValue} = useCountries();
  const doctors = await fetchService();
  return (
    <div>Home</div>
  )
}

export default Home