const Header = () => {
  return (
    <header className="l-header">
      <div className="l-header__section"><div className="l-header__sectionInner">
        <h1 className="p-sitetitle"><a href="./index.html"><img src="./resources/img/base/logo2.png" width="298" height="32" alt="八王子クリニック" /></a></h1>

        <div className="p-hinfo">
          <ul className="p-hinfo__list">
            <li>新宿三丁目駅から<span className="u-text-gold">90分</span><span className="data">　初診専用<span className="phone"><a data-gtm-click="shinjuku-yoyaku" href="https://web.booking.clius.jp/reserve/hachicliyoyaku" target="_blank" className="ebis_button_trigger" data-cid="ebLb2Se6" data-pid="shinjuku_yoyaku"><i className="far fa-calendar-alt"></i> オンライン予約</a></span>　TEL<span className="phone"><a href="tel:03-5990-2892" className="ebis_button_trigger" data-cid="ebLb2Se6" data-pid="shinjuku_hemo_tel">03-5990-2892</a></span></span></li>
          </ul>
        </div>
      </div></div>

      <nav className="p-globalnavi"><div className="p-globalnavi__inner">
        <ul className="p-globalnavi__nav">
          <li><a href="./">ホーム</a></li>
          <li><a href="https://hachicli.or.jp/shinjuku/internal-shinjuku.html">内科いないか？</a></li>
          <li><a className="current" href="index.html">肛門外科</a></li>
          <li><a href="https://hachicli.or.jp/shinjuku/small-surgery/">小外科</a></li>
          <li><a href="https://hachicli.or.jp/shinjuku/piace.html">ピアス施術</a></li>
          <li><a href="https://hachicli.or.jp/shinjuku/facility.html">院内紹介</a></li>
          <li><a href="https://hachicli.or.jp/shinjuku/outline/">斗南堂グループについて</a></li>
          <li><a href="index.html#contents06">アクセス</a></li>
        </ul>
      </div></nav>
    </header>
  )
}

export default Header;