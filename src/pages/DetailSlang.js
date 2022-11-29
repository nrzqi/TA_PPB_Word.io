import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../component/Layout";
import Gap from "../component/Gap";
import "./DetailSlang.css";
import LinkSecondary from "../component/LinkSecondary";


export default function DetailSlang(){

    const {id_slang} = useParams();
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchDetailSlang(){
            try {
                const response = await axios.get('https://api.npoint.io/12bdf408f7df320c115e', {
                    params: {
                        id_slang,
                    },
                });
                if (response.status===200){
                    setData(response.data[id_slang-1]);
                }
            } catch (err) {
                console.log('err', err);
            }
        }
        async function fetchData(){
            setIsLoading(true);
            await fetchDetailSlang();
            setIsLoading(false);
        }
        fetchData();
    }, [id_slang]);


    return <Layout>
         <div className="contentDetailSlang">
                {isLoading ? (
                    <p>Please wait</p>
                ) : (
                    <>
                        <h1 className="contentWord">{data.slang_word}</h1>
                        <Gap height={50}/>
                        <div className="CardDetailSlang">
                            <table border = "0" width="100%">
                                <tr>
                                    <td>{data.definition}</td>
                                </tr>
                                <Gap height={20}/>
                                <tr>
                                    <td><em>{data.example}</em></td>
                                </tr>
                            </table>

                            <Gap height={200}/>
                            <LinkSecondary
                                url="/Slang"
                                text="Back"
                            />
                        </div>
                    </>
                )
                }
            </div>
    </Layout>
}