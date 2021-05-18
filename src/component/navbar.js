import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import FactCAT from '../services/catfact'



function Navbar(props) {

    const handleClick = (ev) => { 
        getGitHubUserWithFetch(ev.target.value);
        setSearchstate(ev.target.value)
    
    };
    // let {name} = props;

    const [Searchstate, setSearchstate] = useState('');
    const [Factstate, setFactstate] = useState([]);
    const getGitHubUserWithFetch = async (amount) => {
     
        let data = await FactCAT(amount);
        console.log(data)
        setFactstate(data);
    };
    // **ใช้สำหรับดึงข้อมูลในการโหลดข้อมูลครั้งแรกหลังจาก load companent
    useEffect(
        () => {
         
            getGitHubUserWithFetch(10)
        }, []
    )
    let Deatiltabal = null;
    if (Factstate.length > 0) {

        Deatiltabal = Factstate.map((v, i) => {

            return (<tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{v.type}</td>
                <td>{v.text}</td>
                <td>{v.source}</td>
                <td><button className="btn btn-danger">ลบ</button></td>
            </tr>);
        })
    }
    return (
        <div>
            <input className="form-control" type="number" value={Searchstate} onChange={handleClick} />
          
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">**</th>
                    </tr>
                </thead>
                <tbody>

                    {Deatiltabal}

                </tbody>
            </table>

        </div>

    );
}
Navbar.propTypes = {
    name: PropTypes.string.isRequired
}




export default Navbar

