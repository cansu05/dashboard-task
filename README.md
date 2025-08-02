Energy Dashboard – Next.js Uygulaması
Bu proje, şirket içi frontend teknik değerlendirme kapsamında geliştirilmiştir. Amaç; enerji tüketim verilerini görselleştiren, kullanıcı dostu ve teknik olarak optimize edilmiş bir dashboard sayfası oluşturmaktır.

****************

Proje Özeti
Geliştirme ortamı: Next.js (App Router)

Grafik kütüphanesi: react-chartjs-2 (Chart.js)

UI bileşenleri: Material UI

Veri yönetimi: Mock veri (state içinde)

Ek gereksinimler:

Yüklenme sırasında Skeleton

Hata durumunda kullanıcı uyarısı

Toplam kWh hesaplama fonksiyonu + Jest testi

Dashboard Görünümü
Sol: “Son Okuma” ve “Bugün Toplam” kartları

Sağ: 24 saatlik elektrik tüketim grafiği

Responsive yapı, sade ve işlevsel tasarım

****************

Kurulum ve Çalıştırma
Geliştirme ortamını başlatmak için:

bash
Kopyala
Düzenle
npm install
npm run dev

****************

🧪 Test
Toplam kWh hesaplama fonksiyonu için Jest ile test yazılmıştır.

****************

Testi çalıştırmak için:

bash
npm run test

****************

Proje Yapısı (Özet)
Klasör / Dosya	Açıklama
app/dashboard/page.jsx	Dashboard sayfa bileşeni
components/InfoCard.jsx	Bilgi kartı bileşeni
components/EnergyChart.jsx	24 saatlik grafik bileşeni
mockData/energyData.js	Sahte enerji verisi
utils/calculateTotalKwh.js	Toplam hesaplama fonksiyonu
utils/calculateTotalKwh.test.js	Fonksiyon testi (Jest)

