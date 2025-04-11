import React from 'react';
import { Icon } from '@iconify/react';

const Workflow = () => {
  return (
    <div className="workflow-container">
      {/* Citation en haut */}
      <div className="workflow-citation">
        <p className="workflow-citation-text">
          "Le succès d’un projet dépend de l'organisation, de la préparation et de la persévérance à chaque étape."
        </p>
      </div>

      {/* Étapes du workflow */}
      <div className="workflow-steps">
        <div className="workflow-step">
          <Icon className="step-icon" icon="mdi:lightbulb-on" width="50" height="50" />
          <p className="step-title">Étape 1</p>
          <p className="step-description">Comprendre vos besoins</p>
        </div>
        <div className="workflow-arrow">
          <Icon icon="akar-icons:arrow-right" width="30" height="30" />
        </div>
        <div className="workflow-step">
          <Icon className="step-icon" icon="mdi:hammer-screwdriver" width="50" height="50" />
          <p className="step-title">Étape 2</p>
          <p className="step-description">Conception de la solution</p>
        </div>
        <div className="workflow-arrow">
          <Icon icon="akar-icons:arrow-right" width="30" height="30" />
        </div>
        <div className="workflow-step">
          <Icon className="step-icon" icon="mdi:check-circle" width="50" height="50" />
          <p className="step-title">Étape 3</p>
          <p className="step-description">Validation et Test</p>
        </div>
        <div className="workflow-arrow">
          <Icon icon="akar-icons:arrow-right" width="30" height="30" />
        </div>
        <div className="workflow-step">
          <Icon className="step-icon" icon="mdi:rocket" width="50" height="50" />
          <p className="step-title">Étape 4</p>
          <p className="step-description">Lancement et suivi</p>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
