import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DetailChara.css"

export default function DetailChara(){
    const [data, setData] = useState();

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await axios(
                    "https://my-json-server.typicode.com/knimoni/tpncharadb/db"
                );
                setData(results.data.chara[id-1])
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
          <img className="image-chara" src={data.image2} alt="detail-img"/>
          <div className="detail-item">
            <h1 className="">{data.name}</h1>
            <p>Gender : {data.gender}</p>
            <p>Birthday : {data.date}</p>
            <p>Farm Identifier : {data.no}</p>
            <p>Appearance: <p>
                </p>{data.appearance}</p>
            <p>Etymology:<p>
                </p> {data.etymology}</p>
          </div>
        </div>
}
    </div>
  );
}