/* AL-QABASY landing. Plain JavaScript, no dependencies or backend. */
(() => {
  'use strict';
  const copy = {
    ar: {
      skip:'انتقل إلى المحتوى',
      topline:'جذورنا في التجارة. وأفكارنا أبعد.', toplineSide:'شركة القبسي للتجارة',
      brand:'القبسي<span class="brand-dot">.</span>',brandSub:'للتجارة',
      navAbout:'عن القبسي',navFields:'ما نعمل عليه',navQabas:'قبس ون',navApproach:'طريقتنا',navContact:'لنتحدث',
      heroEyebrow:'شركة القبسي للتجارة <span class="eyebrow-divider">/</span> AL-QABASY',
      heroTitle1:'من قلب التجارة،',heroTitle2:'نبني ما يأتي',heroTitle3:'بعدها.',
      heroDescription:'نحن شركة القبسي للتجارة. خبرتنا تنمو مع العمل كل يوم، وفريق التطوير لدينا يحوّل ما نتعلّمه إلى حلول رقمية صُمّمت للواقع. من هنا بدأ نظام قبس ون.',
      discover:'تعرّف على القبسي',meetQabas:'اكتشف قبس ون',heroCaption:'حركتان مختلفتان. عقلية واحدة تصنع الأثر.',
      visualTop:'THE WAY WE THINK',visualBottom:'رسم تعبيري من تصميمنا',orbit1Small:'من واقع العمل',orbit1:'التجارة',orbit2Small:'إلى ما نبنيه',orbit2:'التطوير',
      stripOne:'تجارة بخبرة عملية',stripTwo:'حلول يطورها فريقنا',stripThree:'التفاصيل الصغيرة تصنع الفارق',
      aboutEyebrow:'من نحن',aboutTitle1:'شركة تجارية.',aboutTitle2:'بعقلية تبني.',
      aboutCopy1:'القبسي شركة تعمل في التجارة، لكننا لا نفصل ما يحدث في العمل عن الطريقة التي يمكن أن يصبح بها أفضل. نؤمن أن أقوى الأفكار تبدأ حين نفهم التفاصيل بأنفسنا.',
      aboutCopy2:'لذلك لدينا فريق تطوير تقني داخل الشركة، يعمل على تصميم وبناء حلول تساعد على تنظيم العمليات وربط عناصرها. نظام <strong>QabasOne</strong> هو أحد الأعمال التي خرجت من هذا الفريق.',
      aboutLink:'تعرّف على مسارات عملنا',aboutDivider:'القبسي / أكثر من اتجاه، نفس الرؤية',
      fieldsEyebrow:'مجالات العمل',fieldsTitle:'جذور راسخة.<br>أفق مفتوح.',fieldsNote:'جانب يهتم بما نعمل عليه اليوم. وجانب يطوّر كيف نعمل غدًا.',
      fieldTradeTag:'عملنا الأساسي',fieldTradeTitle:'التجارة،<br>كما نعرفها من الداخل.',fieldTradeBody:'التعاملات اليومية، التفاصيل، والمتابعة المستمرة. منها نبني خبرتنا، ونفهم ما الذي يحتاج فعلًا إلى التطوير.',
      fieldDevTag:'فريقنا الداخلي',fieldDevTitle:'التقنية،<br>حين تفهم الواقع.',fieldDevBody:'لدينا فريق تطوير يصمّم ويبني حلولًا انطلاقًا من احتياجات العمل، وليس من افتراضات بعيدة عنه.',
      processEyebrow:'طريقتنا',processTitle1:'لا نبدأ من',processTitle2:'الشاشة.',processIntro:'نبدأ بالسؤال الصحيح، وبفهم الحركة الحقيقية للعمل. ثم يأتي دور التصميم والتطوير.',
      step1Title:'نفهم الواقع',step1Body:'ننظر إلى العمليات كما تحدث، لا كما نتخيّلها.',step2Title:'نربط التفاصيل',step2Body:'نرى العلاقات بين الخطوات والبيانات والأشخاص.',step3Title:'نبني بوعي',step3Body:'نحوّل هذا الفهم إلى تجربة وأدوات قابلة للاستخدام.',step4Title:'نطوّر باستمرار',step4Body:'نعود إلى العمل الحقيقي لنتعلّم ونحسّن.',
      qabasEyebrow:'من أعمال فريق التطوير',projectTag:'صُمّم وطُوّر داخل القبسي',qabasTitle:'فكرة خرجت من قلب العمل.',
      qabasBody:'قبس ون نظام صمّمه وطوّره فريق التطوير في شركة القبسي للتجارة. يجسّد فكرتنا: التقنية تكون أقرب للناس حين تنطلق من فهم تفاصيل يومهم.',
      qabasAction:'زيارة نظام قبس ون',qabasDistinction:'القبسي هي الشركة الأم. قبس ون نظام مستقل بهويته.',mockHeading:'نظرة واحدة. صورة أوضح.',mockPill:'تصوّر توضيحي',stickerTop:'BUILT BY',
      manifestoEyebrow:'ما نؤمن به',manifesto1:'القيمة ليست فقط',manifesto2:'فيما نعمله.',manifesto3:'بل فيما نقدر أن نبنيه.',manifestoCaption:'هذه هي عقلية القبسي.',
      contactEyebrow:'خطوة جديدة',contact1:'الأفكار الجيدة',contact2:'تبدأ بمحادثة.',contactDesc:'سواء كنت تتعرّف علينا أو تفكّر في فرصة للتعاون، يسعدنا أن تبدأ المحادثة.',
      contactCardTitle:'رسالة تعارف، كبداية.',contactCardBody:'انسخ رسالة تعريف قصيرة يمكنك إرسالها عبر قناة التواصل الرسمية للشركة.',copyIntro:'نسخ رسالة التعارف',
      contactNote:'لم نُضف بيانات تواصل غير مؤكدة. يمكن تخصيص هذه المساحة قبل النشر.',
      footerBrand:'القبسي<span>.</span>',footerTagline:'من قلب التجارة، نبني ما يأتي بعدها.',copyright:'شركة القبسي للتجارة. جميع الحقوق محفوظة.',madeWith:'صُنع بعناية، لا على عجل.',
      toastCopied:'تم نسخ رسالة التعارف.',toastFailed:'تعذّر النسخ تلقائيًا. يمكنك تحديد النص ونسخه يدويًا.',
      introMessage:'مرحبًا فريق شركة القبسي للتجارة،\nأرغب في التعرف أكثر على الشركة ومناقشة فرصة محتملة للتعاون.\nشكرًا لكم.'
    },
    en: {
      skip:'Skip to content',
      topline:'Rooted in trade. Driven to go further.',toplineSide:'TRADING COMPANY',
      brand:'AL-QABASY<span class="brand-dot">.</span>',brandSub:'TRADING COMPANY',
      navAbout:'Our story',navFields:'What we do',navQabas:'QabasOne',navApproach:'Our approach',navContact:'Get in touch',
      heroEyebrow:'AL-QABASY <span class="eyebrow-divider">/</span> TRADING COMPANY',
      heroTitle1:'Rooted in trade.',heroTitle2:'Driven to',heroTitle3:'build beyond.',
      heroDescription:'We are AL-QABASY Trading Company. Our experience grows through real business, and our in-house development team turns what we learn into tools built for the real world. That is where QabasOne began.',
      discover:'Meet AL-QABASY',meetQabas:'Discover QabasOne',heroCaption:'Two disciplines. One way of thinking.',
      visualTop:'THE WAY WE THINK',visualBottom:'AN ORIGINAL VISUAL CONCEPT',orbit1Small:'Where we started',orbit1:'TRADE',orbit2Small:'What we create',orbit2:'DEVELOPMENT',
      stripOne:'Grounded in commerce',stripTwo:'Built by our own team',stripThree:'Attention to what matters',
      aboutEyebrow:'Who we are',aboutTitle1:'A trading company.',aboutTitle2:'A builder’s mindset.',
      aboutCopy1:'AL-QABASY works in trade. But we never separate day-to-day business from the possibility of doing it better. We believe the strongest ideas come from understanding the details firsthand.',
      aboutCopy2:'That is why we have an in-house technology development team. The team designs and builds solutions to help organize operations and connect the moving parts. <strong>QabasOne</strong> is one of the systems it has created.',
      aboutLink:'Explore what we do',aboutDivider:'AL-QABASY / Different directions, shared vision',
      fieldsEyebrow:'Our disciplines',fieldsTitle:'Strong foundations.<br>Open horizons.',fieldsNote:'One side works on the business of today. The other builds better ways to work tomorrow.',
      fieldTradeTag:'Our core business',fieldTradeTitle:'Trade, from the<br>inside out.',fieldTradeBody:'Everyday transactions, real details, and constant follow-through. That is where we gain experience—and see what truly needs improving.',
      fieldDevTag:'Our in-house team',fieldDevTitle:'Technology that<br>understands work.',fieldDevBody:'Our development team designs and builds solutions guided by practical needs—not distant assumptions.',
      processEyebrow:'How we think',processTitle1:'We don’t start',processTitle2:'with a screen.',processIntro:'We start with the right question and a close look at how work actually happens. Only then do design and development begin.',
      step1Title:'Observe the work',step1Body:'See operations as they are, not how we imagine them.',step2Title:'Connect the details',step2Body:'Find the links between steps, data, and people.',step3Title:'Build with purpose',step3Body:'Turn understanding into useful tools and experiences.',step4Title:'Keep improving',step4Body:'Return to the real work, learn, and refine.',
      qabasEyebrow:'Crafted by our development team',projectTag:'DESIGNED & BUILT IN-HOUSE',qabasTitle:'An idea born from real work.',
      qabasBody:'QabasOne is a system designed and developed by the technology team at AL-QABASY Trading Company. It reflects what we believe: technology works better for people when it understands their everyday reality.',
      qabasAction:'Open QabasOne',qabasDistinction:'AL-QABASY is the parent company; QabasOne has its own product identity.',mockHeading:'Clarity in a single view.',mockPill:'Concept illustration',stickerTop:'BUILT BY',
      manifestoEyebrow:'Our belief',manifesto1:'Value is not only',manifesto2:'in what we do.',manifesto3:'It’s in what we can build.',manifestoCaption:'That is the AL-QABASY mindset.',
      contactEyebrow:'The next conversation',contact1:'Good ideas',contact2:'start with a conversation.',contactDesc:'Whether you are discovering us or considering a collaboration, we welcome the opportunity to connect.',
      contactCardTitle:'A conversation starter.',contactCardBody:'Copy a short introduction to share through the company’s official contact channel.',copyIntro:'Copy introduction message',
      contactNote:'Contact details have intentionally not been invented. Add verified channels before launch.',
      footerBrand:'AL-QABASY<span>.</span>',footerTagline:'Rooted in trade. Driven to build beyond.',copyright:'AL-QABASY Trading Company. All rights reserved.',madeWith:'Made with intention.',
      toastCopied:'Introduction message copied.',toastFailed:'Automatic copy failed. Please select and copy your message manually.',
      introMessage:'Hello AL-QABASY Trading Company team,\nI would like to learn more about your company and discuss a possible collaboration.\nThank you.'
    }
  };

  const root = document.documentElement;
  const toggle = document.getElementById('langToggle');
  const langText = document.getElementById('langText');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('site-nav');
  const toast = document.getElementById('toast');
  const copyButton = document.getElementById('copyIntro');
  let toastTimer;
  let lang = 'ar';

  function getSavedLanguage() {
    const param = new URLSearchParams(window.location.search).get('lang');
    if (param === 'ar' || param === 'en') return param;
    try {
      const stored = localStorage.getItem('alqabasy-language');
      return stored === 'en' ? 'en' : 'ar';
    } catch (_) { return 'ar'; }
  }

  function setLanguage(next) {
    lang = next === 'en' ? 'en' : 'ar';
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = lang === 'ar' ? 'شركة القبسي للتجارة | AL-QABASY' : 'AL-QABASY | Trading Company';
    document.querySelector('meta[name="description"]').content = lang === 'ar'
      ? 'شركة القبسي للتجارة — من الخبرة في التجارة إلى بناء حلول رقمية حقيقية. تعرّف على الشركة والفريق الذي صمّم نظام قبس ون.'
      : 'AL-QABASY Trading Company. Rooted in commerce, with an in-house team that designed and developed QabasOne.';
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const phrase = copy[lang][node.dataset.i18n];
      if (phrase !== undefined) node.innerHTML = phrase;
    });
    langText.textContent = lang === 'ar' ? 'EN' : 'عربي';
    toggle.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التحويل إلى اللغة العربية');
    menuToggle.setAttribute('aria-label', lang === 'ar' ? 'فتح القائمة' : 'Open menu');
    nav.setAttribute('aria-label', lang === 'ar' ? 'القائمة الرئيسية' : 'Main navigation');
    try { localStorage.setItem('alqabasy-language', lang); } catch (_) {}
  }

  toggle.addEventListener('click', () => setLanguage(lang === 'ar' ? 'en' : 'ar'));
  setLanguage(getSavedLanguage());

  function closeMenu() {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => {
    if (nav.classList.contains('open') && !nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3400);
  }
  async function copyText(value) {
    if (navigator.clipboard?.writeText) {
      try { await navigator.clipboard.writeText(value); return true; } catch (_) {}
    }
    const field = document.createElement('textarea');
    field.value = value;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.focus();
    field.select();
    let copied = false;
    try { copied = document.execCommand('copy'); } catch (_) {}
    field.remove();
    return copied;
  }
  copyButton.addEventListener('click', async () => {
    const result = await copyText(copy[lang].introMessage);
    showToast(result ? copy[lang].toastCopied : copy[lang].toastFailed);
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
