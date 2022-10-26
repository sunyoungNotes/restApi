import { useState } from "react";
import React from "react";
import axios from "axios";

function RestApi() {
  const serviceKey =
    "6VCZZ4l3JfAyOGdW9aLlP65r9wxP9Apz2bWUDlPgHViQS7UtmtquexrrrlQ3pFGGmRtcuo3jy1Tzq9y29mZOig%3D%3D"; /* 일반 인증키 (Encoding) */
  let url = "/3160000/guroPointFocInfoSvc/getGuro10PointFocInfoSvc"; /* URL */
  const params_numOfRows = "10";
  const params_pageNo = "1";
  const params_returnType = "xml";
  let response = "";

  url += "?" + encodeURIComponent("serviceKey") + "=" + serviceKey;

  const [data, setData] = useState(null);

  const onClick = async () => {
    try {
      response = await axios(url, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          numOfRows: params_numOfRows,
          pageNo: params_pageNo,
          returnType: params_returnType,
        },
      });
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={onClick}>가져오기</button>
      <div>{data}</div>
    </div>
  );
}

export default RestApi;
