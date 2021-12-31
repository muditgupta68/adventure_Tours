import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "../style/search.css";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [startDate, setStart] = useState(new Date());
  const [endDate, setEnd] = useState(new Date());
  const [ppl, setPpl] = useState(0);

  const searchData = {
    start: `${startDate.getDate()}/${startDate.getMonth()}/${startDate.getFullYear()}`,
    end: `${endDate.getDate()}/${endDate.getMonth()}/${endDate.getFullYear()}`,
    nop: ppl,
  };

  let handleClick = () => {
    localStorage.setItem("search", JSON.stringify(searchData));
    navigate("/fetch");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStart(ranges.selection.startDate);
    setEnd(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <div className="nop">
        <h3>No of people</h3>
        <div className="nop_value">
          <PeopleAltSharpIcon />
          <input
            type="number"
            placeholder="0"
            min={0}
            onChange={(e) => setPpl(e.target.value)}
          />
        </div>
      </div>
      <Button
        variant="outlined"
        className="search_buttons"
        onClick={handleClick}
      >
        Search Booking
      </Button>
    </div>
  );
}

export default Search;
