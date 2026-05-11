import { useState, useEffect } from "react";
import "./App.css";

const T = {
  EN: {
    nav: ["Menu", "About", "Gallery", "Reviews", "Contact"],
    reserveSpot: "Reserve a Spot",
    heroBadge: "4.5 · 200+ guests · Yerevan's favorite brunch",
    heroHeadline1: "More Than Brunch —",
    heroHeadline2: "It's Your Favorite",
    heroHeadline3: "Part of the Day.",
    heroSub: "Handcrafted breakfasts, thin crispy pizzas, specialty coffee, and the kind of warmth that keeps guests coming back again and again.",
    heroCta2: "Explore Menu",
    pill1: "🏅 Family Friendly", pill2: "☕ Specialty Coffee", pill3: "✦ Returning Guests Daily",
    statsLabels: ["Google Reviews","Average Rating","Returning Guests","Handcrafted Menu"],
    expTag: "The Experience", expTitle: "Everything We Do, We Do With Care",
    expSub: "From the first coffee pour to the last dessert bite — every detail is intentional.",
    galleryTag: "Gallery", galleryTitle: "Every Dish Tells a Story",
    galleryNote: "📸 Real photos from The BRUNCH kitchen",
    menuTag: "Our Menu", menuTitle: "Made Fresh, Every Morning",
    menuSub: "A menu built around quality ingredients and recipes that genuinely excite us.",
    aboutTag: "Our Story", aboutTitle: "Built Around Comfort, Flavor & Connection",
    aboutP1: "The BRUNCH was born from a simple belief: mornings should feel special. Not rushed. Not ordinary. Special.",
    aboutP2: "We built a place where breakfasts are generous, coffee is brewed with care, and the staff actually knows your name.",
    aboutP3: "Every dish on our menu was chosen because it genuinely excites us — from the perfectly crisped pizza bases to the lemon tart that people talk about for weeks.",
    aboutP4: "Located in the heart of Yerevan, The BRUNCH is for anyone who believes the best part of the day deserves the best table in the room.",
    aboutCta: "Come Visit Us", aboutQuote: "\"The place everyone comes back to.\"",
    reviewsTag: "Guest Reviews", reviewsTitle: "What Our Guests Are Saying",
    reviewsSub: "Written by real guests. We share them exactly as they felt.",
    whyTag: "Why The BRUNCH", whyTitle: "More Than a Café. An Experience.",
    whyItems: [
      ["Fast & Attentive Service","No long waits. Friendly faces. Staff who genuinely care."],
      ["Consistent Quality","Every visit feels as good as the first — that's the standard."],
      ["Generous Portions","We don't believe in tiny plates. Leave full and happy."],
      ["Premium Coffee Program","Sourced, roasted, and brewed to barista standards."],
      ["Family Friendly","A space where everyone — kids included — feels welcome."],
      ["Memorable Desserts","The kind that you think about on the drive home."],
    ],
    contactTag: "Come Find Us", contactTitle: "A Table Is Waiting", contactTitleEm: "Just for You.",
    contactDesc: "Whether it's a slow solo morning, a family gathering, or a date — The BRUNCH has a seat with your name on it.",
    loc: "Location", hours: "Hours", hoursVal: "Mon – Sun: 10:00 – 22:00",
    hoursNote: "Breakfast served until 16:00", res: "Reservations",
    branch1: "8 Vahram Papazyan St, Yerevan", branch2: "Dalma Garden Mall, Yerevan", branch3: "The Brunch Cascad",
    fbBtn: "Facebook", igBtn: "Instagram",
    cardTag: "Café & Kitchen", cardQuote: "\"Made for slow mornings and great conversations.\"",
    cardStat1: "Happy Guests", cardStat2: "Google Rating", cardStat3: "Menu Sections",
    cardCta: "Make a Reservation ✦",
    footerTagline: "Made for slow mornings\nand great conversations.",
    footerCopy: "© 2025 The BRUNCH Café & Kitchen · All rights reserved · Made with ☕ in Yerevan",
    features: [
      { icon:"✦", title:"Legendary Breakfasts", dish:"English Breakfast · Brunch Bowl", desc:"Large portions, beautiful plating, and comforting flavors that make mornings worth waking up for." },
      { icon:"◈", title:"Thin & Crispy Pizza", dish:"Prosciutto & Arugula · Quattro Formaggi", desc:"Italian-inspired texture, fresh ingredients, and that perfect char — made with genuine care." },
      { icon:"◉", title:"Specialty Coffee", dish:"Pour Over · Signature Latte", desc:"Single-origin beans, precision brewing, and latte art that makes every cup a small ceremony." },
      { icon:"❋", title:"Artisan Desserts", dish:"Lemon Tart · Tiramisu", desc:"The lemon tart alone has brought people back. Our pastry selection changes seasonally." },
      { icon:"◇", title:"Warm Hospitality", dish:"Attentive · Personal · Caring", desc:"Friendly staff who remember you. Service that feels personal, never rushed, never corporate." },
      { icon:"○", title:"Cozy Atmosphere", dish:"Relaxed · Bright · Welcoming", desc:"Natural light, warm textures, and a pace of life that encourages you to stay a little longer." },
    ],
  },
  RU: {
    nav: ["Меню", "О нас", "Галерея", "Отзывы", "Контакты"],
    reserveSpot: "Забронировать",
    heroBadge: "4.5 · 200+ гостей · Любимое место для бранча в Ереване",
    heroHeadline1: "Больше, чем бранч —",
    heroHeadline2: "Это ваша любимая",
    heroHeadline3: "часть дня.",
    heroSub: "Авторские завтраки, тонкая хрустящая пицца, кофе specialty — и та теплота, которая заставляет гостей возвращаться снова и снова.",
    heroCta2: "Открыть меню",
    pill1: "🏅 Семейное место", pill2: "☕ Specialty кофе", pill3: "✦ Постоянные гости",
    statsLabels: ["Отзывов в Google","Средняя оценка","Постоянные гости","Ручное приготовление"],
    expTag: "Наш подход", expTitle: "Всё, что мы делаем — делаем с душой",
    expSub: "От первой чашки кофе до последнего кусочка десерта — каждая деталь продумана.",
    galleryTag: "Галерея", galleryTitle: "Каждое блюдо рассказывает историю",
    galleryNote: "📸 Реальные фото из кухни The BRUNCH",
    menuTag: "Наше меню", menuTitle: "Готовим свежим каждое утро",
    menuSub: "Меню, построенное вокруг качественных продуктов и рецептов, которые нас вдохновляют.",
    aboutTag: "Наша история", aboutTitle: "Созданы для уюта, вкуса и общения",
    aboutP1: "The BRUNCH родился из простого убеждения: утро должно быть особенным. Не торопливым. Не обычным. Особенным.",
    aboutP2: "Мы создали место, где завтраки щедрые, кофе заваривают с заботой, а персонал знает вас по имени.",
    aboutP3: "Каждое блюдо в меню выбрано потому, что оно нас по-настоящему восхищает — от хрустящей пицы до лимонного тарта, о котором говорят неделями.",
    aboutP4: "В самом сердце Еревана, The BRUNCH — для тех, кто верит, что лучшая часть дня заслуживает лучшего стола.",
    aboutCta: "Приходите к нам", aboutQuote: "«Место, куда все возвращаются.»",
    reviewsTag: "Отзывы гостей", reviewsTitle: "Что говорят наши гости",
    reviewsSub: "Написано реальными гостями. Делимся ими именно такими, какими они были.",
    whyTag: "Почему The BRUNCH", whyTitle: "Больше, чем кафе. Это опыт.",
    whyItems: [
      ["Быстрое и внимательное обслуживание","Без долгого ожидания. Дружелюбные лица. Персонал, которому не всё равно."],
      ["Стабильное качество","Каждый визит ощущается так же хорошо, как первый — это наш стандарт."],
      ["Щедрые порции","Мы не верим в крошечные тарелки. Уходите сытыми и счастливыми."],
      ["Премиум-кофе","Отборные зёрна, точное заваривание, стандарты бариста."],
      ["Семейная атмосфера","Место, где комфортно всем — включая детей."],
      ["Незабываемые десерты","Те, о которых думаешь всю дорогу домой."],
    ],
    contactTag: "Найдите нас", contactTitle: "Стол уже ждёт вас", contactTitleEm: "Специально для вас.",
    contactDesc: "Тихое утро в одиночестве, семейный сбор или свидание — в The BRUNCH найдётся место с вашим именем.",
    loc: "Адрес", hours: "Часы работы", hoursVal: "Пн – Вс: 10:00 – 22:00",
    hoursNote: "Завтраки подаются до 16:00", res: "Бронирование",
    branch1: "ул. Ваграма Папазяна 8, Ереван", branch2: "Торговый центр Dalma Garden, Ереван",
    fbBtn: "Facebook", igBtn: "Instagram",
    cardTag: "Кафе и Кухня", cardQuote: "«Для неспешных утр и хороших разговоров.»",
    cardStat1: "Довольных гостей", cardStat2: "Рейтинг Google", cardStat3: "Разделов меню",
    cardCta: "Забронировать стол ✦",
    footerTagline: "Для неспешных утр\nи хороших разговоров.",
    footerCopy: "© 2025 The BRUNCH Кафе и Кухня · Все права защищены · Сделано с ☕ в Ереване",
    features: [
      { icon:"✦", title:"Легендарные завтраки", dish:"Английский завтрак · Brunch Bowl", desc:"Щедрые порции, красивая подача и уютные вкусы, которые делают утро особенным." },
      { icon:"◈", title:"Тонкая хрустящая пицца", dish:"Прошутто и руккола · Кватро Формаджи", desc:"Итальянская текстура, свежие ингредиенты и идеальная корочка — сделано с душой." },
      { icon:"◉", title:"Specialty кофе", dish:"Пор-овер · Фирменный латте", desc:"Зёрна single origin, точное заваривание и латте-арт, превращающий каждую чашку в ритуал." },
      { icon:"❋", title:"Авторские десерты", dish:"Лимонный тарт · Тирамису", desc:"Лимонный тарт уже привёл людей обратно. Наш выбор выпечки меняется по сезонам." },
      { icon:"◇", title:"Тёплое гостеприимство", dish:"Внимательный · Личный · Заботливый", desc:"Персонал, который вас помнит. Сервис личный, без спешки и формальности." },
      { icon:"○", title:"Уютная атмосфера", dish:"Расслабленная · Светлая · Радушная", desc:"Естественный свет, тёплые текстуры и ритм жизни, который не торопит." },
    ],
  },
  AM: {
    nav: ["Մենյու", "Մեր մասին", "Պատկերասրահ", "Կարծիքներ", "Կապ"],
    reserveSpot: "Ամրագրել սեղան",
    heroBadge: "4.5 · 200+ հյուր · Երևանի սիրելի brunch վայրը",
    heroHeadline1: "Ավելին, քան բրանչը —",
    heroHeadline2: "Սա ձեր օրվա",
    heroHeadline3: "ամենասիրելի մասն է:",
    heroSub:
      "Հեղինակային նախաճաշեր, բարակ ու խրթխրթան պիցցա, սփեշըլթի սուրճ և ջերմություն, որը ստիպում է հյուրերին վերադառնալ նորից ու նորից:",
    heroCta2: "Տեսնել մենյուն",
    pill1: "🏅 Ընտանեկան",
    pill2: "☕ Սփեշըլթի սուրճ",
    pill3: "✦ Ամենօրյա հյուրեր",
    statsLabels: [
      "Google կարծիքներ",
      "Միջին գնահատական",
      "Մշտական հյուրեր",
      "Հեղինակային մենյու",
    ],
    expTag: "Մեր փորձառությունը",
    expTitle: "Այն ամենը, ինչ անում ենք, անում ենք հոգատարությամբ",
    expSub:
      "Սուրճի առաջին բաժակից մինչև դեսերտի վերջին պատառը՝ յուրաքանչյուր մանրուք կարևոր է:",
    galleryTag: "Պատկերասրահ",
    galleryTitle: "Յուրաքանչյուր ուտեստ մի պատմություն է",
    galleryNote: "📸 Իրական լուսանկարներ The BRUNCH-ի խոհանոցից",
    menuTag: "Մեր մենյուն",
    menuTitle: "Թարմ պատրաստված ամեն առավոտ",
    menuSub: "Մենյու՝ հիմնված որակյալ բաղադրիչների և մեր սիրելի բաղադրատոմսերի վրա:",
    aboutTag: "Մեր պատմությունը",
    aboutTitle: "Ստեղծված հարմարավետության և համի համար",
    aboutP1:
      "The BRUNCH-ը ծնվել է մի պարզ համոզմունքից. առավոտները պետք է լինեն հատուկ: Ոչ թե շտապողական, այլ հատուկ:",
    aboutP2:
      "Մենք ստեղծել ենք մի վայր, որտեղ նախաճաշերն առատ են, սուրճը պատրաստվում է խնամքով, իսկ անձնակազմը ճանաչում է ձեզ:",
    aboutP3:
      "Մեր մենյուի յուրաքանչյուր ուտեստ ընտրվել է մեծ սիրով՝ կատարյալ խրթխրթան պիցցայից մինչև լիմոնե տարտը, որի մասին խոսում են շաբաթներով:",
    aboutP4:
      "Գտնվելով Երևանի սրտում՝ The BRUNCH-ը նրանց համար է, ովքեր կարծում են, որ օրվա լավագույն մասը արժանի է լավագույն սեղանին:",
    aboutCta: "Այցելեք մեզ",
    aboutQuote: "«Այն վայրը, որտեղ բոլորը վերադառնում են»",
    reviewsTag: "Հյուրերի կարծիքներ",
    reviewsTitle: "Ինչ են ասում մեր հյուրերը",
    reviewsSub:
      "Գրված իրական հյուրերի կողմից: Մենք կիսվում ենք նրանց անկեղծ տպավորություններով:",
    whyTag: "Ինչու՞ The BRUNCH",
    whyTitle: "Ավելին, քան սրճարան: Սա փորձառություն է:",
    whyItems: [
      [
        "Արագ և ուշադիր սպասարկում",
        "Առանց երկար սպասելու: Ժպտերես և հոգատար անձնակազմ:",
      ],
      [
        "Կայուն որակ",
        "Յուրաքանչյուր այց հաճելի է, ինչպես առաջին անգամը:",
      ],
      [
        "Առատ չափաբաժիններ",
        "Մենք չենք սիրում փոքր ափսեներ: Հեռացեք կուշտ և երջանիկ:",
      ],
      [
        "Պրեմիում սուրճ",
        "Ընտրված հատիկներ և բարձրակարգ պատրաստում:",
      ],
      [
        "Ընտանեկան մթնոլորտ",
        "Միջավայր, որտեղ բոլորը, ներառյալ երեխաները, սպասված են:",
      ],
      [
        "Անմոռանալի դեսերտներ",
        "Այն տեսակը, որոնց մասին հիշում ես տուն գնալու ճանապարհին:",
      ],
    ],
    contactTag: "Գտեք մեզ",
    contactTitle: "Ձեր սեղանը",
    contactTitleEm: "սպասում է ձեզ:",
    contactDesc:
      "Լինի դա հանգիստ առավոտ, ընտանեկան հավաքույթ, թե ժամադրություն՝ The BRUNCH-ում ձեզ համար միշտ տեղ կա:",
    loc: "Հասցե",
    hours: "Աշխատանքային ժամեր",
    hoursVal: "Երկ – Կիր: 10:00 – 22:00",
    hoursNote: "Նախաճաշը մատուցվում է մինչև 16:00",
    res: "Ամրագրումներ",
    branch1: "Վահրամ Փափազյան 8, Երևան",
    branch2: "Դալմա Գարդեն Մոլ, Երևան",
    fbBtn: "Facebook",
    igBtn: "Instagram",
    cardTag: "Սրճարան և Խոհանոց",
    cardQuote: "«Ստեղծված հանգիստ առավոտների և հաճելի զրույցների համար»",
    cardStat1: "Գոհ հյուրեր",
    cardStat2: "Google վարկանիշ",
    cardStat3: "Մենյուի բաժիններ",
    cardCta: "Ամրագրել սեղան ✦",
    footerTagline: "Հանգիստ առավոտների և\nհաճելի զրույցների համար:",
    footerCopy:
      "© 2025 The BRUNCH Café & Kitchen · Բոլոր իրավունքները պաշտպանված են · Ստեղծված է սիրով Երևանում",
    features: [
      {
        icon: "✦",
        title: "Լեգենդար նախաճաշեր",
        dish: "English Breakfast · Brunch Bowl",
        desc: "Առատ չափաբաժիններ, գեղեցիկ մատուցում և տաքուկ համեր:",
      },
      {
        icon: "◈",
        title: "Բարակ և խրթխրթան պիցցա",
        dish: "Prosciutto & Arugula · Quattro Formaggi",
        desc: "Իտալական ոճի խմոր, թարմ բաղադրիչներ և կատարյալ եզրեր:",
      },
      {
        icon: "◉",
        title: "Սփեշըլթի սուրճ",
        dish: "Pour Over · Signature Latte",
        desc: "Բարձրակարգ հատիկներ, ճշգրիտ պատրաստում և սուրճի արվեստ:",
      },
      {
        icon: "❋",
        title: "Հեղինակային դեսերտներ",
        dish: "Lemon Tart · Tiramisu",
        desc: "Մեր լիմոնե տարտը դարձել է շատերի սիրելին: Տեսականին թարմացվում է սեզոնային:",
      },
      {
        icon: "◇",
        title: "Ջերմ հյուրընկալություն",
        dish: "Ուշադիր · Անձնական · Հոգատար",
        desc: "Անձնակազմ, որը հիշում է ձեր նախասիրությունները:",
      },
      {
        icon: "○",
        title: "Հարմարավետ միջավայր",
        dish: "Հանգիստ · Լուսավոր · Ջերմ",
        desc: "Բնական լույս և մթնոլորտ, որտեղ ժամանակը կանգ է առնում:",
      },
    ],
  },
};

