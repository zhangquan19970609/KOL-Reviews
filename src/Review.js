import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [displayIndex, setDisplayIndex] = useState(0);

  const checkNumber = (number) => {
    if (number + 1 > people.length) {
      return 0
    } else if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  }

  const handleNextClick = () => {
    const number = displayIndex + 1;
    setDisplayIndex(checkNumber(number));
  }

  const handlePrevClick = () => {
    const number = displayIndex - 1;
    setDisplayIndex(checkNumber(number));
  }
  
  const handleRandomClick = () => {
    let number = Math.floor(Math.random() * people.length);
    if (number === displayIndex) {
      number = number - 1;
    }
    setDisplayIndex(number);
    console.log(number);
  }



  return <article className='review'>
    <div className='img-container'>
      <img src={people[displayIndex].image} alt={people[displayIndex].name} className='person-img'/>
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{people[displayIndex].name}</h4>
    <p className='job'>{people[displayIndex].job}</p>
    <p className='info'>{people[displayIndex].text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={handlePrevClick}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={handleNextClick}>
        <FaChevronRight />
      </button>
    </div>
    <button className='random-btn' onClick={handleRandomClick}>Surprise Me</button>
  </article>
};

export default Review;

// 在 "array 尽头重新循环" 问题上，虽找到思路但无法实现。
  // 最终发现应该： 
  // const checkNumber = (number) => {
  //   if (number + 1 > people.length) {
  //     return 0
  //   } else if (number < 0) {
  //     return people.length - 1;
  //   } else {
  //     return number
  //   }
  // }

  // const handleNextClick = () => {
  //   const number = displayIndex + 1;
  //   setDisplayIndex(checkNumber(number));
  // }

  // const handlePrevClick = () => {
  //   const number = displayIndex - 1;
  //   setDisplayIndex(checkNumber(number));
  // }

// 随机数的选取，为了避免重复，应在本轮随机数和上轮 index 相等时，+ 1 或 -1.
  // const handleRandomClick = () => {
  //   let number = Math.floor(Math.random() * people.length);
  //   if (number === displayIndex) {
  //     number = number - 1;
  //   }
  //   setDisplayIndex(number);
  //   console.log(number);
  // }