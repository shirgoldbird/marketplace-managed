import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDocuments } from '../../actions/documentActions';
import Loading from '../Loading/Loading';
import './Portal.css';

class Portal extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDocuments());
  }

  render() {
    const { isFetching, items } = this.props;
    return (
      <div>
        {isFetching ? <Loading /> :
          <div>
            <p>View or download this year's exhibitor documentation here.</p>
            <ul>
              {items.map((link) => {
                if (link["Link"]) {
                  return (
                    <li className="portal-link" key={link.id}>
                      <a href={link["Link"]} target="_blank">{link["Name"]}</a>
                      {link["Notes"] ? <ul><li>{link["Notes"]}</li></ul> : null}
                      {/* <Glyphicon className="portal-download" glyph="download-alt" /> */}
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { document } = state;
  const {
    isFetching,
    items
  } = document;

  return {
    isFetching,
    items
  }
}

export default connect(mapStateToProps)(Portal);
