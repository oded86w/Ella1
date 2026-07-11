import { MenuItem, GalleryItem, InstagramPost } from '../types';

export const MORNING_MENU: MenuItem[] = [
  {
    id: 'm1',
    name: 'קרואסון חמאה קלאסי',
    description: 'קרואסון אוורירי, פריך וחמאתי במיוחד העשוי בעבודת יד מקופל בשיטה צרפתית מסורתית. נאפה טרי מדי בוקר.',
    price: 18,
    category: 'bakery',
    tags: ['צמחוני'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm2',
    name: 'קרואסון פיסטוק מטורף',
    description: 'בצק עלים חמאתי במילוי פראלינה פיסטוק ביתי עשיר וקרם דיפלומט פיסטוק, מעוטר בשבבי פיסטוק קלויים.',
    price: 28,
    category: 'bakery',
    tags: ['צמחוני', 'מנת דגל'],
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm3',
    name: 'דניש פירות יער ומסקרפונה',
    description: 'מאפה דניש פריך עם קרם מסקרפונה עשיר, וניל מדגסקר, ופירות יער טריים בזיגוג עדין של מייפל.',
    price: 24,
    category: 'bakery',
    tags: ['צמחוני'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm4',
    name: 'בראנץ׳ אלה זוגי',
    description: 'סלסלת מאפים חמים, לחם מחמצת, סלט גינה רענן, ביצים לבחירה, מגש גבינות בוטיק (סנט מור, גאודה כמהין, פטה, לאבנה), ממרחים ביתיים, זוג מיצים סחוטים וזוג משקאות חמים.',
    price: 148,
    category: 'breakfast',
    tags: ['צמחוני', 'מנת דגל'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm5',
    name: 'קרואסון סלמון וביצה עלומה',
    description: 'קרואסון חמאה פתוח, גבינת שמנת הולנדית, סלמון מעושן מובחר, ביצה עלומה עם חלמון נוזלי ורוטב הולנדז קטיפתי מעל.',
    price: 62,
    category: 'breakfast',
    tags: ['מנת דגל'],
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm6',
    name: 'שקשוקה בלקנית חמה',
    description: 'ביצים מבושלות ברוטב עגבניות תמר פיקנטי עשיר עם פלפלים קלויים, גבינת פטה כבשים, בזיליקום וזילוף שמן זית. מוגש בחריכת ברזל חמה עם חלה טרייה וזיתים.',
    price: 56,
    category: 'breakfast',
    tags: ['צמחוני'],
    image: 'https://images.unsplash.com/photo-1590412200988-a436bb705300?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm7',
    name: 'סלט בריאות וקינואה תפוחה',
    description: 'קינואה לבנה ואדומה, קוביות בטטה צלויה, עשבי תיבול קצוצים (פטרוזיליה, נענע, כוסברה), אגוזי מלך, חמוציות בר וגבינת עיזים חמה, ברוטב ויניגרט סילאן ולימון סחוט.',
    price: 54,
    category: 'breakfast',
    tags: ['צמחוני', 'ללא גלוטן'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm8',
    name: 'קפוצ׳ינו אלה ספשלטי',
    description: 'אספרסו כפול מתערובת פולים ייחודית (80% ערביקה חד-זנית ממרכז אמריקה) וחלב מוקצף במרקם קטיפתי.',
    price: 15,
    category: 'coffee',
    tags: ['צמחוני'],
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm9',
    name: 'מאצ׳ה לאטה יפני',
    description: 'חליטת תה מאצ׳ה יפני פרימיום טהור, מוקצף עם חלב שיבולת שועל בריסטה (או חלב לבחירה) ומעט סירופ אגבה.',
    price: 19,
    category: 'coffee',
    tags: ['טבעוני', 'צמחוני', 'ללא גלוטן'],
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600'
  }
];

export const EVENING_MENU: MenuItem[] = [
  {
    id: 'e1',
    name: 'המבורגר אלה סיגנצ׳ר',
    description: '200 גרם קציצת בקר מובחרת ומיושנת במקום, מוגשת בלחמניית בריוש רכה שנאפית אצלנו, איולי כמורה וכמהין, רוקט טרי, וריבת בצל מקורמלת ביין קברנה סוביניון. מוגש עם צ׳יפס דק ופריך.',
    price: 72,
    category: 'burgers',
    tags: ['בשרי', 'מנת דגל'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'e2',
    name: 'בורגר סנט מור כמהין',
    description: 'בורגר שף מבקר משובח, מעליו פרוסת גבינת סנט מור מקורמלת בברנר, איולי שום שחור, עליי בייבי ותרד. חווית טעמים עשירה ומנחמת.',
    price: 79,
    category: 'burgers',
    tags: ['בשרי'],
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'e3',
    name: 'פלטת גבינות ויין בוטיק',
    description: 'מבחר גבינות פרימיום מיושנות ממחלבות מקומיות (גאודה כמהין, כחולה, קממבר, תום עיזים ופרמזן רג׳יאנו), לצד פירות העונה, אגוזי מלך קלויים, ריבת פירות יער ביתית, דבש גולמי וצנימי מחמצת.',
    price: 98,
    category: 'small-plates',
    tags: ['צמחוני', 'מנת דגל'],
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'e4',
    name: 'ברוסקטה כמהין ופטריות יער',
    description: 'שלוש ברוסקטות מלחם מחמצת קלוי בגריל, גבינת ריקוטה פרש אוורירית, תערובת פטריות יער מוקפצות בחמאת שום, יין לבן וזילוף שמן כמהין איכותי.',
    price: 48,
    category: 'small-plates',
    tags: ['צמחוני'],
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'e5',
    name: 'ארנצ׳יני גבינות מותכות',
    description: 'שלושה כדורי ריזוטו פריכים במילוי מוצרלה נמתחת ופרמזן, מונחים על שלולית רוטב עגבניות פומודורו עשיר וקטיפתי עם שמן בזיליקום ביתי.',
    price: 46,
    category: 'small-plates',
    tags: ['צמחוני'],
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'e6',
    name: 'טאטאקי טונה אדומה',
    description: 'פרוסות טונה אדומה צרובה קלות בציפוי שומשום שחור ולבן, מונחת על קרם אבוקדו חלק, איולי יוזו יפני, צ׳ילי אדום חריף וכוסברה טרייה.',
    price: 64,
    category: 'small-plates',
    tags: ['ללא גלוטן'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'e7',
    name: 'קברנה סוביניון, יקב רמת הגולן',
    description: 'יין אדום יבש, עשיר וגוף מלא, בעל ניחוחות של פירות יער שחורים, שוקולד ורמזים של עץ אלון צרפתי מיושן.',
    price: 38,
    category: 'wine',
    tags: ['טבעוני', 'צמחוני', 'ללא גלוטן'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'e8',
    name: 'גוורצטרמינר חצי יבש, יקב הרי גליל',
    description: 'יין לבן חצי יבש, ארומטי ורענן במיוחד, בעל ארומות של ליצ׳י, ורדים ודבש, מתקתק ומלטף.',
    price: 36,
    category: 'wine',
    tags: ['טבעוני', 'צמחוני', 'ללא גלוטן'],
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'e9',
    name: 'רוזה פלורנטין, יקב תבור',
    description: 'יין רוזה ישראלי קיצי ופירותי, יבש ובעל חומציות נפלאה המאזנת ניחוחות תות שדה טרי ופרחי יסמין.',
    price: 35,
    category: 'wine',
    tags: ['טבעוני', 'צמחוני', 'ללא גלוטן'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // מאפים ומתוקים (from /pic/)
  {
    id: 'g1',
    url: './pic/1.jpg',
    caption: '',
    category: 'pastries'
  },
  {
    id: 'g2',
    url: './pic/2.jpg',
    caption: '',
    category: 'pastries'
  },
  {
    id: 'g3',
    url: './pic/3.jpg',
    caption: '',
    category: 'pastries'
  },
  {
    id: 'g4',
    url: './pic/4.jpg',
    caption: '',
    category: 'pastries'
  },
  {
    id: 'g5',
    url: './pic/5.jpg',
    caption: '',
    category: 'pastries'
  },
  {
    id: 'g6',
    url: './pic/6.jpg',
    caption: '',
    category: 'pastries'
  },
  {
    id: 'g7',
    url: './pic/7.jpg',
    caption: '',
    category: 'pastries'
  },
  // בר יין וערב (from /pic/night/)
  {
    id: 'g_night1',
    url: './pic/night/1.jpg',
    caption: '',
    category: 'wine'
  },
  {
    id: 'g_night2',
    url: './pic/night/2.jpg',
    caption: '',
    category: 'wine'
  },
  {
    id: 'g_night3',
    url: './pic/night/3.jpg',
    caption: '',
    category: 'wine'
  },
  {
    id: 'g_night4',
    url: './pic/night/4.jpg',
    caption: '',
    category: 'wine'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig1',
    url: 'https://www.instagram.com/ella_patisserie_wine/',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=500',
    likes: 421,
    comments: 24,
    caption: 'שישי בבוקר באלה. המאפים כבר כאן, הקפה חם, וריח החמאה משכר... מחכים לכם לעוד סופ״ש מענג ✨🥐☕️ #ellapatisserie'
  },
  {
    id: 'ig2',
    url: 'https://www.instagram.com/ella_patisserie_wine/',
    imageUrl: 'https://images.unsplash.com/photo-1528256846555-52378a992663?auto=format&fit=crop&q=80&w=500',
    likes: 318,
    comments: 18,
    caption: 'כשהשמש שוקעת, הבקבוקים נפתחים. בואו לגלות את תפריט היין החדש שלנו והערב המיוחד שמחכה לכם מ-17:00 🍷🧀 #ellawinebar'
  },
  {
    id: 'ig3',
    url: 'https://www.instagram.com/ella_patisserie_wine/',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=500',
    likes: 549,
    comments: 42,
    caption: 'Burger Night is ON! 🍔 המבורגר אלה סיגנצ׳ר עם איולי כמהין וסנט מור נמס מעל. ההתמכרות הבאה שלכם כבר כאן #ellaburgers'
  }
];
