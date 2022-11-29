import Layout from "../component/Layout";
import Gap from "../component/Gap";
import "./Profile.css";
import { BsInstagram } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

export default function Profile(){
    return <Layout>
         <div className="contentAbout">
                <img src="/images/nabila.png" className="contentAboutImg" alt="rocket"></img>
                <h2 className="contentAboutTitle">About me</h2>
                <p className="contentAboutBody">My name is Nabila Rizqi Mahardika, often goes by the name Nabila.</p>
                <p className="contentAboutBody">Currently in my 3rd year of studying for an undergraduate degree in Computer Engineering at Diponegoro University. </p>
            
                <Gap
                    height={50}
                />

                <p className="contentAboutBody"> <MdOutlineEmail/> itsnabilaonmail@gmail.com</p>
                <p className="contentAboutBody"> <BsInstagram/> nrzqi</p>
            </div>
    </Layout>
}