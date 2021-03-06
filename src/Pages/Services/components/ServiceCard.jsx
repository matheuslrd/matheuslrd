import React from 'react';

import PropsTypes from 'prop-types';

function ServiceCard({ iconService, titleService, textService }) {
  return (
    <div
      className="Service"
      data-aos="zoom-in"
      data-aos-delay="50"
    >
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

ServiceCard.propTypes = {
  iconService: PropsTypes.node.isRequired,
  titleService: PropsTypes.string.isRequired,
  textService: PropsTypes.string.isRequired,
};

export default ServiceCard;
