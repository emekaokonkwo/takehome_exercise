import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { catFetch, nextCat, prevCat } from '../actions/index';
import ReactLoading from 'react-loading';


class Home extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.props.catFetch()
  }

  render() {
    const image = this.props.cats[this.props.index];
    console.log(this.props.cats)
    return this.props.cats.length ? (
      <div class="ui container">
        <iframe src={image}> </iframe>
        {this.props.index}
        
        <button class="ui negative button" disabled={this.props.index === 0} onClick={this.props.prevCat}>Previous</button>
        <button class="ui positive button" disabled={this.props.index === this.props.cats.length - 1} onClick={this.props.nextCat}>Next</button>
        <hr></hr>
      </div>
    ) : <div><ReactLoading type="spokes" color="blue" height={667} width={375} />
    </div>
  }
}

const mapStateToProps = (state, props) => {
  return {
    cats: state.home.cats,
    index: state.home.index
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    catFetch,
    nextCat,
    prevCat
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);