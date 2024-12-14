import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import $apiRequest from "../../api/axios";

export default function FirstPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    $apiRequest
      .get("api/first/")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ошибка при загрузке данных. Попробуйте позже.");
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) {
    return <div className="loader">Загрузка...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="swiper-slide">
      <div className="left_main_site">
        <div className="title">
          <h1>{data?.title || "Default Title"}</h1>
        </div>
        <div className="suptitle">
          <p>{data?.subtitle || "Default Subtitle"}</p>
        </div>
        <div className="button_main">
          <Link to={data?.button_link || "/"}>
            {data?.button_text || "Default Button Text"}
          </Link>
          <img src="/assets/arrow.svg" alt="arrow for service" />
        </div>
      </div>
      <div className="right_main_site">
        <img
          src={data?.illustration_path || "/assets/main.svg"}
          alt="slide for main page"
        />
      </div>
    </div>
  );
}
