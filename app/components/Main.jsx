var React = require('react');

var Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="column medium-6 large-4 small-centered">{props.children}</div>
                                  {/*default: small-12, implicit*/}
      </div>
    </div>
  );
}

module.exports = Main;
