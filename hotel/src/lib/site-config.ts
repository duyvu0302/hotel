/**
 * Single source of truth for all hotel branding & content.
 * Replace values here to rebrand the whole site — no need to touch components.
 */

export const site = {
    name: 'Khách Sạn Sen Vàng',
    shortName: 'Sen Vàng',
    slogan: 'Phòng nghỉ gần biển – ngay trung tâm Đà Nẵng',
    description:
        'Khách sạn Sen Vàng Đà Nẵng — không gian nghỉ dưỡng sạch sẽ, tiện nghi, ấm cúng. Tọa lạc tại trung tâm thành phố, cách biển vài phút đi bộ. Giá phòng chỉ từ 300.000đ/đêm.',
    priceFrom: '300.000đ',
    url: 'https://senvanghotel.vercel.app',
    // Liên hệ
    phone: '02363943966',
    phoneDisplay: '0236 394 3966',
    // Zalo dùng chung số hotline — đổi sang số di động nếu cần
    zalo: '02363943966',
    email: 'senvangdanang@gmail.com',
    address: '173 Hồ Nghinh, Phường An Hải, Thành Phố Đà Nẵng',
    city: 'Đà Nẵng',
    postalCode: '550000',
    // Toạ độ gần đúng khu Hồ Nghinh, An Hải — chỉnh lại cho chính xác nếu cần
    geo: { lat: 16.0672, lng: 108.2438 },
    checkIn: '14:00',
    checkOut: '12:00',
    rating: { value: '4.8', count: 186 },
    mapEmbed:
        'https://www.google.com/maps?q=173+H%E1%BB%93+Nghinh,+An+H%E1%BA%A3i,+%C4%90%C3%A0+N%E1%BA%B5ng&output=embed',
    mapLink: 'https://maps.google.com/?q=173+Hồ+Nghinh+Đà+Nẵng',
    // Ảnh đại diện khi chia sẻ link (Facebook/Zalo). Poster có tên + liên hệ.
    ogImage: '/image/promo-2.png',
    // Mã xác minh Google Search Console (CHỈ token, không kèm tiền tố).
    // Mảng = nhiều property/lần xác minh cùng lúc.
    googleVerification: [
        'gimd594Y_i-887r0snrA55TH9WrUzDAuPShU_i-jM5o',
        'H9XDW5aLLdH-Kf_EjGQrIzKx2GwkmzDMhSC7gWhC19E',
    ],
    social: {
        facebook: 'https://www.facebook.com/senvang173honghinhdanang',
        instagram: 'https://instagram.com',
        tiktok: 'https://tiktok.com',
    },
} as const;
export const callHref = `tel:${site.phone}`;
export const zaloHref = `https://zalo.me/${site.zalo}`;

export const navLinks = [
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Phòng nghỉ', href: '#rooms' },
    { label: 'Tiện ích', href: '#amenities' },
    { label: 'Hình ảnh', href: '#gallery' },
    { label: 'Đánh giá', href: '#reviews' },
    { label: 'Hỏi đáp', href: '#faq' },
    { label: 'Liên hệ', href: '#contact' },
] as const;

export const stats = [
    { value: '12+', label: 'Năm hoạt động' },
    { value: '48', label: 'Phòng nghỉ tiện nghi' },
    { value: '4.8/5', label: 'Điểm đánh giá' },
    { value: '5 phút', label: 'Đi bộ ra biển' },
] as const;

export type Room = {
    name: string;
    price: string;
    size: string;
    image: string;
    amenities: string[];
};

export const rooms: Room[] = [
    {
        name: 'Phòng Standard',
        price: 'Từ 300.000đ / đêm',
        size: '20 m²',
        image: '/image/room-standard.png',
        amenities: [
            '1 giường đôi',
            'Máy lạnh',
            'Wifi miễn phí',
            'TV màn hình phẳng',
        ],
    },
    {
        name: 'Phòng Deluxe',
        price: 'Từ 550.000đ / đêm',
        size: '28 m²',
        image: '/image/room-deluxe.png',
        amenities: ['Giường đôi rộng', 'View thành phố', 'Minibar', 'Bàn làm việc'],
    },
    {
        name: 'Phòng Suite',
        price: 'Từ 950.000đ / đêm',
        size: '42 m²',
        image: '/image/room-suite.png',
        amenities: [
            'Không gian rộng rãi',
            'View thành phố',
            'Bàn làm việc',
            'Tiện nghi cao cấp',
        ],
    },
    {
        name: 'Phòng Family',
        price: 'Từ 750.000đ / đêm',
        size: '36 m²',
        image: '/image/room-family.png',
        amenities: [
            '2 giường đôi',
            'Phù hợp 4 người',
            'Máy lạnh',
            'Tranh trang trí',
        ],
    },
];

export type Amenity = { title: string; desc: string; icon: string };

