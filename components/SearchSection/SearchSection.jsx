import React, { useState } from "react";
import styles from "./searchSection.module.css";
import Select from "react-select";
import { Slider, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { filter_universities } from "../../redux/actions/";
import Loader from "../Loader/Loader";

export default function SearchSection() {
  const dispatch = useDispatch();

  const [price, setPrice] = useState([50000, 2000000]);
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({
    price: null,
    location: null,
    language: null,
    degree: null,
  });

  const changePrice = (e, range) => {
    setPrice(range);
    setData({ ...data, price: [...range] });
  };

  const submit = async () => {
    setIsLoading(true)
    await dispatch(filter_universities(data));
    setIsLoading(false)
  };

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#0971f1",
        darker: "#053e85",
      },
      secondary: {
        main: "#fff",
        darker: "#ccc",
      },
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  return (
    <div className="container py-3">
      <div className="row mb-3 pe-2">
        <div className="col-6 col-sm-4 col-lg-3 p-1">
          <label className="text-white">Degree</label>
          <Select
            isClearable={true}
            options={degrees}
            onChange={(e) => e && setData({ ...data, degree: e.value })}
          />
        </div>
        <div className="col-6 col-sm-4 col-lg-3 p-1">
          <label className="text-white">location</label>
          <Select
            isClearable={true}
            options={locations}
            onChange={(e) => e && setData({ ...data, location: e.value })}
          />
        </div>
        <div className="col-12 col-sm-4 col-lg-3 p-1">
          <label className="text-white">language</label>
          <Select
            isClearable={true}
            options={languages}
            onChange={(e) => e && setData({ ...data, language: e.value })}
          />
        </div>
        <div className="col-2 col-sm-2 p-1 d-none d-lg-block ">
          <label className="invisible" htmlFor="">
            Yaya
          </label>
          <button
            onClick={submit}
            className={`btn  d-flex justify-content-center align-items-center w-100  btn-sm ${styles.search_btn}`}
          >
            {isLoading ? <Loader /> : 
              <div className="d-flex align-items-center">
                <i className="fas fa-search"></i>
                <span className="d-none d-sm-block fa-x2 ms-1">Filter</span>
              </div>
            }
          </button>
        </div>
      </div>
      <div className="mb-3 pt-1 text-white px-2 px-lg-0">
        <div className="row">
          <div className="col-12 col-lg-3 px-0 ">
            <div className="d-flex">
              <span>
                {"Price"}: &nbsp;&nbsp;
                <NumberFormat
                  value={price[0]}
                  className="foo"
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={" fcfa"}
                />
                &nbsp;&nbsp; - &nbsp; &nbsp;
                <NumberFormat
                  value={price[1]}
                  className="foo"
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={" fcfa"}
                />
              </span>
            </div>
            <div className="px-2">
              <ThemeProvider theme={theme}>
                <Slider
                  step={10000}
                  min={50000}
                  max={2000000}
                  onChange={changePrice}
                  value={price}
                  classes={{ thumbColorSecondary: 'red' }}
                  color="secondary"
                />
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 d-block d-lg-none mt-4">
          <button
            onClick={submit}
            className={`btn  d-flex justify-content-center align-items-center w-100 py-2 ${styles.search_btn}`}
          >
            {isLoading ? <Loader/> : 
              <div className="d-flex align-items-center">
                <i className="fas fa-search"></i>
                <span className="fa-x2 ms-1">Filter</span>
              </div>
            }
          </button>
        </div>
    </div>
  );
}

const degrees = [
  { value: "masters", label: "Masters" },
  { value: "bachelors", label: "Bachelors" },
  { value: "phd", label: "Phd" },
];

const languages = [
  { value: "english", label: "English" },
  { value: "french", label: "French" },
];

const locations = [
  { value: "ADAMAWA REGION", label: "Adamawa region" },
  { value: "EAST REGION", label: "East region" },
  { value: "SOUTH WEST REGION", label: "South West region" },
  { value: "CENTRE REGION", label: "Center region" },
  { value: "FAR NORTH REGION", label: "Far North region" },
  { value: "LITTORAL REGION", label: "Littoral region" },
  { value: "NORTH REGION", label: "North region" },
  { value: "NORTH WEST REGION", label: "North West region" },
  { value: "WEST REGION", label: "West region" },
  { value: "SOUTH REGION", label: "South region" },
];
