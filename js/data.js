const products = [
    {
        id: 1,
        name: "Motor 排氣管",
        category: "exhaust",
        price: "NT$ 12,800",
        features: ["高流量設計", "碳纖維尾蓋", "低沈渾厚聲浪"],
        models: ["Yamaha Force", "SYM DRG", "Kymco KRV"],
        image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        name: "廣升 999R 排骨",
        category: "frame",
        price: "NT$ 18,500",
        features: ["CNC 鋁合金切削", "高剛性結構", "輕量化設計"],
        models: ["Yamaha Cygnus Gryphus", "Force 2.0"],
        image: "https://images.unsplash.com/photo-1591438676302-133a42f7d092?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        name: "Brembo 卡鉗",
        category: "brake",
        price: "NT$ 6,500",
        features: ["對向四活塞", "極致煞車手感", "多色可選"],
        models: ["全機種通用"],
        image: "https://images.unsplash.com/photo-1486282228514-60195610011a?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        name: "Brembo 總泵",
        category: "brake",
        price: "NT$ 8,800",
        features: ["RCS 直推設計", "可調式槓桿", "賽道級回饋"],
        models: ["全機種通用"],
        image: "https://images.unsplash.com/photo-1599812182397-3206a06abc59?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        name: "丞睿貨架",
        category: "exterior",
        price: "NT$ 2,500",
        features: ["強化鋼管材質", "高耐重設計", "原廠孔位直上"],
        models: ["SYM MMBCU", "Yamaha BWS"],
        image: "https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        name: "Gpro GT12 前後框",
        category: "wheel",
        price: "NT$ 32,000",
        features: ["鍛造工法", "輕量化轉動慣量", "多款配色選擇"],
        models: ["Yamaha Force", "S-MAX"],
        image: "https://images.unsplash.com/photo-1562627379-1f0ad025bc6b?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 7,
        name: "Work Racing 999R 前後框銀色",
        category: "wheel",
        price: "NT$ 28,000",
        features: ["經典五幅設計", "陽極銀處理", "卓越導熱性能"],
        models: ["Yamaha Cygnus 系列"],
        image: "https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 8,
        name: "Arai 手裡劍 3/4 安全帽",
        category: "accessories",
        price: "NT$ 15,800",
        features: ["SNELL 安全認證", "鏡片通風系統", "專屬彩繪"],
        models: ["不限車種"],
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 9,
        name: "Zoo 水箱罩",
        category: "others",
        price: "NT$ 1,200",
        features: ["不鏽鋼防護網", "雷射切割", "散熱效果佳"],
        models: ["Force", "DRG", "AUGUR"],
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 10,
        name: "改裝後照鏡",
        category: "exterior",
        price: "NT$ 1,800",
        features: ["防眩光藍鏡", "CNC 支架", "流線型外觀"],
        models: ["全機種通用"],
        image: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 11,
        name: "CNC 煞車拉桿",
        category: "exterior",
        price: "NT$ 2,200",
        features: ["六段可調", "防倒折設計", "多色陽極"],
        models: ["全機種通用"],
        image: "https://images.unsplash.com/photo-1558981424-82a8862ec6ca?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 12,
        name: "精品握把",
        category: "exterior",
        price: "NT$ 850",
        features: ["高摩擦力橡膠", "鋁合金端子", "握感舒適"],
        models: ["全機種通用"],
        image: "https://images.unsplash.com/photo-1558981001-199556e524c1?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 13,
        name: "LED 魚眼大燈",
        category: "others",
        price: "NT$ 4,500",
        features: ["超高亮度", "切線鮮明", "原廠插頭直上"],
        models: ["Force", "Cygnus"],
        image: "https://images.unsplash.com/photo-1563200020-f4219520e7a2?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 14,
        name: "碳纖維傳動外蓋",
        category: "exterior",
        price: "NT$ 3,800",
        features: ["真碳纖維包覆", "隔熱效果佳", "質感提升"],
        models: ["Yamaha 六代勁戰"],
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 15,
        name: "手機支架",
        category: "others",
        price: "NT$ 1,280",
        features: ["五爪穩固結構", "減震墊片", "單手操作"],
        models: ["全機種通用"],
        image: "https://images.unsplash.com/photo-1584433144859-1fc3ab84a9ec?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 16,
        name: "機車精品腳踏板",
        category: "exterior",
        price: "NT$ 1,500",
        features: ["防滑鋁合金", "排水孔設計", "增加視覺層次"],
        models: ["Force", "DRG", "MMBCU"],
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800"
    }
];

const categories = {
    exhaust: "排氣系統",
    frame: "車架與排骨",
    brake: "煞車系統",
    wheel: "輪框改裝",
    accessories: "騎士配件",
    exterior: "外觀精品",
    others: "其它類"
};
