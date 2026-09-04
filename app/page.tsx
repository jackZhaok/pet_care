import Image from "next/image";
import BookingForm from "./components/BookingForm";
import NavBar, { Brand } from "./components/NavBar";
import Reveal from "./components/Reveal";

const services = [
  { icon: "🫧", title: "元气基础洗护", description: "洁耳、剪甲、梳毛、双重清洁、护毛、吹干与脚底毛修剪。", label: "猫咪 / 小型犬", price: "¥88" },
  { icon: "✂️", title: "精致造型护理", description: "包含基础洗护，由专业美容师根据体型与生活习惯定制造型。", label: "全犬种", price: "¥168" },
  { icon: "🌿", title: "敏感肌舒缓浴", description: "温和低敏配方，搭配皮肤状态检查和深层保湿，缓解干燥不适。", label: "专项护理", price: "¥128" },
];

const steps = [
  ["01", "状态问诊", "了解性格、皮肤状态与既往习惯，建立专属档案。"],
  ["02", "温和清洁", "水温实时监测，选用适合毛质的低敏产品。"],
  ["03", "耐心护理", "一宠一位，美容师全程陪伴，拒绝暴力拉扯。"],
  ["04", "清爽回家", "护理反馈、照片记录和居家护理建议一次带走。"],
] as const;

function Person({ emoji, name, pet }: { emoji: string; name: string; pet: string }) {
  return <div className="person"><div className="avatar" aria-hidden="true">{emoji}</div><div><b>{name}</b><small>{pet}</small></div></div>;
}

export default function Home() {
  return (
    <>
      <header className="hero" id="home">
        <div className="hero-image" aria-hidden="true"><Image src="/hero-pets.png" alt="" fill priority sizes="100vw" /></div>
        <NavBar />
        <div className="hero-inner wrap">
          <div className="hero-copy">
            <div className="eyebrow">FOR EVERY FURRY FRIEND</div>
            <h1>让每一团毛茸茸，<br /><span className="script">被温柔照亮</span></h1>
            <p className="lead">一宠一室、全程可视、温和低敏。我们用专业与耐心，让洗澡不再是宠物的压力时刻。</p>
            <div className="hero-actions"><a className="btn" href="#booking">预约一次安心洗护 <span>→</span></a><a className="btn light" href="#services">查看服务</a></div>
            <div className="trust"><div><b>4.9 / 5</b><small>宠主真实评分</small></div><div><b>3,000+</b><small>毛孩子安心体验</small></div><div><b>100%</b><small>工具一宠一消毒</small></div></div>
          </div>
          <div className="floating-note"><b>今日还有 3 个空位</b>线上预约 · 到店无需等待</div>
        </div>
      </header>

      <main>
        <section className="services" id="services"><Reveal className="wrap">
          <div className="section-head"><div><div className="eyebrow">OUR SERVICES</div><h2>刚刚好的洗护方案</h2></div><p>没有隐形消费，也不做流水线服务。根据宠物毛发与皮肤状态，现场确认适合它的方案。</p></div>
          <div className="grid">{services.map((service) => <article className="card" key={service.title}><div className="icon" aria-hidden="true">{service.icon}</div><h3>{service.title}</h3><p>{service.description}</p><div className="price">{service.label} <span>{service.price}</span> 起</div></article>)}</div>
        </Reveal></section>

        <section className="process" id="process"><Reveal className="wrap">
          <div className="eyebrow">A GENTLE JOURNEY</div><div className="section-head"><h2>看得见的安心，<br />藏在每一个步骤里</h2><p>全程可查看洗护进度，遇到任何异常都会第一时间与你沟通。</p></div>
          <div className="steps">{steps.map(([number, title, description]) => <div className="step" key={number}><div className="step-num">{number}</div><h3>{title}</h3><p>{description}</p></div>)}</div>
        </Reveal></section>

        <section className="reviews" id="reviews"><Reveal className="wrap">
          <div className="section-head"><div><div className="eyebrow">HAPPY STORIES</div><h2>毛孩子喜欢，<br />是最好的口碑</h2></div></div>
          <div className="review-grid"><div className="quote"><div className="stars" aria-label="五星评价">★★★★★</div><blockquote>“我家布丁以前每次洗澡都很紧张，这次居然趴在美容师怀里睡着了。回家香香软软的，店里还发了全程小视频，真的很安心。”</blockquote><Person emoji="🐶" name="布丁妈妈" pet="比熊 · 2岁" /></div><div className="review-side"><div className="mini"><div className="stars" aria-label="五星评价">★★★★★</div><p>猫咪独立洗护间很安静，吹风也没有应激。细节特别加分。</p><Person emoji="🐱" name="小满的铲屎官" pet="银渐层 · 3岁" /></div><div className="mini"><div className="stars" aria-label="五星评价">★★★★★</div><p>价格透明，美容师很懂狗狗，修出来的圆脑袋太可爱啦！</p><Person emoji="🐩" name="Coco爸爸" pet="贵宾 · 4岁" /></div></div></div>
        </Reveal></section>

        <section className="booking" id="booking"><Reveal className="wrap"><div className="booking-box">
          <div className="booking-copy"><div className="eyebrow">BOOK A VISIT</div><h2>准备好，让它焕然一新了吗？</h2><p>留下联系方式，我们会在营业时间内尽快与你确认到店时间和洗护方案。</p><div className="contact-line">营业时间：周一至周日 09:30–20:00<br />地址：绿荫路 28 号 · 绒光宠物洗护</div></div>
          <BookingForm />
        </div></Reveal></section>
      </main>
      <footer><div className="footer wrap"><Brand /><span>© 2026 绒光宠物洗护 · 用耐心对待每一份信任</span><div className="social"><a href="#">小红书</a><a href="#">微信</a><a href="#">抖音</a></div></div></footer>
    </>
  );
}
