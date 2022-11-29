import "./SlangCard.css"
import { Link } from "react-router-dom";

export default function SlangCard({slang}){
   return ( <div className="SlangCard">
        <table border="0">
             <tr>
                <td>{slang.slang_word}</td>
            </tr>
        </table>
        <Link className="buttonSlangCard" to={'/detail_slang/'+slang.id_slang}>Learn more</Link>
    </div>)
}