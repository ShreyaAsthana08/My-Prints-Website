import React from 'react';
import styled from 'styled-components';

const Card = ({ title, description, image, price, discount }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img src={image} alt={title} className="card__image" />
        <div className="card__content">
          <p className="card__title">{title}</p>
          <p className="card__price">₹{price} {discount > 0 && <span className="card__discount">({discount}% off)</span>}</p>
          <p className="card__description">{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 250px;
    height: 350px;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
    flex-direction: column;
  }

  .card__image {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  .card__content {
    padding: 15px;
    background: #fff;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    transition: all 0.6s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card__title {
    font-size: 20px;
    font-weight: bold;
    margin: 5px 0;
    color: #333;
  }

  .card__price {
    font-size: 18px;
    color: #222;
  }

  .card__discount {
    font-size: 14px;
    color: #e60023;
    margin-left: 5px;
  }

  .card__description {
    font-size: 14px;
    color: #666;
    margin-top: 10px;
  }
`;

export default Card;
