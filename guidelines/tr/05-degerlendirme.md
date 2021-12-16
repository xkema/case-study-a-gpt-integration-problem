# Değerlendirme

> - - -
> ℹ️ Bu doküman değerlendirmenin nasıl yapılacağına dair bilgileri içeriyor.
> - - -

Değerlendirme geleneksel bir "**notlama**" yaklaşımıyla değil bir "**eşleşme**" yaklaşımıyla yapılıyor. Örnek çalışma değerlendirmesi ve görüşme soruları da proje yapısı ile geliştirici arasındaki benzerlikleri/farkları ortaya çıkartmak peşinde. Özetle yetenek ölçme gibi bir amaç ve iddiası yok.

Geliştiriciden beklentimiz, alttaki ölçekteki `B1`-`B2` aralığında bir eşleşme sağlaması. Bunu ölçerken; hem örnek çalışmanın teknik incelemesinden yaptığımız çıkarımları, hem "Genel Sorular"'ı ne kadar yanıtlayabildiğini, hem de görüşme sırasında sorulan sorulara verilen yanıtları değerlendiriyoruz.

`B1`-`B2` eşleşme aralığında iki tip geliştirci eğilimi tanımladık. Her ikisi de özdeş düzeyler. "**Çözüm Odaklı**" geliştircileri daha çok kod yazmaya odaklanan, domain (*reklam*) problemlerine hâkim olmadan da teknik istekleri yerine getirebilen geliştiriciler olarak tanımlıyoruz. "**Problem Odaklı**" geliştiricileri ise teknik çözümden çok domain'i ve bağlı bileşenleri anlamaya odaklanan geliştiriciler olarak tanımlıyoruz. Bu eğilimde çözümden çok; akıl yürütme, eleştirel düşünme, iletişim, araştırma, veri analizi, ... gibi konularda hâkimiyet bekliyoruz.

Örnek çalışmayı değerlendirirken, çözüm odaklı olduğunu düşündüğümüz geliştiricilerden; yazdığı koda çok hâkim olmasını, çok az kod ve kurulum hatası yapmasını, ... bekliyoruz. Problem odaklı olduğunu düşündüğümüz geliştiricilerden ise; örnek çalışmadaki probleme dair genel çerçeveyi çok iyi anlamasını, ölçek büyüdüğünde karşılaşılabilecek problemleri öngörebilmesini, ... bekliyoruz. 

![grading-info-tr.png](../../assets-raw/grading-info-optimized-tr.svg "grading-info-tr")

Daha anlaşılır olmak adına, eşleşme ölçeğinin açıklamaları kısaca şu şekilde:

- `A`: Problemin tanımına göre uygun olan davranış biçimini seçebilen geliştiriciler.
- `B1`-`B2`: Doğal durumda davranış biçimi problem odaklı veya çözüm odaklı olan geliştiriciler.
- `C`: Bu eşleşme ölçeğinin kapsamında olmayan geliştiriciler.

## Genel Sorular

- [ ] Geliştirme araçlarına hakim olma
  - Kurduğu geliştirme ortamını kontrol/test etme eğilimi
- [ ] Neye odaklanıyor?
  - Çözüm
  - Problem
- [ ] Ortak çalışma kültürü
  - Hatalarını kabul edebilme
  - Diğer geliştiricileri düşünerek hareket etme (*basit yönlendirici dokümanlar hazırlama*)
  - Git kullanımı
  - İsimlendirme geleneği kullanımı
- [ ] Anlaşılır olmayı zekice çözümler üretmeye tercih etme
  - Kod içi yorumlar ve otomatik dokümantasyon etiketlerini kullanma
  - Anlaşılır değişken ve fonksiyon isimleri kullanma
  - Anlaşılması zor/hileli kısayollardan kaçınma
- [ ] Soyutlama ve modüler tasarım yeteneği
  - Konfigurasyon'u ana sistemden soyutlama
  - 3rd-party ürünleri ana sistemden soyutlama
- [ ] Kodlama
  - Ölçeklenebilirlik kaygısı
  - Yazılan koda hakimiyet ve yazdığı kodu açıklayabilme
  - Proje çatısının kurma ve dosya organizasyonu
  - Meta bilgi farkındalığı (*açıklama, isimlendirme alanlarını kullanma*)
  - İstenen görevi yapma ve onu ortaya çıkan ürünü doğrulama yeteneği