const MENU_ITEMS = [
  { category: "Breakfast", categoryRU: "Завтрак", categoryAM: "Նախաճաշ", emoji: "🍳", items: [
    { name: "English Breakfast", nameRU: "Английский завтрак", nameAM: "Անգլիական նախաճաշ",
      desc: "Toast, mixed salad, village potatoes, tomato, sausage, bacon, feta and 2 eggs of your choice",
      descRU: "Тост, микс-салат, деревенский картофель, помидор, сосиски, бекон, фета и 2 яйца на выбор",
      descAM: "Տոստ, աղցան, գյուղական կարտոֆիլ, լոլիկ, նրբերշիկ, բեկոն, ֆետա և 2 ձու՝ ըստ ձեր ընտրության", price: "3,700" },
    { name: "The Brunch Bowl", nameRU: "Бранч Боул", nameAM: "Բրանչ Բոուլ",
      desc: "Boiled egg, sautéed spinach, avocado, ricotta, cherry tomatoes and quinoa",
      descRU: "Варёное яйцо, шпинат соте, авокадо, рикотта, помидоры черри и киноа",
      descAM: "Խաշած ձու, սպանախ, ավոկադո, ռիկոտա, չերրի լոլիկ և կինոա", price: "3,900" },
    { name: "Breakfast with Smoked Salmon", nameRU: "Завтрак с копчёным лососем", nameAM: "Նախաճաշ ծխեցված սաղմոնով",
      desc: "Smoked salmon, guacamole, omelette, salad and crusty bread",
      descRU: "Копчёный лосось, гуакамоле, омлет, салат и хрустящий хлеб",
      descAM: "Ծխեցված սաղմոն, գուակամոլե, օմլետ, աղցան և խրթխրթան հաց", price: "4,400" },
    { name: "Oatmeal Brûlée", nameRU: "Овсянка Брюле", nameAM: "Վարսակի շիլա Բրյուլե",
      desc: "Oatmeal, milk, berries, stracciatella — the perfect slow morning",
      descRU: "Овсянка, молоко, ягоды, страчателла — идеальное неспешное утро",
      descAM: "Վարսակ, կաթ, հատապտուղներ, ստրատչատելա — կատարյալ հանգիստ առավոտ", price: "2,300" },
    { name: "Porridge with Berries & Meringue", nameRU: "Каша с ягодами и безе", nameAM: "Շիլա հատապտուղներով և բեզեով",
      desc: "Warm porridge with seasonal berries and house meringue",
      descRU: "Тёплая каша с сезонными ягодами и безе",
      descAM: "Տաք շիլա սեզոնային հատապտուղներով և տնական բեզեով", price: "2,400" },
    { name: "Cottage Cheese Balls", nameRU: "Сырники", nameAM: "Սիրնիկներ",
      desc: "Classic syrniki with berry jam and sour cream",
      descRU: "Классические сырники с ягодным вареньем и сметаной",
      descAM: "Դասական սիրնիկներ հատապտղային ջեմով և թթվասերով", price: "3,100" },
  ]},
  { category: "Pizza", categoryRU: "Пицца", categoryAM: "Պիցցա", emoji: "🍕", items: [
    { name: "Margherita", nameRU: "Маргарита", nameAM: "Մարգարիտա",
      desc: "Classic tomato base, fresh mozzarella, basil",
      descRU: "Классический томатный соус, свежая моцарелла, базилик",
      descAM: "Դասական տոմատի սոուս, թարմ մոցարելա, ռեհան", price: "3,500" },
    { name: "Pepperoni", nameRU: "Пепперони", nameAM: "Պեպերոնի",
      desc: "Spicy pepperoni, tomato sauce, mozzarella",
      descRU: "Острый пепперони, томатный соус, моцарелла",
      descAM: "Կծու պեպերոնի, տոմատի սոուս, մոցարելա", price: "3,900" },
    { name: "Ham & Mushroom", nameRU: "Ветчина и грибы", nameAM: "Ազդրապուխտ և սունկ",
      desc: "Ham, mushrooms, mozzarella, tomato base",
      descRU: "Ветчина, грибы, моцарелла, томатная основа",
      descAM: "Ազդրապուխտ, սունկ, մոցարելա, տոմատի հիմք", price: "3,600" },
    { name: "Spinach Feta", nameRU: "Шпинат-фета", nameAM: "Սպանախ և ֆետա",
      desc: "Spinach, feta cheese, white sauce, walnuts",
      descRU: "Шпинат, сыр фета, белый соус, грецкие орехи",
      descAM: "Սպանախ, ֆետա պանիր, սպիտակ սոուս, ընկույզ", price: "3,900" },
    { name: "Prosciutto & Arugula", nameRU: "Прошутто и руккола", nameAM: "Պրոշուտո և ռուկոլա",
      desc: "Prosciutto, fresh arugula, parmesan, tomato base",
      descRU: "Прошутто, свежая руккола, пармезан, томатная основа",
      descAM: "Պրոշուտո, թարմ ռուկոլա, պարմեզան, տոմատի հիմք", price: "5,800" },
    { name: "Quattro Formaggi", nameRU: "Кватро Формаджи", nameAM: "Չորս պանիր",
      desc: "Four-cheese blend on a golden crispy base",
      descRU: "Четыре сыра на золотистой хрустящей основе",
      descAM: "Չորս տեսակի պանիրներ ոսկեգույն խրթխրթան հիմքի վրա", price: "4,800" },
  ]},
  { category: "Salads", categoryRU: "Салаты", categoryAM: "Աղցաններ", emoji: "🥗", items: [
    { name: "Burrata & Avocado", nameRU: "Буррата и авокадо", nameAM: "Բուրատա և ավոկադո",
      desc: "Burrata, avocado, cherry tomatoes, spinach pesto, basil",
      descRU: "Буррата, авокадо, помидоры черри, песто из шпината, базилик",
      descAM: "Բուրատա պանիր, ավոկադո, չերրի լոլիկ, սպանախի պեստո, ռեհան", price: "5,900" },
    { name: "Caesar with Chicken", nameRU: "Цезарь с курицей", nameAM: "Կեսար հավի մսով",
      desc: "Classic caesar salad, grilled chicken breast",
      descRU: "Классический салат цезарь, куриная грудка гриль",
      descAM: "Դասական կեսար աղցան, գրիլ արված հավի կրծքամիս", price: "3,500" },
    { name: "Barbados Salad", nameRU: "Барбадос", nameAM: "Բարբադոս",
      desc: "Marble beef, marinated onion, bell pepper, avocado, mix salad, ranch sauce",
      descRU: "Мраморная говядина, маринованный лук, болгарский перец, авокадо, микс-салат, соус ранч",
      descAM: "Մարմարյա տավարի միս, մարինացված սոխ, պղպեղ, ավոկադո, աղցանային միքս, ռանչ սոուս", price: "4,800" },
    { name: "Salmon & Quinoa", nameRU: "Лосось и киноа", nameAM: "Սաղմոն և կինոա",
      desc: "Salmon and quinoa salad",
      descRU: "Салат с лососем и киноа",
      descAM: "Աղցան սաղմոնով և կինոայով", price: "4,900" },
    { name: "Detox Salad", nameRU: "Детокс салат", nameAM: "Դետոքս աղցան",
      desc: "Green apple, quinoa, mix salad, avocado",
      descRU: "Зелёное яблоко, киноа, микс-салат, авокадо",
      descAM: "Կանաչ խնձոր, կինոա, աղցանային միքս, ավոկադո", price: "3,200" },
    { name: "Ranch with Shrimps & Bacon", nameRU: "Ранч с креветками и беконом", nameAM: "Ռանչ աղցան կրևետկաներով և բեկոնով",
      desc: "Ranch dressing, shrimps, bacon and sweet corn",
      descRU: "Соус ранч, креветки, бекон и сладкая кукуруза",
      descAM: "Ռանչ սոուս, կրևետկաներ, բեկոն և քաղցր եգիպտացորեն", price: "4,400" },
  ]},
  { category: "Main Courses", categoryRU: "Основные блюда", categoryAM: "Հիմնական ուտեստներ", emoji: "🥩", items: [
    { name: "Ribeye Steak", nameRU: "Стейк Рибай", nameAM: "Ռիբայ Սթեյք",
      desc: "Premium cut ribeye steak", descRU: "Стейк Рибай премиум",
      descAM: "Պրեմիում կարգի ռիբայ սթեյք", price: "16,900" },
    { name: "Fillet Mignon", nameRU: "Филе-миньон", nameAM: "Ֆիլե Մինյոն",
      desc: "Tender fillet mignon with mashed potatoes and truffle sauce",
      descRU: "Нежное филе-миньон с пюре и трюфельным соусом",
      descAM: "Նուրբ ֆիլե մինյոն կարտոֆիլի պյուրեով և տրյուֆելային սոուսով", price: "9,600" },
    { name: "Sous Vide Chicken", nameRU: "Курица су-вид", nameAM: "Հավ Սու-վիդ",
      desc: "Chicken breast with creamy spinach, cashew nuts and basil oil",
      descRU: "Куриная грудка с кремовым шпинатом, орехами кешью и базиликовым маслом",
      descAM: "Հավի կրծքամիս սերուցքային սպանախով, կեշյուով և ռեհանի յուղով", price: "3,800" },
    { name: "Grilled Salmon with Asparagus", nameRU: "Лосось гриль со спаржей", nameAM: "Գրիլ արված սաղմոն ծնեբեկով",
      desc: "Salmon fillet grilled, served with fresh asparagus",
      descRU: "Филе лосося на гриле со свежей спаржей",
      descAM: "Սաղմոնի ֆիլե գրիլի վրա՝ մատուցված թարմ ծնեբեկով", price: "10,600" },
    { name: "Texas Leg", nameRU: "Техасское бедро", nameAM: "Տեխասյան ազդր",
      desc: "Chicken thigh, BBQ sauce, village-style potatoes",
      descRU: "Куриное бедро, соус Барбекю, картофель по-деревенски",
      descAM: "Հավի ազդր, BBQ սոուս, գյուղական կարտոֆիլ", price: "3,800" },
    { name: "Seafood Fried Rice", nameRU: "Жареный рис с морепродуктами", nameAM: "Տապակած բրինձ ծովամթերքով",
      desc: "Rice with mussels, shrimps, seafood",
      descRU: "Рис с мидиями, креветками и морепродуктами",
      descAM: "Բրինձ միդիաներով, կրևետկաներով և ծովամթերքով", price: "5,500" },
  ]},
  { category: "Sandwiches", categoryRU: "Сэндвичи и бургеры", categoryAM: "Սենդվիչներ և բուրգերներ", emoji: "🥪", items: [
    { name: "Steak Sandwich", nameRU: "Стейк Сэндвич", nameAM: "Սթեյք Սենդվիչ",
      desc: "Beef tenderloin, caramelized onions, gouda, tomatoes, mixed salad",
      descRU: "Говяжья вырезка, карамелизированный лук, гауда, помидоры, микс-салат",
      descAM: "Տավարի միս, կարամելացված սոխ, գաուդա պանիր, լոլիկ, աղցանային միքս", price: "5,600" },
    { name: "Philly Cheese Sandwich", nameRU: "Сэндвич Филли Чиз", nameAM: "Ֆիլլի Չիզ Սենդվիչ",
      desc: "Beef, mushrooms, onions, mozzarella, caramelized onions, baguette",
      descRU: "Говядина, грибы, лук, моцарелла, карамелизированный лук, багет",
      descAM: "Տավարի միս, սունկ, սոխ, մոցարելա, բագետ", price: "5,400" },
    { name: "Open Sandwich — Salmon & Avocado", nameRU: "Открытый сэндвич — Лосось и авокадо", nameAM: "Բաց սենդվիչ սաղմոնով և ավոկադոյով",
      desc: "Salmon, avocado, spinach, creamy cheese and basil oil",
      descRU: "Лосось, авокадо, шпинат, сливочный сыр и базиликовое масло",
      descAM: "Սաղմոն, ավոկադո, սպանախ, սերուցքային պանիր և ռեհանի յուղ", price: "4,500" },
    { name: "Beef Burger", nameRU: "Говяжий бургер", nameAM: "Տավարի մսով բուրգեր",
      desc: "Beef burger with village potatoes",
      descRU: "Бургер из говядины с деревенским картофелем",
      descAM: "Տավարի մսով բուրգեր և գյուղական կարտոֆիլ", price: "3,900" },
    { name: "Chicken Burger", nameRU: "Куриный бургер", nameAM: "Հավի մսով բուրգեր",
      desc: "Chicken burger with french fries",
      descRU: "Куриный бургер с картофелем фри",
      descAM: "Հավի մսով բուրգեր և կարտոֆիլ ֆրի", price: "3,600" },
    { name: "Croissant — Smoked Salmon & Avocado", nameRU: "Круассан — Копчёный лосось и авокадо", nameAM: "Կրուասան սաղմոնով և ավոկադոյով",
      desc: "Buttery croissant with smoked salmon and avocado",
      descRU: "Круассан с копчёным лососем и авокадо",
      descAM: "Կարագով կրուասան ծխեցված սաղմոնով և ավոկադոյով", price: "4,600" },
  ]},
  { category: "Snacks", categoryRU: "Закуски", categoryAM: "Նախուտեստներ", emoji: "🍤", items: [
    { name: "Bruschetta with Prawns & Guacamole", nameRU: "Брускетта с креветками и гуакамоле", nameAM: "Բրուսկետա կրևետկաներով և գուակամոլեով",
      desc: "Prawns, guacamole and cherry tomatoes on crispy bread",
      descRU: "Креветки, гуакамоле и помидоры черри на хрустящем хлебе",
      descAM: "Կրևետկաներ, գուակամոլե և չերրի լոլիկ խրթխրթան հացի վրա", price: "4,600" },
    { name: "Feta in Forno", nameRU: "Фета в духовке", nameAM: "Ֆետան ջեռոցում",
      desc: "Baked feta with cherry tomatoes",
      descRU: "Сыр фета в духовке с помидорами черри",
      descAM: "Թխված ֆետա պանիր չերրի լոլիկների հետ", price: "2,900" },
    { name: "Mozzarella Sticks", nameRU: "Палочки моцареллы", nameAM: "Մոցարելա սթիքս",
      desc: "Golden mozzarella sticks with ranch sauce",
      descRU: "Золотистые палочки моцареллы с соусом Ранч",
      descAM: "Ոսկեգույն մոցարելա սթիքս ռանչ սոուսով", price: "2,500" },
    { name: "Shrimp Tempura", nameRU: "Темпура из креветок", nameAM: "Կրևետկաներ տեմպուրա",
      desc: "Crispy shrimp tempura with sweet-chili sauce",
      descRU: "Хрустящая темпура из креветок с остро-сладким соусом",
      descAM: "Խրթխրթան կրևետկաներ տեմպուրա քաղցր-կծու սոուսով", price: "3,900" },
    { name: "Chicken Yakitori", nameRU: "Якитори из курицы", nameAM: "Հավի յակիթորի",
      desc: "Chicken breast, peanut sauce, sesame seeds and rice",
      descRU: "Куриная грудка, арахисовый соус, кунжут и рис",
      descAM: "Հավի կրծքամիս, գետնանուշի սոուս, քունջութ և բրինձ", price: "3,500" },
    { name: "Spring Roll with Vegetables", nameRU: "Спринг-ролл с овощами", nameAM: "Բանջարեղենային սփրինգ-ռոլ",
      desc: "Fresh spring rolls with vegetables",
      descRU: "Свежие спринг-роллы с овощами",
      descAM: "Թարմ սփրինգ-ռոլլեր բանջարեղենով", price: "2,900" },
  ]},
];

