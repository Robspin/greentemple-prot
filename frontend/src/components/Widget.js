import React from 'react';

export default class Widget extends React.Component {
   constructor(props) {
      super(props);
      this.myRef = React.createRef();
   }

   componentDidMount() {
      console.log(this.props.url);
      const script = document.createElement('script');
      script.src = `https://s3.tradingview.com/${this.props.url}`;
      script.async = false;
      script.innerHTML = JSON.stringify(this.props.config);
      this.myRef.current.appendChild(script);
   }

   render() {
      return (
         <div
            className='tradingview-widget-container widget-padding'
            ref={this.myRef}
         >
            <div
               className='tradingview-widget-container__widget'
               id='tradingview_ee1ce'
            ></div>
         </div>
      );
   }
}
