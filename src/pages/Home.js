import LinkPrimary from "../component/LinkPrimary";
import Layout from "../component/Layout";
import Gap from "../component/Gap";

import "./Home.css";

export default function Home(){
    return (
        <Layout>
            <div className="contentWelcome">
                <img src="/images/home.png" className="contentWelcomeImg" alt="rocket"></img>
                <h2 className="contentWelcomeTitle">Word.io</h2>
                <p className="contentWelcomeBody">Find everything about words with ease!</p>
                <Gap
                    height={25}
                />
               <LinkPrimary
                    url="/Slang"
                    text="Slang Words"
                />
                <Gap
                    height={10}
                />
                <LinkPrimary
                    url="/Random"
                    text="Random Words"
                />
            </div>
        </Layout>
    )
}