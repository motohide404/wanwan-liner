const Paw = ({ className = "" }: { className?: string }) => (
  <span className={`paw ${className}`} aria-hidden="true"><i /><i /><i /><i /><b /></span>
);
const Arrow = () => <span aria-hidden="true">→</span>;

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="わんわんライナー トップへ"><img className="brand-logo" src="/wan-liner-logo.png" alt="わんわんライナー" /></a>
      <nav aria-label="メインメニュー"><a href="#about">わんわんライナーとは</a><a href="#features">3つの特徴</a><a href="#guide">ご利用案内</a><a href="#faq">よくあるご質問</a></nav>
      <a className="header-cta" href="#information">運行情報を見る <Arrow /></a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">2026年11月 運行開始予定</p>
        <h1>愛犬と、<span>もっと遠くへ。</span></h1>
        <p className="hero-route"><strong>東京</strong><i>↔</i><strong>大阪</strong></p>
        <p className="hero-lead">ワンちゃんと一緒に行ける高速路線バス。<br />愛犬との特別な時間を、移動中も快適に。</p>
        <div className="hero-actions"><a className="button primary" href="#information">運行情報を見る <Arrow /></a><a className="button ghost" href="#about">サービスについて</a></div>
        <p className="launch-note"><span>毎日運行</span> 2026年11月、運行開始予定</p>
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
        <article><span className="feature-no">02</span><div className="feature-icon route-icon">⌁</div><h3>愛犬同伴の専用車両</h3><p>愛犬との乗車を前提に、車内環境や清掃・衛生面の運用を整えます。</p></article>
        <article><span className="feature-no">03</span><div className="feature-icon heart-icon">♥</div><h3>わんちゃんファーストの休憩</h3><p>SA等ではドッグランを利用し、愛犬のための休憩時間を長めに設定します。</p></article>
      </div>
    </section>

    <section className="guide section" id="guide">
      <div className="section-label light"><span>02</span> GUIDE</div>
      <div className="guide-head"><div><p className="kicker">HOW TO RIDE</p><h2>ご乗車までの流れ</h2></div><p>予約受付の開始後は、専用予約ページからお申し込みいただけます。</p></div>
      <ol className="steps">
        <li><span>1</span><div><small>STEP 01</small><h3>運行便を選ぶ</h3><p>出発地、目的地、乗車日からご希望の便を選びます。</p></div></li>
        <li><span>2</span><div><small>STEP 02</small><h3>飼い主さまと愛犬の情報を入力</h3><p>人数、愛犬の頭数など、必要な情報を入力します。</p></div></li>
        <li><span>3</span><div><small>STEP 03</small><h3>予約・お支払い</h3><p>内容をご確認のうえ予約を確定し、料金をお支払いください。</p></div></li>
        <li><span>4</span><div><small>STEP 04</small><h3>愛犬と一緒にご乗車</h3><p>当日は指定の乗車場所へ、時間に余裕をもってお越しください。</p></div></li>
      </ol>
      <p className="provisional">※予約方法・ご利用条件の詳細は、正式決定後に本サイトでご案内します。</p>
    </section>

    <section className="information section" id="information"><div className="section-label"><span>03</span> INFORMATION</div><div className="info-card"><div className="info-copy"><p className="kicker">SERVICE INFORMATION</p><h2>運行情報</h2><p className="info-status"><span /> 2026年11月 運行開始予定</p><dl className="route-data"><div><dt>運行区間</dt><dd>東京 ― 大阪</dd></div><div><dt>運行予定</dt><dd>毎日運行</dd></div><div><dt>予約受付</dt><dd>開始日が決まり次第ご案内</dd></div></dl><p>時刻表、運賃、乗車場所、予約開始日は、決定次第こちらでお知らせします。</p></div><div className="info-stamp"><small>COMING</small><strong>SOON</strong><Paw /></div></div></section>

    <section className="faq section" id="faq"><div className="section-label"><span>04</span> FAQ</div><div className="faq-grid"><div><p className="kicker">QUESTIONS & ANSWERS</p><h2>よくあるご質問</h2><p>詳しい乗車条件は、内容が確定次第順次追加します。</p></div><div className="questions">
      <details><summary><span>Q</span>愛犬と同じ車内に乗れますか？<b>＋</b></summary><p>はい。わんわんライナーは、愛犬と飼い主さまが一緒に移動するための高速ライナーです。</p></details>
      <details><summary><span>Q</span>予約はどこからできますか？<b>＋</b></summary><p>予約受付開始後、本サイトから専用予約ページへご案内します。</p></details>
      <details><summary><span>Q</span>運行区間や料金はいつ発表されますか？<b>＋</b></summary><p>決定次第、本サイトのお知らせと運行情報に掲載します。</p></details>
      <details><summary><span>Q</span>途中で愛犬の休憩はありますか？<b>＋</b></summary><p>SA等ではドッグランを利用し、愛犬のための休憩時間を長めに設定する予定です。詳細は安全上の検証を踏まえて確定します。</p></details>
    </div></div></section>

    <section className="closing"><Paw className="closing-paw" /><p>WITH YOUR BEST FRIEND</p><h2>次の旅は、愛犬と一緒に。</h2><a className="button white" href="#top">ページの先頭へ ↑</a></section>
    <footer><div className="footer-brand"><img className="footer-logo" src="/wan-liner-logo.png" alt="わんわんライナー" /></div><div className="footer-company"><p>運営：B・I・G株式会社</p><p>秋葉原支店 わんわんトラベル事業部</p><p>〒101-0021 東京都千代田区外神田4-3-11<br />クリハラビル3階</p><p>お問い合わせ（平日10:00〜17:00）<br /><a href="tel:0335258554">03-3525-8554</a><br /><a href="mailto:wan-wan-travel@b-i-g.tokyo">wan-wan-travel@b-i-g.tokyo</a></p></div><div className="footer-links"><a href="#about">サービス概要</a><a href="#guide">ご利用案内</a><a href="#faq">よくあるご質問</a></div><p className="copyright">© B・I・G Co., Ltd. All Rights Reserved.</p></footer>
  </main>;
}
