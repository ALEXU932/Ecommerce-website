
const API_BASE = 'http://localhost:4000';
const PLACEHOLDER_IMAGE = 'assets/placeholder.svg';
const AUTH_USER_KEY = 'auth_user';
const CART_KEY = 'cart_v1';
const WISHLIST_KEY = 'wishlist_v1';
const SHIPPING_FEE = 10;
const PENDING_CHAPA_KEY = 'pending_chapa_payment_v1';
const LANG_PREF_KEY = 'lang_pref_v1';
const AVATAR_KEY_PREFIX = 'avatar_v1_'; // stored by email

const TRANSLATIONS = {
    en: {
        'auth.welcomeBack': 'Welcome Back!',
        'auth.email': 'Email Address',
        'auth.enterEmail': 'Enter your email',
        'auth.password': 'Password',
        'auth.enterPassword': 'Enter your password',
        'auth.loginBtn': 'Login to GHIYON',
        'auth.noAccount': "Don't have an account?",
        'auth.signupHere': 'Sign up here',
        'auth.joinFamily': 'Join GHIYON Family!',
        'auth.fullName': 'Full Name',
        'auth.enterFullName': 'Enter your full name',
        'auth.createPassword': 'Create a password',
        'auth.phone': 'Phone Number',
        'auth.enterPhone': 'Enter your phone number',
        'auth.createAccount': 'Create Account',
        'auth.haveAccount': 'Already have an account?',
        'auth.loginHere': 'Login here',
        'search.placeholder': 'Search for products, brands and more...',
        'nav.home': 'Home',
        'nav.products': 'Products',
        'nav.deals': "Today's Deals",
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        'nav.about': 'About Us',
        'menu.login': 'Login',
        'menu.signup': 'Sign Up',
        'menu.wishlist': 'Wishlist',
        'menu.settings': 'Settings',
        'menu.logout': 'Logout',
        'menu.language': 'Language',
        'menu.myProfile': 'My Profile',
        'menu.myOrders': 'My Orders',
        'menu.cart': 'Cart',
        'product.addToCart': 'Add to Cart',
        'product.buy': 'Buy Now'
        ,
        'notice.loginToAddCart': 'Please login to add products to cart.',
        'top.helpCenter': 'Help Center',
        'top.trackOrder': 'Track Order',
        'dashboard.title': 'GHIYON Dashboard',
        'dashboard.subtitle': 'Track your shopping experience and discover personalized recommendations',
        'hero1.title': 'Welcome to GIhON',
        'hero1.highlight': 'E-commerce',
        'hero1.subtitle': 'Experience premium shopping with exclusive deals, fast delivery, and exceptional customer service. Your satisfaction is our priority!',
        'hero1.learnMore': 'Learn More',
        'hero1.shopNow': 'Shop Now',
        'hero2.title': 'Latest',
        'hero2.highlight': 'Tech Gadgets',
        'hero2.subtitle': 'Cutting-edge electronics with extended warranty, 24/7 support, and same-day delivery.',
        'hero2.exploreTech': 'Explore Tech',
        'hero2.browseCategories': 'Browse Categories',
        'hero3.title': 'Multi-Vendor',
        'hero3.highlight': 'Marketplace',
        'hero3.subtitle': 'Shop from thousands of verified sellers with secure payment and buyer protection.',
        'hero3.browseStores': 'Browse Stores',
        'hero3.becomeSeller': 'Become Seller',
        'hero4.title': 'Luxury',
        'hero4.highlight': 'Accessories',
        'hero4.subtitle': 'Premium watches, jewelry, and accessories for the discerning modern buyer.',
        'hero4.viewCollection': 'View Collection',
        'hero4.shopAccessories': 'Shop Accessories',
        'hero5.title': 'Fashion &',
        'hero5.highlight': 'Lifestyle',
        'hero5.subtitle': 'Trendy collections with free shipping, easy returns, and style consultation.',
        'hero5.shopFashion': 'Shop Fashion',
        'hero5.styleGuide': 'Style Guide',

        // Dashboard stats & features
        'dash.totalProducts': 'Total Products',
        'dash.totalProductsDesc': 'Premium quality items',
        'dash.activeCustomers': 'Active Customers',
        'dash.activeCustomersDesc': 'Happy shoppers worldwide',
        'dash.ordersDelivered': 'Orders Delivered',
        'dash.ordersDeliveredDesc': 'On-time delivery guarantee',
        'dash.customerRating': 'Customer Rating',
        'dash.customerRatingDesc': 'Based on 10K+ reviews',
        'dash.fastDelivery': 'Fast Delivery',
        'dash.fastDeliveryDesc': 'Same-day delivery in major cities. Express shipping available worldwide.',
        'dash.securePayment': 'Secure Payment',
        'dash.securePaymentDesc': 'Bank-level security with 256-bit SSL encryption for all transactions.',
        'dash.support247': '24/7 Support',
        'dash.support247Desc': 'Round-the-clock customer service via chat, phone, and email.',
        'dash.easyReturns': 'Easy Returns',
        'dash.easyReturnsDesc': '30-day hassle-free return policy with instant refunds.',

        // Categories
        'cat.title': 'Shop by Category',
        'cat.shopNow': 'Shop Now',
        'cat.electronics': 'Electronics',
        'cat.electronicsDesc': 'Latest gadgets, smartphones, laptops & accessories',
        'cat.gaming': 'Gaming',
        'cat.gamingDesc': 'Gaming consoles, PC components & accessories',
        'cat.fashion': 'Fashion',
        'cat.fashionDesc': 'Trendy clothing, shoes, watches & accessories',
        'cat.accessories': 'Accessories',
        'cat.accessoriesDesc': 'Watches, jewelry, bags & fashion accessories',
        'cat.homeKitchen': 'Home & Kitchen',
        'cat.homeKitchenDesc': 'Furniture, appliances, decor & kitchen essentials',
        'cat.furniture': 'Furniture',
        'cat.furnitureDesc': 'Modern furniture for home and office',
        'cat.kitchenware': 'Kitchenware',
        'cat.kitchenwareDesc': 'Cookware, utensils & kitchen appliances',
        'cat.homeDecor': 'Home Decor',
        'cat.homeDecorDesc': 'Lighting, artwork & decorative items',
        'cat.sportsFitness': 'Sports & Fitness',
        'cat.sportsFitnessDesc': 'Equipment, gear, apparel & accessories',
        'cat.fitnessEquipment': 'Fitness Equipment',
        'cat.fitnessEquipmentDesc': 'Home gym equipment & workout gear',
        'cat.outdoorSports': 'Outdoor Sports',
        'cat.outdoorSportsDesc': 'Camping, hiking & outdoor adventure gear',
        'cat.teamSports': 'Team Sports',
        'cat.teamSportsDesc': 'Soccer, basketball & other team sports equipment',

        // Product listing / filters
        'prod.title': 'Featured Products',
        'prod.sortBy': 'Sort by:',
        'prod.sort.featured': 'Featured',
        'prod.sort.priceLow': 'Price: Low to High',
        'prod.sort.priceHigh': 'Price: High to Low',
        'prod.sort.rating': 'Top Rated',
        'prod.sort.newest': 'Newest First',
        'prod.category': 'Category:',
        'prod.cat.all': 'All Categories',
        'prod.cat.electronics': 'Electronics',
        'prod.cat.fashion': 'Fashion',
        'prod.cat.home': 'Home & Kitchen',
        'prod.cat.sports': 'Sports & Fitness',

        // Services
        'svc.freeShipping': 'Free Shipping',
        'svc.freeShippingDesc': 'On all orders over $50. Fast delivery guaranteed.',
        'svc.returns': '30-Day Returns',
        'svc.returnsDesc': 'Easy return policy with full refund within 30 days.',
        'svc.securePayment': 'Secure Payment',
        'svc.securePaymentDesc': '100% secure transactions with SSL encryption.',
        'svc.support': '24/7 Support',
        'svc.supportDesc': 'Round-the-clock customer service support.',

        // Cart / orders / checkout
        'orders.title': 'My Orders',
        'cart.title': 'Your Shopping Cart',
        'cart.total': 'Total:',
        'cart.proceed': 'Proceed to Checkout',
        'checkout.title': 'Checkout',
        'checkout.deliveryInfo': 'DELIVERY INFORMATION',
        'checkout.firstName': 'First name',
        'checkout.lastName': 'Last name',
        'checkout.email': 'Email address',
        'checkout.street': 'Street',
        'checkout.city': 'City',
        'checkout.state': 'State',
        'checkout.zip': 'Zipcode',
        'checkout.country': 'Country',
        'checkout.phone': 'Phone',
        'checkout.items': 'ITEMS',
        'checkout.totals': 'CART TOTALS',
        'checkout.subtotal': 'Subtotal',
        'checkout.shippingFee': 'Shipping Fee',
        'checkout.total': 'Total',
        'checkout.paymentMethod': 'PAYMENT METHOD',
        'checkout.pay.chapa': 'Chapa',
        'checkout.pay.cod': 'CASH ON DELIVERY',
        'checkout.placeOrder': 'PLACE ORDER',

        // Assistant
        'assistant.title': 'AI Assistant',
        'assistant.hint': 'Ask anything about products, sizing, categories, or recommendations.',
        'assistant.placeholder': 'Type your question...',
        'assistant.ask': 'Ask',

        // About
        'about.title': 'About Us',
        'about.subtitle': 'Learn more about GHIYON E-commerce',
        'about.who': 'Who we are',
        'about.whoDesc': 'GHIYON is an online marketplace focused on quality products, fair pricing, and a smooth shopping experience.',
        'about.delivery': 'Delivery',
        'about.deliveryDesc': 'We aim for fast delivery with clear order tracking and reliable packaging.',
        'about.secure': 'Secure checkout',
        'about.secureDesc': 'Your payments are handled securely. If something goes wrong, our support team will help you quickly.',

        // Contact
        'contact.title': 'Contact Us',
        'contact.subtitle': 'We usually respond within 24 hours',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.yourName': 'Your name',
        'contact.yourEmail': 'Your email',
        'contact.subject': 'Subject',
        'contact.message': 'Message',
        'contact.send': 'Send Message',

        // Footer
        'footer.brand': 'GHIYON E-commerce',
        'footer.desc': 'Premium online shopping experience with quality products, exclusive deals, and exceptional customer service.',
        'footer.quickLinks': 'Quick Links',
        'footer.home': 'Home',
        'footer.dashboard': 'Dashboard',
        'footer.products': 'Products',
        'footer.categories': 'Categories',
        'footer.services': 'Services',
        'footer.customerService': 'Customer Service',
        'footer.contact': 'Contact Us',
        'footer.faq': 'FAQ',
        'footer.shipping': 'Shipping Policy',
        'footer.returns': 'Return Policy',
        'footer.privacy': 'Privacy Policy',
        'footer.newsletter': 'Newsletter',
        'footer.newsletterDesc': 'Subscribe to get exclusive offers and updates',
        'footer.emailPlaceholder': 'Your email address',
        'footer.subscribe': 'Subscribe',
        'footer.copy': '© 2023 GHIYON E-commerce. All rights reserved. | Premium Shopping Experience',

        // Payment
        'payment.receipt': 'RECEIPT',
        'payment.reference': 'Reference',
        'payment.status': 'Status',
        'payment.redirect': 'Redirecting to store in 5 seconds…'
    },
    am: {
        'auth.welcomeBack': 'እንኳን ደህና መጡ!',
        'auth.email': 'ኢሜይል አድራሻ',
        'auth.enterEmail': 'ኢሜይልዎን ያስገቡ',
        'auth.password': 'የይለፍ ቃል',
        'auth.enterPassword': 'የይለፍ ቃልዎን ያስገቡ',
        'auth.loginBtn': 'ወደ GHIYON ግባ',
        'auth.noAccount': 'መለያ የለዎትም?',
        'auth.signupHere': 'እዚህ ይመዝገቡ',
        'auth.joinFamily': 'የGHIYON ቤተሰብ ይቀላቀሉ!',
        'auth.fullName': 'ሙሉ ስም',
        'auth.enterFullName': 'ሙሉ ስምዎን ያስገቡ',
        'auth.createPassword': 'የይለፍ ቃል ይፍጠሩ',
        'auth.phone': 'ስልክ ቁጥር',
        'auth.enterPhone': 'ስልክ ቁጥርዎን ያስገቡ',
        'auth.createAccount': 'መለያ ፍጠር',
        'auth.haveAccount': 'መለያ አለዎት?',
        'auth.loginHere': 'እዚህ ይግቡ',
        'search.placeholder': 'ምርቶችን፣ ብራንዶችን እና ተጨማሪ ይፈልጉ...',
        'nav.home': 'መነሻ',
        'nav.products': 'ምርቶች',
        'nav.deals': 'የዛሬ ቅናሾች',
        'nav.services': 'አገልግሎቶች',
        'nav.contact': 'አግኝተን ያነጋግሩ',
        'nav.about': 'ስለ እኛ',
        'menu.login': 'ግባ',
        'menu.signup': 'ይመዝገቡ',
        'menu.wishlist': 'የተወደዱ',
        'menu.settings': 'ቅንብሮች',
        'menu.logout': 'ውጣ',
        'menu.language': 'ቋንቋ',
        'menu.myProfile': 'መገለጫዬ',
        'menu.myOrders': 'ትዕዛዞቼ',
        'menu.cart': 'ጋሪ',
        'product.addToCart': 'ወደ ጋሪ ጨምር',
        'product.buy': 'አሁን ግዛ'
        ,
        'notice.loginToAddCart': 'ወደ ጋሪ ለመጨመር እባክዎ ይግቡ።',
        'top.helpCenter': 'የእርዳታ ማእከል',
        'top.trackOrder': 'ትዕዛዝ ተከታትል',
        'dashboard.title': 'የGHIYON ዳሽቦርድ',
        'dashboard.subtitle': 'የግብዣ ልምድዎን ይከታተሉ እና የግል ምክር ያግኙ',
        'hero1.title': 'እንኳን ወደ GIhON በደህና መጡ',
        'hero1.highlight': 'ኢ-ኮሜርስ',
        'hero1.subtitle': 'በቅናሽ፣ በፈጣን መላኪያ እና በተሻለ የደንበኛ አገልግሎት ጋር ጥራትማ ግብዣ ያድርጉ። ተስፋችን የደስታ ደርሶ መመለስዎ ነው።',
        'hero1.learnMore': 'ተጨማሪ ይወቁ',
        'hero1.shopNow': 'አሁን ይግዙ',
        'hero2.title': 'የቅርብ ጊዜ',
        'hero2.highlight': 'የቴክኖሎጂ መሳሪያዎች',
        'hero2.subtitle': 'በተራ ዋስትና፣ 24/7 ድጋፍ እና የቀኑ ተመላሽ አገልግሎት ያለው ዘመናዊ ኤሌክትሮኒክስ።',
        'hero2.exploreTech': 'ቴክኖሎጂ ይመልከቱ',
        'hero2.browseCategories': 'ምድቦችን ይመልከቱ',
        'hero3.title': 'ባለብዙ ሻጭ',
        'hero3.highlight': 'ገበያ',
        'hero3.subtitle': 'በሺዎች የተረጋገጡ ሻጮችን በደህንነቱ የተጠበቀ ክፍያ እና የገዢ ጥበቃ ጋር ይግዙ።',
        'hero3.browseStores': 'መደብሮችን ይመልከቱ',
        'hero3.becomeSeller': 'ሻጭ ይሁኑ',
        'hero4.title': 'ውብ',
        'hero4.highlight': 'እቃዎች',
        'hero4.subtitle': 'ለዘመናዊ ገዢ የተዘጋጀ ጥራትማ የሰዓት፣ ጌጣጌጥ እና ሌሎች እቃዎች።',
        'hero4.viewCollection': 'ስብስቡን ይመልከቱ',
        'hero4.shopAccessories': 'እቃዎች ይግዙ',
        'hero5.title': 'ፋሽን እና',
        'hero5.highlight': 'የኑሮ ቅጥ',
        'hero5.subtitle': 'በነጻ መላኪያ፣ ቀላል መመለሻ እና የቅጥ ምክር ጋር ዘመናዊ ስብስቦች።',
        'hero5.shopFashion': 'ፋሽን ይግዙ',
        'hero5.styleGuide': 'የቅጥ መመሪያ',

        // Dashboard stats & features
        'dash.totalProducts': 'ጠቅላላ ምርቶች',
        'dash.totalProductsDesc': 'የጥራት የበለጠ ምርቶች',
        'dash.activeCustomers': 'ንቁ ደንበኞች',
        'dash.activeCustomersDesc': 'ደስተኛ ገዢዎች በዓለም ሁሉ',
        'dash.ordersDelivered': 'የተቀበሉ ትዕዛዞች',
        'dash.ordersDeliveredDesc': 'በጊዜው የሚደርስ መመላሻ ዋስትና',
        'dash.customerRating': 'የደንበኛ አስተያየት',
        'dash.customerRatingDesc': 'በ10,000+ ግምገማዎች መሠረት',
        'dash.fastDelivery': 'ፈጣን መላኪያ',
        'dash.fastDeliveryDesc': 'በትልቅ ከተሞች በዚያማች ቀን መላኪያ እና ዓለም አቀፍ ፈጣን መላኪያ.',
        'dash.securePayment': 'የተመረጠ ክፍያ',
        'dash.securePaymentDesc': 'ለሁሉም ግብዣዎች በ256-bit SSL የተጠበቀ ደህንነት.',
        'dash.support247': '24/7 ድጋፍ',
        'dash.support247Desc': 'በሌሊትና በቀን የሚሰጥ የደንበኛ አገልግሎት.',
        'dash.easyReturns': 'ቀላል መመለሻ',
        'dash.easyReturnsDesc': 'በ30 ቀን ውስጥ በቀላሉ የሚቻል መመለሻ እና አስቸኳይ መመለሻ ገንዘብ.',

        // Categories
        'cat.title': 'በምድብ ይግዙ',
        'cat.shopNow': 'አሁን ይግዙ',
        'cat.electronics': 'ኤሌክትሮኒክስ',
        'cat.electronicsDesc': 'የቅርብ ጊዜ መሳሪያዎች፣ ስማርትፎኖች፣ ላፕቶፖች እና አካሳሪዎች',
        'cat.gaming': 'ጌት',
        'cat.gamingDesc': 'የጨዋታ መቆጣጠሪያዎች፣ የፒሲ ክፍሎች እና አካሳሪዎች',
        'cat.fashion': 'ፋሽን',
        'cat.fashionDesc': 'ዘመናዊ ልብሶች፣ ጫማዎች፣ ሰዓቶች እና አካሳሪዎች',
        'cat.accessories': 'አክሰሰሪዎች',
        'cat.accessoriesDesc': 'ሰዓቶች፣ ጌጣጌጥ፣ ቦርሳዎች እና የፋሽን አክሰሰሪዎች',
        'cat.homeKitchen': 'ቤት እና ኩዊን',
        'cat.homeKitchenDesc': 'መሣሪያዎች፣ መስኮቶች፣ የቤት አስዌት እና የኩዊን መሳሪያዎች',
        'cat.furniture': 'መጋረጃዎች',
        'cat.furnitureDesc': 'ለቤትና ለቢሮ ዘመናዊ መጋረጃዎች',
        'cat.kitchenware': 'የኩዊን መሳሪያዎች',
        'cat.kitchenwareDesc': 'የምግብ መቀቀል መሳሪያዎች፣ መሳሪያዎች እና የኩዊን መሳሪያዎች',
        'cat.homeDecor': 'የቤት አስዌት',
        'cat.homeDecorDesc': 'መብራት፣ ስእሎች እና የጌጣጌጥ እቃዎች',
        'cat.sportsFitness': 'ስፖርት እና ፊትነስ',
        'cat.sportsFitnessDesc': 'መሣሪያዎች፣ መገጣጠሚያዎች፣ ልብሶች እና አክሰሰሪዎች',
        'cat.fitnessEquipment': 'የፊትነስ መሳሪያዎች',
        'cat.fitnessEquipmentDesc': 'የቤት ጂም መሳሪያዎች እና የእንቅስቃሴ መሳሪያዎች',
        'cat.outdoorSports': 'የውጪ ስፖርት',
        'cat.outdoorSportsDesc': 'የመውረድ፣ የመጓዝ እና የውጪ መሳሪያዎች',
        'cat.teamSports': 'የቡድን ስፖርት',
        'cat.teamSportsDesc': 'የእግር ኳስ፣ ቤስክትቶች እና ሌሎች የቡድን ስፖርቶች መሳሪያዎች',

        // Product listing / filters
        'prod.title': 'የተመረጡ ምርቶች',
        'prod.sortBy': 'መለያየት በ:',
        'prod.sort.featured': 'የተመረጡ',
        'prod.sort.priceLow': 'ዋጋ: ከታች እስከ ላይ',
        'prod.sort.priceHigh': 'ዋጋ: ከላይ እስከ ታች',
        'prod.sort.rating': 'ከፍተኛ እድል ያላቸው',
        'prod.sort.newest': 'አዳዲስ መጀመሪያ',
        'prod.category': 'ምድብ:',
        'prod.cat.all': 'ሁሉም ምድቦች',
        'prod.cat.electronics': 'ኤሌክትሮኒክስ',
        'prod.cat.fashion': 'ፋሽን',
        'prod.cat.home': 'ቤት እና ኩዊን',
        'prod.cat.sports': 'ስፖርት እና ፊትነስ',

        // Services
        'svc.freeShipping': 'ነፃ መላኪያ',
        'svc.freeShippingDesc': 'በ$50 በላይ ላሉ ትዕዛዞች፣ ፈጣን መላኪያ ዋስትና.',
        'svc.returns': '30-ቀን መመለሻ',
        'svc.returnsDesc': 'በ30 ቀን ውስጥ በሙሉ መመለሻ በቀላሉ.',
        'svc.securePayment': 'የተመረጠ ክፍያ',
        'svc.securePaymentDesc': 'በSSL የተጠበቀ 100% የተረጋገጠ ክፍያ.',
        'svc.support': '24/7 ድጋፍ',
        'svc.supportDesc': 'በሌሊትና በቀን የሚሰጥ የደንበኛ አገልግሎት.',

        // Cart / orders / checkout
        'orders.title': 'ትዕዛዞቼ',
        'cart.title': 'የእርስዎ ጋሪ',
        'cart.total': 'ጠቅላላ:',
        'cart.proceed': 'ወደ መጨረሻ ይቀጥሉ',
        'checkout.title': 'መጨረሻ',
        'checkout.deliveryInfo': 'የመላኪያ መረጃ',
        'checkout.firstName': 'ስም',
        'checkout.lastName': 'የአባት ስም',
        'checkout.email': 'ኢሜይል አድራሻ',
        'checkout.street': 'መንገድ',
        'checkout.city': 'ከተማ',
        'checkout.state': 'ክልል',
        'checkout.zip': 'ዚፕ ኮድ',
        'checkout.country': 'አገር',
        'checkout.phone': 'ስልክ',
        'checkout.items': 'እቃዎች',
        'checkout.totals': 'የጋሪ ጠቅላላ',
        'checkout.subtotal': 'ንዑስ ጠቅላላ',
        'checkout.shippingFee': 'የመላኪያ ክፍያ',
        'checkout.total': 'ጠቅላላ',
        'checkout.paymentMethod': 'የክፍያ ዘዴ',
        'checkout.pay.chapa': 'Chapa',
        'checkout.pay.cod': 'በመላኪያ ጊዜ ክፍያ',
        'checkout.placeOrder': 'ትዕዛዝ ላክ',

        // Assistant
        'assistant.title': 'AI እርዳታ',
        'assistant.hint': 'ስለ ምርቶች፣ መጠኖች፣ ምድቦች ወይም ምክሮች ማንኛውንም ጠይቁ።',
        'assistant.placeholder': 'ጥያቄዎን ይጻፉ...',
        'assistant.ask': 'ጠይቅ',

        // About
        'about.title': 'ስለ እኛ',
        'about.subtitle': 'ስለ GHIYON ኢ-ኮሜርስ የበለጠ ይወቁ',
        'about.who': 'እኛ ማን ነን',
        'about.whoDesc': 'GHIYON በጥራት ምርቶች፣ በደረጃ ዋጋ እና በቀላል ግብዣ ልምድ የተመሰረተ መስመር ላይ ገበያ ነው።',
        'about.delivery': 'መላኪያ',
        'about.deliveryDesc': 'ፈጣን መላኪያ እና ግልጽ የትዕዛዝ መከታተያና የታመነ ጥቅል እንጠብቃለን።',
        'about.secure': 'የተመረጠ መጨረሻ',
        'about.secureDesc': 'ክፍያዎት በደህንነት ይታከማል። ችግኝ ከተፈጠረ ፈጣን ድጋፍ እንሰጥዎታለን።',

        // Contact
        'contact.title': 'ያግኙን',
        'contact.subtitle': 'በብዙውን ጊዜ በ24 ሰዓታት ውስጥ እንመልሳለን',
        'contact.phone': 'ስልክ',
        'contact.email': 'ኢሜይል',
        'contact.yourName': 'ስምዎ',
        'contact.yourEmail': 'ኢሜይልዎ',
        'contact.subject': 'ርዕስ',
        'contact.message': 'መልዕክት',
        'contact.send': 'መልዕክት ላክ',

        // Footer
        'footer.brand': 'GHIYON ኢ-ኮሜርስ',
        'footer.desc': 'በጥራት ምርቶች፣ በልዩ ቅናሾች እና በምርጥ የደንበኛ አገልግሎት የተሞላ የመስመር ላይ ግብዣ ልምድ።',
        'footer.quickLinks': 'ፈጣን አገናኞች',
        'footer.home': 'መነሻ',
        'footer.dashboard': 'ዳሽቦርድ',
        'footer.products': 'ምርቶች',
        'footer.categories': 'ምድቦች',
        'footer.services': 'አገልግሎቶች',
        'footer.customerService': 'የደንበኛ አገልግሎት',
        'footer.contact': 'ያግኙን',
        'footer.faq': 'FAQ',
        'footer.shipping': 'የመላኪያ መመሪያ',
        'footer.returns': 'የመመለሻ መመሪያ',
        'footer.privacy': 'የግላዊነት መመሪያ',
        'footer.newsletter': 'መነቃቂያ መልዕክት',
        'footer.newsletterDesc': 'ልዩ ቅናሾችን እና ዝመናዎችን ለማግኘት ይመዝገቡ',
        'footer.emailPlaceholder': 'የኢሜይል አድራሻዎ',
        'footer.subscribe': 'ደራሽ ይሁኑ',
        'footer.copy': '© 2023 GHIYON ኢ-ኮሜርስ። መብቱ ሁሉ የተጠበቀ ነው። | የጥራት ግብዣ ልምድ',

        // Payment
        'payment.receipt': 'መጠባበቂያ',
        'payment.reference': 'ማጣቀሻ',
        'payment.status': 'ሁኔታ',
        'payment.redirect': 'በ5 ሰከንድ ውስጥ ወደ መደብር በመመለስ ላይ…'
    },

    // Oromo (om) - example third language, can be expanded
    om: {
        'menu.language': 'Afaan',
        'menu.login': 'Seeni',
        'menu.signup': 'Galmaaʼi',
        'nav.home': 'Mana',
        'nav.products': 'Oomishaalee',
        'nav.services': 'Tajaajiloota',
        'nav.contact': 'Nu qunnamaa',
        'nav.about': 'Waaʼee keenya',
        'product.addToCart': 'Gara gaarii itti dabali',
        'product.buy': 'Amma bitii',
        'cart.title': 'Kaartii kee',
        'checkout.title': 'Check-out',
        'footer.brand': 'GHIYON E-commerce'
        // You can continue adding more Oromo keys here following the English ones
    }
};

