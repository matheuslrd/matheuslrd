import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';

function AbstractAboutMe() {
  const birthday = '13/12/2000';

  const calculateAge = (birthDate) => {
    const birth = moment(birthDate, 'DD/MM/YYYY');
    const age = moment().diff(birth, 'years');

    return age;
  };

  return (
    <>
      <h2 className="Title-About-Me">Quem Sou Eu?</h2>
      <br />
      <p className="About-Me-Matheus">
        Meu nome é Matheus Laurindo, tenho
        {' '}
        {calculateAge(birthday)}
        {' '}
        anos e moro em Gravataí/RS.
        <br />
        Sou apaixonado por filmes, tecnologia e praticar exercícios físicos.
      </p>
      <br />
      <p>
        Sou formado em
        <b> Tecnologia Da Informação </b>
        pela
        <i> QI Escolas e Faculdades </i>
        e atualmente estudo
        <b> Desenvolvimento Web </b>
        na
        <i> Trybe. </i>
      </p>
    </>
  );
}

export default AbstractAboutMe;
