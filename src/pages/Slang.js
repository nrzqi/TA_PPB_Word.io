import axios from 'axios';
import { useEffect, useState } from 'react';
import Gap from '../component/Gap';
import SlangCard from '../component/SlangCard';
import Layout from '../component/Layout';
import './Slang.css';
import LinkSecondary from "../component/LinkSecondary";


export default function Slang() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSlang() {
      try {
        const response = await axios.get('https://api.npoint.io/12bdf408f7df320c115e');
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        console.log('err', err);
      }
    }
    async function fetchData() {
      setIsLoading(true);
      await fetchSlang();
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="contentSlang">
        {isLoading ? (
          <p>Please wait</p>
        ) : (
          data.map(function (item, index) {
            return (
              <div key={index}>
                <Gap height={17} />
                <SlangCard slang={item} />
              </div>
            );
          })
        )}
        <Gap height={50} />
        <LinkSecondary
          url="/Home"
          text="Back"
          />
      </div>
    </Layout>
  );
}
