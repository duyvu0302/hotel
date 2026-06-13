/**
 * Single source of truth for all hotel branding & content.
 * Replace values here to rebrand the whole site — no need to touch components.
 */

export const site = {
  name: "Khách Sạn Sen Vàng",
  shortName: "Sen Vàng",
  slogan: "Phòng nghỉ gần biển – ngay trung tâm Đà Nẵng",
  description:
    "Khách sạn Sen Vàng Đà Nẵng — không gian nghỉ dưỡng sạch sẽ, tiện nghi, ấm cúng. Tọa lạc tại trung tâm thành phố, cách biển vài phút đi bộ. Giá phòng chỉ từ 300.000đ/đêm.",
  priceFrom: "300.000đ",
  url: "https://senvanghotel.vn",
  // Liên hệ
  phone: "02363943966",
  phoneDisplay: "0236 394 3966",
  // Zalo dùng chung số hotline — đổi sang số di động nếu cần
  zalo: "02363943966",
  email: "contact@senvanghotel.vn",
  address: "173 Hồ Nghinh, Phường An Hải, Thành Phố Đà Nẵng",
  mapEmbed:
    "https://www.google.com/maps?q=173+H%E1%BB%93+Nghinh,+An+H%E1%BA%A3i,+%C4%90%C3%A0+N%E1%BA%B5ng&output=embed",
  mapLink: "https://maps.google.com/?q=173+Hồ+Nghinh+Đà+Nẵng",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
  },
} as const;

export const callHref = `tel:${site.phone}`;
export const zaloHref = `https://zalo.me/${site.zalo}`;

export const navLinks = [
  { label: "Giới thiệu", href: "#about" },
  { label: "Phòng nghỉ", href: "#rooms" },
  { label: "Tiện ích", href: "#amenities" },
  { label: "Hình ảnh", href: "#gallery" },
  { label: "Đánh giá", href: "#reviews" },
  { label: "Liên hệ", href: "#contact" },
] as const;

export const stats = [
  { value: "12+", label: "Năm hoạt động" },
  { value: "48", label: "Phòng nghỉ tiện nghi" },
  { value: "4.8/5", label: "Điểm đánh giá" },
  { value: "5 phút", label: "Đi bộ ra biển" },
] as const;

export type Room = {
  name: string;
  price: string;
  size: string;
  image: string;
  amenities: string[];
};

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

export const rooms: Room[] = [
  {
    name: "Phòng Standard",
    price: "Từ 300.000đ / đêm",
    size: "20 m²",
    image: img("1631049307264-da0ec9d70304"),
    amenities: ["1 giường đôi", "Máy lạnh", "Wifi miễn phí", "TV màn hình phẳng"],
  },
  {
    name: "Phòng Deluxe",
    price: "Từ 550.000đ / đêm",
    size: "28 m²",
    image: img("1611892440504-42a792e24d32"),
    amenities: ["Giường King", "Ban công thành phố", "Minibar", "Bồn tắm"],
  },
  {
    name: "Phòng Suite",
    price: "Từ 950.000đ / đêm",
    size: "42 m²",
    image: img("1582719478250-c89cae4dc85b"),
    amenities: ["Phòng khách riêng", "View biển", "Bồn tắm jacuzzi", "Bàn làm việc"],
  },
  {
    name: "Phòng Family",
    price: "Từ 750.000đ / đêm",
    size: "36 m²",
    image: img("1566665797739-1674de7a421a"),
    amenities: ["2 giường đôi", "Phù hợp 4 người", "Tủ lạnh lớn", "Khu vực ăn uống"],
  },
];

export type Amenity = { title: string; desc: string; icon: string };

export const amenities: Amenity[] = [
  { title: "Hồ bơi", desc: "Hồ bơi vô cực tầng thượng view biển", icon: "pool" },
  { title: "Nhà hàng", desc: "Ẩm thực Việt & Á - Âu mỗi ngày", icon: "restaurant" },
  { title: "Cafe", desc: "Quầy cafe & lounge thư giãn", icon: "cafe" },
  { title: "Spa", desc: "Trị liệu thư giãn chuyên nghiệp", icon: "spa" },
  { title: "Gym", desc: "Phòng tập hiện đại 24/7", icon: "gym" },
  { title: "Wifi", desc: "Internet tốc độ cao toàn khu", icon: "wifi" },
];

export const gallery = [
  img("1566073771259-6a8506099945"),
  img("1582719508461-905c673771fd"),
  img("1571896349842-33c89424de2d"),
  img("1455587734955-081b22074882"),
  img("1551882547-ff40c63fe5fa"),
  img("1540541338287-41700207dee6"),
  img("1564501049412-61c2a3083791"),
  img("1578683010236-d716f9a3f461"),
] as const;

export const reasons = [
  {
    title: "Vị trí trung tâm",
    desc: "Ngay trung tâm Đà Nẵng, cách biển Mỹ Khê vài phút đi bộ, gần các điểm vui chơi & ẩm thực.",
    icon: "location",
  },
  {
    title: "Giá hợp lý",
    desc: "Phòng nghỉ chất lượng chỉ từ 300.000đ/đêm — lựa chọn lý tưởng cho mọi du khách.",
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
] as const;

export const reviews = [
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
] as const;
