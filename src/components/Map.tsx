const Map = () => {
  return (
    <div className="l-contents type-arrow-color03" id="contents06">
    <div className="l-contents__inner">
      <div className="c-heading">
        <h2 className="c-heading__title">地　図</h2>
      </div>
      <section className="l-section" style={{marginBottom: '30px'}}> 


        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.2135354292238!2d139.70578108629246!3d35.69110679989286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d02093360e5%3A0x748b8cb337767beb!2z5YWr546L5a2Q44Kv44Oq44OL44OD44Kv5paw5a6_!5e0!3m2!1sja!2sjp!4v1673426575507!5m2!1sja!2sjp" width="100%" height="450" style={{border: '0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p className="u-txt-center">新宿三丁目駅C5出口から徒歩0分<br className="sp" />
        平生ビル6F</p>
      </section>
    </div></div>
  )
}

export default Map;