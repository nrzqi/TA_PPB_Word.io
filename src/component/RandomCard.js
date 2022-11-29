import "./RandomCard.css"
import { Link } from "react-router-dom";

export default function RandomCard({random}){
   return ( 
   <div className="RandomCard">
        <table border="0">
             <tr>
                <td>{random.random_word}</td>
            </tr>
        </table>
        <Link className="buttonRandomCard" to={'/detail_random/'+random.id_random}>Learn more</Link>
    </div>)
}