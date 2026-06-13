# 📈 Hướng dẫn SEO & đưa website lên Google

> Website: **https://senvanghotel.vercel.app**
> Khách sạn: **Sen Vàng Đà Nẵng** — 173 Hồ Nghinh, An Hải, Đà Nẵng
> Tài liệu này hướng dẫn **từng bước bấm chuột**, làm theo thứ tự từ trên xuống.

---

## ✅ Phần A — Code đã làm sẵn (KHÔNG cần làm gì)

Những thứ này đã có trong website, bạn **không cần** thao tác:

- [x] Mã xác minh Google đã gắn vào web (`gimd594Y_i...`)
- [x] `sitemap.xml` — https://senvanghotel.vercel.app/sitemap.xml
- [x] `robots.txt` — https://senvanghotel.vercel.app/robots.txt
- [x] Hotel schema + LocalBusiness schema (geo, giờ, đánh giá sao)
- [x] FAQ schema (6 câu hỏi → hiện dạng câu hỏi mở rộng trên Google)
- [x] Title, mô tả, từ khoá, Open Graph, ảnh chia sẻ
- [x] Nội dung chuẩn SEO (gần biển, trung tâm Đà Nẵng, Hồ Nghinh...)

👉 Việc của bạn là **đăng ký với Google** để Google biết và index website. Làm theo Phần B.

---

## 🚀 Phần B — Các bước bạn cần làm

### BƯỚC 1 — Đăng ký Google Search Console (10 phút) ⭐ Quan trọng nhất

Đây là công cụ để Google "nhìn thấy" website.

1. Vào: **https://search.google.com/search-console**
2. Đăng nhập bằng Gmail **senvangdanang@gmail.com**.
3. Bấm **"Thêm sản phẩm"** (Add property) → chọn ô bên phải **"Tiền tố URL" (URL prefix)**.
4. Dán đúng địa chỉ này vào: `https://senvanghotel.vercel.app`
5. Bấm **TIẾP TỤC**.
6. Ở phần xác minh, chọn phương thức **"Thẻ HTML" (HTML tag)**.
   - ✅ Vì mã xác minh đã được gắn sẵn trong web rồi, bạn **chỉ cần bấm nút "XÁC MINH" (VERIFY)**.
   - Nếu báo lỗi "chưa tìm thấy thẻ": đợi 2–3 phút rồi bấm lại (Vercel cần thời gian cập nhật).
7. Khi hiện ✅ "Đã xác minh quyền sở hữu" → xong bước 1.

> 💡 Nếu vẫn lỗi: kiểm tra website đã deploy bản mới nhất chưa (xem Bước 0 cuối tài liệu).

---

### BƯỚC 2 — Khai báo sitemap (2 phút)

Giúp Google biết website có những trang nào.

1. Trong Search Console, nhìn menu trái → bấm **"Sơ đồ trang web" (Sitemaps)**.
2. Ở ô "Thêm sơ đồ trang web mới", nhập: `sitemap.xml`
3. Bấm **GỬI (SUBMIT)**.
4. Đợi vài phút → trạng thái chuyển thành **"Thành công" (Success)**.

---

### BƯỚC 3 — Yêu cầu Google index ngay (3 phút)

Thay vì chờ Google tự tìm (có thể mất nhiều ngày), ta yêu cầu index ngay.

1. Trong Search Console, bấm vào ô tìm kiếm trên cùng (URL Inspection / Kiểm tra URL).
2. Dán: `https://senvanghotel.vercel.app`
3. Enter → đợi Google kiểm tra.
4. Bấm **"Yêu cầu lập chỉ mục" (Request Indexing)**.
5. Đợi 1–2 phút đến khi báo "Đã thêm vào hàng đợi".

> ⏳ Sau bước này, thường **1–7 ngày** website sẽ xuất hiện trên Google. Tìm thử bằng cách gõ: `site:senvanghotel.vercel.app` trên Google.

---

### BƯỚC 4 — Tạo Google Business Profile (15 phút) ⭐⭐ CỰC KỲ quan trọng cho khách sạn

Đây là thứ giúp khách sạn hiện trên **Google Maps** và khi khách search "khách sạn gần biển Đà Nẵng". Quan trọng hơn cả website với ngành khách sạn.

1. Vào: **https://business.google.com**
2. Đăng nhập bằng Gmail **senvangdanang@gmail.com**.
3. Bấm **"Quản lý ngay" (Manage now)** → nhập tên: **Khách Sạn Sen Vàng**.
4. Chọn loại hình: **Khách sạn (Hotel)**.
5. Nhập địa chỉ chính xác: **173 Hồ Nghinh, An Hải, Đà Nẵng** → ghim đúng vị trí trên bản đồ.
6. Nhập số điện thoại: **0236 394 3966** và website: `https://senvanghotel.vercel.app`
7. **Xác minh doanh nghiệp**: Google sẽ gửi mã qua bưu thiếp / điện thoại / email. Làm theo hướng dẫn (thường nhận bưu thiếp về địa chỉ trong vài ngày).
8. Sau khi xác minh → **đăng ít nhất 10 ảnh đẹp** (mặt tiền, lễ tân, các loại phòng, tiện ích), điền giờ hoạt động, mô tả.

