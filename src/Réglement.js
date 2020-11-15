import React from 'react';
import './css/reglement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu2 from './Navbar/Menu2';

const Réglement = () => {
    return (
        <>
            <Menu2 />
            <div className="album py-5 bg-light">
                <h3 className="title3">Notre charte environnementale</h3>
                <div className="bg-white shadow-sm mx-auto" style={{
                    width: '50%',
                    height: '30%',
                    borderRadius: '21px 21px 0 0',
                    padding: '2%',
                    fontSize: 'larger'
                }}>
                    Nous avons un engagement mutuel pour la
      <b>préservation de la nature</b> et des lieux que nous visitons, et cela ne
      date pas d’hier.
      <br />
                    <br />
      Nous tenons à faire passer <b>un message raisonné et raisonnable </b> et
      à amener chacun à comprendre son rôle pour préserver l’environnement.
      <br />
                    <br />
      Pour cela nous avons décidé d’instaurer des <b>règles</b> qui devront
      être <b> respectées</b> par tous les particpants lors des sorties. <br />
                    <br />
      La priorité est de <b> minimiser les déchets </b> et surtout <b>l'usage du plastique</b> . Ainsi: <br />
                    <br />
                    <b> 1-</b>Remplacez les bouteilles d’eau minérale par des grandes
      gourdes.
      <br />
                    <br />
                    <b> 2-</b>Si vous souhaitez ramener des yaourts ou autres produits
      emballés, veillez à les vider dans des bocaux ou des boîtes
      alimentaires. <br />
                    <br />
                    <b> 3-</b>Remplacez les sacs en plastique par des tote-bags, des sacs en
      tissu ou des paniers. <br />
                    <br />
                    <b> 4-</b>Remplacez les gobelets jetables par des verres réutilisables
      et incassables. <br />
                    <br />
                    <b> 5-</b>Pas d’assiettes ni de couverts jetables, optez plutôt pour de
      la vaisselle résistante réutilisable. <br />
                    <br />
                    <b> 6-</b>Respectons en tout lieu la faune et la flore.<br />
                    <br />
                    <b> Tous nos événements sont sans alcool.</b>
                </div>
            </div>
        </>
    );
};
export default Réglement;