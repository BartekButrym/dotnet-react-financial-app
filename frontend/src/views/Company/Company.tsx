import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CompanyProfile } from '@interfaces/company';
import { getCompanyProfile } from '@services/api';

export const Company = () => {
  const { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfile = async () => {
      if (!ticker) return;
      const result = await getCompanyProfile(ticker);
      setCompany(result?.data[0]);
    };

    getProfile();
  }, []);

  if (!company) return <h2>Company not found</h2>;

  return <h2>{company.companyName}</h2>;
};
