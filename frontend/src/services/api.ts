import axios from '@services/axios';
import type { CompanyProfile, CompanySearch } from '@interfaces/company';
import { API_KEY } from '@constants/keys';

type SearchResponse = {
  data: CompanySearch[];
};

export const searchCompanies = async (query: string) => {
  const url = `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${API_KEY}`;

  try {
    const data = await axios.get<SearchResponse>(url);
    return data;
  } catch (error) {
    console.log(error);
    return 'An error occured while fetching companies.';
  }
};

export const getCompanyProfile = async (query: string) => {
  const url = `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${API_KEY}`;

  try {
    const data = await axios.get<CompanyProfile[]>(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};
