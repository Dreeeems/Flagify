import React, { useState, useEffect } from 'react';
import { fetch } from '../utils/fetch';
import CountryCard from '../components/countryCard';

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch();
        console.log(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='h-full'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data && (
            <div className='overflow-auto h-3/6'>
            <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            
{data.map((item, index) => (
  <CountryCard country={item} key={index} />
))}

           </div>
          </div>
        )
      )}
    </div>
  );
}

export default HomePage;
