import { useEffect, useState } from "react";
import "./Loca.css";
import axios from "axios";
import { NavLink } from "react-router-dom"

function Loca(props){
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { history } = props;

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const results = await axios(
          "https://my-json-server.typicode.com/marifrazmi/tpndb1/db"
        );
        setData(results.data.locations)
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  const renderList = () => {
    return (
      <div className="item-container">
        {data.map((item, index) => {
          return (
            <div class="button" key={index}>
              <NavLink
                to={`/DetailLoca/${item.id}`}
                onClick={() =>
                  history.push(`/DetailLoca/${item.id}`)
                }
              >
                <img class="img-loca" src={item.img} alt="" />
                <p class="name">{item.name}</p>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  };
  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Unable to Get data, Please try again next time
        </div>
      );
    }
  };

  return (
    <div className="render-container">
      {renderError()}
      <h1 className="txt"><span className="span-txt">Loca</span>tions</h1>
      {isLoading ? (
        <div className="loading-state">Loading...</div>
      ) : (
        <div className="render">{renderList()}</div>
      )}
    </div>
  );
}

export default Loca;