export const amenities: Amenity[] = [
    {
        title: 'Hồ bơi',
        desc: 'Hồ bơi vô cực tầng thượng view biển',
        icon: 'pool',
    },
    {
        title: 'Nhà hàng',
        desc: 'Ẩm thực Việt & Á - Âu mỗi ngày',
        icon: 'restaurant',
    },
    { title: 'Cafe', desc: 'Quầy cafe & lounge thư giãn', icon: 'cafe' },
    { title: 'Spa', desc: 'Trị liệu thư giãn chuyên nghiệp', icon: 'spa' },
    { title: 'Gym', desc: 'Phòng tập hiện đại 24/7', icon: 'gym' },
    { title: 'Wifi', desc: 'Internet tốc độ cao toàn khu', icon: 'wifi' },
];

export const gallery = [
    '/image/exterior-night.png',
    '/image/lobby.png',
    '/image/room-deluxe.png',
    '/image/room-spacious.png',
    '/image/room-twin-beach.png',
    '/image/room-suite.png',
    '/image/room-standard.png',
    '/image/room-family.png',
] as const;

export const reasons = [
    {
        title: 'Vị trí trung tâm',
        desc: 'Ngay trung tâm Đà Nẵng, cách biển Mỹ Khê vài phút đi bộ, gần các điểm vui chơi & ẩm thực.',
        icon: 'location',
    },
    {
        title: 'Giá hợp lý',
        desc: 'Phòng nghỉ chất lượng chỉ từ 300.000đ/đêm — lựa chọn lý tưởng cho mọi du khách.',
        icon: 'price',
    },
    {
        title: 'Phòng sạch đẹp',
        desc: 'Phòng được dọn dẹp kỹ lưỡng mỗi ngày, trang bị đầy đủ tiện nghi hiện đại.',
        icon: 'clean',
    },
    {
        title: 'Hỗ trợ 24/7',
        desc: 'Đội ngũ lễ tân thân thiện, hỗ trợ Quý khách bất cứ lúc nào trong ngày.',
        icon: 'support',
    },
] as const;

export const reviews = [
    {
        name: 'Nguyễn Minh Anh',
        location: 'Hà Nội',
        rating: 5,
        text: 'Phòng sạch sẽ, nhân viên nhiệt tình. Vị trí cực kỳ thuận tiện, đi bộ ra biển chỉ vài phút. Sẽ quay lại!',
    },
    {
        name: 'Trần Quốc Bảo',
        location: 'TP. Hồ Chí Minh',
        rating: 5,
        text: 'Giá hợp lý mà chất lượng vượt mong đợi. Có bãi đậu xe riêng rất tiện cho gia đình mình đi du lịch.',
    },
    {
        name: 'Lê Thị Hương',
        location: 'Cần Thơ',
        rating: 5,
        text: 'Không gian ấm cúng, yên tĩnh. Buổi sáng cafe view đẹp. Đặt phòng qua hotline được tư vấn rất chu đáo.',
    },
] as const;

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
    {
        q: 'Khách sạn Sen Vàng Đà Nẵng nằm ở đâu?',
        a: 'Khách sạn toạ lạc tại 173 Hồ Nghinh, phường An Hải, thành phố Đà Nẵng — ngay trung tâm, chỉ cách biển Mỹ Khê vài phút đi bộ và gần nhiều điểm vui chơi, ẩm thực.',
    },
    {
        q: 'Giá phòng tại khách sạn Sen Vàng bao nhiêu?',
        a: 'Giá phòng chỉ từ 300.000đ/đêm cho phòng Standard. Các hạng Deluxe, Suite và Family có mức giá khác nhau. Vui lòng gọi hotline 0236 394 3966 hoặc nhắn Zalo để nhận báo giá và ưu đãi tốt nhất.',
    },
    {
        q: 'Khách sạn có chỗ đậu xe không?',
        a: 'Có. Khách sạn có bãi đậu xe riêng an toàn và thuận tiện cho cả ô tô và xe máy của Quý khách.',
    },
    {
        q: 'Giờ nhận phòng và trả phòng là khi nào?',
        a: 'Giờ nhận phòng từ 14:00 và trả phòng trước 12:00. Quý khách có thể liên hệ trước để được hỗ trợ nhận/trả phòng linh hoạt theo lịch trình.',
    },
    {
        q: 'Khách sạn có gần biển không?',
        a: 'Rất gần. Từ khách sạn chỉ mất vài phút đi bộ là ra tới bãi biển Mỹ Khê — một trong những bãi biển đẹp nhất Đà Nẵng.',
    },
    {
        q: 'Làm sao để đặt phòng tại khách sạn Sen Vàng?',
        a: 'Quý khách đặt phòng trực tiếp qua hotline 0236 394 3966 hoặc nhắn tin Zalo để được tư vấn nhanh nhất và nhận giá ưu đãi.',
    },
];
