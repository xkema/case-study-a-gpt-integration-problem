# Kurulum ve Geliştirme

> - - -
> ℹ️ Bu doküman, örnek çalışma için hazırlanan GitHub repo hakkında bilgi veriyor.
> - - -

| Kaynak       | URL                                                             |
| :----------- | :-------------------------------------------------------------- |
| GitHub       | https://github.com/xkema/case-study-a-gpt-integration-problem/  |
| GitHub Pages | https://xkema.github.io/case-study-a-gpt-integration-problem/   |
| GPT          | https://developers.google.com/publisher-tag/guides/get-started/ |

## GitHub Repo Organizasyonu

Örnek çalışma dizini alttaki dizinlerden oluşuyor.

### "/docs" Dizini - GitHub Pages Adresi

[/docs](../../docs "GitHub Pages Adresi") dizini [GitHub Pages](https://xkema.github.io/case-study-a-gpt-integration-problem/ "GitHub Pages - Örnek Yayıncı Sitesi") adresinde yüklü örnek yayıncı sitesinin dosyalarının olduğu dizin. Burada aynı sitenin 4 farklı çeşitlemesi ve bir index sayfası var. Detaylar şu şekilde:

| Sayfa                                        | Açıklama                                             |
| :------------------------------------------- | :--------------------------------------------------- |
| `index.html`                                 | Dizin sayfası, alt sayfalara kolay ulaşabilmek için. |
| `01-site-without-gpt`                        | Reklam alınmamış yayıncı sitesi için örnek.          |
| `02-site-with-gpt-inline-integration`        | Önerilen yöntemle GPT entegrasyonu yapılmış site.    |
| `03-site-with-gpt-inline-integration-mocked` | Bir üstteki ile aynı ama gerçek reklam etkinliği olmayan örnek. (*ad blocker kullanmak isteyenler için*) |
| `04-site-with-gpt-webpack-integration`       | Yapılacak örnek çalışmanın çıktısını eklemek için yardımcı alan. |

Basitleştirerek anlatmak gerekirse, bir yayıncı `01-*`'deki sitesine reklam almak istiyor. `02-*`'deki çalışmayı yapıp önerilen yöntemle sitesine reklamları ekliyor. Buradaki çözüm bir süre sonra ihtiyaçlarını karşılamıyor, alternatif bir kurulum aramaya başlıyor. 3rd-party bir çözüm üretmeye karar veriyor ve senden `04-*`'e aynı çözümü, bir 3rd-party ürün olarak kodlamanı istiyor.

`02-*` ve `04-*`'te kod içinde yardımcı işaretçiler var. 👇 :HINT: ve 📌 :PIN:, dikkat etmen gereken yerleri, 📦 :BUNDLE: ise hazırlayacağın 3rd-party ürünün içine gitmesi gereken kod parçalarını gösteriyor.

GPT kütüphanesinin kendisini, (`gpt.js`), bundle'ın içine taşımaya gerek yok. Sadece reklam tanımlama ve gösterme etkinliğinin taşınması yeterli.

### "/guidelines" Dizini

[/guidelines](../ "guidelines") dizini bu dokümanın da olduğu yardımcı okumaların olduğu dizin. Burada örnek çalışmayı geliştirmek için gerekli bilgiler var. Eğer bütün dokümanları okumak istemezsen doğrudan [Hızlı Başlangıç](./01-hizli-baslangic.md "Hızlı Başlangıç") dokümanına gidip oradan başlayabilirsin.

### "/src" Dizini

[/src](../ "../../src") dizini, eğer bu repo üzerinde çalışmaya karar verirsen, yazacağın JavaScript module'lerini organize ettiğin dizin olacak. Dizin içindeki `utils/other/print-reminders.js` module, ES6 import/export kallanımını hatırlatmak için buraya eklendi. (*Zorunlu değil.*)

## Mock Versiyon Hakkında

GitHub Pages adresindeki `03-site-with-gpt-inline-integration-mocked` örneği, GPT kütüphanesini taklit eden bir mock kütüphaneyle hazırlandı. Amacı dijital reklam görmek istemeyen ya da ad blocker'ını kapatmak istemeyen kullanıcılar için de bir çalışma alanı sağlayabilmek. 

Her ne kadar test adresinde kullanılan örnek envanterin ticari hiçbir değeri olmasa da, bu şekilde çalışmak isteyenler için fazladan bu alanı da ekledik. Örnek çalışmanın `02-*` veya `03-*`'teki site üzerinden hazırlanması arasında değerlendirmeyi olumlu veya olumsuz yönde etkileyecek bir fark yok.

> **Hatırlatma**: Örnek çalışmada mock versiyon üzerinden hareket etmek tamamen kabul edilir olmakla birlikte, bu iş, zamanın çok büyük bir bölümününde canlı reklamlarla çalışmanın zorunlu olduğu bir iş.

## Kurulum

Geliştirme ortamı için **Node.js** JavaScript runtime ve **npm**'in kurulu olması gerekiyor. Bu kurulum **Node.js** `v16.13.1` ve **npm**'in `8.1.2` sürümüyle yapıldı. **MacOS Monterey** `12.1` ve **Windows 10** işletim sistemlerinde **Chrome** `v96.*` tarayıcı ile test edildi. Kurulum için adımlar şu şekilde:

1. GitHub repo'yu üstteki URL'den bilgisayarına clone'la.
2. `npm install` komutunu çalıştırıp gerekli paketleri yükle.
3. `npm start` komutunu çalıştır, terminalden otomatik port atanan `localhost` adresini kopyala ve tarayıcıda aç. (default `localhost:3000`)
4. `doc/index.html` linkine tıkla. Bu klasör GitHub Pages anasayfası ile aynı sayfayı gösteriyor.

## Geliştirme

Kurulumu tamamladıktan sonra eğer bu proje üzerinde çalışmaya devam etmek istersen, bu repo'yu clone'ladınktan sonra yeni bir branch yaratıp orada çalışmanı yapabilirsin. İstersen de baştan kendi projeni yaratabilirsin.

### Aynı Repo'dan Devam Etmek İçin

1. GitHub repo'yu clone'la.
2. Eğer kendi kontrolünde bir Git adresine yaptığın değişiklikleri kaydetmek istersen repo'nun `.git/config` dosyasındaki `url`'yi kendi repo adresinle değiştir.
   - **GitHub Fork** akışından kaçındık çünkü private fork herkesin erişebileceği bir özellik olmayabilir.
   - Burada vaktin varsa bir `--mirror` clone'la çalışmak da bir çözüm olabilir ama bunun için zorlanmaya çok da gerek yok.
3. `main` branch'den yeni bir branch oluştur, ismini `solution/` namespace'i kullanarak yaz. (*`solution/yeni-branch-ismi` gibi.*)
4. Workspace olarak `docs/04-site-with-gpt-webpack-integration/` dizinini kullan. (*Yani hazırlayacağın JavaScript bundle'ını bu sayfaya ekleyeceksin.*)
5. JavaScript bundle'ı hazırlayacak kurulumları yap ve `02-*`'de olduğu gibi reklamları görüntüle.
   - JavaScript module'lerini `src/` klasörünün altında organize et.
6. Çalışmayı bitirdikten sonra, ister erişilebilir bir Git adresi olarak ister sıkıştırılmış dosya olarak geri gönder.

### En Baştan Bir proje Kurarak Devam Etmek İçin

Aynı repo'dan devam etmek bir seçenek. Bunun yerine, en baştan proje kurup kendi istediğin gibi bir çalışma da hazırlayabilirsin. Bu durumda, yalnızca `docs/04-site-with-gpt-webpack-integration/` dizinini kendi proje klasöründe çalışır hale getirmen yeterli. Gerisi tamamen senin kontrolünde. Bu durum için adımlar şu şekilde:

1. Projeni oluştur.
2. `docs/04-site-with-gpt-webpack-integration/` dizinini kendi proje klasöründe çalışır hale getir.
3. JavaScript bundle'ı hazırlayacak kurulumları yap ve `02-*`'de olduğu gibi reklamları görüntüle.
4. Çalışmayı bitirdikten sonra, ister erişilebilir bir Git adresi olarak ister sıkıştırılmış dosya olarak geri gönder.
