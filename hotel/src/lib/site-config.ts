/**
 * Language-agnostic brand constants. All localized content lives in src/lib/i18n/.
 */

export const site = {
    name: 'Khách Sạn Sen Vàng',
    shortName: 'Sen Vàng',
    url: 'https://senvanghotel.vercel.app',
    phone: '02363943966',
    phoneDisplay: '0236 394 3966',
    zalo: '02363943966',
    email: 'senvangdanang@gmail.com',
    address: '173 Hồ Nghinh, Phường An Hải, Thành Phố Đà Nẵng',
    city: 'Đà Nẵng',
    postalCode: '550000',
    geo: { lat: 16.0672, lng: 108.2438 },
    checkIn: '14:00',
    checkOut: '12:00',
    rating: { value: '4.8', count: 186 },
    mapEmbed:
        'https://www.google.com/maps?q=173+H%E1%BB%93+Nghinh,+An+H%E1%BA%A3i,+%C4%90%C3%A0+N%E1%BA%B5ng&output=embed',
    mapLink: 'https://maps.google.com/?q=173+Hồ+Nghinh+Đà+Nẵng',
    ogImage: '/image/promo-2.png',
    gaId: 'G-SD6N9CV1SH',
    googleVerification: [
        'gimd594Y_i-887r0snrA55TH9WrUzDAuPShU_i-jM5o',
        'H9XDW5aLLdH-Kf_EjGQrIzKx2GwkmzDMhSC7gWhC19E',
    ],
    social: {
        facebook: 'https://www.facebook.com/senvang173honghinhdanang',
        instagram: 'https://instagram.com',
        tiktok: 'https://tiktok.com',
    },
    priceFrom: '300.000đ',
} as const;

export const callHref = `tel:${site.phone}`;
export const zaloHref = `https://zalo.me/${site.zalo}`;

// gallery is language-agnostic (image paths only)
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
