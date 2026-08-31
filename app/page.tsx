const Paw = ({ className = "" }: { className?: string }) => (
  <span className={`paw ${className}`} aria-hidden="true"><i /><i /><i /><i /><b /></span>
);
export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="わんわんライナー トップへ"><img className="brand-logo" src="/wan-liner-logo.png" alt="わんわんライナー" /></a>
      <nav aria-label="メインメニュー"><a href="#about">わんわんライナーとは</a><a href="#features">3つの特徴</a><a href="#guide">ご利用案内</a><a href="#faq">よくあるご質問</a></nav>
      <span className="header-cta is-disabled" aria-disabled="true">運行情報は準備中</span>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="launch-banner"><small>運行開始予定</small><strong>2026年<span>11月</span></strong><em>現在、予約受付前です</em></div>
        <h1>愛犬と、<span>もっと遠くへ。</span></h1>
        <p className="hero-route"><strong>東京</strong><i>↔</i><strong>大阪</strong></p>
        <p className="hero-lead">ワンちゃんと一緒に行ける高速路線バス。<br />愛犬との特別な時間を、移動中も快適に。</p>
        <div className="hero-actions"><span className="button primary is-disabled" aria-disabled="true">運行情報は準備中</span><a className="button ghost" href="#about">サービスについて</a></div>
        <p className="launch-note"><span>毎日運行予定</span> 予約受付開始まで、もうしばらくお待ちください。</p>
      </div>
      <div className="hero-photo" role="img" aria-label="愛犬と飼い主が一緒に過ごす、わんわんライナー車内のイメージ"><span>WANWAN LINER</span></div>
    </section>

    <section className="intro section" id="about">
      <div className="section-label"><span>01</span> ABOUT</div>
      <div className="intro-grid"><div><p className="kicker">愛犬との長距離移動に、新しい選択肢を。</p><h2>一緒に乗れるから、<br />旅のはじまりから楽しい。</h2></div><div className="body-copy"><p>わんわんライナーは、東京―大阪間を愛犬と飼い主さまが同じ空間で移動するための高速路線バスです。</p><p>単にペットを運ぶ交通手段ではなく、移動そのものも愛犬との旅の一部になることを目指しています。</p></div></div>
      <div className="experience"><strong>100<span>回超</span></strong><p>愛犬同伴ツアーを運営してきた<br />わんわんトラベルの経験を生かします。</p></div>
      <div id="features" />
      <div className="feature-grid">
        <article><span className="feature-no">01</span><div className="feature-icon"><Paw /></div><h3>愛犬と離れない安心感</h3><p>大切な家族と離れずに、東京から大阪まで同じ車内で過ごせます。</p></article>
        <article><span className="feature-no">02</span><div className="feature-icon route-icon">⌁</div><h3>小型犬専用の車両</h3><p>愛犬の体重が10kg以下のワンちゃんにご利用いただけます。愛犬との乗車を前提に、車内環境や清掃・衛生面の運用を整えます。</p></article>
        <article><span className="feature-no">03</span><div className="feature-icon heart-icon">♥</div><h3>わんちゃんファーストの休憩</h3><p>SA等ではドッグランを利用し、愛犬のための休憩時間を長めに設定します。</p></article>
      </div>
      <div className="vehicle-showcase"><div className="vehicle-copy"><p className="kicker">WANWAN LINER BUS</p><h2>この車両で、<br />東京と大阪を結びます。</h2><p>わんわんライナーの運行予定車両です。鮮やかなブルーとゴールドの車体で、愛犬との快適な長距離移動をお届けします。</p><small>※運行状況などにより、使用車両が変更となる場合があります。</small></div><figure><img src="/wanwan-liner-bus.jpg" alt="青とゴールドのわんわんライナー運行予定車両" /><figcaption>わんわんライナー運行予定車両</figcaption></figure></div>
    </section>

    <section className="guide section" id="guide">
      <div className="section-label light"><span>02</span> GUIDE</div>
      <div className="guide-head"><div><p className="kicker">HOW TO RIDE</p><h2>ご乗車までの流れ</h2></div><p><strong>現在、予約受付はまだ開始しておりません。</strong><br />受付開始後は、専用予約ページからお申し込みいただけます。</p></div>
      <ol className="steps">
        <li><span>1</span><div><small>STEP 01</small><h3>運行便を選ぶ</h3><p>出発地、目的地、乗車日からご希望の便を選びます。</p></div></li>
        <li><span>2</span><div><small>STEP 02</small><h3>飼い主さまと愛犬の情報を入力</h3><p>人数、愛犬の頭数など、必要な情報を入力します。</p></div></li>
        <li><span>3</span><div><small>STEP 03</small><h3>予約・お支払い</h3><p>内容をご確認のうえ予約を確定し、料金をお支払いください。</p></div></li>
        <li><span>4</span><div><small>STEP 04</small><h3>愛犬と一緒にご乗車</h3><p>当日は指定の乗車場所へ、時間に余裕をもってお越しください。</p></div></li>
      </ol>
      <p className="provisional">※以下は予約受付開始後の流れです。予約方法・ご利用条件の詳細は、正式決定後に本サイトでご案内します。</p>
    </section>

    <section className="information section" id="information"><div className="section-label"><span>03</span> INFORMATION</div><div className="info-card is-pending"><div className="info-copy"><p className="kicker">SERVICE INFORMATION</p><h2>運行情報 <small>準備中</small></h2><p className="info-status"><span /> 2026年11月 運行開始予定</p><dl className="route-data"><div><dt>運行区間</dt><dd>東京 ― 大阪</dd></div><div><dt>運行予定</dt><dd>毎日運行予定</dd></div><div><dt>予約受付</dt><dd>現在は受付前です</dd></div></dl><p>時刻表、運賃、予約開始日は、決定次第こちらでお知らせします。</p></div><div className="info-stamp"><small>COMING</small><strong>SOON</strong><Paw /></div></div>
      <div className="stop-guide" aria-labelledby="stop-guide-title"><div className="stop-guide-head"><p className="kicker">BOARDING &amp; DROP-OFF</p><h3 id="stop-guide-title">東京・大阪、それぞれ2か所で乗降</h3><p>各都市の停車場所は、出発便では<strong>乗車場所</strong>、反対都市から到着する便では<strong>降車場所</strong>になります。</p></div><div className="stop-cities"><article><small>TOKYO</small><h4>東京の2か所</h4><p>東京駅八重洲バスターミナル</p><p>富士急行初台車庫</p><hr /><p><b>東京発</b>：乗車場所</p><p><b>大阪発</b>：降車場所</p></article><span className="route-arrow" aria-hidden="true">⇄</span><article><small>OSAKA</small><h4>大阪の2か所</h4><p>梅田プラザモータープール</p><p>天王寺公園東駐車場</p><hr /><p><b>大阪発</b>：乗車場所</p><p><b>東京発</b>：降車場所</p></article></div><p className="stop-note">※各停車場所の詳しい集合位置は、予約受付開始前に本サイトでご案内します。</p></div>
      <div className="schedule" aria-labelledby="schedule-title"><div className="schedule-title"><p className="kicker">SCHEDULE</p><h3 id="schedule-title">発着場所・運行スケジュール <small>予定</small></h3><p>道路状況や運行計画により、時刻・休憩場所が変更になる場合があります。</p></div><div className="schedule-grid">
        <article><header><small>TOKYO → OSAKA</small><h4>東京発・大阪行き</h4></header><ol><li className="boarding"><time>9:20発</time><div><b>東京駅八重洲バスターミナル</b><span>乗車場所</span></div></li><li className="boarding"><time>10:00発</time><div><b>富士急行初台車庫</b><span>乗車場所</span></div></li><li className="rest"><time>11:15〜11:45</time><div><b>足柄サービスエリア</b><span>休憩</span></div></li><li className="rest"><time>13:45〜14:15</time><div><b>浜名湖サービスエリア</b><span>休憩</span></div></li><li className="rest"><time>16:10〜16:40</time><div><b>土山サービスエリア</b><span>休憩</span></div></li><li className="arrival"><time>18:00着</time><div><b>梅田プラザモータープール</b><span>降車場所</span></div></li><li className="arrival"><time>18:30着</time><div><b>天王寺公園東駐車場</b><span>降車場所</span></div></li></ol></article>
        <article><header><small>OSAKA → TOKYO</small><h4>大阪発・東京行き</h4></header><ol><li className="boarding"><time>9:20発</time><div><b>天王寺公園東駐車場</b><span>乗車場所</span></div></li><li className="boarding"><time>9:50発</time><div><b>梅田プラザモータープール</b><span>乗車場所</span></div></li><li className="rest"><time>11:10〜11:40</time><div><b>土山サービスエリア</b><span>休憩</span></div></li><li className="rest"><time>13:35〜14:05</time><div><b>浜名湖サービスエリア</b><span>休憩</span></div></li><li className="rest"><time>16:05〜16:35</time><div><b>足柄サービスエリア</b><span>休憩</span></div></li><li className="arrival"><time>17:50着</time><div><b>富士急行初台車庫</b><span>降車場所</span></div></li><li className="arrival"><time>18:30着</time><div><b>東京駅八重洲バスターミナル</b><span>降車場所</span></div></li></ol></article>
      </div><p className="schedule-notice">現在、予約受付はまだ開始しておりません。予約開始日は決まり次第、本サイトでお知らせします。</p></div>
    </section>

    <section className="faq section" id="faq"><div className="section-label"><span>04</span> FAQ</div><div className="faq-grid"><div><p className="kicker">QUESTIONS & ANSWERS</p><h2>よくあるご質問</h2><p>詳しい乗車条件は、内容が確定次第順次追加します。</p></div><div className="questions">
      <details><summary><span>Q</span>愛犬と同じ車内に乗れますか？<b>＋</b></summary><p>はい。わんわんライナーは、愛犬と飼い主さまが一緒に移動するための高速ライナーです。</p></details>
      <details><summary><span>Q</span>どのくらいの大きさの犬まで乗車できますか？<b>＋</b></summary><p>愛犬の体重が10kg以下のワンちゃんにご利用いただけます。</p></details>
      <details><summary><span>Q</span>予約はどこからできますか？<b>＋</b></summary><p>現在はまだ予約受付前です。受付開始後、本サイトから専用予約ページへご案内します。</p></details>
      <details><summary><span>Q</span>運行区間や料金はいつ発表されますか？<b>＋</b></summary><p>決定次第、本サイトのお知らせと運行情報に掲載します。</p></details>
      <details><summary><span>Q</span>途中で愛犬の休憩はありますか？<b>＋</b></summary><p>SA等ではドッグランを利用し、愛犬のための休憩時間を長めに設定する予定です。詳細は安全上の検証を踏まえて確定します。</p></details>
    </div></div></section>

    <section className="closing"><Paw className="closing-paw" /><p>WITH YOUR BEST FRIEND</p><h2>次の旅は、愛犬と一緒に。</h2><a className="button white" href="#top">ページの先頭へ ↑</a></section>
    <footer><div className="footer-brand"><img className="footer-logo" src="/wan-liner-logo.png" alt="わんわんライナー" /></div><div className="footer-company"><p>運営：B・I・G株式会社</p><p>秋葉原支店 わんわんトラベル事業部</p><p>〒101-0021 東京都千代田区外神田4-3-11<br />クリハラビル3階</p><p>お問い合わせ（平日10:00〜17:00）<br /><a href="tel:0335258554">03-3525-8554</a><br /><a href="mailto:wan-wan-travel@b-i-g.tokyo">wan-wan-travel@b-i-g.tokyo</a></p></div><div className="footer-links"><a href="#about">サービス概要</a><a href="#guide">ご利用案内</a><a href="#faq">よくあるご質問</a></div><p className="copyright">© B・I・G Co., Ltd. All Rights Reserved.</p></footer>
  </main>;
}
