Canlı bağlantı: Vercel'de frontend klasörü yayımlandıktan sonra bu satıra eklenmelidir.

# Sprint 4 — Kampüs Etkinlikleri

Duygu Sezer — 2416501052

Sprint 3 tasarımı ve altı etkinlik Vite, TypeScript ve React ile taşındı.
Depodaki mevcut Sprint 3 dosyaları korunur; yeni uygulama frontend/ içindedir.

## Çalıştırma

Node.js 22.12 veya üzeri ile:

    cd frontend
    npm install
    npm run dev
    npm run build
    npm run preview

## Dosyalar

- package.json: Proje komutları ve paket bağımlılıklarını tanımlar.
- package-lock.json: Yüklenen paketlerin tam sürümlerini sabitler.
- node_modules/: Yerel bağımlılıkları barındırır ve Git'e eklenmez.
- tsconfig*.json: Uygulama ve Vite yapılandırmasının TypeScript kurallarını belirler.
- vite.config.ts: React eklentisini ve Vite ayarlarını tanımlar.
- index.html: Türkçe başlığı ve React'in bağlandığı root alanını içerir.
- src/main.tsx: React uygulamasını root alanında başlatır.
- src/App.tsx: Beş sayfayı, state ile gezinmeyi ve ortak kartları içerir.
- src/App.css: Sprint 3 CSS'ini ve React yerleşim uyarlamalarını içerir.
- src/index.css: Sprint gereği boş bırakılmıştır.
- src/types/campus-event.ts: Etkinlik arayüzünü ve dört kategoriyi tanımlar.
- src/data/events.ts: Altı tipli etkinliği ISO tarihleriyle saklar.
- src/utils/filter-events.ts: Türkçe arama, kategori filtresi ve kimlikle bulma işlevlerini içerir.
- public/afis.svg: Kariyer Günleri etkinliğinin afişidir.

## Sprint kapsamı

Ana sayfa tarih sırasındaki ilk iki kaydı gösterir. Liste altı etkinliği içerir.
Arama başlık ve açıklama üzerinde Türkçe büyük/küçük harf kurallarıyla çalışır.
Arama ve kategori birlikte uygulanır. Detayda yalnızca afişi olan kaydın afişi görünür.
Sayfa geçişleri adresi değiştirmez; React Router kullanılmaz.
Ekle ve Güncelle aynı boş formu farklı başlıkla gösterir. Kaydet sayfayı yenilemez.
Bu sprintte form kaydetme, otomatik doldurma ve kalıcı veri yoktur.

Kaynakta afis.svg bulunmadığı için yeni SVG afiş eklenmiştir.
Kaynak event-6 kategorisi Konferans, sprintteki dört kategoriye uymadığı için Söyleşi yapılmıştır.
Etkinlik adı ve diğer bilgiler korunmuştur.

## Vercel

Root Directory: frontend
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist

Yayın adresi doğrulandıktan sonra README'nin ilk satırına eklenmelidir.


## Sprint 5 — React Bileşenleri

Mevcut frontend aynı CSS ve verilerle bileşenlere ayrıldı. App.tsx 70 satırdır; page, selectedId, searchText ve category state'leri App'te kalır.

- layout: Header, Navigation, Footer
- events: EventCard, EventList, EventFilter, EventDetail
- forms: EventForm
- ortak yardımcılar: types/page.ts, utils/format-date.ts

Her props alan bileşenin interface'i ve her bileşen dosyasının default export'u vardır. Kart anahtarı etkinliğin id'sidir. Filtreler kontrollüdür; detay ve form işlemleri callback ile App'e bildirilir. Form gönderimi sayfayı yenilemeden üst konuma kaydırır; kalıcı kayıt Sprint 6 kapsamındadır.

Kontroller: npm run build; npm run lint -- src. Beş sayfanın sunucu tarafında üretilen HTML çıktısı Sprint 4 ile birebir karşılaştırıldı. Tarayıcıda görsel kontrol ve Vercel yayını ayrıca yapılmalıdır.

Çalıştırma: cd frontend, npm ci, npm run dev.

