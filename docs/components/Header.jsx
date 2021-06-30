
var React = require('react')
var TweetButton = require('./TweetButton.jsx')
var createReactClass = require('create-react-class')

var Header = createReactClass({

  render: function () {
    return (
      <header className='py3'>
        <div className='sm-flex flex-center mxn2'>
          <div className='flex-auto px2 py3'>
            <h1 className='m0'>{this.props.title}</h1>
            <p className='h3 m0'>{this.props.description}</p>
          </div>
        </div>
        <TweetButton {...this.props} />
      </header>
    )
  }

})

module.exports = Header

