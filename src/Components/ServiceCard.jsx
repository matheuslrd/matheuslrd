import React, { Component } from 'react';

class ServiceCard extends Component {
  render() {
    const { iconService, titleService, textService } = this.props;
    return (
      <div className="Service">
        <section className="Icon-Service">
          { iconService }
        </section>
        <h3 className="Title-Service">
          { titleService }
        </h3>
        <p className="Text-Service">
          { textService }
        </p>
      </div>
    );
  }
}

export default ServiceCard;
