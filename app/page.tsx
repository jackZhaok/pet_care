import Image from "next/image";
import BookingForm from "./components/BookingForm";
import NavBar, { Brand } from "./components/NavBar";
import Reveal from "./components/Reveal";

const services = [
  { icon: "🫧", title: "日常焕新洗护", fit: "适合定期清洁、维持清爽", benefit: "一次完成基础护理，让毛发蓬松、体味更清新。", items: ["双重清洁与护毛", "洁耳、剪甲、脚底毛", "皮毛状态反馈"], label: "猫咪 / 小型犬", price: "¥88" },
  { icon: "✂️", title: "精致造型护理", fit: "适合换造型或精细修剪", benefit: "根据体型与生活习惯定制造型，好看也更方便日常打理。", items: ["包含日常焕新洗护", "一对一造型沟通", "全身精细修剪"], label: "全犬种", price: "¥168", featured: true },
  { icon: "🌿", title: "敏感肌舒缓浴", fit: "适合干燥、易痒、敏感皮肤", benefit: "低敏清洁搭配深层保湿，减少刺激，帮助恢复皮肤舒适感。", items: ["洗护前皮肤检查", "温和低敏配方", "深层保湿与护理建议"], label: "专项护理", price: "¥128" },
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
          <div className="section-head"><div><div className="eyebrow">CARE PLANS</div><h2>按需要选，<br />每一分钱都花得明白</h2></div><p>从日常清洁到专项护理，三种方案对应不同需求。到店先看皮毛状态、再确认服务与价格，不临时加项。</p></div>
          <div className="grid">{services.map((service) => <article className={`card${service.featured ? " featured" : ""}`} key={service.title}>
            {service.featured && <div className="popular">多数宠主选择</div>}
            <div className="card-top"><div className="icon" aria-hidden="true">{service.icon}</div><div className="price"><span>{service.price}</span><small>起 / 次</small></div></div>
            <h3>{service.title}</h3><div className="fit">{service.fit}</div><p className="benefit">{service.benefit}</p>
            <ul className="service-list">{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="card-bottom"><span>{service.label}</span><a href="#booking" aria-label={`预约${service.title}`}>选择此方案 →</a></div>
          </article>)}</div>
          <div className="price-note"><span>透明计价</span> 最终价格会根据宠物品种、体重、毛量及实际护理难度，在服务前与你确认。</div>
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
