var React = require('react'),
  $ = React.DOM,
  _ = require('lodash'),
  fetch = require('../util/fetch'),
  get = require('../util/util').get;

module.exports = React.createClass({
  // getInitialState: function() {
  //   console.log(this.props)
  //   return {
  //     event: get(this.props.data.event, this.props.id),
  //     rsvp: get(this.props.data.rsvp, this.props.id)
  //   }
  // },
  // componentWillReceiveProps: function(props) {
  //   this.setState({
  //     event: get(this.props.data.event, this.props.id),
  //     rsvp: get(this.props.data.rsvp, this.props.id)
  //   })
  // },
  componentDidMount: function() {
    fetch('event', this.props.id)
    // fetch('people', this.props.id)
  },
  render: function() {
    return $.div(null, [
      $.h1({key: 'name'}, get(get(this.props.data.event, this.props.id), 'name')),
      $.div({key: 'description', dangerouslySetInnerHTML: {
        __html: get(get(this.props.data.event, this.props.id), 'description')}})
    ])
    // return $.div(null, [
    //   $.h1({key: 'event.name'}, get(get(get(this.props.data, 'event'),
    //     this.props.id), 'name')),
    //   $.div({key: 'event.description', dangerouslySetInnerHTML: {
    //     __html: get(get(get(this.props.data, 'event'), this.props.id),
    //       'description')}}),
    //   $.h3({key: 'h3'}, 'Attendees:'),
    //   $.ul({key: 'ul'}, [
    //     _.map(get(get(this.props.data.rsvp, this.props.id), 'results'),
    //       function(r, i) {
    //         return $.li({key: i}, r.member.name)
    //       })
    //   ])
    // ])
  }
})