const REVIEWS = [
  {
    name: { EN: "Ani M.", RU: "Ани М.", AM: "Անի Մ." },
    rating: 5,
    text: {
      EN: "The coziest place with incredibly attentive staff. We stayed for hours and nobody rushed us — that's rare.",
      RU: "Уютнейшее место с невероятно внимательным персоналом. Мы провели несколько часов, и никто нас не торопил — это редкость.",
      AM: "Ամենահարմարավետ վայրը՝ անհավանական ուշադիր անձնակազմով: Մենք մնացինք ժամերով, և ոչ ոք մեզ չէր շտապեցնում, ինչը հազվադեպ է հանդիպում:",
    }, avatar: "Ա"
  },
  {
    name: { EN: "David K.", RU: "Давид К.", AM: "Դավիթ Կ." },
    rating: 5,
    text: {
      EN: "Best lemon tart I've ever had. The presentation alone is worth coming for — it looked almost too beautiful to eat.",
      RU: "Лучший лимонный тарт в моей жизни. Подача сама по себе стоит визита — он выглядел почти слишком красиво, чтобы его есть.",
      AM: "Լավագույն լիմոնե տարտը, որ երբևէ կերել եմ: Միայն մատուցման համար արժե գալ. այնքան գեղեցիկ էր, որ նույնիսկ ափսոսում էի ուտել:",
    }, avatar: "Դ"
  },
  {
    name: { EN: "Nare S.", RU: "Наре С.", AM: "Նարե Ս." },
    rating: 5,
    text: {
      EN: "Crispy thin pizzas, perfectly brewed coffee, and the warmest atmosphere. This is our family's go-to place now.",
      RU: "Тонкая хрустящая пицца, идеально сваренный кофе и теплейшая атмосфера. Теперь это наше семейное место.",
      AM: "Բարակ ու խրթխրթան պիցցա, կատարյալ սուրճ և ջերմ մթնոլորտ: Սա այժմ մեր ընտանիքի սիրելի վայրն է:",
    }, avatar: "Ն"
  },
  // ... (you can continue the same pattern for other reviews)
];