> 📌 NAP phải **giống hệt** trên website: Tên = Khách Sạn Sen Vàng, Địa chỉ = 173 Hồ Nghinh An Hải Đà Nẵng, SĐT = 0236 394 3966.

---

### BƯỚC 5 — Kiểm tra dữ liệu có cấu trúc (5 phút)

Đảm bảo Google đọc đúng schema (sao đánh giá, FAQ).

1. Vào: **https://search.google.com/test/rich-results**
2. Dán: `https://senvanghotel.vercel.app`
3. Bấm **KIỂM TRA URL**.
4. Kết quả cần thấy: ✅ **Hotel/Local business**, ✅ **FAQ** (Câu hỏi thường gặp). Không có lỗi đỏ.

---

### BƯỚC 6 — Đăng ký Bing (tùy chọn, 5 phút)

Bing + Cốc Cốc cũng mang khách. Rất nhanh nếu đã có Search Console.

1. Vào: **https://www.bing.com/webmasters**
2. Đăng nhập → chọn **"Import từ Google Search Console"** → cấp quyền → xong tự động.

---

## 📣 Phần C — Tăng thứ hạng (làm dần, không gấp)

Làm xong A + B là website đã LÊN Google. Phần này để **xếp hạng cao hơn**:

- [ ] **Nhất quán NAP** trên mọi nơi: Facebook, Instagram, Booking.com, Agoda, Traveloka, Foody, các trang danh bạ du lịch Đà Nẵng — cùng 1 tên/địa chỉ/SĐT.
- [ ] **Tạo Fanpage Facebook** + link về website (sửa link thật trong `src/lib/site-config.ts` mục `social`).
- [ ] **Khuyến khích khách để lại đánh giá** trên Google Business Profile (đánh giá thật càng nhiều, càng lên top local).
- [ ] **Đăng bài/ảnh đều đặn** trên Google Business Profile (Google ưu tiên hồ sơ hoạt động).
- [ ] **Backlink**: nhờ các blog du lịch, đối tác đặt link về website.
- [ ] **Thay ảnh thật** của khách sạn vào website (hiện đang dùng ảnh mẫu) — xem `src/lib/site-config.ts`.

---

## 🌐 Phần D — Khuyến nghị: mua tên miền riêng

`senvanghotel.vercel.app` chạy tốt nhưng tên miền riêng (vd `senvanghotel.com` / `.vn`) sẽ:
- Chuyên nghiệp & dễ nhớ hơn → khách tin tưởng hơn.
- SEO tốt hơn về lâu dài.

**Nếu mua tên miền mới sau này**, chỉ cần:
1. Trỏ tên miền về Vercel (Vercel → Project → Settings → Domains).
2. Sửa 1 dòng trong `src/lib/site-config.ts`: `url: "https://tenmienmoi.com"`.
3. Deploy lại → làm lại Bước 1–3 với property tên miền mới.

---

## ⏱️ Khi nào thấy kết quả?

| Mốc thời gian | Kỳ vọng |
|---|---|
| Ngay sau Bước 1–3 | Google biết website tồn tại |
| 1–7 ngày | Website xuất hiện khi search `site:senvanghotel.vercel.app` |
| 1–4 tuần | Hiện khi search tên "khách sạn Sen Vàng Đà Nẵng" |
| 1–3 tháng | Có thể lên với từ khoá cạnh tranh ("khách sạn gần biển Đà Nẵng") nếu làm tốt Phần C |
| Google Business | Hiện trên Maps sau khi xác minh (vài ngày) |

---

## 🔧 BƯỚC 0 — Lưu ý: deploy lại bản mới nhất TRƯỚC khi làm Bước 1

Mình vừa cập nhật mã xác minh + URL vào code. Bạn cần **deploy lại** để Vercel có bản mới:

- Nếu Vercel tự động deploy khi push GitHub → chỉ cần push code mới lên.
- Hoặc trong Vercel Dashboard → Project → **Redeploy**.

Kiểm tra đã cập nhật chưa: mở https://senvanghotel.vercel.app → chuột phải → "Xem nguồn trang" (View source) → tìm chữ `google-site-verification`. Nếu thấy mã `gimd594Y...` là OK, qua Bước 1.

---

### 📞 Thông tin tham chiếu nhanh
- Website: https://senvanghotel.vercel.app
- Sitemap: https://senvanghotel.vercel.app/sitemap.xml
- Email Google: senvangdanang@gmail.com
- Hotline: 0236 394 3966
- Địa chỉ: 173 Hồ Nghinh, An Hải, Đà Nẵng
