import axios from '@services/axios';
import { type CompanySearch } from '@interfaces/company';

type SearchResponse = {
  data: CompanySearch[];
};

const apiKey = import.meta.env.VITE_FINANCIAL_MODELING_PREP_API_KEY;

export const searchCompanies = async (query: string) => {
  const url = `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${apiKey}`;

  try {
    const data = await axios.get<SearchResponse>(url);
    return data;
  } catch (error) {
    console.log(error);
    return 'An error occured while fetching companies.';
  }
};
