# Merhaba!

> - - -
> ℹ️ Bu doküman, kodlayacağın örnek çalışma için bir dizi yardımcı bilgi içeriyor.
> - - -

| Kaynak       | URL                                                             |
| :----------- | :-------------------------------------------------------------- |
| GitHub       | https://github.com/xkema/case-study-a-gpt-integration-problem/  |
| GitHub Pages | https://xkema.github.io/case-study-a-gpt-integration-problem/   |
| GPT          | https://developers.google.com/publisher-tag/guides/get-started/ |

## Proje ve Örnek Çalışma Hakkında Genel Bilgiler

GitHub Pages adresindeki kurulum, projeyi bilgisayarına kurmadan da inceleyebilmen için hazırlandı. "*Bir Github Pages kurulumu yapmak*" ya da "*Bir web sitesi tasarlamak*" hazırlayacağın örnek çalışmanın bir parçası değil.

Bu örnek çalışma, Google Publisher Tag (**GPT**) kütüphanesinin bir web sitesine eklenebilmesi için bir teknik problemi yanıtlamanı bekliyor.

## Display Reklamlar

"**Dijital Reklamcılık**", pazarlama ve reklamcılık etkinliklerinin internet aracılığıyla yapıldığı alanı tanımlayan bir kavram. "**Display Reklamcılık**" da bunun alt alanlarından bir tanesi ve kullanıcılara interaktif reklamların gösterilmesi ile ilgileniyor. Interaktif reklamlar (**Creative**) yaygın olarak, web front-end teknolojileri kullanılarak geliştiriliyor. Creative'lerin internet kullanıcılarına ulaştırılması ve ölçüm için bunlarla ilgili kayıtların tutulması süreçleri ise genellikle JavaScript kütüphaneleri ile yönetiliyor.

Bir dizi firma display reklam gösterimi için kütüphaneler sağlıyor. En yaygın kullanılan kütüphanelerden bir tanesi ise Google'ın sağladığı Google Publisher Tag (**GPT**) kütüphanesi.

**GPT**, web sitelerinde reklam alanlarının yaratılmasını ve bunların gösterilmesini sağlayan bir JavaScript kütüphanesi. Kapalı kaynak kodlu bir Google ürünü. Birçok yayıncı bu kütüphaneyi sitelerine ekleyerek Google Display Reklam Ağı'na dâhil oluyor ve sitelerinde display reklamlar göstererek gelir elde ediyor.

Reklam etkileşimi, en büyük tabloda, bir yayıncı sitesiyle internet kullanıcısı arasında ikili etkileşim gibi görünse de bu iki taraf arasında dev bir altyapı sürekli çalışıyor. Bunun içinde; reklam borsaları, veri işleme platformları, harici reklam ağları, ... gibi sayısız bileşen var.

## Display Reklamların Web Sitelerine Eklenmesi

Web sitelerine display reklam ekleme süreci, reklam network sağlacısı tarafından verilen bir script'in siteye eklenmesi ve sayfada gösterilmek istenen reklamların tanımlanması/gösterilmesi gibi hayli basit bir teknik süreçten oluşuyor. Küçük ölçekli yayıncılar için bu süreç, genelde elle, sitenin her bir layout'una reklam kodu yazılarak kolayca tamamlanabiliyor. Büyük ölçekli yayıncılar ve bir network'e sahip olan yayıncılar içinse durum biraz daha karmaşık. Tüm network sitelerinde aynı satış ve operasyon alışkanlıklarını sürdürmek istedikleri için, genelleştirilmiş ve merkezi bir çözüm arayışına gidiyorlar. Aynı zamanda farklı 3rd-party ürünleri de sistemlerine bağlamak ve bu yolla gelirlerini artırmak ve reklam yayınlama seçeneklerini farklılaştırmak istiyorlar. Bu da hem reklam süreçlerini yöneten teknik ekibin hem de yönettikleri ürünün, sitelerin ana geliştirici takımından ayrılmasını gerektiriyor.

Bunu yapmanın en hızlı ve kolay yolu da, reklam ürününü kapsayan yeni bir kütüphane yazıp, bu kütüphaneyi kendi sitelerine ayrı bir 3rd-party ürün olarak entegre etmek. Bu davranış biçimi satış ve operasyon tarafından bakılınca bir dizi problemi çok başarılı bir biçimde çözse de teknik açıdan üzerine düşünülmesi gereken birçok yeni gündem yaratıyor. Sonuç olarak, büyük yayıncıların reklam network sağlacısının önerdiği yöntem yerine, alternatif bir kurulumla ilerlemesi gerekiyor.

### Önerilen GPT Kurulumu

GPT'nin bir websitesine eklenmesi için Google'ın önerdiği yöntem https://developers.google.com/publisher-tag/guides/get-started adresinde detaylıca anlatılıyor. Özetlersek, şu adımları izlemek gerekiyor:

1. GPT kütüphanesini (`gpt.js`) HTML sayfanın `<head>` kısmına `async` olarak ekle.
2. Sayfanın -*yine `<head>` kısmında*- sayfada göstermek istediğin reklam alanlarını tanımla ve tanımladıktan sonra kullanacağın servisleri etkinleştir.
3. Sayfanın `<body>` kısmında reklam göstermek istediğin yerlerde, üstte tanımladığın reklam alanlarını göster.

Bu üç madde, Google'ın reklam gösterimiyle ilgili temel yaklaşımı hakkında bir fikir de veriyor:

- Reklam script'ini yüklerken HTML parser'a engel olma. (*`async` davranış*)
- Reklam servislerinin konfigurasyonuna ve nasıl davranacağına içerik yüklenmeden önce karar ver.
- Reklamları HTML render edildikçe (*yani içerik yüklendikçe*) kullanıcıya göster. Aynı zamanda bunu yaparken HTML parser'a engel olma.

Daha da kısa özetle, Google, reklam entegrasyonu için tüm yönleriyle asenkron çalışan bir yapı öneriyor.

### Alternatif GPT Kurulumu

Bu kurulum, gelişmiş ülkeler için çalışan bir yöntem olsa da, Türkiye'deki yayıncılar, *-üstteki kaygıları da göz önünde bulundurarak-* daha farklı bir çözüm arayışına girmişler. Bir dizi teknik ve operasyonel kısıt, bu kütüphaneleyi üstteki yöntem yerine harici bir 3rd-party ürün olarak tanımlamayı ve sitelere eklemeyi gerektirmiş.

Bu da `<head>` ve `<body>` alanlarına inline kod blokları eklemek yerine, tüm script'i bir JavaScript paketi içinde toplamayı gerektirmiş. Aynı zamanda diğer 3rd-party ürünleri de yine bu GPT'yi kapsayan kütüphane üzerinden yönetmek gibi bir gündem oluşmuş.

İşte bu örnek çalışmadan beklenen, GPT'yi kapsayan bu JavaScript paketini bir module bundler ve transpiler kullanarak hazırlamak.
