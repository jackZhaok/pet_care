"use client";

import { useEffect, useState } from "react";

type Review = {
  content: string;
  emoji: string;
  name: string;
  pet: string;
};

const reviews: Review[][] = [
  [
    { content: "我家布丁以前每次洗澡都很紧张，这次居然趴在美容师怀里睡着了。回家香香软软的，店里还发了全程小视频，真的很安心。", emoji: "🐶", name: "布丁妈妈", pet: "比熊 · 2岁" },
    { content: "猫咪独立洗护间很安静，吹风也没有应激，回家后照常吃饭睡觉。细节特别加分。", emoji: "🐱", name: "小满的铲屎官", pet: "银渐层 · 3岁" },
    { content: "价格透明，美容师很懂狗狗，修出来的圆脑袋太可爱啦！已经预约下个月再来。", emoji: "🐩", name: "Coco爸爸", pet: "贵宾 · 4岁" },
  ],
  [
    { content: "第一次带年糕来做深层护理，美容师先认真检查了皮肤，还提醒我们耳朵有点泛红。整个过程都很耐心，毛也比以前蓬松很多。", emoji: "🐕", name: "年糕姐姐", pet: "柴犬 · 5岁" },
    { content: "怕生的小猫也能慢慢适应，没有强行抓抱。结束后还给了居家梳毛建议，真的很专业。", emoji: "🐈", name: "十一妈妈", pet: "布偶猫 · 1岁" },
    { content: "预约时间很准，到店完全不用等。脚底毛和指甲修得很细致，接回家时狗狗心情也很好。", emoji: "🐾", name: "旺仔爸爸", pet: "柯基 · 3岁" },
  ],
  [
    { content: "团子年纪大了，关节不太好。美容师全程让它坐着休息，还把水温和吹风调得很温和。这样被认真对待，作为主人特别感动。", emoji: "🦮", name: "团子妈妈", pet: "金毛 · 10岁" },
    { content: "洗护前会再次确认需求，中途也及时同步状态。不是千篇一律的造型，剪得很适合我们家小狗。", emoji: "🐕‍🦺", name: "豆包的家人", pet: "雪纳瑞 · 6岁" },
    { content: "店里干净、没有很重的香味，猫狗区域也分开。麻薯回来以后毛发顺滑，状态特别放松。", emoji: "🐈‍⬛", name: "麻薯妈妈", pet: "英短 · 2岁" },
  ],
];

function Person({ emoji, name, pet }: Omit<Review, "content">) {
  return <div className="person"><div className="avatar" aria-hidden="true">{emoji}</div><div><b>{name}</b><small>{pet}</small></div></div>;
}

function ReviewCard({ review, featured = false }: { review: Review; featured?: boolean }) {
  return (
    <article className={featured ? "quote" : "mini"}>
      <div className="stars" aria-label="五星评价">★★★★★</div>
      {featured ? <blockquote>“{review.content}”</blockquote> : <p>{review.content}</p>}
      <Person emoji={review.emoji} name={review.name} pet={review.pet} />
    </article>
  );
}

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setCurrent((index) => (index + 1) % reviews.length), 5500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const goTo = (index: number) => setCurrent((index + reviews.length) % reviews.length);

  return (
    <div
      className="review-carousel"
      aria-roledescription="轮播图"
      aria-label="宠主真实评价"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="review-viewport">
        <div className="review-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {reviews.map((group, index) => (
            <div className="review-slide" key={group[0].name} aria-hidden={index !== current}>
              <ReviewCard review={group[0]} featured />
              <div className="review-side"><ReviewCard review={group[1]} /><ReviewCard review={group[2]} /></div>
            </div>
          ))}
        </div>
      </div>
      <div className="review-controls">
        <p><strong>{String(current + 1).padStart(2, "0")}</strong> / {String(reviews.length).padStart(2, "0")}</p>
        <div className="review-dots" aria-label="选择评价页">
          {reviews.map((group, index) => <button key={group[0].name} className={index === current ? "active" : ""} onClick={() => goTo(index)} aria-label={`查看第 ${index + 1} 组评价`} aria-current={index === current ? "true" : undefined} />)}
        </div>
        <div className="review-arrows">
          <button onClick={() => goTo(current - 1)} aria-label="上一组评价">←</button>
          <button onClick={() => goTo(current + 1)} aria-label="下一组评价">→</button>
        </div>
      </div>
    </div>
  );
}