// ... (Rest of the App component logic stays the same)

function useScrollReveal() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("revealed")),
        { threshold: 0.1 }
      );
      document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
      return () => observer.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, []);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("EN");
  const [langOpen, setLangOpen] = useState(false);
  const t = T[lang];
  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => { if (!e.target.closest(".lang-switcher")) setLangOpen(false); };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const FlagEN = () => (
    <svg width="24" height="16" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style={{borderRadius:3,display:'block',flexShrink:0}}>
      <rect width="60" height="40" fill="#012169"/>
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8"/>
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="5"/>
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="13"/>
      <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8"/>
    </svg>
  );
  const FlagRU = () => (
    <svg width="24" height="16" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style={{borderRadius:3,display:'block',flexShrink:0}}>
      <rect width="60" height="14" fill="#fff"/>
      <rect y="13" width="60" height="14" fill="#0039A6"/>
      <rect y="26" width="60" height="14" fill="#D52B1E"/>
    </svg>
  );
  const FlagAM = () => (
    <svg width="24" height="16" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style={{borderRadius:3,display:'block',flexShrink:0}}>
      <rect width="60" height="14" fill="#D90012"/>
      <rect y="13" width="60" height="14" fill="#0033A0"/>
      <rect y="26" width="60" height="14" fill="#F2A800"/>
    </svg>
  );

  const LANGS = [
    { code: "EN", label: "English",  Flag: FlagEN },
    { code: "RU", label: "Русский",  Flag: FlagRU },
    { code: "AM", label: "Հայերեն", Flag: FlagAM },
  ];

  const getMenuCat = (item) => lang === "RU" ? item.categoryRU : lang === "AM" ? item.categoryAM : item.category;
  const getItemName = (item) => lang === "RU" ? item.nameRU : lang === "AM" ? item.nameAM : item.name;
  const getItemDesc = (item) => lang === "RU" ? item.descRU : lang === "AM" ? item.descAM : item.desc;
  const getReviewText = (r) => r.text[lang] || r.text.EN;
  const getReviewName = (r) => r.name[lang] || r.name.EN;

  return (
    <div className="app">

      {/* ── NAV ── */}
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__logo" onClick={() => scrollTo("hero")}>
          <img src="/logo.png" alt="The Brunch" className="nav__logo-img" />
        </div>
        <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
          {t.nav.map((l, i) => (
            <li key={l}><button onClick={() => scrollTo(["menu","about","gallery","reviews","contact"][i])}>{l}</button></li>
          ))}
        </ul>
        <div className="lang-switcher">
          <button className="lang-switcher__trigger" onClick={() => setLangOpen(o => !o)}>
            {(() => { const L = LANGS.find(l => l.code === lang); return L ? <L.Flag /> : null; })()}
            <span className="lang-switcher__code">{lang}</span>
            <span className={`lang-switcher__arrow ${langOpen ? "lang-switcher__arrow--open" : ""}`}>▾</span>
          </button>
          <div className={`lang-switcher__dropdown ${langOpen ? "lang-switcher__dropdown--open" : ""}`}>
            {LANGS.map(l => (
              <button key={l.code}
                className={`lang-switcher__option ${lang === l.code ? "lang-switcher__option--active" : ""}`}
                onClick={() => { setLang(l.code); setLangOpen(false); }}>
                <l.Flag />
                <span>{l.label}</span>
                {lang === l.code && <span className="lang-switcher__check">✓</span>}
              </button>
            ))}
          </div>
        </div>
        <button className="nav__burger" onClick={() => setMenuOpen(o => !o)} aria-label="menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* ── STICKY CTA ── */}
      <a className={`sticky-cta ${scrolled ? "sticky-cta--visible" : ""}`} href="tel:+37444012125">
        {t.reserveSpot}
      </a>

      {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="hero__bg">
          <div className="hero__overlay" />
          <div className="hero__particles">
            {[...Array(6)].map((_, i) => <div key={i} className={`particle particle--${i}`} />)}
          </div>
        </div>
        <div className="hero__content">
          <div className="hero__badge reveal">
            <span className="star">★</span> {t.heroBadge}
          </div>
          <h1 className="hero__headline reveal">
            {t.heroHeadline1}<br />
            <em>{t.heroHeadline2}<br />{t.heroHeadline3}</em>
          </h1>
          <p className="hero__sub reveal">{t.heroSub}</p>
          {/* Only ONE button — Explore Menu. Book a Table removed. */}
          <div className="hero__ctas reveal">
            <button className="btn btn--ghost" onClick={() => scrollTo("menu")}>{t.heroCta2}</button>
          </div>
          <div className="hero__proof reveal">
            <div className="proof-pill">{t.pill1}</div>
            <div className="proof-pill">{t.pill2}</div>
            <div className="proof-pill">{t.pill3}</div>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats">
        <div className="container">
          {[["200+","4.5★","Daily","100%"], t.statsLabels].reduce((acc, _, __, arr) =>
            arr[0].map((num, i) => ({ num, label: arr[1][i] }))
          , []).map(({ num, label }) => (
            <div className="stat reveal" key={label}>
              <span className="stat__num">{num}</span>
              <span className="stat__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="menu" className="features">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">{t.expTag}</span>
            <h2>{t.expTitle}</h2>
            <p>{t.expSub}</p>
          </div>
          <div className="features__grid">
            {t.features.map((f) => (
              <div className="feature-card" key={f.title}>
                <span className="feature-card__icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p className="feature-card__dish">{f.dish}</p>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">{t.galleryTag}</span>
            <h2>{t.galleryTitle}</h2>
          </div>
          <div className="gallery__grid">
            {[
              { label: "Happy Guests", size: "tall",   image: "/hpguests.jpg" },
              { label: "Desserts",     size: "normal", image: "/deserts.jpg" },
              { label: "Pizza",        size: "normal", image: "/pizza.jpg" },
              { label: "Interior",     size: "tall",   image: "/interior.jpg" },
              { label: "Coffee Art",   size: "normal", image: "/cfart.jpg" },
              { label: "Breakfast",    size: "normal", image: "/breakfast.jpg" },
            ].map((item, i) => (
              <div className={`gallery__item gallery__item--${item.size} reveal`} key={i}
                style={{ backgroundImage: `url(${item.image})`, backgroundSize:"cover", backgroundPosition:"center" }}>
                <div className="gallery__item-inner"><span>{item.label}</span></div>
              </div>
            ))}
          </div>
          <p className="gallery__note reveal">{t.galleryNote}</p>
        </div>
      </section>

      {/* ── MENU ── */}
      <section className="menu-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">{t.menuTag}</span>
            <h2>{t.menuTitle}</h2>
            <p>{t.menuSub}</p>
          </div>
          <div className="menu-tabs reveal">
            {MENU_ITEMS.map((cat, i) => (
              <button key={cat.category}
                className={`menu-tab ${activeMenu === i ? "menu-tab--active" : ""}`}
                onClick={() => setActiveMenu(i)}>
                {cat.emoji} {getMenuCat(cat)}
              </button>
            ))}
          </div>
          <div className="menu-items" key={`${activeMenu}-${lang}`}>
            {MENU_ITEMS[activeMenu].items.map((item, i) => (
              <div className="menu-item menu-item--animate" key={item.name}
                style={{ animationDelay: `${i * 0.09}s` }}>
                <div className="menu-item__info">
                  <h4>{getItemName(item)}</h4>
                  <p>{getItemDesc(item)}</p>
                </div>
                <span className="menu-item__price">֏ {item.price}</span>
              </div>
            ))}
          </div>
          {/* No "Reserve a Table" button under menu — removed */}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about">
        <div className="container about__layout">
          <div className="about__visual reveal">
            <div className="about__img-block">
            <div className="about__img-main" style={{ backgroundImage: "url('/visit.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
              <div className="about__img-accent"><span>{t.aboutQuote}</span></div>
            </div>
          </div>
          <div className="about__text reveal">
            <span className="section-tag">{t.aboutTag}</span>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutP1}</p><p>{t.aboutP2}</p><p>{t.aboutP3}</p><p>{t.aboutP4}</p>
            <button className="btn btn--primary" onClick={() => scrollTo("contact")}>{t.aboutCta}</button>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="reviews">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">{t.reviewsTag}</span>
            <h2>{t.reviewsTitle}</h2>
            <p>{t.reviewsSub}</p>
          </div>
          {/* Symmetric 3-col grid, all same height */}
          <div className="reviews__grid">
            {REVIEWS.map((r, i) => (
              <div className="review-card" key={i}>
                <div className="review-card__stars">{"★".repeat(r.rating)}</div>
                <p className="review-card__text">"{getReviewText(r)}"</p>
                <div className="review-card__author">
                  <div className="review-card__avatar">{r.avatar}</div>
                  <span>{getReviewName(r)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="why-us">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">{t.whyTag}</span>
            <h2>{t.whyTitle}</h2>
          </div>
          <div className="why-us__grid">
            {t.whyItems.map(([title, desc], i) => (
              <div className="why-card" key={i}>
                <div className="why-card__num">0{i + 1}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="visit">
        <div className="container">
          <div className="visit__layout">
            <div className="visit__info reveal">
              <span className="section-tag">{t.contactTag}</span>
              <h2>{t.contactTitle}<br /><em>{t.contactTitleEm}</em></h2>
              <p className="visit__desc">{t.contactDesc}</p>
              <div className="visit__details">
                <div className="visit__detail">
                  <div className="visit__detail-icon">📍</div>
                  <div>
                    <strong>{t.loc}</strong>
                    <div className="visit__branches">
                      <a className="visit__branch" href="https://maps.google.com/?q=8+Vahram+Papazyan+St,+Yerevan" target="_blank" rel="noreferrer">
                        <span className="visit__branch-num">1</span><span>{t.branch1}</span>
                      </a>
                      <a className="visit__branch" href="https://maps.google.com/?q=Dalma+Garden+Mall,+Yerevan" target="_blank" rel="noreferrer">
                        <span className="visit__branch-num">2</span><span>{t.branch2}</span>
                      </a>
                      <a className="visit__branch" href="https://maps.google.com/?q=The+Brunch+Cascade+Yerevan" target="_blank" rel="noreferrer">
                        <span className="visit__branch-num">3</span><span>{t.branch3}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="visit__detail">
                  <div className="visit__detail-icon">🕐</div>
                  <div>
                    <strong>{t.hours}</strong>
                    <p>{t.hoursVal}</p>
                    <p className="visit__hours-note">{t.hoursNote}</p>
                  </div>
                </div>
                <div className="visit__detail">
                  <div className="visit__detail-icon">📞</div>
                  <div>
                    <strong>{t.res}</strong>
                    <p>+374 44 012 125</p>
                  </div>
                </div>
              </div>
              <div className="visit__actions">
                <a className="btn btn--facebook" href="https://www.facebook.com/thebrunchyerevan" target="_blank" rel="noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  {t.fbBtn}
                </a>
                <a className="btn btn--instagram" href="https://www.instagram.com/thebrunch.am" target="_blank" rel="noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  {t.igBtn}
                </a>
              </div>
            </div>
            <div className="visit__card reveal">
              <div className="visit__card-inner">
                <div className="visit__card-logo"><img src="/logo.png" alt="The Brunch" /></div>
                <div className="visit__card-tag">{t.cardTag}</div>
                <blockquote className="visit__card-quote">{t.cardQuote}</blockquote>
                <div className="visit__card-divider" />
                <div className="visit__card-stats">
                  <div><span className="visit__card-stat-num">200+</span><span className="visit__card-stat-label">{t.cardStat1}</span></div>
                  <div><span className="visit__card-stat-num">4.5★</span><span className="visit__card-stat-label">{t.cardStat2}</span></div>
                  <div><span className="visit__card-stat-num">6+</span><span className="visit__card-stat-label">{t.cardStat3}</span></div>
                </div>
                {/* No button inside the card — removed */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container footer__layout">
          <div className="footer__brand">
            <img src="/logo.png" alt="The Brunch" className="footer__logo-img" />
            <p className="footer__tagline">{t.footerTagline}</p>
          </div>
          
          <div className="footer__links">
            {t.nav.map((l, i) => (
              <button key={l} onClick={() => scrollTo(["menu","about","gallery","reviews","contact"][i])}>{l}</button>
            ))}
          </div>
          <div className="footer__contact">
            <p>{t.branch1}</p><p>{t.branch2}</p><p>{t.branch3}</p>
            <p>+374 44 012 125</p><p>{t.hoursVal}</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>{t.footerCopy}</p>
          <a
            href="https://t.me/apath_y0"
            target="_blank"
            rel="noreferrer"
            className="footer__credit"
          >
            Made by Vahe Vardanyan
          </a>
        </div>
        <div className="footer__bottom"><p>{t.footerCopy}</p></div>
      </footer>
    </div>
  );
}
