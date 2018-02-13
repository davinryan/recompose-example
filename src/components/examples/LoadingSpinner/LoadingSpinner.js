import React from "react";
import { compose, lifecycle, branch, renderComponent } from "recompose";
import WithLoadingSpinnerRecompose from "../../../containers/enhancers/recompose/withLoadingSpinner/WithLoadingSpinner";
import WithLoadingSpinner from "../../../containers/enhancers/without-recompose/withLoadingSpinner/WithLoadingSpinner";
import "./LoadingSpinner.css";

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          name: "Davin Ryan",
          interests: "Javascript, React and Recompose",
          gender: "male",
          height: "183cm"
        }),
      2000
    );
  });
};

const MyDetails = ({ name, interests, gender, height }) => (
  <div className="User">
    <h3>{name}</h3>
    <ul style={{ listStyle: "none" }}>
      <li>Interests: {interests}</li>
      <li>Gender: {gender}</li>
      <li>Height: {height}</li>
    </ul>
  </div>
);

const LoadingSpinnerExample = () => {
  const MyDetailsWithoutRecompose = WithLoadingSpinner(fetchData)(MyDetails);
  const MyDetailsWithRecompose = WithLoadingSpinnerRecompose(fetchData)(
    MyDetails
  );

  return (
    <div>
      <h2>Loading Spinner Example</h2>

      <h3>Without Recompose</h3>
      <div className="loadingSpinner-exampleBox">
        <MyDetailsWithoutRecompose />
      </div>

      <h3>With Recompose</h3>
      <div className="loadingSpinner-exampleBox">
        <MyDetailsWithRecompose />
      </div>
    </div>
  );
};

export default LoadingSpinnerExample;
