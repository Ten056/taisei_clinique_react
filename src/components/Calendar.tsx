import { useEffect } from 'react'
const Calendar = () => {
  const cal = useEffect(() => {
    const head = document.getElementsByTagName('head')[0] as HTMLElement;
    const scriptUrl = document.createElement('script');
    scriptUrl.type = 'text/javascript';
    scriptUrl.src = './resources/js/hemo_cal.js';
    head.appendChild(scriptUrl);
  }, []);
  
  return (
    <>
      <div className="c-heading">
        <h2 className="c-heading__title">診療日のご案内</h2>  
      </div>
      <div id="cal0" className="cal_wrapper" style={{margin: '-30px 0 -10px'}}>
        Calendar Loading
      </div>
      <p className="u-txt-center c-heading3 u-text-red"><span className="calbox"></span>は休診日</p>
      <div className="c-heading" style={{marginBottom: '-20px'}}></div>
      {Calendar}
    </>
    
  )
}

export default Calendar;