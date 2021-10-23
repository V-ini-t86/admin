import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./components/List/List";
import SearchBar from "./components/SearchBar/SearchBar";
import { getData } from "./redux/actions/data";
// import getDataReducer from "./redux/reducer/getDataReducer";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  let getApiData = useSelector((state) => state.getDataReducer);
  console.log("get", getApiData);

  const url =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  const [data, setData] = useState([]);
  getApiData = [...data];
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((dat) => setData(dat));

    dispatch(getData({ data }));
  }, []);
  console.log(data);

  return (
    <div className="App">
      <h1>Admin-UI</h1>
      <SearchBar />
      <List />
    </div>
  );
}
