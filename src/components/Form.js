import React, { memo, useState } from "react";
import { useSelector } from "react-redux";

function Form() {
  const state = useSelector((state) => state.CarReducer);

  const [searchText, setSearchtext] = useState("");
  const [location, setLocation] = useState(false);
  const [cars, setCars] = useState([]);
  const [years, setYears] = useState([]);
  const [spareparts, setSpareparts] = useState({});
  const [selectedModel, setSelectedmodel] = useState("");
  const [selectedYear, setSelectedyear] = useState("");
  const [spareError] = useState(false);

  const getUniqueCars = () => {
    let uniqueCars = [...state.cars].map((car) => car.model);
    setCars([...new Set(uniqueCars)]);
  };
  const getUniqueYears = () => {
    let uniqueYears = [...state.cars].map((car) => car.year);
    setYears([...new Set(uniqueYears)]);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    let hasLocation = state.branches.filter((branch) =>
      branch.includes(searchText.toLowerCase())
    );
    setLocation(!!hasLocation.length);
    getUniqueCars();
    getUniqueYears();
  };
  const getSpareParts = () => {
    let parts = state.cars.filter(
      (car) => car.model === selectedModel && car.year === selectedYear
    );
    setSpareparts(parts[0]);
  };
  const handleModelSelection = (e) => {
    setSelectedmodel(e.target.value);
  };
  const handleYearSelection = (e) => {
    setSelectedyear(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="location">Enter Location</label>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setSearchtext(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </div>
        </div>

        {location && (
          <>
            <div className="form-group">
              <label htmlFor="">Select car model and year</label>
              <div className="form-row">
                <div className="col">
                  <select
                    className="custom-select"
                    name="carnames"
                    defaultValue=""
                    onChange={handleModelSelection}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {cars.map((car, i) => (
                      <option key={i} value={car}>
                        {car}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <select
                    className="custom-select"
                    name="years"
                    defaultValue=""
                    onChange={handleYearSelection}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {years.map((year, i) => (
                      <option key={i} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-auto">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={getSpareParts}
                  >
                    Get
                  </button>
                </div>
              </div>
            </div>
            <div className="form-group">
              {spareparts.id && (
                <>
                  <div className="row">
                    <div className="col-4">ID</div>
                    <div className="col-8">{spareparts.id}</div>
                  </div>
                  <div className="row">
                    <div className="col-4">Car Model</div>
                    <div className="col-8">{spareparts.model}</div>
                  </div>
                  <div className="row">
                    <div className="col-4">Car Year</div>
                    <div className="col-8">{spareparts.year}</div>
                  </div>
                  <div className="row">
                    <div className="col-4">Spare Part</div>
                    <div className="col-8">{spareparts.partNo}</div>
                  </div>
                </>
              )}
              {spareError && (
                <div className="alert alert-danger" role="alert">
                  Spare part found
                </div>
              )}
            </div>
          </>
        )}
        {!location && cars.length > 0 ? (
          <div className="alert alert-danger" role="alert">
            Location not valid
          </div>
        ) : (
          ""
        )}
      </form>
    </>
  );
}

export default memo(Form);
