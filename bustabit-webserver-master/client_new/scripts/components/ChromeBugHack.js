define([
  'react'
], function(
  React
) {
  var D = React.DOM;


  return React.createClass({
    displayName: 'ChromeBugHack',
    mixins: [React.addons.PureRenderMixin],

    propTypes: {
      onMount: React.PropTypes.func.isRequired
    },

    componentDidMount: function() {
      this.props.onMount();
    },

    render: function() {
      return D.div();
    }

  });
});