function t(key) {
    const lang = (document.documentElement.lang || 'en').toLowerCase() === 'am' ? 'am' : 'en';
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return (dict && dict[key]) || (TRANSLATIONS.en && TRANSLATIONS.en[key]) || key;
}

function translatePage(lang) {
    const chosen = String(lang || '').toLowerCase() === 'am' ? 'am' : 'en';
    const dict = TRANSLATIONS[chosen] || TRANSLATIONS.en;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (!key) return;
        const value = dict[key] || (TRANSLATIONS.en && TRANSLATIONS.en[key]);
        if (typeof value === 'string') el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (!key) return;
        const value = dict[key] || (TRANSLATIONS.en && TRANSLATIONS.en[key]);
        if (typeof value === 'string') el.setAttribute('placeholder', value);
    });

    // If a user is logged in, keep header label showing their name
    if (currentUser) {
        const userTextEl = document.getElementById('user-text');
        if (userTextEl) {
            const fullName = String(currentUser.name || 'User');
            const firstName = fullName.split(' ')[0] || fullName;
            userTextEl.textContent = firstName;
        }
    }
}

function applyLanguagePreference(lang) {
    const value = String(lang || '').toLowerCase() === 'am' ? 'am' : 'en';
    document.documentElement.lang = value;
    try { localStorage.setItem(LANG_PREF_KEY, value); } catch { /* ignore */ }
    translatePage(value);
}

