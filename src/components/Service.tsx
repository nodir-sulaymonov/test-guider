import React from 'react';
import Card from './Card';

import {SERVICES} from '../data';
import "./Service.css"

type ServiceProps = {
};

const Service: React.FC<ServiceProps> = ({}) => {
  return (
    <div className="service">
      <div className="description">
          <h2 className="title">Сервис</h2>
          <p className="subtitle">От идеи до незабываемого и измеримого результата.</p>
          <div className="divider"></div>
          <div className="textDescription">
            Интеграция безупречного производства, передовых технологий и тщательного измерения производительности
          </div>
      </div>
        <div className="cardWrapper">
            {SERVICES.map((item, i) => (
                <Card key={i} srcImg={item.srcImg} title={item.title} description={item.description} />
            ))}
        </div>
    </div>
  );
};

export default Service;
