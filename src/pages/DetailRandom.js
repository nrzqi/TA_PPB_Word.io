import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../component/Layout";
import Gap from "../component/Gap";
import "./DetailRandom.css";
import LinkSecondary from "../component/LinkSecondary";

export default function DetailRandom(){

    const {id_random} = useParams();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchDetailRandom(){
            try {
                const response = await axios.get('https://api.npoint.io/b9ca76314c1c5577623d', {
                    params: {
                        id_random,
                    },
                });
                if (response.status===200){
                    setData(response.data[id_random-1]);
                }
            } catch (err) {
                console.log('err', err);
            }
        }
        async function fetchData(){
            setIsLoading(true);
            await fetchDetailRandom();
            setIsLoading(false);
        }
        fetchData();
    }, [id_random]);


    return <Layout>
         <div className="contentDetailRandom">
                {isLoading ? (
                    <p>Please wait</p>
                ) : (
                    <>
                        <h1 className="contentWord">{data.random_word}</h1>
                        <Gap height={30}/>
                        <div className="CardDetailRandom">
                            <table border = "0" width="100%">
                                <tr>
                                    <td><em>{data.pronounciation}</em></td>
                                </tr>
                                <tr>
                                    <td>{data.type}</td>
                                </tr>
                                <Gap height={20}/>
                                <tr>
                                    <td>{data.definition}</td>
                                </tr>
                                <Gap height={20}/>
                                <tr>
                                    <td >{data.example}</td>
                                </tr>
                            </table>

                            <Gap height={200}/>

                            <LinkSecondary
                                url="/Random"
                                text="Back"
                            />
                        </div>
                    </>
                )
                }
            </div>
    </Layout>
}