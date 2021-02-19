import React, { useState } from 'react';

const BitcoinTest = () => {
   const [questionCounter, setQuestionCounter] = useState(0);
   const [score, setScore] = useState(0);

   return (
      <div className='bitcoin-test'>
         <div
            className={
               questionCounter === 0
                  ? 'bitcoin-test__start-container'
                  : 'bitcoin-test__start-container bitcoin-test__move-left'
            }
         >
            <div className='bitcoin-test__title'>Should you buy Bitcoin?</div>
            <button
               onClick={() => setQuestionCounter(1)}
               className='bitcoin-test__button'
            >
               START TEST
            </button>
         </div>

         <div
            className={
               questionCounter === 1
                  ? 'bitcoin-test__questions-div bitcoin-test__move-middle'
                  : questionCounter > 1
                  ? 'bitcoin-test__questions-div bitcoin-test__move-left'
                  : 'bitcoin-test__questions-div'
            }
         >
            <div className='bitcoin-test__title'>
               Do you have money to invest you can afford to lose?
            </div>
            <div>
               <button
                  onClick={() => {
                     setScore(score + 1);
                     setQuestionCounter(2);
                  }}
                  className='bitcoin-test__button bitcoin-test__button--margin-right'
               >
                  YES
               </button>
               <button
                  onClick={() => setQuestionCounter(2)}
                  className='bitcoin-test__button'
               >
                  NO
               </button>
            </div>
         </div>
         <div
            className={
               questionCounter === 2
                  ? 'bitcoin-test__questions-div bitcoin-test__move-middle'
                  : questionCounter > 2
                  ? 'bitcoin-test__questions-div bitcoin-test__move-left'
                  : 'bitcoin-test__questions-div'
            }
         >
            <div className='bitcoin-test__title'>
               Would you like to be your own bank?
            </div>
            <div>
               <button
                  onClick={() => {
                     setScore(score + 1);
                     setQuestionCounter(3);
                  }}
                  className='bitcoin-test__button bitcoin-test__button--margin-right'
               >
                  YES
               </button>
               <button
                  onClick={() => setQuestionCounter(3)}
                  className='bitcoin-test__button'
               >
                  NO
               </button>
            </div>
         </div>

         <div
            className={
               questionCounter === 3
                  ? 'bitcoin-test__questions-div bitcoin-test__move-middle'
                  : questionCounter > 3
                  ? 'bitcoin-test__questions-div bitcoin-test__move-left'
                  : 'bitcoin-test__questions-div'
            }
         >
            <div className='bitcoin-test__title'>Do you like inflation?</div>
            <div>
               <button
                  onClick={() => setQuestionCounter(4)}
                  className='bitcoin-test__button bitcoin-test__button--margin-right'
               >
                  YES
               </button>
               <button
                  onClick={() => {
                     setScore(score + 1);
                     setQuestionCounter(4);
                  }}
                  className='bitcoin-test__button'
               >
                  NO
               </button>
            </div>
         </div>

         <div
            className={
               questionCounter === 4
                  ? 'bitcoin-test__questions-div bitcoin-test__move-middle'
                  : questionCounter > 4
                  ? 'bitcoin-test__questions-div bitcoin-test__move-left'
                  : 'bitcoin-test__questions-div'
            }
         >
            <div className='bitcoin-test__title'>
               Would you like to have unconfiscatable wealth?
            </div>
            <div>
               <button
                  onClick={() => {
                     setScore(score + 1);
                     setQuestionCounter(5);
                  }}
                  className='bitcoin-test__button bitcoin-test__button--margin-right'
               >
                  YES
               </button>
               <button
                  onClick={() => {
                     setQuestionCounter(5);
                  }}
                  className='bitcoin-test__button'
               >
                  NO
               </button>
            </div>
         </div>

         <div
            className={
               questionCounter === 5
                  ? 'bitcoin-test__questions-div bitcoin-test__move-middle'
                  : questionCounter > 5
                  ? 'bitcoin-test__questions-div bitcoin-test__move-left'
                  : 'bitcoin-test__questions-div'
            }
         >
            <div className='bitcoin-test__title'>
               Are you interested in learning about money and what gives it
               value?
            </div>
            <div>
               <button
                  onClick={() => {
                     setScore(score + 1);
                     setQuestionCounter(6);
                  }}
                  className='bitcoin-test__button bitcoin-test__button--margin-right'
               >
                  YES
               </button>
               <button
                  onClick={() => {
                     setQuestionCounter(6);
                  }}
                  className='bitcoin-test__button'
               >
                  NO
               </button>
            </div>
         </div>

         <div
            className={
               questionCounter === 6
                  ? 'bitcoin-test__questions-div bitcoin-test__move-middle'
                  : questionCounter > 6
                  ? 'bitcoin-test__questions-div bitcoin-test__move-left'
                  : 'bitcoin-test__questions-div'
            }
         >
            <div className='bitcoin-test__title'>
               Do you want to own the best performing commodity in the last 10
               years?
            </div>
            <div>
               <button
                  onClick={() => {
                     setScore(score + 1);
                     setQuestionCounter(7);
                  }}
                  className='bitcoin-test__button bitcoin-test__button--margin-right'
               >
                  YES
               </button>
               <button
                  onClick={() => {
                     setQuestionCounter(7);
                  }}
                  className='bitcoin-test__button'
               >
                  NO
               </button>
            </div>
         </div>
         <div
            className={
               questionCounter === 7
                  ? 'bitcoin-test__questions-div bitcoin-test__move-middle'
                  : 'bitcoin-test__questions-div'
            }
         >
            <div className='bitcoin-test__title'>
               {`Your score is ${score} ${
                  score > 3 ? 'Bitcoin is for you' : 'Bitcoin is not for you'
               }`}
            </div>
         </div>
      </div>
   );
};

export default BitcoinTest;
