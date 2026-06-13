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
- SEO: metadata đầy đủ, Open Graph, JSON-LD `Hotel`, sitemap, robots, ngôn ngữ `vi`.
- Hiệu năng: prerender tĩnh, font `display: swap`, ảnh AVIF/WebP, animation tiết chế + tôn trọng `prefers-reduced-motion`.
- Typography sang trọng (Cormorant Garamond + Plus Jakarta Sans), card bo góc lớn, shadow nhẹ.