function wireLanguagePreference() {
    const select = document.getElementById('language-select');
    if (!select) return;

    const stored = (() => {
        try { return localStorage.getItem(LANG_PREF_KEY); } catch { return null; }
    })();
    const initial = stored && String(stored).toLowerCase() === 'am' ? 'am' : 'en';
    select.value = initial;

    // Prevent menu from closing while interacting
    select.addEventListener('click', (e) => e.stopPropagation());
    select.addEventListener('change', () => applyLanguagePreference(select.value));
}

function resolveImageSrc(image) {
    const v = String(image || '').trim();
    if (!v) return PLACEHOLDER_IMAGE;
    if (v.startsWith('/uploads/')) return `${API_BASE}${v}`;
    return v;
}

let currentUser = null;
let cart = [];
let wishlist = [];

// AI Assistant
function initAssistant() {
    const input = document.getElementById('assistant-input');
    const sendBtn = document.getElementById('assistant-send');
    const chat = document.getElementById('assistant-chat');
    const form = document.getElementById('assistant-form');
    if (!input || !sendBtn || !chat || !form) return;

    const setBusy = (busy) => {
        sendBtn.disabled = !!busy;
        sendBtn.textContent = busy ? 'Asking…' : 'Ask';
    };

    const scrollToBottom = () => {
        try {
            chat.scrollTop = chat.scrollHeight;
        } catch {
            // ignore
        }
    };

    const appendMessage = (role, text, extraClass = '') => {
        const msg = document.createElement('div');
        msg.className = `assistant-message ${role} ${extraClass}`.trim();
        const bubble = document.createElement('div');
        bubble.className = 'assistant-bubble';
        bubble.textContent = text;
        msg.appendChild(bubble);
        chat.appendChild(msg);
        scrollToBottom();
        return msg;
    };

    const ask = async () => {
        const prompt = String(input.value || '').trim();
        if (!prompt) {
            appendMessage('user', 'Please type a question first.');
            return;
        }

        // user message on the right
        appendMessage('user', prompt);
        input.value = '';

        setBusy(true);
        const thinkingNode = appendMessage('bot assistant-message--thinking', 'Thinking…');

        try {
            const res = await fetch(`${API_BASE}/api/ai/assistant`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt })
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                const msg = data && data.error ? String(data.error) : `Assistant failed (${res.status})`;
                throw new Error(msg);
            }
            const answer = String(data.text || '').trim() || 'No response.';
            chat.removeChild(thinkingNode);
            appendMessage('bot', answer);
        } catch (err) {
            const msg = err && err.message ? String(err.message) : 'Assistant failed.';
            if (thinkingNode.parentNode === chat) {
                chat.removeChild(thinkingNode);
            }
            appendMessage('bot', msg);
            if (typeof showNotification === 'function') {
                showNotification(msg, 'error');
            }
        } finally {
            setBusy(false);
        }
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        ask();
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            ask();
        }
    });
}

function loadWishlist() {
    try {
        const raw = localStorage.getItem(WISHLIST_KEY);
        const arr = raw ? JSON.parse(raw) : [];
        wishlist = Array.isArray(arr) ? arr.map((id) => Number(id)) : [];
    } catch {
        wishlist = [];
    }
}

function saveWishlist() {
    try {
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    } catch {}
}

function isInWishlist(id) {
    const pid = Number(id);
    return Array.isArray(wishlist) && wishlist.includes(pid);
}

function toggleWishlist(id) {
    const pid = Number(id);
    const idx = wishlist.indexOf(pid);
    let added = false;
    if (idx >= 0) {
        wishlist.splice(idx, 1);
        added = false;
        showNotification('Removed from wishlist', 'info');
    } else {
        wishlist.push(pid);
        added = true;
        showNotification('Added to wishlist', 'success');
    }
    saveWishlist();
    updateWishlistCount();

    const btns = document.querySelectorAll(`.wishlist-toggle[data-id="${pid}"]`);
    btns.forEach((btn) => {
        if (!btn) return;
        btn.classList.toggle('active', added);
        btn.setAttribute('aria-pressed', String(added));
        btn.setAttribute('aria-label', added ? 'Remove from wishlist' : 'Add to wishlist');
    });

    const wlModal = document.getElementById('wishlist-modal');
    if (wlModal && wlModal.style.display === 'block') {
        renderWishlistDisplay();
    }
}

function updateWishlistCount() {
    const el = document.getElementById('wishlist-count');
    if (el) el.textContent = String(Array.isArray(wishlist) ? wishlist.length : 0);
}

function openWishlist(event) {
    if (event) event.preventDefault();
    const modal = document.getElementById('wishlist-modal');
    if (!modal) return;
    modal.style.display = 'block';
    renderWishlistDisplay();
}

function closeWishlist() {
    const modal = document.getElementById('wishlist-modal');
    if (modal) modal.style.display = 'none';
}

