const CatchPhrase = () => {
  return (
    <div className="p-mainvisual"><div className="p-mainvisual_hemo_inner">
    <div className="p-mainvisual__image pc" style={{backgroundImage: 'url(./resources/img/p-mainvisual/img-04.jpg)'}}></div>
    <div className="p-mainvisual__image sp" style={{backgroundImage: 'url(./resources/img/p-mainvisual/img-04-sp.jpg)'}}></div>
    <div className="p-mainvisual_insp_textbox">
      <h2 className="p-mainvisual_insp_title u-text-navy2">肛門外科</h2>
      <p className="p-mainvisual_insp_text u-text-navy2" style={{textShadow: '1px 1px 0px #fff'}}>
        年間<span className="u-text-pink2">1,200</span>件の手術実績
      </p>
      <a href="./resources/pdf/graph.pdf"><img src="./resources/img/hemo2/byouinno.png" alt="" /></a>
    </div>
    </div></div>
    
  );
};

export default CatchPhrase;