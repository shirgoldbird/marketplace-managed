import React, { Component } from 'react';
import connection from '../../airtable';
import Loading from '../Loading/Loading';
import './Portal.css';

class Portal extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, links: [] };
  }

  componentDidMount() {
    connection('Documents').select().all().then(records => {
      this.setState({ loading: false, links: records });
    }).catch(err => {
     console.log('error', err)
    });
  }

  render() {
    return (
      <div>
        {this.state.loading ? <Loading /> :
          <div>
            <p>View or download this year's exhibitor documentation here.</p>
            <ul>
              {this.state.links.map((link) => {
                if (link.fields["Link"]) {
                  return (
                    <li className="portal-link" key={link.id}>
                      <a href={link.fields["Link"]} target="_blank">{link.fields["Name"]}</a>
                      {link.fields["Notes"] ? <ul><li>{link.fields["Notes"]}</li></ul> : null}
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

export default Portal;