function renderWishlistDisplay() {
    const container = document.getElementById('wishlist-items');
    if (!container) return;
    if (!Array.isArray(wishlist) || wishlist.length === 0) {
        container.innerHTML = '<p style="text-align:center;padding:40px;">Your wishlist is empty</p>';
        return;
    }
    const mapById = new Map((Array.isArray(products) ? products : []).map(p => [Number(p.id), p]));
    let html = '';
    wishlist.forEach((id) => {
        const p = mapById.get(Number(id));
        if (!p) return;
        const originalPrice = p.price / (1 - p.discount / 100);
        const productJson = JSON.stringify(p).replace(/"/g, '&quot;');
        html += `
            <div class="cart-item">
                <img src="${resolveImageSrc(p.image)}" alt="${p.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${p.name}</h4>
                    <div class="product-price" style="margin:8px 0;">
                        <span class="current-price">$${p.price.toFixed(2)}</span>
                        <span class="original-price">$${originalPrice.toFixed(2)}</span>
                        <span class="discount">Save ${p.discount}%</span>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="btn-buy" style="padding:8px 12px;" onclick="addToCart(${productJson})">Add to Cart</button>
                        <button class="remove-item" style="margin-left:8px;" onclick="toggleWishlist(${p.id})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Server cart snapshot for logged-in users
let serverCartItems = null; // Array of { productId, quantity, name, price, image, discount }

function loadCart() {
    try {
        const raw = localStorage.getItem(CART_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
            .filter((i) => i && typeof i === 'object')
            .map((i) => ({
                id: Number(i.id || 0),
                name: String(i.name || ''),
                price: Number(i.price || 0),
                image: String(i.image || ''),
                discount: Math.max(0, Math.min(100, Number(i.discount || 0))),
                quantity: Number(i.quantity || 0) || 1,
            }))
            .filter((i) => Number.isFinite(i.id) && i.id > 0 && i.name);
    } catch { return []; }
}

function saveCart() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch { /* ignore */ }
}
let autoSlideInterval;
let isAutoSlide = true;
let slideInterval = 5000;
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

// Initialize cart from storage early
try {
    cart = loadCart();
    updateCartCount();
    // Defer display until cart drawer opens; safe to compute totals now
    if (isCheckoutOpen()) updateCheckoutTotals();
} catch { /* ignore */ }

// Initialize assistant once DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const stored = (() => {
            try { return localStorage.getItem(LANG_PREF_KEY); } catch { return null; }
        })();
        applyLanguagePreference(stored);
        wireLanguagePreference();
        initAssistant();
    });
} else {
    const stored = (() => {
        try { return localStorage.getItem(LANG_PREF_KEY); } catch { return null; }
    })();
    applyLanguagePreference(stored);
    wireLanguagePreference();
    initAssistant();
}
function showLogin() {
    document.getElementById('login-modal').style.display = 'flex';
    document.getElementById('signup-modal').style.display = 'none';
}

function showSignup() {
    document.getElementById('signup-modal').style.display = 'flex';
    document.getElementById('login-modal').style.display = 'none';
}

function closeAuth(type) {
    document.getElementById(`${type}-modal`).style.display = 'none';
}
function setLoggedInUI(user) {
    currentUser = user;
    const fullName = String(user && user.name || 'User');
    const firstName = fullName.split(' ')[0] || fullName;
    const userTextEl = document.getElementById('user-text');
    if (userTextEl) userTextEl.textContent = firstName;
    // Avatar/icon swap
    const avatarEl = document.getElementById('user-avatar');
    const iconEl = document.getElementById('user-icon') || document.querySelector('.user-profile .fa-user-circle');
    const rawAvatar = user && (user.avatar || user.image || user.photo || '');
    const src = resolveImageSrc(rawAvatar);
    if (avatarEl && rawAvatar) {
        avatarEl.src = src;
        avatarEl.style.display = '';
        if (iconEl) iconEl.style.display = 'none';
    } else {
        if (avatarEl) avatarEl.style.display = 'none';
        if (iconEl) iconEl.style.display = '';
    }
    const greetWrap = document.querySelector('.user-greeting');
    if (greetWrap) {
        // Keep profile info within the profile icon dropdown only
        greetWrap.style.display = 'none';
        const greetEl = document.getElementById('user-greeting');
        if (greetEl) greetEl.textContent = '';
    }
    const userMenu = document.querySelector('.user-menu');
    userMenu.innerHTML = `
        <a href="#"><i class="fas fa-user"></i> <span data-i18n="menu.myProfile">My Profile</span></a>
        <a href="#" onclick="openMyOrders(event)"><i class="fas fa-shopping-bag"></i> <span data-i18n="menu.myOrders">My Orders</span></a>
        <a href="#" onclick="openWishlist(event)"><i class="fas fa-heart"></i> <span data-i18n="menu.wishlist">Wishlist</span></a>
        <a href="#"><i class="fas fa-cog"></i> <span data-i18n="menu.settings">Settings</span></a>
        <div class="menu-item menu-language" role="group" aria-label="Language preference">
            <i class="fas fa-language" aria-hidden="true"></i>
            <span class="menu-label" data-i18n="menu.language">Language</span>
            <select id="language-select" class="menu-select" aria-label="Choose language">
                <option value="en">English</option>
                <option value="am">Amharic</option>
            </select>
        </div>
        <a href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i> <span data-i18n="menu.logout">Logout</span></a>
    `;

    wireLanguagePreference();
    translatePage(document.documentElement.lang);
}
function logout() {
    currentUser = null;
    
    // Restore original login placeholder
    const loginEmailInput = document.getElementById('login-email');
    if (loginEmailInput && loginEmailInput.getAttribute('data-original-placeholder')) {
        loginEmailInput.setAttribute('placeholder', loginEmailInput.getAttribute('data-original-placeholder'));
        loginEmailInput.removeAttribute('data-original-placeholder');
    }
    
    // Clear the input values
    if (loginEmailInput) loginEmailInput.value = '';
    const loginPasswordInput = document.getElementById('login-password');
    if (loginPasswordInput) loginPasswordInput.value = '';
    
    // Reset user menu to login link
    const userMenu = document.querySelector('.user-menu');
    userMenu.innerHTML = `
        <a href="#" onclick="showLogin()"><i class="fas fa-sign-in-alt"></i> <span data-i18n="menu.login">Login</span></a>
    `;
    
    // Clear any greeting in the header
    const greetEl = document.getElementById('user-greeting');
    if (greetEl) greetEl.textContent = '';
    
    // Reset header avatar/icon
    const avatarEl = document.getElementById('user-avatar');
    const iconEl = document.getElementById('user-icon') || document.querySelector('.user-profile .fa-user-circle');
    if (avatarEl) avatarEl.style.display = 'none';
    if (iconEl) iconEl.style.display = '';

    translatePage(document.documentElement.lang);
}


function formatOrderStatus(status) {
    const s = String(status || '').trim();
    return s ? s.toUpperCase() : 'PENDING';
}

function formatDateShort(value) {
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return '';
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
}

function closeMyOrders() {
    const modal = document.getElementById('orders-modal');
    if (!modal) return;
    modal.style.display = 'none';
}

async function openMyOrders(event) {
    if (event && typeof event.preventDefault === 'function') event.preventDefault();

    const token = localStorage.getItem('auth_token');
    if (!token) {
        showNotification('Please login to view your orders.', 'error');
        showLogin();
        return;
    }

    // Close cart if open
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) cartModal.style.display = 'none';

    const modal = document.getElementById('orders-modal');
    if (!modal) return;
    modal.style.display = 'block';

    await loadMyOrders();
}

function renderMyOrders(orders) {
    const container = document.getElementById('orders-items');
    if (!container) return;
    container.innerHTML = '';

    if (!Array.isArray(orders) || orders.length === 0) {
        const empty = document.createElement('div');
        empty.textContent = 'No orders yet.';
        empty.style.textAlign = 'center';
        empty.style.padding = '18px 0';
        container.appendChild(empty);
        return;
    }

    const table = document.createElement('table');
    table.className = 'orders-table';

    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
           
            <th>Order #</th>
             <th>Image</th>
            <th>Date</th>
            <th>Status</th>
            <th class="is-right">Total</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    orders.forEach((order) => {
        const tr = document.createElement('tr');

        const imgTd = document.createElement('td');
        const img = document.createElement('img');
        const items = Array.isArray(order.items) ? order.items : [];
        const firstItem = items.length > 0 ? items[0] : null;
        const imageSrc = firstItem ? resolveImageSrc(firstItem.image) : PLACEHOLDER_IMAGE;
        img.src = imageSrc;
        img.alt = firstItem && firstItem.name ? String(firstItem.name) : 'Order item';
        img.className = 'orders-thumb';
        imgTd.appendChild(img);

        const idTd = document.createElement('td');
        idTd.textContent = `#${Number(order.id || 0)}`;

        const dateTd = document.createElement('td');
        dateTd.textContent = formatDateShort(order.createdAt);

        const statusTd = document.createElement('td');
        statusTd.textContent = formatOrderStatus(order.status);

        const totalTd = document.createElement('td');
        totalTd.className = 'is-right';
        totalTd.textContent = `$${formatMoney(order.total)}`;
      tr.appendChild(idTd);
        tr.appendChild(imgTd);
       
        tr.appendChild(dateTd);
        tr.appendChild(statusTd);
        tr.appendChild(totalTd);
        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    container.appendChild(table);
}

async function loadMyOrders() {
    const container = document.getElementById('orders-items');
    if (container) container.innerHTML = 'Loading...';
    try {
        const data = await apiJson('/api/orders/my', 'GET');
        renderMyOrders(data);
    } catch (err) {
        const msg = err && err.message ? String(err.message) : 'Failed to load orders.';
        if (container) container.innerHTML = msg;
    }
}

async function apiJson(path, method, body) {
    const token = localStorage.getItem('auth_token');
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(`${API_BASE}${path}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        const msg = data && (data.error || data.message) ? (data.error || data.message) : `Request failed (${res.status})`;
        const err = new Error(String(msg));
        err.status = res.status;
        err.data = data;
        throw err;
    }
    return data;
}

function formatMoney(n) {
    // About/Contact navigation + contact form
    function initInfoPages() {
        // Smooth scroll for in-page nav links
        const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
        navLinks.forEach((a) => {
            a.addEventListener('click', (e) => {
                const href = a.getAttribute('href') || '';
                if (!href || href === '#') return;
                const target = document.querySelector(href);
                if (!target) return;
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        const form = document.getElementById('contact-form');
        const hint = document.getElementById('contact-hint');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (hint) hint.textContent = 'Thanks! Your message has been received.';
                if (typeof showNotification === 'function') {
                    showNotification('Message sent. We will contact you soon.', 'success');
                }
                form.reset();
            });
        }
    }
    // Initialize About/Contact behavior
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initInfoPages);
    } else {
        initInfoPages();
    }
    const v = Number(n);
    if (!Number.isFinite(v)) return '0.00';
    return v.toFixed(2);
}

function getCartSubtotal() {
    return cart.reduce((sum, item) => {
        const price = Number(item.price) || 0;
        const qty = Number(item.quantity) || 0;
        const disc = Math.max(0, Math.min(100, Number(item.discount || 0)));
        const final = price * (1 - disc / 100);
        return sum + final * qty;
    }, 0);
}

function isCheckoutOpen() {
    const modal = document.getElementById('checkout-modal');
    return !!modal && modal.style.display === 'flex';
}

function updateCheckoutTotals() {
    const subtotalEl = document.getElementById('checkout-subtotal');
    const shippingEl = document.getElementById('checkout-shipping');
    const totalEl = document.getElementById('checkout-total');
    if (!subtotalEl || !shippingEl || !totalEl) return;

    const token = localStorage.getItem('auth_token');
    let subtotal = 0;
    let itemCount = 0;
    if (token && Array.isArray(serverCartItems)) {
        itemCount = serverCartItems.length;
        subtotal = serverCartItems.reduce((sum, it) => {
            const price = Number(it.price || 0);
            const disc = Number(it.discount || 0);
            const qty = Number(it.quantity || 0);
            const final = price * (1 - disc / 100);
            return sum + final * qty;
        }, 0);
    } else {
        subtotal = getCartSubtotal();
        itemCount = cart.length;
    }
    const shipping = itemCount > 0 ? SHIPPING_FEE : 0;
    const total = subtotal + shipping;

    subtotalEl.textContent = formatMoney(subtotal);
    shippingEl.textContent = formatMoney(shipping);
    totalEl.textContent = formatMoney(total);
}

async function openCheckout() {
    const token = localStorage.getItem('auth_token');
    let hasItems = false;
    if (token) {
        try {
            if (!Array.isArray(serverCartItems)) {
                serverCartItems = await fetchServerCartItems();
            }
            hasItems = Array.isArray(serverCartItems) && serverCartItems.length > 0;
        } catch {
            serverCartItems = null;
            hasItems = false;
        }
        if (!hasItems) {
            showNotification('Your cart is empty', 'error');
            return;
        }
    } else {
        hasItems = Array.isArray(cart) && cart.length > 0;
        if (!hasItems) {
            // Try loading in case storage updated elsewhere
            cart = loadCart();
            hasItems = Array.isArray(cart) && cart.length > 0;
        }
        if (!hasItems) {
            showNotification('Your cart is empty', 'error');
            return;
        }
        showNotification('You can checkout as a guest, or login for faster checkout.', 'info');
    }

    // Close cart drawer
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) cartModal.style.display = 'none';

    const modal = document.getElementById('checkout-modal');
    if (!modal) return;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    // Preload server cart if logged in, then render items + totals
    (async () => {
        try {
            serverCartItems = await fetchServerCartItems();
        } catch {
            serverCartItems = null;
        }
        renderCheckoutItems();
        updateCheckoutTotals();
    })();

    // Prefill from logged-in user (if available)
    const userRaw = localStorage.getItem(AUTH_USER_KEY);
    try {
        const u = userRaw ? JSON.parse(userRaw) : null;
        if (u && typeof u === 'object') {
            const emailEl = document.getElementById('checkout-email');
            if (emailEl && !emailEl.value) emailEl.value = String(u.email || '');

            const name = String(u.name || '').trim();
            if (name) {
                const parts = name.split(/\s+/).filter(Boolean);
                const first = parts[0] || '';
                const last = parts.slice(1).join(' ');
                const firstEl = document.getElementById('checkout-first-name');
                const lastEl = document.getElementById('checkout-last-name');
                if (firstEl && !firstEl.value) firstEl.value = first;
                if (lastEl && !lastEl.value) lastEl.value = last;
            }
        }
    } catch {
        // ignore
    }
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    if (!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

async function placeOrderFromCheckout() {
    const token = localStorage.getItem('auth_token');
    if (!token) {
        showNotification('Please login to place an order.', 'error');
        showLogin();
        return;
    }
    let items = [];
    if (token) {
        try {
            const current = Array.isArray(serverCartItems) ? serverCartItems : await fetchServerCartItems();
            items = current.map((it) => ({ productId: Number(it.productId), quantity: Number(it.quantity) || 1 }));
        } catch {
            items = [];
        }
        if (items.length === 0) {
            showNotification('Your cart is empty', 'error');
            closeCheckout();
            return;
        }
    }

    const requiredIds = [
        'checkout-first-name',
        'checkout-last-name',
        'checkout-email',
        'checkout-street',
        'checkout-city',
        'checkout-state',
        'checkout-zip',
        'checkout-country',
        'checkout-phone'
    ];

    for (const id of requiredIds) {
        const el = document.getElementById(id);
        if (el && !String(el.value || '').trim()) {
            showNotification('Please fill in all delivery information fields.', 'error');
            el.focus();
            return;
        }
    }

    const payment = document.querySelector('input[name="payment-method"]:checked');
    const paymentMethod = payment ? String(payment.value) : 'cod';
    if (paymentMethod === 'chapa' && !token) {
        showNotification('Please login to pay with Chapa.', 'error');
        showLogin();
        return;
    }

    // items prepared above based on login state

    try {
        // Always create the order first (server computes totals safely)
        const order = await apiJson('/api/orders', 'POST', {
            items,
            shippingFee: items.length > 0 ? SHIPPING_FEE : 0,
            paymentMethod
        });

        if (paymentMethod === 'chapa') {
            const firstName = String(document.getElementById('checkout-first-name')?.value || '').trim();
            const lastName = String(document.getElementById('checkout-last-name')?.value || '').trim();
            const email = String(document.getElementById('checkout-email')?.value || '').trim();
            const txRef = `order_${order.id}_${Date.now()}`;

            // Save pending payment info so we can react on Chapa return
            try {
                localStorage.setItem(PENDING_CHAPA_KEY, JSON.stringify({ txRef, orderId: Number(order.id), at: Date.now() }));
            } catch {
                // ignore
            }

            const init = await apiJson('/api/payments/chapa/initialize', 'POST', {
                amount: Number(order.total),
                currency: 'ETB',
                email,
                firstName,
                lastName,
                txRef,
                orderId: Number(order.id)
            });

            // Clear server cart (ignore failures)
            try { await apiJson('/api/cart', 'DELETE'); } catch {}

            // Clear local snapshot before redirecting
            // Clear carts before redirecting
            cart = [];
            serverCartItems = null;
            updateCartCount();
            updateCartDisplay();
            saveCart();
            updateCheckoutTotals();
            closeCheckout();

            showNotification('Redirecting to Chapa payment...', 'success');
            window.location.href = String(init.checkoutUrl);
            return;
        }

        // Cash on delivery
        // Clear server cart (ignore failures)
        try { await apiJson('/api/cart', 'DELETE'); } catch {}
        cart = [];
        serverCartItems = null;
        updateCartCount();
        updateCartDisplay();
        saveCart();
        updateCheckoutTotals();
        closeCheckout();
        showNotification(`Order placed successfully! Order #${order.id}`, 'success');
    } catch (err) {
        showNotification(err.message || 'Failed to place order', 'error');
    }
}

async function fetchServerCartItems() {
    const res = await apiJson('/api/cart', 'GET');
    return Array.isArray(res && res.items) ? res.items : [];
}

function renderCheckoutItems() {
        const listEl = document.getElementById('checkout-items');
        if (!listEl) return;
        const token = localStorage.getItem('auth_token');
        const items = token && Array.isArray(serverCartItems) ? serverCartItems : cart.map((it) => ({
                productId: it.id,
                name: it.name,
                price: it.price,
                image: it.image,
        discount: Number(it.discount || 0),
                quantity: it.quantity,
            }));

        if (!items || items.length === 0) {
            listEl.innerHTML = '<div class="checkout-empty">No items</div>';
            return;
        }

        const rows = items.map((it) => {
            const price = Number(it.price || 0);
            const disc = Number(it.discount || 0);
            const qty = Number(it.quantity || 0);
            const final = price * (1 - disc / 100);
            const line = final * qty;
            return `<div class="checkout-item-row">
                <div class="checkout-item-name">${String(it.name || 'Item')}</div>
                <div class="checkout-item-meta">x${qty} · $${formatMoney(final)}${disc ? ` (-${disc}%)` : ''}</div>
                <div class="checkout-item-line">$${formatMoney(line)}</div>
            </div>`;
        });
        listEl.innerHTML = rows.join('');
}


document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const email = String(emailInput && emailInput.value || '').trim();
    const password = String(passwordInput && passwordInput.value || '');

    markFieldError(emailInput, false, '');
    markFieldError(passwordInput, false, '');

    if (!validateEmailField(emailInput)) { if (emailInput) emailInput.focus(); return; }
    if (!validatePasswordField(passwordInput, { min: 1, max: 12, required: true })) { if (passwordInput) passwordInput.focus(); return; }

    try {
        const data = await apiJson('/api/auth/login', 'POST', { email, password });
        // Enrich user with locally-stored avatar if server does not provide one
        try {
            const key = AVATAR_KEY_PREFIX + email.toLowerCase();
            const localAvatar = localStorage.getItem(key);
            if (localAvatar && (!data.user || !(data.user.image || data.user.avatar || data.user.photo))) {
                data.user = Object.assign({}, data.user || {}, { avatar: localAvatar });
            }
        } catch {}
        localStorage.setItem('auth_token', data.token);
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(data.user));
        setLoggedInUI(data.user);

        // Merge local cart to server and sync back (non-blocking if fails)
        try {
            const items = Array.isArray(cart) ? cart.map((it) => ({ productId: Number(it.id), quantity: Number(it.quantity) || 1 })) : [];
            const merged = await apiJson('/api/cart/merge', 'POST', { items });
            if (merged && Array.isArray(merged.items)) {
                cart = merged.items.map((r) => ({ id: Number(r.productId), name: String(r.name||''), price: Number(r.price||0), image: String(r.image||''), quantity: Number(r.quantity||1) }));
                saveCart();
                updateCartCount();
            }
        } catch {}

        const fullName = String(data && data.user && data.user.name || '');
        const firstName = fullName ? fullName.split(' ')[0] : '';
        showNotification(firstName ? `Welcome, ${firstName}!` : 'Login successful!', 'success');

        // Role-based redirect
        const role = data && data.user && data.user.role ? String(data.user.role) : 'customer';
        if (role === 'admin') {
            window.location.href = 'admin.html';
            return;
        }
        window.location.href = 'web.html';
    } catch (err) {
        const serverErrors = err && err.data && err.data.errors;
        if (serverErrors && typeof serverErrors === 'object') {
            if (serverErrors.email && emailInput) {
                markFieldError(emailInput, true, String(serverErrors.email[0] || 'Invalid email'));
            }
            if (serverErrors.password && passwordInput) {
                markFieldError(passwordInput, true, String(serverErrors.password[0] || 'Invalid password'));
            }
            if (!serverErrors.email && !serverErrors.password && passwordInput) {
                markFieldError(passwordInput, true, err && err.message ? String(err.message) : 'Invalid credentials');
            }
        } else {
            markFieldError(passwordInput, true, err && err.message ? String(err.message) : 'Invalid credentials');
        }
        showNotification(err.message || 'Login failed', 'error');
    }
});

