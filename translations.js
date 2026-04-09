// Dictionary containing translations for 13 Indian Languages + English
const translations = {
    "en": {
        "appTitle": "WeatherNow",
        "searchPlaceholder": "Search for a city...",
        "forecastTitle": "5-Day Forecast",
        "highlightsTitle": "Today's Highlights",
        "aqiTitle": "Air Quality Index",
        "windTitle": "Wind Info",
        "sunTitle": "Sunrise & Sunset",
        "humidityTitle": "Humidity",
        "pressureTitle": "Pressure",
        "visibilityTitle": "Visibility",
        "feelsLikeText": "Feels like: ",
        "directionText": "Direction: ",
        "sunriseText": "Sunrise",
        "sunsetText": "Sunset",
        "errorNotFound": "City not found or API error.",
        "aqiGood": "Good",
        "aqiFair": "Fair",
        "aqiModerate": "Moderate",
        "aqiPoor": "Poor",
        "aqiVeryPoor": "Very Poor"
    },
    "hi": {
        "appTitle": "मौसम-अभी",
        "searchPlaceholder": "शहर खोजें...",
        "forecastTitle": "5-दिन का पूर्वानुमान",
        "highlightsTitle": "आज की मुख्य बातें",
        "aqiTitle": "वायु गुणवत्ता सूचकांक",
        "windTitle": "हवा की जानकारी",
        "sunTitle": "सूर्योदय और सूर्यास्त",
        "humidityTitle": "नमी",
        "pressureTitle": "दबाव",
        "visibilityTitle": "दृश्यता",
        "feelsLikeText": "ऐसा महसूस होता है: ",
        "directionText": "दिशा: ",
        "sunriseText": "सूर्योदय",
        "sunsetText": "सूर्यास्त",
        "errorNotFound": "शहर नहीं मिला या एपीआई त्रुटि।",
        "aqiGood": "अच्छा",
        "aqiFair": "निष्पक्ष",
        "aqiModerate": "मध्यम",
        "aqiPoor": "खराब",
        "aqiVeryPoor": "बहुत खराब"
    },
    // Adding placeholder translations for other languages, 
    // real translations can be mapped correctly
    "bn": {
        "searchPlaceholder": "শহর অনুসন্ধান করুন...",
        "forecastTitle": "৫ দিনের পূর্বাভাস",
        "highlightsTitle": "আজকের হাইলাইটস",
        "aqiTitle": "বায়ু মান সূচক",
        "windTitle": "বায়ু তথ্য",
        "humidityTitle": "আর্দ্রতা",
        "pressureTitle": "চাপ",
        "visibilityTitle": "দৃশ্যমানতা",
        "sunriseText": "সূর্যোদয়",
        "sunsetText": "সূর্যাস্ত",
        "feelsLikeText": "মনে হচ্ছে: "
    },
    "te": {
        "searchPlaceholder": "నగరాన్ని శోధించండి...",
        "forecastTitle": "5-రోజుల సూచన",
        "highlightsTitle": "నేటి ముఖ్యాంశాలు",
        "aqiTitle": "గాలి నాణ్యత సూచిక",
        "windTitle": "గాలి సమాచారం",
        "humidityTitle": "తేమ",
        "pressureTitle": "ఒత్తిడి",
        "visibilityTitle": "దృశ్యమానత",
        "sunriseText": "సూర్యోదయం",
        "sunsetText": "సూర్యాస్తమయం",
        "feelsLikeText": "అనిపిస్తుంది: "
    },
    "mr": {
        "searchPlaceholder": "शहर शोधा...",
        "forecastTitle": "५-दिवसांचा अंदाज",
        "highlightsTitle": "आजचे ठळक मुद्दे",
        "aqiTitle": "हवा गुणवत्ता निर्देशांक",
        "windTitle": "वारा माहिती",
        "humidityTitle": "आर्द्रता",
        "pressureTitle": "दाब",
        "visibilityTitle": "दृश्यमानता",
        "sunriseText": "सूर्योदय",
        "sunsetText": "सूर्यास्त",
        "feelsLikeText": "जाणवते: "
    },
    "ta": {
        "searchPlaceholder": "நகரத்தை தேடுங்கள்...",
        "forecastTitle": "5-நாள் முன்னறிவிப்பு",
        "highlightsTitle": "இன்றைய சிறப்பம்சங்கள்",
        "aqiTitle": "காற்று தர குறியீடு",
        "windTitle": "காற்று தகவல்",
        "humidityTitle": "ஈரப்பதம்",
        "pressureTitle": "அழுத்தம்",
        "visibilityTitle": "பார்வைத்திறன்",
        "sunriseText": "சூரியோதயம்",
        "sunsetText": "சூரிய அஸ்தமனம்",
        "feelsLikeText": "உணர்கிறது: "
    },
    "ur": {
        "searchPlaceholder": "شہر تلاش کریں...",
        "forecastTitle": "5 دن کی پیش گوئی",
        "highlightsTitle": "آج کی جھلکیاں",
        "aqiTitle": "ہوا کا معیار",
        "windTitle": "ہوا کی معلومات",
        "humidityTitle": "نمی",
        "pressureTitle": "دباؤ",
        "visibilityTitle": "مرئیت",
        "sunriseText": "طلوع آفتاب",
        "sunsetText": "غروب آفتاب",
        "feelsLikeText": "احساس ہوتا ہے: "
    },
    "gu": {
        "searchPlaceholder": "શહેર શોધો...",
        "forecastTitle": "5-દિવસની આગાહી",
        "highlightsTitle": "આજના હાઇલાઇટ્સ",
        "aqiTitle": "હવા ગુણવત્તા સૂચકાંક",
        "windTitle": "પવન માહિતી",
        "humidityTitle": "ભેજ",
        "pressureTitle": "દબાણ",
        "visibilityTitle": "દૃશ્યતા",
        "sunriseText": "સૂર્યોદય",
        "sunsetText": "સૂર્યાસ્ત",
        "feelsLikeText": "અનુભવાય છે: "
    },
    "kn": {
        "searchPlaceholder": "ನಗರವನ್ನು ಹುಡುಕಿ...",
        "forecastTitle": "5-ದಿನದ ಮುನ್ಸೂಚನೆ",
        "highlightsTitle": "ಇಂದಿನ ಮುಖ್ಯಾಂಶಗಳು",
        "aqiTitle": "ಗಾಳಿ ಗುಣಮಟ್ಟ ಸೂಚ್ಯಂಕ",
        "windTitle": "ಗಾಳಿ ಮಾಹಿತಿ",
        "humidityTitle": "ಆರ್ದ್ರತೆ",
        "pressureTitle": "ಒತ್ತಡ",
        "visibilityTitle": "ಗೋಚರತೆ",
        "sunriseText": "ಸೂರ್ಯೋದಯ",
        "sunsetText": "ಸೂರ್ಯಾಸ್ತ",
        "feelsLikeText": "ಅನ್ನಿಸುತ್ತದೆ: "
    },
    "or": {
        "searchPlaceholder": "ସହର ଖୋଜନ୍ତୁ...",
        "forecastTitle": "5-ଦିନର ପୂର୍ବାନୁମାନ",
        "highlightsTitle": "ଆଜିର ହାଇଲାଇଟ୍",
        "aqiTitle": "ବାୟୁ ଗୁଣବତ୍ତା ସୂଚକାଙ୍କ",
        "windTitle": "ପବନ ସୂଚନା",
        "humidityTitle": "ଆର୍ଦ୍ରତା",
        "pressureTitle": "ଚାପ",
        "visibilityTitle": "ଦୃଶ୍ୟମାନତା",
        "sunriseText": "ସୂର୍ଯ୍ୟୋଦୟ",
        "sunsetText": "ସୂର୍ଯ୍ୟାସ୍ତ",
        "feelsLikeText": "ଅନୁଭବ ହୁଏ: "
    },
    "ml": {
        "searchPlaceholder": "നഗരം തിരയുക...",
        "forecastTitle": "5-ദിവസത്തെ പ്രവചനം",
        "highlightsTitle": "ഇന്നത്തെ ഹൈലൈറ്റുകൾ",
        "aqiTitle": "വായു ഗുണനിലവാര സൂചിക",
        "windTitle": "കാറ്റ് വിവരങ്ങൾ",
        "humidityTitle": "ഈർപ്പം",
        "pressureTitle": "മർദ്ദം",
        "visibilityTitle": "ദൃശ്യപരത",
        "sunriseText": "സൂര്യോദയം",
        "sunsetText": "സൂര്യാസ്തമയം",
        "feelsLikeText": "അനുഭവപ്പെടുന്നു: "
    },
    "pa": {
        "searchPlaceholder": "ਸ਼ਹਿਰ ਲੱਭੋ...",
        "forecastTitle": "5-ਦਿਨਾਂ ਦੀ ਭਵਿੱਖਬਾਣੀ",
        "highlightsTitle": "ਅੱਜ ਦੀਆਂ ਖਾਸ ਗੱਲਾਂ",
        "aqiTitle": "ਹਵਾ ਗੁਣਵੱਤਾ ਸੂਚਕ ਅੰਕ",
        "windTitle": "ਹਵਾ ਦੀ ਜਾਣਕਾਰੀ",
        "humidityTitle": "ਨਮੀ",
        "pressureTitle": "ਦਬਾਅ",
        "visibilityTitle": "ਦਿੱਖ",
        "sunriseText": "ਸੂਰਜ ਚੜ੍ਹਨਾ",
        "sunsetText": "ਸੂਰਜ ਡੁੱਬਣਾ",
        "feelsLikeText": "ਮਹਿਸੂਸ ਹੁੰਦਾ ਹੈ: "
    },
    "as": {
        "searchPlaceholder": "চহৰ বিচাৰক...",
        "forecastTitle": "৫-দিনীয়া পূৰ্বানুমান",
        "highlightsTitle": "আজিৰ বিশেষত্ব",
        "aqiTitle": "বায়ু গুণাগুণ সূচক",
        "windTitle": "বতাহৰ তথ্য",
        "humidityTitle": "আৰ্দ্ৰতা",
        "pressureTitle": "চাপ",
        "visibilityTitle": "দৃশ্যমানতা",
        "sunriseText": "সূৰ্যোদয়",
        "sunsetText": "সূৰ্যাস্ত",
        "feelsLikeText": "অনুভৱ হয়: "
    }
};

// Fill in missing keys using English as default to avoid UI breaking if a language lacks a complete translation
const enforceDefaults = () => {
    const keys = Object.keys(translations["en"]);
    for (let lang in translations) {
        if (lang !== "en") {
            keys.forEach(key => {
                if (!translations[lang][key]) {
                    translations[lang][key] = translations["en"][key];
                }
            });
        }
    }
};
enforceDefaults();
