/* ===== RESET & VARIABLES ===== */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#fffaf7;
  --card:#ffffff;
  --text:#2b2b2b;
  --muted:#6b7280;
  --primary:#ff7a7a;
  --primary-dark:#e75d5d;
  --line:#f0e5de;
  --accent:#fff1eb;
  --shadow:0 8px 28px rgba(0,0,0,.07);
  --radius:22px;
  --max:1200px;
}
html{scroll-behavior:smooth}
body{
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang TC","Microsoft JhengHei",sans-serif;
  background:var(--bg);color:var(--text);
  overflow-x:hidden;
}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
button{font:inherit;cursor:pointer}

/* ===== LAYOUT ===== */
.container{
  width:min(100% - 32px,var(--max));
  margin-inline:auto;
}

/* ===== BUTTONS ===== */
.btn{
  display:inline-flex;align-items:center;gap:8px;
  padding:13px 22px;border-radius:999px;border:none;
  font-weight:700;font-size:15px;transition:.22s ease;
}
.btn-primary{background:var(--primary);color:#fff}
.btn-primary:hover{background:var(--primary-dark);transform:translateY(-1px)}
.btn-outline{background:#fff;color:var(--text);border:1.5px solid var(--line)}
.btn-outline:hover{border-color:var(--primary);color:var(--primary)}
.btn-wa{
  display:flex;align-items:center;justify-content:center;gap:8px;
  background:#25D366;color:#fff;border-radius:999px;
  padding:14px 24px;font-weight:700;font-size:15px;
  margin-top:24px;transition:.22s ease;
}
.btn-wa:hover{background:#1ebe5c;transform:translateY(-1px)}
.btn.full{width:100%}

/* ===== TOPBAR ===== */
.topbar{
  background:rgba(255,255,255,.92);
  backdrop-filter:blur(12px);
  border-bottom:1px solid var(--line);
  position:sticky;top:0;z-index:100;
}
.nav-wrap{
  display:flex;align-items:center;
  justify-content:space-between;
  min-height:70px;gap:16px;
}
.brand{display:flex;align-items:center;gap:12px;font-weight:800}
.logo-box{
  width:44px;height:44px;border-radius:14px;
  background:linear-gradient(135deg,var(--primary),#ffb48b);
  color:#fff;font-weight:900;font-size:16px;
  display:grid;place-items:center;
  box-shadow:0 4px 14px rgba(255,122,122,.35);
  flex-shrink:0;
}
.logo-box.sm{width:36px;height:36px;border-radius:11px;font-size:13px}
.brand-text{display:flex;flex-direction:column;line-height:1.2}
.brand-name{font-size:16px}
.brand-sub{font-size:12px;color:var(--muted);font-weight:500}
.nav-links{display:flex;align-items:center;gap:20px;font-size:15px}
.nav-links a{color:#444;transition:.2s}
.nav-links a:hover{color:var(--primary)}
.hamburger{
  display:none;background:none;border:none;
  font-size:22px;color:var(--text);padding:6px;
}
.mobile-menu{
  display:none;flex-direction:column;gap:0;
  border-top:1px solid var(--line);
  background:#fff;
}
.mobile-menu a{
  padding:14px 16px;font-size:16px;border-bottom:1px solid var(--line);
}
.mobile-menu.open{display:flex}

/* ===== HERO ===== */
.hero{padding:52px 0 32px}
.hero-inner{
  display:grid;grid-template-columns:1.1fr .9fr;
  gap:28px;align-items:center;
}
.eyebrow{
  display:inline-block;padding:9px 16px;
  background:#fff;border:1px solid var(--line);
  border-radius:999px;color:var(--primary-dark);
  font-size:13px;font-weight:700;margin-bottom:18px;
}
.hero-text h1{
  font-size:clamp(34px,4.5vw,58px);line-height:1.08;
  margin-bottom:16px;
}
.hero-text p{color:var(--muted);font-size:17px;line-height:1.8;margin-bottom:24px}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:22px}
.hero-tags{display:flex;flex-wrap:wrap;gap:10px}
.hero-tags span{
  background:#fff;border:1px solid var(--line);
  border-radius:999px;padding:9px 14px;font-size:14px;color:#555;
}
.hero-cards{
  display:grid;grid-template-columns:1fr 1fr;gap:14px;
  background:#fff;border:1px solid var(--line);
  border-radius:28px;padding:18px;
  box-shadow:var(--shadow);
}
.hcard{
  border-radius:18px;padding:22px 18px;min-height:160px;
  position:relative;overflow:hidden;
}
.hcard.pink{background:linear-gradient(135deg,#ffe2d6,#fff4ef);border:1px solid #fad5c8}
.hcard.blue{background:linear-gradient(135deg,#d6eeff,#eef7ff);border:1px solid #c0dffa}
.hcard.peach{background:linear-gradient(135deg,#ffecd2,#fffaf4);border:1px solid #fcddb0}
.hcard.green{background:linear-gradient(135deg,#d6f5e3,#f0fff5);border:1px solid #b8edcc}
.hcard strong{
  display:block;font-size:12px;letter-spacing:.5px;
  color:#a45757;margin-bottom:8px;
}
.hcard.blue strong{color:#3a7ec4}
.hcard.peach strong{color:#b07030}
.hcard.green strong{color:#2e8a57}
.hcard h3{font-size:19px;line-height:1.3}
.hcard::after{
  content:'';position:absolute;
  right:-24px;bottom:-24px;
  width:90px;height:90px;
  background:rgba(255,255,255,.5);
  border-radius:50%;
}

/* ===== PROMO STRIP ===== */
.promo-strip{
  background:var(--primary);
  color:#fff;padding:12px 0;
  overflow:hidden;
}
.strip-inner{
  display:flex;gap:36px;flex-wrap:wrap;
  justify-content:center;font-size:14px;font-weight:600;
}

/* ===== PRODUCTS SECTION ===== */
.section-products{padding:48px 0 40px}
.section-head{
  display:flex;justify-content:space-between;
  align-items:flex-end;gap:16px;margin-bottom:26px;
  flex-wrap:wrap;
}
.section-head.center{
  flex-direction:column;align-items:center;text-align:center;
}
.section-head h2{font-size:30px;margin-bottom:4px}
.section-head p{color:var(--muted);font-size:15px}
.tabs{display:flex;gap:8px;flex-wrap:wrap}
.tab{
  padding:10px 18px;border-radius:999px;
  border:1.5px solid var(--line);background:#fff;
  color:#555;font-weight:700;font-size:14px;transition:.2s;
}
.tab:hover{border-color:var(--primary);color:var(--primary)}
.tab.active{background:var(--primary);color:#fff;border-color:var(--primary)}
.products{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:18px;
}
.product{
  background:#fff;border:1px solid var(--line);
  border-radius:var(--radius);overflow:hidden;
  box-shadow:var(--shadow);transition:.25s ease;
}
.product:hover{transform:translateY(-5px);box-shadow:0 16px 36px rgba(0,0,0,.1)}
.product-img{
  aspect-ratio:1/1;display:flex;
  align-items:center;justify-content:center;
  font-size:56px;position:relative;
}
.product-img.gi{background:linear-gradient(135deg,#ffe2d6,#fff4ef)}
.product-img.bi{background:linear-gradient(135deg,#d6eeff,#eef7ff)}
.product-img.bai{background:linear-gradient(135deg,#ffecd2,#fffaf4)}
.emoji{z-index:1}
.badge{
  position:absolute;top:12px;left:12px;
  padding:6px 12px;border-radius:999px;
  font-size:12px;font-weight:800;
  background:#fff;color:#c56060;
}
.product-img.bi .badge{color:#3a7ec4}
.product-img.bai .badge{color:#b07030}
.product-body{padding:18px}
.product h3{
  font-size:16px;line-height:1.45;
  min-height:46px;margin-bottom:14px;
}
.meta{display:flex;justify-content:space-between;align-items:center;gap:8px}
.price{font-size:24px;font-weight:900}
.btn-cart{
  background:#222;color:#fff;border:none;
  border-radius:999px;padding:10px 14px;
  font-size:13px;font-weight:700;
  transition:.2s;
}
.btn-cart:hover{background:var(--primary)}

/* ===== ABOUT ===== */
.section-about{
  background:linear-gradient(180deg,#fff8f4 0%,#ffffff 100%);
  padding:52px 0;
}
.features{
  display:grid;grid-template-columns:repeat(4,1fr);
  gap:18px;margin-top:32px;
}
.feat-card{
  background:#fff;border:1px solid var(--line);
  border-radius:var(--radius);padding:26px;
  box-shadow:var(--shadow);text-align:center;
  transition:.25s;
}
.feat-card:hover{transform:translateY(-4px)}
.feat-icon{font-size:38px;margin-bottom:14px}
.feat-card h3{font-size:18px;margin-bottom:8px}
.feat-card p{color:var(--muted);font-size:14px;line-height:1.8}

/* ===== CONTACT ===== */
.section-contact{padding:52px 0}
.contact-grid{
  display:grid;grid-template-columns:1fr 1fr;gap:24px;
}
.info-card,.form-card{
  background:#fff;border:1px solid var(--line);
  border-radius:28px;padding:32px;
  box-shadow:var(--shadow);
}
.info-card h2,.form-card h2{font-size:26px;margin-bottom:22px}
.info-list{display:grid;gap:14px}
.info-item{
  display:flex;align-items:flex-start;gap:14px;
  background:var(--accent);border:1px solid #fae7dc;
  border-radius:16px;padding:16px;
}
.info-icon{font-size:22px;flex-shrink:0;margin-top:2px}
.info-item small{
  display:block;font-size:12px;font-weight:700;
  color:#a16b5a;margin-bottom:4px;
}
.info-item p{color:#333;font-size:15px;line-height:1.7;margin:0}
.info-item a{color:var(--primary-dark)}
.field{display:flex;flex-direction:column;gap:6px;margin-bottom:14px}
.field label{font-size:14px;font-weight:600;color:#555}
.field input,.field textarea{
  border:1.5px solid var(--line);border-radius:14px;
  padding:13px 15px;font:inherit;outline:none;
  background:#fff;transition:.2s;
}
.field input:focus,.field textarea:focus{border-color:var(--primary)}
.field textarea{min-height:130px;resize:vertical}
.form-notice{
  margin-top:12px;padding:12px 16px;
  border-radius:12px;font-size:14px;
  display:none;
}
.form-notice.success{
  background:#e6f9ee;color:#1a7a40;border:1px solid #b8edcc;display:block;
}
.form-notice.error{
  background:#fdecea;color:#c0392b;border:1px solid #f5c6cb;display:block;
}

/* ===== FOOTER ===== */
.footer{
  border-top:1px solid var(--line);
  padding:28px 0 44px;
  color:var(--muted);font-size:14px;
}
.footer-inner{
  display:flex;align-items:center;justify-content:space-between;
  gap:16px;flex-wrap:wrap;
}
.footer-brand{display:flex;align-items:center;gap:10px;font-weight:700;color:var(--text)}
.footer-brand span{font-size:12px;font-weight:400;color:var(--muted);display:block}
.footer-links{display:flex;gap:18px}
.footer-links a:hover{color:var(--primary)}

/* ===== CART SIDEBAR ===== */
.cart-sidebar{
  position:fixed;right:-380px;top:0;bottom:0;
  width:360px;background:#fff;z-index:200;
  box-shadow:-8px 0 32px rgba(0,0,0,.12);
  display:flex;flex-direction:column;
  transition:.32s cubic-bezier(.4,0,.2,1);
}
.cart-sidebar.open{right:0}
.cart-head{
  display:flex;justify-content:space-between;align-items:center;
  padding:22px 24px;border-bottom:1px solid var(--line);
}
.cart-head h3{font-size:20px}
.cart-head button{
  background:none;border:none;font-size:22px;
  color:var(--muted);cursor:pointer;
}
.cart-items{
  flex:1;overflow-y:auto;padding:16px 24px;
}
.cart-items .empty{color:var(--muted);text-align:center;padding:40px 0;font-size:15px}
.cart-item{
  display:flex;justify-content:space-between;align-items:center;
  gap:12px;padding:14px 0;border-bottom:1px solid var(--line);
}
.cart-item-info p{font-size:15px;font-weight:600;margin-bottom:4px}
.cart-item-info span{font-size:13px;color:var(--muted)}
.cart-item-actions{display:flex;align-items:center;gap:8px}
.qty-btn{
  width:28px;height:28px;border-radius:50%;border:1.5px solid var(--line);
  background:#fff;font-size:16px;display:grid;place-items:center;
}
.qty-btn:hover{background:var(--accent)}
.cart-footer{
  padding:20px 24px;border-top:1px solid var(--line);
}
.cart-total{
  font-size:17px;font-weight:600;margin-bottom:14px;
}
.cart-overlay{
  display:none;position:fixed;inset:0;
  background:rgba(0,0,0,.35);z-index:190;
}
.cart-overlay.open{display:block}

/* ===== FABs ===== */
.cart-fab{
  position:fixed;bottom:90px;right:24px;
  width:58px;height:58px;border-radius:50%;
  background:var(--primary);color:#fff;
  box-shadow:0 6px 20px rgba(255,122,122,.45);
  border:none;font-size:20px;z-index:150;
  display:flex;align-items:center;justify-content:center;
  transition:.2s;
}
.cart-fab:hover{background:var(--primary-dark);transform:scale(1.05)}
.cart-count{
  position:absolute;top:-4px;right:-4px;
  width:22px;height:22px;border-radius:50%;
  background:#222;color:#fff;font-size:11px;
  font-weight:800;display:grid;place-items:center;
}
.wa-fab{
  position:fixed;bottom:20px;right:24px;
  width:58px;height:58px;border-radius:50%;
  background:#25D366;display:grid;place-items:center;
  box-shadow:0 6px 20px rgba(37,211,102,.4);
  z-index:150;transition:.2s;
}
.wa-fab:hover{background:#1ebe5c;transform:scale(1.05)}

/* ===== RESPONSIVE ===== */
@media(max-width:1024px){
  .products{grid-template-columns:repeat(2,1fr)}
  .features{grid-template-columns:repeat(2,1fr)}
  .hero-inner,.contact-grid{grid-template-columns:1fr}
  .hero-cards{display:none}
}
@media(max-width:640px){
  .nav-links{display:none}
  .hamburger{display:block}
  .products{grid-template-columns:1fr}
  .features{grid-template-columns:1fr}
  .section-head{flex-direction:column;align-items:flex-start}
  .promo-strip .strip-inner{flex-direction:column;align-items:center;gap:6px}
  .footer-inner{flex-direction:column;align-items:flex-start}
}