document.getElementById('signup-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const nameInput = document.getElementById('signup-name');
    const emailInput = document.getElementById('signup-email');
    const passwordInput = document.getElementById('signup-password');
    const phoneInput = document.getElementById('signup-phone');
    const avatarInput = document.getElementById('signup-avatar');

    const name = String(nameInput && nameInput.value || '').trim();
    const email = String(emailInput && emailInput.value || '').trim();
    const password = String(passwordInput && passwordInput.value || '');
    const phone = String(phoneInput && phoneInput.value || '').trim();

    markFieldError(nameInput, false, '');
    markFieldError(emailInput, false, '');
    markFieldError(passwordInput, false, '');
    if (phoneInput) markFieldError(phoneInput, false, '');

    if (!validateNameField(nameInput)) { if (nameInput) nameInput.focus(); return; }
    if (!validateEmailField(emailInput)) { if (emailInput) emailInput.focus(); return; }
    if (!validatePasswordField(passwordInput, { min: 8, max: 12, required: true })) { if (passwordInput) passwordInput.focus(); return; }
    if (!validatePhoneField(phoneInput)) { if (phoneInput) phoneInput.focus(); return; }

    // read avatar (optional) as data URL and store by email for later login
    const readFileAsDataURL = (file) => new Promise((resolve, reject) => {
        try {
            const fr = new FileReader();
            fr.onload = () => resolve(String(fr.result || ''));
            fr.onerror = () => reject(new Error('Failed to read file'));
            fr.readAsDataURL(file);
        } catch (err) { resolve(''); }
    });

    let avatarDataUrl = '';
    try {
        const file = avatarInput && avatarInput.files && avatarInput.files[0];
        if (file && file.size <= 2 * 1024 * 1024) {
            avatarDataUrl = await readFileAsDataURL(file);
        }
    } catch {}

    try {
        await apiJson('/api/auth/signup', 'POST', { name, email, password });

        // Persist avatar for this email so login can apply it to the header
        try { if (avatarDataUrl) localStorage.setItem(AVATAR_KEY_PREFIX + email.toLowerCase(), avatarDataUrl); } catch {}

        showNotification('Account created successfully! Please login.', 'success');
        closeAuth('signup');
        // Redirect to login modal
        const loginEmailEl = document.getElementById('login-email');
        if (loginEmailEl) loginEmailEl.value = email;
        const loginPasswordEl = document.getElementById('login-password');
        if (loginPasswordEl) loginPasswordEl.value = '';
        showLogin();
    } catch (err) {
        const serverErrors = err && err.data && err.data.errors;
        if (serverErrors && typeof serverErrors === 'object') {
            if (serverErrors.name && nameInput) {
                markFieldError(nameInput, true, String(serverErrors.name[0] || 'Invalid name'));
            }
            if (serverErrors.email && emailInput) {
                markFieldError(emailInput, true, String(serverErrors.email[0] || 'Invalid email'));
            }
            if (serverErrors.password && passwordInput) {
                markFieldError(passwordInput, true, String(serverErrors.password[0] || 'Invalid password'));
            }
            if (serverErrors.phone && phoneInput) {
                markFieldError(phoneInput, true, String(serverErrors.phone[0] || 'Invalid phone'));
            }
            if (!serverErrors.name && !serverErrors.email && !serverErrors.password && !serverErrors.phone && emailInput) {
                markFieldError(emailInput, true, err && err.message ? String(err.message) : 'Signup failed');
            }
        } else {
            markFieldError(emailInput, true, err && err.message ? String(err.message) : 'Signup failed');
        }
        showNotification(err.message || 'Signup failed', 'error');
    }
});

function logout() {
    currentUser = null;
    localStorage.removeItem('auth_token');
    localStorage.removeItem(AUTH_USER_KEY);
    const userTextEl = document.getElementById('user-text');
    if (userTextEl) userTextEl.textContent = 'Login';
    // Reset header avatar/icon
    const avatarEl = document.getElementById('user-avatar');
    const iconEl = document.getElementById('user-icon') || document.querySelector('.user-profile .fa-user-circle');
    if (avatarEl) avatarEl.style.display = 'none';
    if (iconEl) iconEl.style.display = '';
    const greetWrap = document.querySelector('.user-greeting');
    if (greetWrap) {
        greetWrap.style.display = '';
        const greetEl = document.getElementById('user-greeting');
        if (greetEl) greetEl.textContent = '';
    }
    showNotification('Logged out successfully', 'success');
    const userMenu = document.querySelector('.user-menu');
    userMenu.innerHTML = `
        <a href="#" onclick="showLogin()"><i class="fas fa-sign-in-alt"></i> <span data-i18n="menu.login">Login</span></a>
        <a href="#" onclick="showSignup()"><i class="fas fa-user-plus"></i> <span data-i18n="menu.signup">Sign Up</span></a>
        <a href="#" onclick="openWishlist(event)"><i class="fas fa-heart"></i> <span data-i18n="menu.wishlist">Wishlist</span></a>
        <a href="#"><i class="fas fa-cog"></i> <span data-i18n="menu.settings">Settings</span></a>
        <div class="menu-item menu-language" role="group" aria-label="Language preference">
            <i class="fas fa-language" aria-hidden="true"></i>
            <span class="menu-label" data-i18n="menu.language">Language</span>
            <select id="language-select" class="menu-select" aria-label="Choose language">
                <option value="en">English</option>
                <option value="am">Amharic</option>
            </select>
        </div>
    `;

    wireLanguagePreference();
    translatePage(document.documentElement.lang);
}
function toggleUserMenu(event) {
    event.preventDefault();
    const userMenu = document.getElementById('user-menu');
    userMenu.classList.toggle('show');
}
document.addEventListener('click', function(event) {
    const userMenu = document.getElementById('user-menu');
    const userProfile = document.querySelector('.user-profile');
    
    if (!userProfile.contains(event.target)) {
        userMenu.classList.remove('show');
    }
});
function toggleDashboard() {
    const sidebar = document.getElementById('dashboard-sidebar');
    const overlay = document.getElementById('dashboard-overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        loadDashboardContent();
    }
}

