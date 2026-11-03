# Sprint 6 ve Vize — Kampüs Etkinlikleri

Duygu Sezer — 2416501052

Sprint 5 projesi React Router, EventsContext ve doğrulanan formlarla tamamlandı.

## Canlı yayın

Vercel yayın adresi: Ekip erişim onayı bekleniyor. Yayın doğrulandıktan sonra buraya eklenecek.

## Kurulum

Node.js 22.12+ (test ortamı: Node.js 24).

```sh
cd frontend
npm install
npm run dev
```

```sh
npm run build
npm run lint -- src
npm run preview
```

## Route listesi

| Adres              | Sayfa              |
| ------------------ | ------------------ |
| `/`                | HomePage           |
| `/events`          | EventsPage         |
| `/events/:id`      | EventDetailPage    |
| `/login`           | LoginPage          |
| `/register`        | RegisterPage       |
| `/forgot-password` | ForgotPasswordPage |
| `/admin`           | AdminPage          |
| `/admin/new`       | AddEventPage       |
| `/admin/:id/edit`  | EditEventPage      |
| `*`                | NotFoundPage       |

Geçersiz etkinlik kimlikleri de Sayfa bulunamadı ekranını açar.
Menüler NavLink, sayfa içi geçişler Link, kayıttan sonra yönlendirme useNavigate kullanır.

## Davranış

- EventsProvider, BrowserRouter altında bütün sayfaları sarar. events, addEvent, updateEvent ve deleteEvent useEvents ile paylaşılır.
- Ekleme, güncelleme ve silme yeni diziler üretir. Silme onay penceresinden iptal edilebilir. Değişiklikler Ana Sayfa, Etkinlikler, detay ve yönetimde görünür.
- Veriler yalnızca bellektedir. Sayfa yenilenince başlangıç verileri geri gelir; bu sprintte backend veya localStorage yoktur.
- Ana sayfa tarih sırasındaki ilk iki etkinliği gösterir. Sprint 5 verileri korunmuştur.
- Arama başlık ve açıklamada Türkçe harf kurallarıyla çalışır; kategoriyle birlikte uygulanır. Filtre state’i EventsPage içindedir.
- EventDetailPage kimliği bulur; EventDetail yalnızca kendisine verilen etkinliği çizer.
- Ekleme ve düzenleme aynı kontrollü EventForm bileşenini kullanır. Düzenleme alanları dolu açılır. Form tek data nesnesi ve ortak handleChange kullanır.
- Etkinlik doğrulaması: ad en az 3 karakter, kategori seçimi, tarih/saat/yer zorunlu, kontenjan 1–1000 arası tam sayı, açıklama en az 10 karakter. Hatalar alan altında ve aria-invalid ile gösterilir.
- Giriş: e-postada @, şifrede en az 6 karakter. Kayıt: ek olarak en az 3 karakter ad soyad ve eşleşen şifre tekrarı. Şifremi unuttum: e-postada @.
- Giriş, kayıt ve şifre yenileme demodur; hiçbir kimlik bilgisi gönderilmez veya saklanmaz. Yönetim giriş gerektirmez.
- Yönetim masaüstünde tablo, 699 px ve altında karttır. Mevcut Sprint 5 renkleri korunmuştur.

## Klasör yapısı

```text
frontend/src/
  components/
    layout/  Header Navigation Footer
    events/  EventCard EventList EventFilter EventDetail
    forms/   EventForm AuthField
  context/   EventsContext.tsx
  pages/     10 rota sayfası
  data/      events.ts
  types/     campus-event.ts
  utils/     filter-events.ts format-date.ts validate-event.ts
  App.tsx App.css index.css main.tsx
```

App yalnızca ortak yerleşim ve Routes içerir; eski page state’i, go() ve types/page.ts kaldırıldı.

## Vercel ayarları

- Root Directory: `frontend`
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Hedef proje/adres adı: `duygusezer-frontend`
- `frontend/vercel.json` doğrudan adres açma ve yenileme için SPA rewrite içerir.

## Doğrulama

- `npm run build`: başarılı.
- `npm run lint -- src`: hata yok; sunumdaki gibi aynı dosyadan Provider ve useEvents dışa aktarıldığı için Fast Refresh geliştirme uyarısı olabilir.
- Chromium ile: arama/kategori birleşimi, yedi boş etkinlik hatası, tam sayı kontenjanı, ekle/düzenle/sil, silmeyi iptal, diğer sayfalarda güncelleme, giriş/kayıt/şifre yenileme doğrulamaları ve başarı mesajları kontrol edildi.
- Geçersiz rota ve etkinlik kimlikleri, detay adresini doğrudan açma/yenileme kontrol edildi.
- 360, 390 ve 1280 px genişliklerde yönetim, ekleme, giriş, kayıt, etkinlik listesi ve detayda yatay taşma kontrol edildi. Tarayıcı çalışma zamanı hatası yok.

## Teslim

Son commit mesajı: `Complete sprint 6 and midterm frontend`.
Teslim etiketi: `frontend`. GitHub ve Vercel yayını tamamlanınca 13 maddelik teslim listesi tamamlanır.
