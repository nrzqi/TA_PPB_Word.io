import Layout from "../component/Layout";
import LinkPrimary from "../component/LinkPrimary";
import "./About.css";
import Gap from "../component/Gap";
import LinkSecondary from "../component/LinkSecondary";



export default function About(){
    return <Layout>
         <div className="contentAbout">
                <img src="/images/logo.png" className="contentAboutImg" alt="rocket"></img>
                <h2 className="contentAboutTitle">Word.io</h2>
                <p className="contentAboutBody">Wanting to know more about certain word? Oh, you come to the right place then! Word.io is an application where you can find everything about words with ease. You can search up the antonym or synonym about certain word you wish to know. </p>
            
                <Gap
                    height={50}
                />

                <LinkSecondary
                    url="/Profile"
                    text="About developer"
                />
                               
            </div>
    </Layout>
}