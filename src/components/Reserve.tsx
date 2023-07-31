const Reserve = () => {
  return (
    <section className="p-inquiry__section" style={{ marginBottom: '20px' }}>
      <h3 className="u-txt-center">
        <img src="./resources/img/common/logo-shinjuku-white.svg" className="u-pconly" alt="八王子クリニック新宿" width="40%" />
        <img src="./resources/img/common/logo-shinjuku-white.svg" className="u-sponly" alt="八王子クリニック新宿" width="70%" />
      </h3>
      <p className="yoyaku-btn" style={{ textAlign: "center" }}>
        <a data-gtm-click="shinjuku-yoyaku" href="https://www.google.co.jp" target="_blank" className="ebis_button_trigger" data-cid="ebLb2Se6" data-pid="shinjuku_yoyaku">
          <img src="./resources/img/yoyaku_btn_white.svg" alt="予約" />
        </a>
      </p>
    </section>
  )
}

export default Reserve;