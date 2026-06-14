export type NavLink = { label: string; href: string };
export type StatItem = { value: string; label: string };
export type RoomItem = {
  name: string;
  price: string;
  size: string;
  image: string;
  amenities: string[];
};
export type AmenityItem = { title: string; desc: string; icon: string };
export type WhyItem = { title: string; desc: string; icon: string };
export type ReviewItem = { name: string; location: string; rating: number; text: string };
export type FaqItem = { q: string; a: string };

export type Dict = {
  meta: {
    title: string;
    description: string;
    slogan: string;
    keywords: string[];
    ogLocale: string;
  };
  nav: {
    links: NavLink[];
    openMenu: string;
    closeMenu: string;
    callNow: string;
    switchLang: string;
    switchLangLabel: string;
  };
  hero: {
    eyebrow: string;
    callNow: string;
    chatZalo: string;
    viewRooms: string;
    imgAltSpaciousRoom: string;
    imgAltExterior: string;
    priceSuffix: string;
    pricePrefix: string;
  };
  about: {
    heading: string;
    body: string;
    badgeYears: string;
    imgAltLobby: string;
    imgAltNight: string;
    highlights: string[];
    stats: StatItem[];
  };
  rooms: {
    eyebrow: string;
    heading: string;
    subtext: string;
    callAdvise: string;
    chatZaloAria: string;
    items: RoomItem[];
  };
  amenities: {
    heading: string;
    items: AmenityItem[];
  };
  gallery: {
    heading: string;
    imgAlt: string;
  };
  whyUs: {
    heading: string;
    subtext: string;
    items: WhyItem[];
  };
  reviews: {
    heading: string;
    ratingFrom: string;
    items: ReviewItem[];
  };
  faq: {
    heading: string;
    items: FaqItem[];
  };
  cta: {
    heading: string;
    subtext: string;
    callBtn: string;
    zaloBtn: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    subtext: string;
    labels: {
      hotline: string;
      zalo: string;
      email: string;
      address: string;
    };
    mapTitle: string;
  };
  footer: {
    slogan: string;
    linksHeading: string;
    policiesHeading: string;
    contactHeading: string;
    policies: string[];
    copyright: string;
    tagline: string;
  };
  floating: {
    zaloAriaLabel: string;
    callAriaLabel: string;
  };
};