function closeDashboard() {
    const sidebar = document.getElementById('dashboard-sidebar');
    const overlay = document.getElementById('dashboard-overlay');
    
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Mobile nav controls
function toggleMobileNav() {
    const nav = document.getElementById('site-nav');
    const overlay = document.getElementById('mobile-nav-overlay');
    const btn = document.querySelector('.mobile-nav-toggle');
    if (!nav || !overlay) return;
    const isOpen = !nav.classList.contains('open');
    nav.classList.toggle('open', isOpen);
    overlay.classList.toggle('open', isOpen);
    if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('menu-open', isOpen);
}

function closeMobileNav() {
    const nav = document.getElementById('site-nav');
    const overlay = document.getElementById('mobile-nav-overlay');
    const btn = document.querySelector('.mobile-nav-toggle');
    if (!nav || !overlay) return;
    nav.classList.remove('open');
    overlay.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    disableMobileNavFocusTrap(btn);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileNav();
});

// Submenu toggle: delegate clicks to buttons with .submenu-toggle
document.addEventListener('click', (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    const btn = t.closest('.submenu-toggle');
    if (!btn) return;
    const container = btn.closest('.has-submenu');
    if (!container) return;
    const submenuId = btn.getAttribute('aria-controls');
    const submenu = submenuId ? document.getElementById(submenuId) : container.querySelector('.submenu');
    if (!submenu) return;
    const willOpen = !submenu.classList.contains('open');
    submenu.classList.toggle('open', willOpen);
    btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
});

// Focus trap within mobile nav drawer
let mobileNavKeydownHandler = null;
function enableMobileNavFocusTrap(container, initialFocus) {
    try {
        const focusables = container.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const list = Array.from(focusables).filter(el => !el.hasAttribute('disabled'));
        if (list.length === 0) return;
        const first = list[0];
        const last = list[list.length - 1];
        if (initialFocus && initialFocus.focus) initialFocus.focus(); else first.focus();
        mobileNavKeydownHandler = (e) => {
            if (e.key !== 'Tab') return;
            if (list.length === 1) { e.preventDefault(); first.focus(); return; }
            const active = document.activeElement;
            if (e.shiftKey) {
                if (active === first) { e.preventDefault(); last.focus(); }
            } else {
                if (active === last) { e.preventDefault(); first.focus(); }
            }
        };
        container.addEventListener('keydown', mobileNavKeydownHandler, true);
    } catch { /* ignore */ }
}

function disableMobileNavFocusTrap(returnFocusTo) {
    try {
        const container = document.getElementById('site-nav');
        if (container && mobileNavKeydownHandler) {
            container.removeEventListener('keydown', mobileNavKeydownHandler, true);
        }
        mobileNavKeydownHandler = null;
        if (returnFocusTo && returnFocusTo.focus) returnFocusTo.focus();
    } catch { /* ignore */ }
}

// Hook into drawer open
function toggleMobileNav() {
    const nav = document.getElementById('site-nav');
    const overlay = document.getElementById('mobile-nav-overlay');
    const btn = document.querySelector('.mobile-nav-toggle');
    if (!nav || !overlay) return;
    const isOpen = !nav.classList.contains('open');
    nav.classList.toggle('open', isOpen);
    overlay.classList.toggle('open', isOpen);
    if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('menu-open', isOpen);
    if (isOpen) {
        const firstLink = nav.querySelector('.nav-links a');
        enableMobileNavFocusTrap(nav, firstLink);
    } else {
        disableMobileNavFocusTrap(btn);
    }
}
let currentDashboardContent = 'overview';

function loadDashboardContent() {
    const contentContainer = document.querySelector('.dashboard-nav');
    const links = contentContainer.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentId = this.getAttribute('data-content') || this.textContent.toLowerCase();
            showDashboardContent(contentId);
        });
    });
}

function showDashboardContent(contentId) {
    const sidebar = document.getElementById('dashboard-sidebar');
    let contentArea = sidebar.querySelector('.dashboard-content-area');
    if (!contentArea) {
        contentArea = document.createElement('div');
        contentArea.className = 'dashboard-content-area';
        sidebar.appendChild(contentArea);
    }
    const contentMap = {
        'overview': `
            <div class="dashboard-content">
                <h3><i class="fas fa-tachometer-alt"></i> Dashboard Overview</h3>
                <div class="content-grid">
                    <div class="content-card">
                        <h4>Site Performance</h4>
                        <p>Total Visitors: 15,432</p>
                        <p>Bounce Rate: 32%</p>
                        <p>Avg. Session: 4m 32s</p>
                    </div>
                    <div class="content-card">
                        <h4>Recent Orders</h4>
                        <p>Pending: 12 orders</p>
                        <p>Processing: 8 orders</p>
                        <p>Shipped: 45 orders</p>
                    </div>
                </div>
            </div>
        `,
        'website settings': `
            <div class="dashboard-content">
                <h3><i class="fas fa-cog"></i> Website Settings</h3>
                <div class="settings-grid">
                    <div class="setting-item">
                        <label>Site Title</label>
                        <input type="text" value="GHIYON E-commerce" class="setting-input">
                    </div>
                    <div class="setting-item">
                        <label>Site Description</label>
                        <textarea class="setting-input">Premium Online Shopping</textarea>
                    </div>
                    <div class="setting-item">
                        <label>Maintenance Mode</label>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider"></span>
                        </label>
                    </div>
                    <button class="btn save-btn">Save Settings</button>
                </div>
            </div>
        `,
        'sales analytics': `
            <div class="dashboard-content">
                <h3><i class="fas fa-chart-bar"></i> Sales Analytics</h3>
                <div class="analytics-chart">
                    <h4>Revenue Last 7 Days</h4>
                    <div class="chart-bars">
                        <div class="bar" style="height: 60%">Mon</div>
                        <div class="bar" style="height: 80%">Tue</div>
                        <div class="bar" style="height: 45%">Wed</div>
                        <div class="bar" style="height: 90%">Thu</div>
                        <div class="bar" style="height: 75%">Fri</div>
                        <div class="bar" style="height": 95%">Sat</div>
                        <div class="bar" style="height: 70%">Sun</div>
                    </div>
                </div>
            </div>
        `,
        'user management': `
            <div class="dashboard-content">
                <h3><i class="fas fa-users"></i> User Management</h3>
                <div class="user-list">
                    <div class="user-item">
                        <span>John Doe</span>
                        <span>admin@example.com</span>
                        <span class="role admin">Admin</span>
                    </div>
                    <div class="user-item">
                        <span>Jane Smith</span>
                        <span>jane@example.com</span>
                        <span class="role editor">Editor</span>
                    </div>
                </div>
            </div>
        `
    };
    function safeCapitalize(s) {
        const t = String(s || '').trim();
        return t ? t.charAt(0).toUpperCase() + t.slice(1) : '';
    }

    contentArea.innerHTML = contentMap[contentId] || `
        <div class="dashboard-content">
            <h3><i class="fas fa-info-circle"></i> ${safeCapitalize(contentId)}</h3>
            <p>Content for ${String(contentId || '')} will be displayed here.</p>
        </div>
    `;
    
    currentDashboardContent = contentId;
    showNotification(`${safeCapitalize(contentId)} loaded`, 'info');
}
const dashboardStyles = document.createElement('style');
dashboardStyles.textContent = `
    .dashboard-content-area {
        padding: 20px;
        background: rgba(255,255,255,0.1);
        margin: 20px;
        border-radius: 10px;
        max-height: 400px;
        overflow-y: auto;
    }
    
    .dashboard-content h3 {
        color: white;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .content-grid, .settings-grid {
        display: grid;
        gap: 15px;
    }
    
    .content-card, .setting-item {
        background: rgba(255,255,255,0.1);
        padding: 15px;
        border-radius: 8px;
        color: white;
    }
    
    .setting-input {
        width: 100%;
        padding: 8px;
        margin-top: 5px;
        border: 1px solid rgba(255,255,255,0.3);
        background: rgba(255,255,255,0.1);
        color: white;
        border-radius: 4px;
    }
    
    .save-btn {
        background: #27ae60;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .analytics-chart {
        background: rgba(255,255,255,0.1);
        padding: 20px;
        border-radius: 10px;
    }
    
    .chart-bars {
        display: flex;
        gap: 10px;
        align-items: flex-end;
        height: 200px;
        margin-top: 20px;
    }
    
    .bar {
        flex: 1;
        background: #667eea;
        border-radius: 5px 5px 0 0;
        text-align: center;
        padding-top: 10px;
        color: white;
        min-height: 30px;
    }
    
    .user-list {
        display: grid;
        gap: 10px;
    }
    
    .user-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background: rgba(255,255,255,0.1);
        border-radius: 5px;
        color: white;
    }
    
    .role {
        padding: 3px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
    }
    
    .role.admin {
        background: #e74c3c;
    }
    
    .role.editor {
        background: #3498db;
    }
    
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }
    
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 34px;
    }
    
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }
    
    input:checked + .slider {
        background-color: #27ae60;
    }
    
    input:checked + .slider:before {
        transform: translateX(26px);
    }
`;
document.head.appendChild(dashboardStyles);
function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
 
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
   
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    let nextIndex = currentSlide + 1;
    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }
    showSlide(nextIndex);
}

function prevSlide() {
    let prevIndex = currentSlide - 1;
    if (prevIndex < 0) {
        prevIndex = slides.length - 1;
    }
    showSlide(prevIndex);
}
function toggleAutoSlide() {
    const pauseIcon = document.getElementById('pauseIcon');
    
    if (isAutoSlide) {
        clearInterval(autoSlideInterval);
        pauseIcon.className = 'fas fa-play';
        showNotification('Slideshow paused', 'info');
    } else {
        startAutoSlide();
        pauseIcon.className = 'fas fa-pause';
        showNotification('Slideshow resumed', 'info');
    }
    
    isAutoSlide = !isAutoSlide;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, slideInterval);
}
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        showSlide(index);
    });
});
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
    const token = localStorage.getItem('auth_token');
    (async () => {
        if (token) {
            try { serverCartItems = await fetchServerCartItems(); } catch { serverCartItems = null; }
        }
        updateCartDisplay();
    })();
}

async function addToCart(product) {
    const token = localStorage.getItem('auth_token');
    if (token) {
        try {
            await apiJson('/api/cart/items', 'POST', { productId: Number(product.id), quantity: 1 });
            serverCartItems = await fetchServerCartItems();
            updateCartCount();
            updateCartDisplay();
            showNotification(`${product.name} added to cart!`, 'success');
        } catch (err) {
            showNotification(err && err.message ? String(err.message) : 'Failed to add to cart', 'error');
        }
        return;
    }

    showNotification(t('notice.loginToAddCart'), 'error');
    showLogin();
}

