import React from 'react';
import { useQuery } from 'react-query';
import "./Card.css"

type CardProps = {
    srcImg?: string,
    title: string,
    description?: string,
};

const Card: React.FC<CardProps> = ({
    srcImg,
    title,
    description
}) => {


    const handleClick = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        return res.json();
    };

    const {data, error, isLoading} = useQuery('randomFacts', handleClick);
  return (
    <div className="card">
      <img className="cardImg" src={srcImg} alt={srcImg} width={150} height={80} />
      <h3 className="cardTitle">{title}</h3>
      <div className="cardDescription">{description}</div>
      <button className="buttonSubmit" onClick={handleClick}>Подробнее</button>
    </div>
  );
};

export default Card;
