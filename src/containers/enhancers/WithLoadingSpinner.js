const { Component } = React;
const { compose, lifecycle, branch, renderComponent } = Recompose;

const withUserData = lifecycle({
  state: { loading: true },
  componentDidMount() {
    fetchData().then((data) =>
      this.setState({ loading: false, ...data }));
  }
});

const Spinner = () =>
  <div className="Spinner">
    <div className="loader">Loading...</div>
  </div>;

const isLoading = ({ loading }) => loading;

const withSpinnerWhileLoading = branch(
  isLoading,
  renderComponent(Spinner)
);

const enhance = compose(
  withUserData,
  withSpinnerWhileLoading
);

const User = enhance(({ name, status }) =>
  <div className="User">{name}—{status}</div>
);

const App = () =>
  <div>
    <User />
  </div>;
