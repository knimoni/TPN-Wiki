import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DetailObj.css"

export default function DetailObj(){
    const [data, setData] = useState();

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await axios(
                    "https://my-json-server.typicode.com/knimoni/tpnobjectdb/db"
                );
                setData(results.data.object[id-1])
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
          <img className="image" src={data.image1} alt="detail-img"/>
          <div className="detail-item">
            <h1 className="">{data.name}</h1>
            <p>Type : {data.type}</p>
            <p>Utility : {data.utility}</p>
            <p>Owner : {data.owner}</p>
            <p>{data.desc}</p>
          </div>
        </div>
}
    </div>
  );
}