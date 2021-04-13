import React from 'react';
import { Link } from 'react-router-dom';

const GoldAndFiat = () => {
   return (
      <div className='blog'>
         <h2 className='blog__title'>Gold, FIAT and their history</h2>
         <h2 className='blog__title blog__title--secondary'>
            Why FIAT currencies are bound to collapse
         </h2>
         <div
            alt='fiat'
            className='blog__title--image blog__title--image-fiat'
         />
         <p className='blog__text'>
            We live in the first period of recorded history where no country has
            a currency which is backed by anything.
            <br />
            <br /> First for those of you who don’t know I will explain the
            difference between gold backed money and fiat currency. <br />
            As the name implies, gold backed money can be exchanged for gold, in
            the early 1900s for example 35 dollars could be exchanged for 1
            ounce of gold.
            <br />
            Fiat currency on the other hand (fiat is Latin for “it shall be”),
            is not backed by anything. <br />
            And as you will find out there are great risks to this system.{' '}
            <br />
            <br />
         </p>
         <div alt='fiat' className='blog__title--image-claudius' />
         <br />
         <p className='blog__text'>
            Let’s first take a step back to look at the great Roman empire.
            <br />
            <br />
            Existing for over 1000 years, al whilst massively expanding its
            territory, surely they must have had good monetary policy, right?
            <br />
            The answer is, in the beginning they did, but they ended up debasing
            their money which eventually led to hyperinflation and the collapse
            of the entire empire. <br /> <br />
            So if debasement leads to inflation, which in turn removes the
            peoples trust in their rulers and currency, why do it?
            <br />
            <br />
            With a finite supply of gold and silver entering the empire, there
            was a limited amount of coins that could be minted. <br />
            So if the Roman officials wanted to spend more than they taxed, they
            would have to go into debt. They found another solution. <br />
            <br />
            One of the main reasons why the Romans did it was because they had
            an army which was to large to keep operational with their current
            budget. <br />
            And because expansion was so important they decided to start
            clipping the gold edges off of the coins. <br />
            This led to slowly debasing the currency, doing this it granted the
            government and politicians the power to spend more but the Roman
            people became poorer. <br />
            <br />
         </p>
         <div alt='fiat' className='blog__title--image-debasement' />
         <p className='blog__text'>
            <br />
            The debasing continued until eventually there was no more valuable
            metal left inside the coins, so their money effectively turned into
            a fiat currency. <br />
            Though throughout this process, the politicians and upper classes
            hardly felt the effects of the inflation, because they could still
            keep their own gold standard.
            <br />
            <br /> At a certain point however the Roman people didn’t want to
            use the Roman coins anymore. <br />
            Government officials were finding more and more radical ways to try
            and enforce usage, eventually forcing businesses to use their
            currency or receive the death penalty. <br />
            This resulted in people not wanting to do business anymore, it was
            simply not profitable. Eventually leading to civil wars, barbarian
            invasions and finally the collapse of the empire.
            <br />
            <br />
            What lessons can be learned here? <br /> <br />
            Gold backed currencies keeps politicians accountable and government
            small, while Fiat currencies by their design incentivize deficit
            spending leading to big government and devalued savings and income
            of the citizens. <br />
            <br />
            Now let’s head back to the present, how did we end up with our
            global fiat experiment. <br /> <br />
            Well like the Romans before us we started with backed money. <br />
            Shortly after world war 2 major representatives from a lot of
            countries gathered at the Breton woods conference. <br />
            Here they decided that America, having the strongest economy could
            be chosen as the world’s reserve currency, with the dollar being
            backed by gold. <br />
            So in effect all currencies were backed by gold. <br />
            <br />
            The American government was sitting comfortably on nearly 75% of the
            worlds gold reserves so there was a lot of confidence in the system.{' '}
            <br />
            This confidence eroded over time and two decades later France and
            other countries called out America’s bluff and wanted to convert
            large amounts of dollars for gold. <br /> America with economic
            pressures at the time and needing to pay for the Vietnam war was in
            a difficult spot. <br />
            They did not want to weaken their position towards other countries.
            <br />
            <br />
         </p>
         <div alt='fiat' className='blog__title--image-nixon' />
         <br />
         <p className='blog__text'>
            So in August 15th 1971, Richard Nixon “temporarily” suspended the
            convertibility of the dollar into gold.
            <br /> <br />
            One of the reasons why they said it would be temporary was because
            they expected a lot of protest against this measure. Suprisingly
            there was little to nothing. <br />
            Needless to say we are still on this "backed by nothing" fiat
            currency today. <br />
            As a result for the past 50 years we saw gold, which used to be
            pegged at 35 dollar, rise to 1700 dollars at the time that I am
            writing this.
         </p>
         <br />
         <br />
         <div alt='fiat' className='blog__title--image-fed' />
         <br />
         <p className='blog__text'>
            The chart above represents the amount of dollars in circulation and
            as you can see inflation has reached insane levels where more then
            3/4 of the dollars in circulation was printed last year.
            <br />
            The fed has recently decided to discontinue releasing these
            numbers...
            <br />
            <br />
            So where do we go from here?
            <br />
            <br />
            Well{' '}
            <a
               href='https://en.wikipedia.org/wiki/Gresham%27s_law'
               target='_blank'
               className='blog__text--link'
            >
               Gresham's law
            </a>{' '}
            would predict that people will turn to better money.
            <br />
            You could argue that this is Bitcoin as its value keeps rising
            amidst this inflation.
            <br />
            My prediction is that governments will try to keep the public from
            using alternatives and eventually introduce their own digital
            currency.
            <br />
            <br />
            One thing is certain, this global fiat experiment is nearing its
            end. <br /> And I hope we don't have to suffer the same fate as the
            Roman's did.
         </p>
         <br />
         <br />
         <br />
         <br />
         <div className='blog__sources'>
            <h4>Sources:</h4>
            <ul>
               <li>
                  Roman coin pictures by Rasiel at English Wikipedia, CC BY-SA
                  3.0, https://commons.wikimedia.org/w/index.php?curid=18727192
               </li>
               <li>
                  M1 Money Stock chart https://fred.stlouisfed.org/series/M1
               </li>
            </ul>
         </div>
         <br />
         <br />
         <br />
         <br />
         <Link className='blog__return' to='/blog'>
            &#11176;
            <span className='blog__return--back'>back</span>
         </Link>
         <Link className='blog__return blog__return--mobile' to='/blog'>
            <span className='blog__return--back'>back</span>
         </Link>
      </div>
   );
};

export default GoldAndFiat;
