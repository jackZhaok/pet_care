"use client";

import { useState, type FormEvent } from "react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field full"><label htmlFor="arrivalTime">到店时间</label><input id="arrivalTime" name="arrivalTime" type="datetime-local" required /></div>
      <div className="field"><label htmlFor="owner">您的称呼</label><input id="owner" name="owner" autoComplete="name" placeholder="怎么称呼您" required /></div>
      <div className="field"><label htmlFor="phone">联系电话</label><input id="phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="请输入手机号" pattern="[0-9]{11}" title="请输入11位手机号" required /></div>
      <div className="field"><label htmlFor="pet">宠物昵称</label><input id="pet" name="pet" placeholder="例如：布丁" required /></div>
      <div className="field"><label htmlFor="type">宠物类型</label><select id="type" name="type"><option>狗狗</option><option>猫咪</option><option>其他小宠</option></select></div>
      <div className="field full"><label htmlFor="note">想做什么服务？</label><textarea id="note" name="note" rows={3} placeholder="告诉我们宠物品种、体重和期望服务" /></div>
      <div className={`success${submitted ? " visible" : ""}`} role="status" aria-live="polite">{submitted && "预约信息已收到，我们稍后联系你 🐾"}</div>
      <button className="btn" type="submit" disabled={submitted}>{submitted ? "已提交预约" : "提交预约"}</button>
    </form>
  );
}
