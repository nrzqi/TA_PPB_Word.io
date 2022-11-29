import axios from 'axios';
import { useEffect, useState } from 'react';
import Gap from '../component/Gap';
import RandomCard from '../component/RandomCard';
import Layout from '../component/Layout';
import './Random.css';
import LinkSecondary from "../component/LinkSecondary";

export default function Random() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRandom() {
      try {
        const response = await axios.get('https://api.npoint.io/b9ca76314c1c5577623d');
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        console.log('err', err);
      }
    }
    async function fetchData() {
      setIsLoading(true);
      await fetchRandom();
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="contentRandom">
        {isLoading ? (
          <p>Please wait</p>
        ) : (
          data.map(function (item, index) {
            return (
              <div key={index}>
                <Gap height={17} />
                <RandomCard random={item} />
              </div>
            );
          })
        )}
        <Gap height={70} />
        <LinkSecondary
          url="/Home"
          text="Back"
          />
      </div>
      
    </Layout>
  );
}