function updateCartCount() {
    const token = localStorage.getItem('auth_token');
    let totalItems = 0;
    if (token && Array.isArray(serverCartItems)) {
        totalItems = serverCartItems.reduce((sum, it) => sum + Number(it.quantity || 0), 0);
    } else {
        totalItems = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
    }
    const el = document.getElementById('cart-count');
    if (el) el.textContent = String(totalItems);
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartItems || !cartTotal) return;

    const token = localStorage.getItem('auth_token');
    const items = (token && Array.isArray(serverCartItems))
        ? serverCartItems.map((it, idx) => ({
            index: idx,
            cartItemId: Number(it.id || 0),
            id: Number(it.productId),
            name: String(it.name || ''),
            price: Number(it.price || 0),
            discount: Number(it.discount || 0),
            image: String(it.image || ''),
            quantity: Number(it.quantity || 0),
            server: true,
        }))
        : cart.map((it, idx) => ({
            index: idx,
            cartItemId: 0,
            id: Number(it.id || 0),
            name: String(it.name || ''),
            price: Number(it.price || 0),
            discount: Number(it.discount || 0),
            image: String(it.image || ''),
            quantity: Number(it.quantity || 0),
            server: false,
        }));

    if (items.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 40px;">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }

    let itemsHTML = '';
    let total = 0;
    items.forEach((item) => {
        const finalUnit = Number(item.price || 0) * (1 - Number(item.discount || 0) / 100);
        const itemTotal = finalUnit * Number(item.quantity || 0);
        total += itemTotal;
        const serverFlag = item.server ? 'true' : 'false';
        const disabledQty = '';
        itemsHTML += `
            <div class="cart-item">
                <img src="${resolveImageSrc(item.image)}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">$${finalUnit.toFixed(2)}${item.discount ? ` (-${item.discount}% off)` : ''}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.index}, -1, ${serverFlag}, ${Number(item.cartItemId || 0)})" ${disabledQty}>-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.index}, 1, ${serverFlag}, ${Number(item.cartItemId || 0)})" ${disabledQty}>+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.index}, ${serverFlag}, ${Number(item.cartItemId || 0)})" ${disabledQty}>
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    cartItems.innerHTML = itemsHTML;
    cartTotal.textContent = total.toFixed(2);
    if (isCheckoutOpen()) updateCheckoutTotals();
}

async function updateQuantity(index, change, isServer, cartItemId) {
    const token = localStorage.getItem('auth_token');

    if (isServer && token) {
        const current = Array.isArray(serverCartItems) ? serverCartItems[index] : null;
        const currQty = current ? Number(current.quantity || 0) : 0;
        const nextQty = currQty + Number(change || 0);
        if (!cartItemId || cartItemId <= 0) {
            showNotification('Could not update this item.', 'error');
            return;
        }
        try {
            if (nextQty <= 0) {
                await apiJson(`/api/cart/items/${cartItemId}`, 'DELETE');
            } else {
                await apiJson(`/api/cart/items/${cartItemId}`, 'PUT', { quantity: nextQty });
            }
            serverCartItems = await fetchServerCartItems();
            updateCartCount();
            updateCartDisplay();
            if (isCheckoutOpen()) updateCheckoutTotals();
        } catch (err) {
            showNotification(err && err.message ? String(err.message) : 'Failed to update cart', 'error');
        }
        return;
    }

    // Guest/local cart
    if (!cart[index]) return;
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartCount();
    updateCartDisplay();
    saveCart();
}

async function removeFromCart(index, isServer, cartItemId) {
    const token = localStorage.getItem('auth_token');
    if (isServer && token) {
        if (!cartItemId || cartItemId <= 0) {
            showNotification('Could not remove this item.', 'error');
            return;
        }
        try {
            await apiJson(`/api/cart/items/${cartItemId}`, 'DELETE');
            serverCartItems = await fetchServerCartItems();
            updateCartCount();
            updateCartDisplay();
            if (isCheckoutOpen()) updateCheckoutTotals();
            showNotification('Item removed from cart', 'info');
        } catch (err) {
            showNotification(err && err.message ? String(err.message) : 'Failed to remove item', 'error');
        }
        return;
    }

    cart.splice(index, 1);
    updateCartCount();
    updateCartDisplay();
    saveCart();
    showNotification('Item removed from cart', 'info');
}

function checkout() {
    openCheckout();
}

// Checkout modal wiring
const checkoutFormEl = document.getElementById('checkout-form');
if (checkoutFormEl) {
    checkoutFormEl.addEventListener('submit', function (e) {
        e.preventDefault();
        placeOrderFromCheckout();
    });
}

const checkoutModalEl = document.getElementById('checkout-modal');
if (checkoutModalEl) {
    checkoutModalEl.addEventListener('click', function (e) {
        if (e.target === checkoutModalEl) closeCheckout();
    });
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isCheckoutOpen()) closeCheckout();
});

// Handle Chapa return: show success, wait 5s, redirect to web.html
(function handleChapaReturn() {
    try {
        const url = new URL(window.location.href);
        const params = url.searchParams;

        // Chapa commonly returns tx_ref; keep flexible for other parameter names.
        const txRef = params.get('tx_ref') || params.get('trx_ref') || params.get('reference') || '';
        const statusRaw = (params.get('status') || params.get('payment_status') || params.get('result') || '').toLowerCase();
        const isSuccess = statusRaw === 'success' || statusRaw === 'successful' || statusRaw === 'paid';

        if (!txRef && !statusRaw) return;

        const showReceiptThenRedirect = (ref, paidLabel) => {
            const modal = document.getElementById('payment-modal');
            const refEl = document.getElementById('payment-ref');
            const statusEl = document.getElementById('payment-status');
            if (refEl) refEl.textContent = ref || '-';
            if (statusEl) statusEl.textContent = paidLabel || 'Paid';
            if (modal) {
                modal.style.display = 'flex';
                modal.setAttribute('aria-hidden', 'false');
            }
            setTimeout(() => {
                window.location.replace('web.html');
            }, 5000);
        };

        if (isSuccess || txRef) {
            // Prefer real verification (prevents false-success on cancel)
            const token = localStorage.getItem('auth_token');
            if (!token) {
                showNotification('Payment completed. Please login again.', 'info');
                setTimeout(() => window.location.replace('web.html'), 5000);
                return;
            }

            apiJson(`/api/payments/chapa/verify/${encodeURIComponent(txRef || '')}`, 'GET')
                .then((r) => {
                    const paid = !!(r && r.paid);
                    try { localStorage.removeItem(PENDING_CHAPA_KEY); } catch { /* ignore */ }

                    if (paid) {
                        showReceiptThenRedirect(txRef || (r && r.txRef) || '', 'Paid');
                    } else {
                        showReceiptThenRedirect(txRef || (r && r.txRef) || '', 'Not Paid');
                    }
                })
                .catch(() => {
                    // If verification fails, still show reference and redirect.
                    try { localStorage.removeItem(PENDING_CHAPA_KEY); } catch { /* ignore */ }
                    showReceiptThenRedirect(txRef, isSuccess ? 'Paid' : 'Payment Status Unknown');
                });

            return;
        }

        // If Chapa returned but status isn't success, show info and clean URL
        showNotification('Payment not completed.', 'info');
        try { localStorage.removeItem(PENDING_CHAPA_KEY); } catch { /* ignore */ }
        // Clean query params without reloading
        window.history.replaceState({}, document.title, 'web.html');
    } catch {
        // ignore
    }
})();

async function fetchProductsFromApi() {
    const res = await fetch(`${API_BASE}/api/products`);
    const data = await res.json().catch(() => []);
    if (!res.ok) throw new Error((data && data.error) ? data.error : `Failed to load products (${res.status})`);
    if (!Array.isArray(data)) return [];
    return data
        .filter(p => p && typeof p === 'object')
        .map(p => ({
            id: Number(p.id ?? 0),
            name: String(p.name ?? ''),
            price: Number(p.price ?? 0),
            image: String(p.image ?? ''),
            category: String(p.category ?? ''),
            rating: Number(p.rating ?? 0),
            discount: Number(p.discount ?? 0)
        }))
        .filter(p => Number.isFinite(p.id) && p.id > 0 && p.name);
}

let products = [];
let hasWarnedProductsApi = false;

const FALLBACK_PRODUCTS = [
    {
        id: 1,
        name: 'Wireless Bluetooth Headphones',
        price: 89.99,
        image: 'assets/placeholder.svg',
        category: 'electronics',
        rating: 4.5,
        discount: 20
    },
    {
        id: 2,
        name: 'Smart Watch Series 5',
        price: 249.99,
        image: 'assets/placeholder.svg',
        category: 'electronics',
        rating: 4.7,
        discount: 10
    },
    {
        id: 3,
        name: 'Gaming Laptop Pro',
        price: 1299.99,
        image: 'assets/placeholder.svg',
        category: 'electronics',
        rating: 4.8,
        discount: 15
    },
    {
        id: 4,
        name: 'Wireless Gaming Mouse',
        price: 59.99,
        image: 'assets/placeholder.svg',
        category: 'electronics',
        rating: 4.4,
        discount: 25
    },
   
    {
        id: 5,
        name: 'Premium Leather Jacket',
        price: 129.99,
        image: 'assets/placeholder.svg',
        category: 'fashion',
        rating: 4.8,
        discount: 15
    },
    {
        id: 6,
        name: 'Designer Handbag',
        price: 199.99,
        image: 'assets/placeholder.svg',
        category: 'fashion',
        rating: 4.6,
        discount: 25
    },
    {
        id: 7,
        name: 'Men\'s Casual Shoes',
        price: 79.99,
        image: 'assets/placeholder.svg',
        category: 'fashion',
        rating: 4.3,
        discount: 20
    },
    {
        id: 8,
        name: 'Luxury Wrist Watch',
        price: 349.99,
        image: 'assets/placeholder.svg',
        category: 'fashion',
        rating: 4.9,
        discount: 10
    },
    
    {
        id: 9,
        name: 'Smart Home Speaker',
        price: 79.99,
        image: 'assets/placeholder.svg',
        category: 'home',
        rating: 4.4,
        discount: 30
    },
    {
        id: 10,
        name: 'Modern Coffee Table',
        price: 299.99,
        image: 'assets/placeholder.svg',
        category: 'home',
        rating: 4.6,
        discount: 20
    },
    {
        id: 11,
        name: 'Kitchen Blender Pro',
        price: 89.99,
        image: 'assets/placeholder.svg',
        category: 'home',
        rating: 4.5,
        discount: 25
    },
    {
        id: 12,
        name: 'LED Smart TV 55"',
        price: 599.99,
        image: 'assets/placeholder.svg',
        category: 'home',
        rating: 4.7,
        discount: 15
    },
    {
        id: 13,
        name: 'Designer Floor Lamp',
        price: 129.99,
        image: 'assets/placeholder.svg',
        category: 'home',
        rating: 4.4,
        discount: 20
    },
    {
        id: 14,
        name: 'Air Purifier Pro',
        price: 199.99,
        image: 'assets/placeholder.svg',
        category: 'home',
        rating: 4.6,
        discount: 15
    },
    {
        id: 15,
        name: 'Yoga Mat Premium',
        price: 39.99,
        image: 'assets/placeholder.svg',
        category: 'sports',
        rating: 4.3,
        discount: 15
    },
    {
        id: 16,
        name: 'Home Gym Set',
        price: 499.99,
        image: 'assets/placeholder.svg',
        category: 'sports',
        rating: 4.7,
        discount: 20
    },
    {
        id: 17,
        name: 'Running Shoes Pro',
        price: 129.99,
        image: 'assets/placeholder.svg',
        category: 'sports',
        rating: 4.8,
        discount: 25
    },
    {
        id: 18,
        name: 'Mountain Bike',
        price: 799.99,
        image: 'assets/placeholder.svg',
        category: 'sports',
        rating: 4.9,
        discount: 30
    },
    {
        id: 19,
        name: 'Camping Tent 4-Person',
        price: 149.99,
        image: 'assets/placeholder.svg',
        category: 'sports',
        rating: 4.5,
        discount: 20
    },
    {
        id: 20,
        name: 'Basketball Pro',
        price: 29.99,
        image: 'assets/placeholder.svg',
        category: 'sports',
        rating: 4.4,
        discount: 15
    }
];

function getCurrentProductViewState() {
    const filterEl = document.getElementById('category-filter');
    const sortEl = document.getElementById('sort-by');
    return {
        filter: filterEl ? String(filterEl.value || 'all') : 'all',
        sort: sortEl ? String(sortEl.value || 'featured') : 'featured'
    };
}

async function initProducts() {
    try {
        products = await fetchProductsFromApi();
    } catch {
        products = FALLBACK_PRODUCTS.slice();
        if (!hasWarnedProductsApi) {
            hasWarnedProductsApi = true;
            showNotification('Products API unavailable — showing placeholders.', 'info');
        }
    }
}

async function refreshProductsAndRender({ silent = true } = {}) {
    try {
        const loaded = await fetchProductsFromApi();
        products = loaded;
    } catch {
        if (!silent && !hasWarnedProductsApi) {
            hasWarnedProductsApi = true;
            showNotification('Products API unavailable — showing placeholders.', 'info');
        }
        // Keep current products list on transient errors
        return;
    }

    const { filter, sort } = getCurrentProductViewState();
    loadProducts(filter, sort);
}
function loadProducts(filter = 'all', sort = 'featured') {
    const productsGrid = document.getElementById('products-grid');

    const searchEl = document.getElementById('search-input');
    const queryRaw = searchEl ? String(searchEl.value || '').trim().toLowerCase() : '';
    const query = queryRaw.replace(/\s+/g, ' ').trim();
    const tokens = query ? query.split(' ').filter(Boolean) : [];

    // Start from all products
    let filteredProducts = Array.isArray(products) ? products.slice() : [];

    // Apply category filter if selected (case-insensitive, tolerant of broader labels)
    const filterSlug = String(filter || 'all').toLowerCase();
    if (filterSlug !== 'all') {
        filteredProducts = filteredProducts.filter((product) => {
            const cat = String(product && product.category ? product.category : '').toLowerCase();
            return cat === filterSlug || cat.includes(filterSlug);
        });
    }

    // Apply text search over name + category (all tokens must match)
    if (tokens.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
            const name = String(product && product.name ? product.name : '').toLowerCase();
            const category = String(product && product.category ? product.category : '').toLowerCase();
            const haystack = `${name} ${category}`.replace(/\s+/g, ' ');
            return tokens.every((t) => haystack.includes(t));
        });
    }
    
  
    filteredProducts.sort((a, b) => {
        switch(sort) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'newest':
                return b.id - a.id;
            default:
                return 0;
        }
    });

    if (!productsGrid) return;
    if (!Array.isArray(filteredProducts) || filteredProducts.length === 0) {
        productsGrid.innerHTML = `<div class="empty-products">${query ? 'No products found for your search.' : 'No products found.'}</div>`;
        return;
    }
   
    let productsHTML = '';
    // Helper: highlight search tokens within a given text
    const highlightMatches = (text, list) => {
        const src = String(text || '');
        if (!Array.isArray(list) || list.length === 0) return src;
        let result = src;
        list.forEach((tok) => {
            const safe = String(tok).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re = new RegExp(`(${safe})`, 'ig');
            result = result.replace(re, '<mark class="search-hit">$1</mark>');
        });
        return result;
    };

    filteredProducts.forEach(product => {
        const originalPrice = product.price / (1 - product.discount / 100);
        const isFav = isInWishlist(product.id);
        const displayName = tokens.length ? highlightMatches(product.name, tokens) : product.name;
        
        productsHTML += `
            <div class="product-card">
                <span class="product-badge">-${product.discount}%</span>
                <button class="wishlist-toggle ${isFav ? 'active' : ''}" data-id="${product.id}" aria-pressed="${isFav}" aria-label="${isFav ? 'Remove from wishlist' : 'Add to wishlist'}" onclick="toggleWishlist(${product.id})"><i class="fas fa-heart"></i></button>
                <img src="${resolveImageSrc(product.image)}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${displayName}</h3>
                    <div class="product-rating">
                        ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                        <span style="color: #666; margin-left: 5px;">(${product.rating})</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        <span class="original-price">$${originalPrice.toFixed(2)}</span>
                        <span class="discount">Save ${product.discount}%</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn-add-cart" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                            <i class="fas fa-cart-plus"></i> ${t('product.addToCart')}
                        </button>
                        <button class="btn-buy" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')}); toggleCart()">
                            ${t('product.buy')}
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    productsGrid.innerHTML = productsHTML;
}

function filterByCategory(category) {
    document.getElementById('category-filter').value = category;
    loadProducts(category, document.getElementById('sort-by').value);
}

function initProductFilteringUI() {
    const sortEl = document.getElementById('sort-by');
    const filterEl = document.getElementById('category-filter');
    if (sortEl) {
        sortEl.addEventListener('change', function () {
            const { filter } = getCurrentProductViewState();
            loadProducts(filter, String(this.value || 'featured'));
        });
    }
    if (filterEl) {
        filterEl.addEventListener('change', function () {
            const { sort } = getCurrentProductViewState();
            loadProducts(String(this.value || 'all'), sort);
        });
    }

    // Search filtering (name + category) across all products
    const searchBtn = document.querySelector('.search-bar button');
    const searchInput = document.getElementById('search-input');
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            performSearch();
        });
    }
    if (searchInput) {
        let searchTimer = null;
        searchInput.addEventListener('input', () => {
            if (searchTimer) clearTimeout(searchTimer);
            searchTimer = setTimeout(() => {
                const { filter, sort } = getCurrentProductViewState();
                loadProducts(filter, sort);
            }, 180);
        });
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
    }
}
function updateTimer() {
    const now = new Date();
    const endTime = new Date(now.getTime() + 12 * 60 * 60 * 1000); 
    
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    
    function update() {
        const now = new Date();
        const diff = endTime - now;
        
        if (diff <= 0) {
            clearInterval(timerInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            return;
        }
        
        const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
        const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
        
        hours.textContent = hoursLeft.toString().padStart(2, '0');
        minutes.textContent = minutesLeft.toString().padStart(2, '0');
        seconds.textContent = secondsLeft.toString().padStart(2, '0');
    }
    
    update();
    const timerInterval = setInterval(update, 1000);
}
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.style.display = chatWindow.style.display === 'block' ? 'none' : 'block';
    
    if (chatWindow.style.display === 'block') {
        addBotMessage('Hello! I\'m GHIYON Assistant. How can I help you today?');
    }
}

