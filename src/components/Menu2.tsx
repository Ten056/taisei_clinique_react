import { FC, useRef, useState } from "react";
import Slider, { SliderProps } from '@mui/material/Slider';
import { Accordion, AccordionSummary, AccordionDetails, Button, Grid, Menu, MenuItem, Typography, ListItem } from "@mui/material";
import { alpha, styled, Theme, makeStyles, createStyles } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}



const Menu2: FC = () => {
  // メニューの開閉を管理
  const [open, setOpen] = useState<boolean>(false);
  // メニューを配置するHTML要素を格納する
  const anchorEl = useRef<HTMLButtonElement>(null);
  // メニュー開閉ハンドル
  const handleClick = () => {
    setOpen(!open);
  };
  // メニューを閉めるハンドル
  const handleClose = () => {
    setOpen(false);
  };
  return (

    <>
      <nav className="p-menu" role="navigation">

        <Button
          // ボタンのHTML要素
          ref={anchorEl}
          // ボタンのタイプ
          variant="contained"
          // クリックアクション
          onClick={handleClick}
          // Style
          className='menuButton'
          id="menuButton"

        >
          Ⅲ
        </Button>
        <h1 className="p-menu__logo">
          <a href="https://hachicli.or.jp/shinjuku/">
            <img src="./resources/img/base/logo2.png" width="298" height="32" alt="八王子クリニック" />
          </a>
        </h1>
        {/* <a className="p-menu__button"> */}
        {/* </a> */}

        <div className="p-menu__body js-sp-toggle-nav">
          <div className="p-menu__main">
            <div className="p-menu__section">

              <Menu
                // ここでボタンの位置にメニューを紐づける
                // この紐づけのお陰でメニューがボタンの隣に出現する
                // これが無いと画面の変なところでメニューが出現することになる
                anchorEl={anchorEl.current}
                // メニューの出現を管理
                open={open}
                // Falseだと、メニューを開いた時にメニューアイテムがフォーカスの対象になる
                disableAutoFocusItem={false}
                // Trueだとメニューが開いた時に一番上のメニューアイテムのオートフォーカスされる
                autoFocus={false}
                // 主にメニューを閉めたいときに発生するイベント
                onClose={handleClose}
                // Trueにすると、メニューが閉じている状態でもメニューのノードが存在するようになる
                keepMounted
                // メニューの開閉のアニメーション速度を設定できる
                transitionDuration={"auto"}
                // CSS in JS を記述できる(HTMLのstyle属性の役割を果たす)
                sx={{}}
                // 紐づけたHTML要素のどこを標準位置にしてメニューを配置するか設定できる
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                // メニューの起点を設定できる。アニメーションもこの起点から生えるように出現する
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                // Menuコンポーネント内部で使用されているMenuListコンポーネントのPropsを変更できる
                MenuListProps={{}}
                // Menuコンポーネント内部で使用されているPaperコンポーネントのPropsを変更できる
                PaperProps={{
                  // PaperProps.elevationはメニューのシャドーを調整できる（超重要！）
                  elevation: 3
                }}
              >
                
                <MenuItem disabled={true} className="menuTitle" id="menuTitle">
                  <a>診療案内</a>
                </MenuItem>
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className="acItem">Main title</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container direction="column">
                      <ListItem button key={1}>
                        <Typography className="acItem">Sub Item 1</Typography>
                      </ListItem>
                      <ListItem button key={2} className="test" id="test1">
                        <Typography className="acItem">Sub Item 2</Typography>
                      </ListItem>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
                <div className="p-menu__navBody">
                  <MenuItem onClick={handleClose}>
                    <a href="https://www.yahoo.co.jp">痔の種類と治療方針</a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <a href="proctology01.html">痔の日帰り手術</a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <a href="proctology01.html">ジオン注射</a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <a href="proctology01.html">治療スケジュール</a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <a href="proctology01.html">費用</a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <a href="proctology01.html">痔のメカニズムと痔の成因</a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <a href="proctology01.html">手術実績</a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <a href="proctology01.html">痔の予防法</a>
                  </MenuItem>
                </div>
                <MenuItem disabled={true} className="menuTitle" id="menuTitle2">
                  <a>基本情報</a>
                </MenuItem>
              </Menu>
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
    </>
  );
};

export default Menu2;