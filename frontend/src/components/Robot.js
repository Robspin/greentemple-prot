import React, { useContext, useEffect, useState } from 'react';
import TempleContext from '../TempleContext';

const Robot = () => {
   const { trades, botActive } = useContext(TempleContext);
   const [active, setActive] = useState(true);
   console.log(trades, botActive);

   useEffect(() => {
      setActive(botActive);
   }, [trades, botActive]);

   return <div>ROBOT {active ? 'LIVE' : 'NOT LIVE'}</div>;
};

export default Robot;
