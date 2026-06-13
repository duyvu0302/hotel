# Khách Sạn Sen Vàng — Website giới thiệu

Website giới thiệu khách sạn cao cấp (UI tĩnh), phong cách Luxury Resort, tông **Trắng + Gold**.
Không có backend, không database, không booking online — mọi CTA dẫn tới **hotline** hoặc **Zalo**.

## Công nghệ
- **Next.js 15** (App Router, prerender tĩnh hoàn toàn)
- **TypeScript**
- **TailwindCSS 3**
- Ảnh tối ưu qua `next/image` (nguồn Unsplash)

## Chạy dự án
```bash
npm install      # đã chạy
npm run dev      # phát triển: http://localhost:3000
npm run build    # build production
npm run start    # chạy bản production
```

## ✏️ Tùy chỉnh nội dung — chỉ 1 file
Toàn bộ thương hiệu, số điện thoại, Zalo, email, địa chỉ, danh sách phòng, tiện ích,
đánh giá... đều nằm trong **một file duy nhất**:

> `src/lib/site-config.ts`

Sửa giá trị ở đây là cập nhật toàn bộ website. Vài mục cần lưu ý:
- `phone` / `zalo`: hiện dùng chung số hotline `02363943966`. Nếu có **số Zalo di động riêng**, đổi giá trị `zalo`.
- `mapEmbed` / `mapLink`: link Google Maps theo địa chỉ thật.
- `rooms`, `gallery`: đổi ảnh bằng URL ảnh thật của khách sạn (hoặc bỏ vào `/public` rồi trỏ đường dẫn local).

## Cấu trúc
```
src/
├── app/
│   ├── layout.tsx        # SEO metadata, fonts, JSON-LD (schema Hotel)
│   ├── page.tsx          # ghép các section
│   ├── globals.css       # design tokens + tiện ích nút/heading
│   ├── sitemap.ts        # sitemap.xml
│   └── robots.ts         # robots.txt
├── components/
│   ├── header.tsx        # sticky header + menu mobile
│   ├── footer.tsx
│   ├── floating-contact.tsx  # nút Gọi + Zalo nổi (mobile)
│   ├── reveal.tsx        # hiệu ứng scroll reveal (nhẹ)
│   ├── icons.tsx         # SVG icon
│   └── sections/         # hero, about, rooms, amenities, gallery,
│                         #   why-us, reviews, cta, contact
└── lib/site-config.ts    # ⭐ nguồn nội dung duy nhất
```

## Đặc điểm
- Responsive hoàn toàn (mobile-first), sticky header, nút Gọi/Zalo nổi trên mobile.
- Hiệu năng: prerender tĩnh, font `display: swap`, ảnh AVIF/WebP, animation tiết chế + tôn trọng `prefers-reduced-motion`.
- Typography sang trọng (Playfair Display + Be Vietnam Pro — hỗ trợ tiếng Việt tốt), card bo góc lớn, shadow nhẹ.

## ✅ SEO Checklist (đã có)
| Hạng mục | Trạng thái | File |
|---|---|---|
| Title + meta description | ✅ | `app/layout.tsx` |
| Keywords (Đà Nẵng, gần biển...) | ✅ | `app/layout.tsx` |
| Open Graph + Twitter Card + ảnh OG | ✅ | `app/layout.tsx` + `site.ogImage` |
| Canonical URL | ✅ | `app/layout.tsx` |
| `lang="vi"` | ✅ | `app/layout.tsx` |
| sitemap.xml | ✅ | `app/sitemap.ts` |
| robots.txt | ✅ | `app/robots.ts` |
| Hotel schema (JSON-LD) | ✅ | `lib/structured-data.ts` |
| LocalBusiness schema (geo, giờ, rating) | ✅ | `lib/structured-data.ts` |
| FAQPage schema | ✅ | `lib/structured-data.ts` + `sections/faq.tsx` |
| AggregateRating (rich snippet sao) | ✅ | `lib/structured-data.ts` |
| Nội dung tối ưu từ khoá | ✅ | hero, about, FAQ |
| Heading có cấu trúc (1×h1, h2...) | ✅ | các section |
| Alt text cho ảnh | ✅ | tất cả `<Image>` |

## 🔎 Cần làm thêm để lên Google
1. **Deploy có domain thật** (vd Vercel). Sửa `site.url` trong `src/lib/site-config.ts` thành domain thật → sitemap/canonical/OG mới đúng.
2. **Google Search Console** (https://search.google.com/search-console):
   - Thêm property bằng domain thật → lấy mã xác minh (thẻ HTML `content="..."`).
   - Dán mã vào `site.googleVerification` trong `site-config.ts`, deploy lại.
   - Submit sitemap: `https://your-domain/sitemap.xml`.
   - Dùng "URL Inspection" → "Request indexing" cho trang chủ.
3. **Google Business Profile** (https://business.google.com): tạo hồ sơ doanh nghiệp khách sạn → xuất hiện trên Google Maps & local search (cực quan trọng cho khách sạn).
4. **Kiểm tra rich results**: https://search.google.com/test/rich-results — dán URL để xác nhận Hotel + FAQ schema hợp lệ.
5. **Backlink & nhất quán NAP** (Name-Address-Phone): khai báo cùng tên/địa chỉ/SĐT trên Facebook, các trang OTA, danh bạ du lịch Đà Nẵng.
6. **Thay ảnh thật + `site.ogImage`** bằng ảnh khách sạn để tăng tin cậy và CTR khi chia sẻ.
