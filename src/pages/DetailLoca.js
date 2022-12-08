import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import "./DetailLoca.css"

export default function DetailLoca(){
    const [data, setData] = useState();

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await axios(
                    "https://my-json-server.typicode.com/marifrazmi/tpndb1/db"
                );
                setData(results.data.locations[id-1])
            } catch (err) {
            
            }  
        };

        fetchData();
    }, [id]);
    console.log(data);

  return (
    <div className="distance">
         <h1 className="txt"><span className="span-txt">Infor</span>mation</h1>
         {data === undefined
        ? (<div className="loading-state">Loading...</div>)
        :
        <div className="detail">
          <img className="image" src={data.img} alt="detail-img"/>
          <div className="detail-item">
            <h1 className="">{data.name}</h1>
            <p>Location : {data.loca}</p>
            <p>Description:<p>
                </p> {data.desc}</p>
            <p>Facilities: <p>
                </p>{data.facilities}</p>
            <p>Layout: <p>
                </p>{data.Layout}</p>
          </div>
          <div className="menu-box">
              <NavLink to="/locations" className="link app-link">
                Back to Location
              </NavLink>
            </div>
        </div>
}
</div>)
}