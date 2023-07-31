const Footer = () => {
  return (
    <div className="l-footer__inner">

      <p className="p-pagetop">
        <a href="index.html#top">先頭へ戻る</a>
      </p>

      <div className="p-fbuttons">
        <a href="https://www.microsoft.com/ja-jp" className="p-fbuttons__button">プライバシーポリシー</a>
      </div>

      <section className="p-group">
        <h2 className="logo-tonando">
          <img src="./resources/img/common/logo-tonando-white2.svg" alt="斗南堂グループ" />
        </h2>
        <div className="p-group__wrap">
          <section className="p-group__col2" style={{ marginBottom: "0" }}>
            <h4 className="p-group__title" style={{ borderBottom: "solid", borderColor: "#fff", borderWidth: "1px" }}>
              医療法人社団 斗南堂
            </h4>
            <h3 className="p-group__title">
              <a href="https://www.microsoft.com/ja-jp">
                <img src="./resources/img/common/logo-honin-white.svg" alt="八王子クリニック本院" width="55%" />
              </a>
            </h3>
            <p className="p-group__address">〒192-0081<br />
              東京都八王子市横山町 11-5 斗南堂ビル<br />
              TEL 042-643-3717
            </p><br />
            <h3 className="p-group__title">
              <a href="https://www.microsoft.com/ja-jp">
                <img src="./resources/img/common/logo-shincho-white.svg" alt="八王子クリニック本院" width="55%" />
              </a>
            </h3>
            <p className="p-group__address">
              〒192-0065<br />
              東京都八王子市新町 7-10 八王子クリニック新町ビル1F・2F<br />
              TEL 042-643-1321
            </p><br />
            <h3 className="p-group__title">
              <a href="https://www.microsoft.com/ja-jp">
                <img src="./resources/img/common/logo-shinjuku-white.svg" alt="八王子クリニック新宿" width="55%" />
              </a>
            </h3>
            <p className="p-group__address" style={{ marginBottom: "30px" }}>
              〒160-0022<br />
              東京都新宿区新宿3丁目8-9平生ビル6F<br />
              TEL 03-5990-2892
            </p>
          </section>
          <section className="p-group__col2">
            <h4 className="p-group__title lsp3" style={{ borderBottom: "solid", borderColor: "#fff", borderWidth: "1px" }}>株式会社 斗南堂</h4>
            <p className="p-group__title2"><a href="https://www.microsoft.com/ja-jp"><span className="fs-min">サービス付き高齢者向け住宅</span><br />
              シルバーヒルズ八王子</a></p>
            <p className="p-group__address" style={{ marginBottom: "15px" }}>〒192-0065<br />
              東京都八王子市新町 7-10 八王子クリニック新町ビル3F〜7F<br />
              TEL 0120-180-426</p>
            <p className="p-group__title2">居宅介護支援事業所</p>
            <p className="p-group__address" style={{ marginBottom: "15px" }}>〒192-0065<br />
              東京都八王子市新町 7-10 八王子クリニック新町ビル301<br />
              TEL 042-643-1322</p>
            <p className="p-group__title2">ヘルパーセンター(訪問介護事業所)</p>
            <p className="p-group__address" style={{ marginBottom: "15px" }}>〒192-0065<br />
              東京都八王子市新町 7-10 八王子クリニック新町ビル301<br />
              TEL 042-643-1322</p>
          </section>
        </div>
      </section>

      <div className="p-footer">
        <p className="p-footer__copyright"><small>&copy;Taisei Clinic. All rights reserved.</small></p>
      </div>
    </div>
  )
}

export default Footer;