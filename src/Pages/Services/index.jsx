import React from 'react';
import { MdComputer, MdAccessibilityNew } from 'react-icons/md';
import { FiSmartphone } from 'react-icons/fi';
import { GiPencilRuler } from 'react-icons/gi';

import ServiceCard from './components/ServiceCard';

import StyledServices from './styles/services';

function Services() {
  return (
    <StyledServices>
      <section id="Services-Page">
        <h1
          className="Services-Title"
          data-aos="zoom-in"
          data-aos-delay="50"
        >
          Serviços
        </h1>
        <div className="Services-Container-Center">
          <ServiceCard
            iconService={<MdComputer size="2.9em" />}
            titleService="Criação de WebSite"
            textService="Desenvolvimento de sites, sistemas web, blogs e lojas online."
          />
          <ServiceCard
            iconService={<FiSmartphone size="2.9em" />}
            titleService="Sites Responsivos"
            textService={`Criação de sites responsivos para melhor
             visualização há todas resoluções.`}
          />
          <ServiceCard
            iconService={<GiPencilRuler size="2.9em" />}
            titleService="UI/IX Design"
            textService={`Design de layouts para se adequar ao seu negócio
             e ser fiel ao desenvolvimento.`}
          />
          <ServiceCard
            iconService={<MdAccessibilityNew size="2.9em" />}
            titleService="Códigos Semânticos"
            textService={`Estratégia ao seu negócio, fazendo que 
            seu site apareça cada vez mais nas pesquisas e mais acessível.`}
          />
        </div>
        <div>
          <div id="Skills" />
        </div>
      </section>
    </StyledServices>
  );
}

export default Services;