export const vi: Dict = {
  meta: {
    title: "Khách Sạn Sen Vàng | Phòng nghỉ gần biển, ngay trung tâm Đà Nẵng",
    description:
      "Khách sạn Sen Vàng Đà Nẵng: không gian nghỉ dưỡng sạch sẽ, tiện nghi, ấm cúng. Tọa lạc tại trung tâm thành phố, cách biển vài phút đi bộ. Giá phòng chỉ từ 300.000đ/đêm.",
    slogan: "Phòng nghỉ gần biển, ngay trung tâm Đà Nẵng",
    keywords: [
      "khách sạn Đà Nẵng",
      "khách sạn gần biển Đà Nẵng",
      "khách sạn Sen Vàng",
      "phòng nghỉ giá rẻ Đà Nẵng",
      "khách sạn trung tâm Đà Nẵng",
      "Hồ Nghinh Đà Nẵng",
    ],
    ogLocale: "vi_VN",
  },
  nav: {
    links: [
      { label: "Giới thiệu", href: "#about" },
      { label: "Phòng nghỉ", href: "#rooms" },
      { label: "Tiện ích", href: "#amenities" },
      { label: "Hình ảnh", href: "#gallery" },
      { label: "Đánh giá", href: "#reviews" },
      { label: "Hỏi đáp", href: "#faq" },
      { label: "Liên hệ", href: "#contact" },
    ],
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    callNow: "Gọi ngay",
    switchLang: "EN",
    switchLangLabel: "Switch to English",
  },
  hero: {
    eyebrow: "★★★★★ Khách sạn gần biển Đà Nẵng",
    callNow: "Gọi ngay",
    chatZalo: "Nhắn Zalo",
    viewRooms: "Xem phòng",
    imgAltSpaciousRoom: "không gian sang trọng",
    imgAltExterior: "mặt tiền khách sạn",
    priceSuffix: "/đêm",
    pricePrefix: "Giá chỉ từ",
  },
  about: {
    heading: "Kỳ nghỉ trọn vẹn giữa lòng Đà Nẵng",
    body: "Tọa lạc ngay trung tâm thành phố, chỉ cách biển Mỹ Khê vài phút đi bộ, {name} mang đến không gian nghỉ ngơi sạch sẽ, tiện nghi và ấm cúng. Lựa chọn lý tưởng cho du lịch, công tác hay nghỉ ngắn ngày.",
    badgeYears: "năm phục vụ",
    imgAltLobby: "Không gian {name}",
    imgAltNight: "{name} về đêm",
    highlights: [
      "Vị trí trung tâm, gần biển & điểm vui chơi",
      "Phòng sạch sẽ, tiện nghi hiện đại",
      "Bãi đậu xe riêng an toàn",
      "Lễ tân hỗ trợ 24/7",
    ],
    stats: [
      { value: "12+", label: "Năm hoạt động" },
      { value: "48", label: "Phòng nghỉ tiện nghi" },
      { value: "4.8/5", label: "Điểm đánh giá" },
      { value: "5 phút", label: "Đi bộ ra biển" },
    ],
  },
  rooms: {
    eyebrow: "Hệ thống phòng",
    heading: "Lựa chọn phòng nghỉ phù hợp",
    subtext: "Đa dạng hạng phòng cho mọi nhu cầu, từ nghỉ ngắn ngày đến kỳ nghỉ gia đình.",
    callAdvise: "Gọi tư vấn",
    chatZaloAria: "Nhắn Zalo về {name}",
    items: [
      {
        name: "Phòng Standard",
        price: "Từ 300.000đ / đêm",
        size: "20 m²",
        image: "/image/room-standard.png",
        amenities: ["1 giường đôi", "Máy lạnh", "Wifi miễn phí", "TV màn hình phẳng"],
      },
      {
        name: "Phòng Deluxe",
        price: "Từ 550.000đ / đêm",
        size: "28 m²",
        image: "/image/room-deluxe.png",
        amenities: ["Giường đôi rộng", "View thành phố", "Minibar", "Bàn làm việc"],
      },
      {
        name: "Phòng Suite",
        price: "Từ 950.000đ / đêm",
        size: "42 m²",
        image: "/image/room-suite.png",
        amenities: [
          "Không gian rộng rãi",
          "View thành phố",
          "Bàn làm việc",
          "Tiện nghi cao cấp",
        ],
      },
      {
        name: "Phòng Family",
        price: "Từ 750.000đ / đêm",
        size: "36 m²",
        image: "/image/room-family.png",
        amenities: ["2 giường đôi", "Phù hợp 4 người", "Máy lạnh", "Tranh trang trí"],
      },
    ],
  },
  amenities: {
    heading: "Trải nghiệm trọn vẹn mọi khoảnh khắc",
    items: [
      { title: "Hồ bơi", desc: "Hồ bơi vô cực tầng thượng view biển", icon: "pool" },
      { title: "Nhà hàng", desc: "Ẩm thực Việt & Á - Âu mỗi ngày", icon: "restaurant" },
      { title: "Cafe", desc: "Quầy cafe & lounge thư giãn", icon: "cafe" },
      { title: "Spa", desc: "Trị liệu thư giãn chuyên nghiệp", icon: "spa" },
      { title: "Gym", desc: "Phòng tập hiện đại 24/7", icon: "gym" },
      { title: "Wifi", desc: "Internet tốc độ cao toàn khu", icon: "wifi" },
    ],
  },
  gallery: {
    heading: "Khoảnh khắc tại Sen Vàng",
    imgAlt: "{name} - hình ảnh {n}",
  },
  whyUs: {
    heading: "Lý do du khách tin chọn Sen Vàng",
    subtext:
      "Những giá trị nhỏ làm nên kỳ nghỉ trọn vẹn, và là lý do Quý khách quay lại Sen Vàng cho mỗi chuyến đi Đà Nẵng.",
    items: [
      {
        title: "Vị trí trung tâm",
        desc: "Ngay trung tâm Đà Nẵng, cách biển Mỹ Khê vài phút đi bộ, gần các điểm vui chơi & ẩm thực.",
        icon: "location",
      },
      {
        title: "Giá hợp lý",
        desc: "Phòng nghỉ chất lượng chỉ từ 300.000đ/đêm, lựa chọn lý tưởng cho mọi du khách.",
        icon: "price",
      },
      {
        title: "Phòng sạch đẹp",
        desc: "Phòng được dọn dẹp kỹ lưỡng mỗi ngày, trang bị đầy đủ tiện nghi hiện đại.",
        icon: "clean",
      },
      {
        title: "Hỗ trợ 24/7",
        desc: "Đội ngũ lễ tân thân thiện, hỗ trợ Quý khách bất cứ lúc nào trong ngày.",
        icon: "support",
      },
    ],
  },
  reviews: {
    heading: "Khách hàng nói gì về chúng tôi",
    ratingFrom: "từ {count} đánh giá",
    items: [
      {
        name: "Nguyễn Minh Anh",
        location: "Hà Nội",
        rating: 5,
        text: "Phòng sạch sẽ, nhân viên nhiệt tình. Vị trí cực kỳ thuận tiện, đi bộ ra biển chỉ vài phút. Sẽ quay lại!",
      },
      {
        name: "Trần Quốc Bảo",
        location: "TP. Hồ Chí Minh",
        rating: 5,
        text: "Giá hợp lý mà chất lượng vượt mong đợi. Có bãi đậu xe riêng rất tiện cho gia đình mình đi du lịch.",
      },
      {
        name: "Lê Thị Hương",
        location: "Cần Thơ",
        rating: 5,
        text: "Không gian ấm cúng, yên tĩnh. Buổi sáng cafe view đẹp. Đặt phòng qua hotline được tư vấn rất chu đáo.",
      },
    ],
  },
  faq: {
    heading: "Giải đáp nhanh cho Quý khách",
    items: [
      {
        q: "Khách sạn Sen Vàng Đà Nẵng nằm ở đâu?",
        a: "Khách sạn tọa lạc tại 173 Hồ Nghinh, phường An Hải, thành phố Đà Nẵng, ngay trung tâm, chỉ cách biển Mỹ Khê vài phút đi bộ và gần nhiều điểm vui chơi, ẩm thực.",
      },
      {
        q: "Giá phòng tại khách sạn Sen Vàng bao nhiêu?",
        a: "Giá phòng chỉ từ 300.000đ/đêm cho phòng Standard. Các hạng Deluxe, Suite và Family có mức giá khác nhau. Vui lòng gọi hotline 0236 394 3966 hoặc nhắn Zalo để nhận báo giá và ưu đãi tốt nhất.",
      },
      {
        q: "Khách sạn có chỗ đậu xe không?",
        a: "Có. Khách sạn có bãi đậu xe riêng an toàn và thuận tiện cho cả ô tô và xe máy của Quý khách.",
      },
      {
        q: "Giờ nhận phòng và trả phòng là khi nào?",
        a: "Giờ nhận phòng từ 14:00 và trả phòng trước 12:00. Quý khách có thể liên hệ trước để được hỗ trợ nhận/trả phòng linh hoạt theo lịch trình.",
      },
      {
        q: "Khách sạn có gần biển không?",
        a: "Rất gần. Từ khách sạn chỉ mất vài phút đi bộ là ra tới bãi biển Mỹ Khê, một trong những bãi biển đẹp nhất Đà Nẵng.",
      },
      {
        q: "Làm sao để đặt phòng tại khách sạn Sen Vàng?",
        a: "Quý khách đặt phòng trực tiếp qua hotline 0236 394 3966 hoặc nhắn tin Zalo để được tư vấn nhanh nhất và nhận giá ưu đãi.",
      },
    ],
  },
  cta: {
    heading: "Liên hệ ngay để nhận ưu đãi tốt nhất",
    subtext: "Đặt phòng trực tiếp qua hotline hoặc Zalo để được giá tốt nhất và tư vấn tận tình.",
    callBtn: "Gọi {phone}",
    zaloBtn: "Nhắn Zalo",
  },
  contact: {
    eyebrow: "Liên hệ",
    heading: "Đặt phòng & tư vấn",
    subtext: "Gọi hotline hoặc nhắn Zalo để được tư vấn và nhận ưu đãi tốt nhất.",
    labels: {
      hotline: "Hotline",
      zalo: "Zalo",
      email: "Email",
      address: "Địa chỉ",
    },
    mapTitle: "Bản đồ {name}",
  },
  footer: {
    slogan: "Phòng nghỉ gần biển, ngay trung tâm Đà Nẵng.",
    linksHeading: "Liên kết",
    policiesHeading: "Chính sách",
    contactHeading: "Liên hệ",
    policies: ["Chính sách đặt phòng", "Chính sách hủy phòng", "Chính sách bảo mật"],
    copyright: "Bảo lưu mọi quyền.",
    tagline: "Thiết kế theo phong cách Luxury Resort.",
  },
  floating: {
    zaloAriaLabel: "Nhắn Zalo",
    callAriaLabel: "Gọi ngay",
  },
};