function sendMessage(event) {
    event.preventDefault();
    const input = document.getElementById('chat-input-field');
    const message = input.value.trim();
    
    if (!message) return;
    addUserMessage(message);
    input.value = '';
    showTypingIndicator();
 
    setTimeout(() => {
        removeTypingIndicator();
        const response = getBotResponse(message);
        addBotMessage(response);
    }, 1000);
}

function addUserMessage(text) {
    const chatBody = document.getElementById('chat-body');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user';
    messageDiv.innerHTML = `
        <div class="message-content">${text}</div>
        <div class="message-avatar">U</div>
    `;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function addBotMessage(text) {
    const chatBody = document.getElementById('chat-body');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message bot';
    messageDiv.innerHTML = `
        <div class="message-avatar">B</div>
        <div class="message-content">${text}</div>
    `;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function showTypingIndicator() {
    const chatBody = document.getElementById('chat-body');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">B</div>
        <div class="message-content">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    chatBody.appendChild(typingDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function getBotResponse(message) {
    const msg = message.toLowerCase();
    
    if (msg.includes('hello') || msg.includes('hi')) {
        return 'Hello! Welcome to GHIYON E-commerce. How can I assist you today?';
    } else if (msg.includes('price') || msg.includes('cost')) {
        return 'Our prices are very competitive! You can check individual product prices in the products section.';
    } else if (msg.includes('delivery') || msg.includes('shipping')) {
        return 'We offer free shipping on orders over $50. Delivery usually takes 2-5 business days.';
    } else if (msg.includes('return') || msg.includes('refund')) {
        return 'We have a 30-day return policy. Items must be in original condition with tags attached.';
    } else if (msg.includes('contact') || msg.includes('support')) {
        return 'You can contact our support team at support@ghiyon.com or call +251921632611';
    } else if (msg.includes('product') || msg.includes('item')) {
        return 'We have a wide range of products in electronics, fashion, home & kitchen, and sports categories.';
    } else if (msg.includes('discount') || msg.includes('deal')) {
        return 'Check out our "Today\'s Deals" section for amazing discounts and special offers!';
    } else if (msg.includes('payment') || msg.includes('pay')) {
        return 'We accept all major credit cards, PayPal, and bank transfers. All payments are secure.';
    } else {
        return 'Thanks for your message! For specific questions about products or orders, please check our FAQ section or contact support.';
    }
}


function showNotification(message, type = 'info') {
   
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
  
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
   
    if (type === 'error') {
        notification.style.background = '#ff4757';
    } else if (type === 'success') {
        notification.style.background = '#27ae60';
    } else if (type === 'info') {
        notification.style.background = '#3498db';
    }
    
    document.body.appendChild(notification);
    
   
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || ''));
}

function setFieldErrorMessage(inputEl, message) {
    if (!inputEl) return;
    const group = inputEl.closest('.form-group') || inputEl.parentElement;
    if (!group) return;
    let msgEl = group.querySelector('.field-error');
    if (!msgEl) {
        msgEl = document.createElement('div');
        msgEl.className = 'field-error';
        inputEl.setAttribute('aria-live', 'polite');
        group.appendChild(msgEl);
    }
    msgEl.textContent = String(message || '');
    msgEl.style.display = message ? 'block' : 'none';
}

function markFieldError(inputEl, hasError, message) {
    if (!inputEl) return;
    if (hasError) {
        inputEl.classList.add('input-error');
        inputEl.setAttribute('aria-invalid', 'true');
        if (message) setFieldErrorMessage(inputEl, message);
    } else {
        inputEl.classList.remove('input-error');
        inputEl.removeAttribute('aria-invalid');
        if (message) setFieldErrorMessage(inputEl, '');
    }
}

function validateEmailField(el) {
    const v = String(el && el.value || '').trim();
    if (!v) { markFieldError(el, true, 'Please enter your email.'); return false; }
    if (!isValidEmail(v)) { markFieldError(el, true, 'Please provide a valid email address.'); return false; }
    markFieldError(el, false, '');
    return true;
}

function validateNameField(el) {
    const v = String(el && el.value || '').trim();
    if (!v) { markFieldError(el, true, 'Please enter your full name.'); return false; }
    if (v.length < 3) { markFieldError(el, true, 'Name must be at least 3 characters.'); return false; }
    markFieldError(el, false, '');
    return true;
}

function validatePasswordField(el, { min = 6, max = 12, required = true } = {}) {
    const v = String(el && el.value || '');
    if (required && !v) { markFieldError(el, true, 'Please enter your password.'); return false; }
    if (v && v.length < min) { markFieldError(el, true, `Password must be at least ${min} characters.`); return false; }
    if (v && v.length > max) { markFieldError(el, true, `Password must be at most ${max} characters.`); return false; }
    markFieldError(el, false, '');
    return true;
}

function validatePhoneField(el) {
    if (!el) return true; // optional
    const digits = String(el.value || '').replace(/\D/g, '');
    if (digits && digits.length < 9) { markFieldError(el, true, 'Enter a valid phone number.'); return false; }
    markFieldError(el, false, '');
    return true;
}

function performSearch() {
    const { filter, sort } = getCurrentProductViewState();
    loadProducts(filter, sort);
    try {
        const productsTitle = document.getElementById('products');
        if (productsTitle && productsTitle.scrollIntoView) {
            productsTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } catch {}
}

document.addEventListener('DOMContentLoaded', async function() {
    // Restore logged-in UI (useful after redirects)
    try {
        const stored = localStorage.getItem(AUTH_USER_KEY);
        if (stored) {
            const u = JSON.parse(stored);
            if (u && typeof u === 'object') setLoggedInUI(u);
        }
    } catch {}

    // Wire UI listeners first (so typing works immediately)
    initProductFilteringUI();

    // Validation: show messages only after interaction (blur) or on submit
    const loginEmail = document.getElementById('login-email');
    const loginPassword = document.getElementById('login-password');
    if (loginEmail) {
        loginEmail.addEventListener('blur', () => validateEmailField(loginEmail));
    }
    if (loginPassword) {
        loginPassword.addEventListener('blur', () => validatePasswordField(loginPassword, { min: 1, max: 12, required: true }));
    }
    const signupName = document.getElementById('signup-name');
    const signupEmail = document.getElementById('signup-email');
    const signupPassword = document.getElementById('signup-password');
    const signupPhone = document.getElementById('signup-phone');
    if (signupName) {
        signupName.addEventListener('blur', () => validateNameField(signupName));
    }
    if (signupEmail) {
        signupEmail.addEventListener('blur', () => validateEmailField(signupEmail));
    }
    if (signupPassword) {
        signupPassword.addEventListener('blur', () => validatePasswordField(signupPassword, { min: 6, max: 12, required: true }));
    }
    if (signupPhone) {
        signupPhone.addEventListener('blur', () => validatePhoneField(signupPhone));
    }

    // Initialize wishlist from localStorage before rendering products
    loadWishlist();
    updateWishlistCount();

    await initProducts();
    const { filter, sort } = getCurrentProductViewState();
    loadProducts(filter, sort);

    // Keep products up-to-date (e.g., after admin adds a product)
    window.addEventListener('focus', () => {
        refreshProductsAndRender({ silent: true });
    });
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) refreshProductsAndRender({ silent: true });
    });
    setInterval(() => {
        if (!document.hidden) refreshProductsAndRender({ silent: true });
    }, 15000);
    
    
    startAutoSlide();
    updateTimer();
    window.addEventListener('click', function(event) {
        const authModals = document.querySelectorAll('.auth-modal');
        authModals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        const cartModal = document.getElementById('cart-modal');
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            z-index: 4000;
            animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
            box-shadow: 0 10px 25px rgba(39, 174, 96, 0.3);
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeOut {
            to { opacity: 0; transform: translateX(100%); }
        }
    `;
    document.head.appendChild(notificationStyles);
});