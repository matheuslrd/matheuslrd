import React from 'react';

import PropsTypes from 'prop-types';

// eslint-disable-next-line react/function-component-definition
function ServiceCard({ iconService, titleService, textService }) {
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

ServiceCard.propTypes = {
  iconService: PropsTypes.string.isRequired,
  titleService: PropsTypes.string.isRequired,
  textService: PropsTypes.string.isRequired,
};

export default ServiceCard;
