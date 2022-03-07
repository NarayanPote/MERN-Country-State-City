import React, { Component, Fragment } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";

class Dependent extends Component {
  constructor() {
    super();

    this.state = {
       _id: "",
      country: "",
      state: "",
      StateData: [],
      CountryData: [],
      CityData: [],
    };
  }

 

  componentDidMount() {
    axios.post("http://localhost:5000/api/countries-data").then((response) => {
      //  console.log(response.data);
      this.setState({
        CountryData: response.data,
      });
    });
  }

  ChangeteState = (e) => {
    this.setState({ _id: e.target.value });
    axios
      .get("http://localhost:5000/api/states-data/" + e.target.value)
      .then((response) => {
        console.log(response.data);
        this.setState({
          StateData: response.data,
        });
      });
  };

  ChangeteCity = (e) => {
    this.setState({ state: e.target.value });
    console.log(e.target.value);
    axios
      .get("http://localhost:5000/api/city-data/" + e.target.value)
      .then((response) => {
        console.log(response.data);
        this.setState({
          CityData: response.data,
        });
      });
  };

  render() {

    return (
      <div>
        <div className="d-flex" id="wrapper">
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <h4 className="mt-2 text-primary" align="center">
                Country-State-City In MERN
              </h4>
              <hr></hr>

              <form align="center">
                {/*start - Legislative assembly */}

                <div className="row">
                  <div className="col-md-3">
                    <label htmlFor="">Country:</label>
                    <select
                      id=""
                      name="country"
                      value={this.state._id}
                      onChange={this.ChangeteState}
                    >
                      <option value="">Please select Country</option>
                      {this.state.CountryData.map((e, key) => {
                        return (
                          <option key={key} value={e._id}>
                            {e.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <br />

                  <div className="col-md-3">
                    <label htmlFor="">State:</label>
                    <select
                      id=""
                      value={this.state.state}
                      onChange={this.ChangeteCity}
                    >
                      <option value="">Please select State</option>
                      {this.state.StateData.map((e, key) => {
                        return (
                          <option key={key} value={e._id}>
                            {e.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <br />

                  <div className="col-md-3">
                    <label htmlFor="">City :</label>
                    <select id="">
                      <option value="">Please select Seats</option>
                      {this.state.CityData.map((e, key) => {
                        return (
                          <option key={key} value={e._id}>
                            {e.name}
                          </option>
                        );
                      })}
                    </select>
                    <span className="text-danger"></span>
                  </div>
                </div>

                {/* End - Legislative assembly */}
              </form>
            </div>
          </div>

          <ToastContainer />
        </div>
      </div>
    );
  }
}

export default Dependent;
