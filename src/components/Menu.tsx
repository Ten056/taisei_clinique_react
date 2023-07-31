const Menu = () => {
  return (
    <nav className="p-menu" role="navigation">
      <h1 className="p-menu__logo">
        <a href="https://hachicli.or.jp/shinjuku/">
          <img src="./resources/img/base/logo2.png" width="298" height="32" alt="八王子クリニック" />
        </a>
      </h1>
      <a className="p-menu__button js-nav-toggle-button" href="index.html#">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div className="p-menu__body js-sp-toggle-nav">
        <div className="p-menu__main">
          <div className="p-menu__section">
            <h3 className="p-menu__title">診療案内</h3>
            <ul className="p-menu__nav js-accordion">
              <li><a href="https://hachicli.or.jp/shinjuku/internal-shinjuku.html">内科</a></li>
              <li className="haschild"><a href="index.html#" data-toggler-btn="toggle" data-toggler-target="menu1">肛門外科</a>
                <div className="p-menu__navBody" data-toggler-contents="menu1">
                  <ul>
                    <li><a href="proctology03.html">痔の種類と治療方針</a></li>
                    <li><a href="proctology01.html">痔の日帰り手術</a></li>
                    <li><a href="proctology02.html">ジオン注射</a></li>
                    <li><a href="proctology04.html">治療スケジュール</a></li>
                    <li><a href="proctology05.html">費　用</a></li>
                    <li><a href="proctology11.html">痔のメカニズムと痔の成因</a></li>
                    <li><a href="proctology06.html">手術実績</a></li>
                    <li><a href="proctology09.html">痔の予防法</a></li>
                  </ul>
                </div>
              </li>
              <li className="haschild"><a href="index.html#" data-toggler-btn="toggle" data-toggler-target="menu2">小外科</a>
                <div className="p-menu__navBody" data-toggler-contents="menu2">
                  <ul>
                    <li><a href="https://hachicli.or.jp/shinjuku/small-surgery/">トップページ</a></li>
                    <li><a href="https://hachicli.or.jp/shinjuku/small-surgery/atheroma.html">粉瘤</a></li>
                    <li><a href="https://hachicli.or.jp/shinjuku/small-surgery/lipoma.html">脂肪腫</a></li>
                    <li><a href="https://hachicli.or.jp/shinjuku/small-surgery/ingrown-nails.html">巻き爪</a></li>
                    <li><a href="https://hachicli.or.jp/shinjuku/small-surgery/mole.html">ホクロ</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="https://hachicli.or.jp/shinjuku/piace.html">ピアス施術</a></li>
              <li className="haschild"><a href="index.html#" data-toggler-btn="toggle" data-toggler-target="menu4">ご予約・お問い合わせ</a>
                <div className="p-menu__navBody" data-toggler-contents="menu4">
                  <ul>
                    <li><a data-gtm-click="shinjuku-yoyaku" href="https://web.booking.clius.jp/reserve/hachicliyoyaku" target="_blank" className="ebis_button_trigger" data-cid="ebLb2Se6" data-pid="shinjuku_yoyaku">初診専用オンライン予約</a></li>
                    <li>　※緊急時は予約なしで診療を行います。</li>
                    <li><a href="tel:03-5990-2892" className="ebis_button_trigger" data-cid="ebLb2Se6" data-pid="shinjuku_hemo_tel">電話　03-5990-2892</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="https://hachicli.or.jp/shinjuku/facility.html">院内紹介</a></li>
            </ul>
          </div>

          <div className="p-menu__section">
            <h3 className="p-menu__title">基本情報</h3>
            <ul className="p-menu__nav">
              <li><a href="https://hachicli.or.jp/shinjuku/outline/index.html">斗南堂グループについて</a></li>
              <li><a href="index.html#contents06">アクセス</a></li>
              <li><a href="https://hachicli.or.jp/shinjuku/index.html">ホーム</a></li>
            </ul>
          </div>
        </div>
        <div className="p-menu__navBg"></div>
      </div>
    </nav>
  )
}

export default Menu;