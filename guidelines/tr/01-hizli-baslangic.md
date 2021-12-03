# Hızlı Başlangıç

> ---
>
> :information_source: Bu doküman, detayları atlayıp hızlıca kodlamaya başlayabilmek için hızlı başlangıç rehberi. <!--Eğer domain bilgin yoksa, [diğer dokümanları](./ "/guidelines/tr/") okuduktan sonra kodlamaya başlamak daha doğru bir pratik. -->
>
> ---

## Bağlantılar

| Kaynak       | URL                                                          |
| ------------ | ------------------------------------------------------------ |
| GitHub       | https://github.com/xkema/case-study-a-gpt-integration-problem/ |
| GitHub Pages | https://xkema.github.io/case-study-a-gpt-integration-problem/ |
| GPT          | https://developers.google.com/publisher-tag/guides/get-started/ |

## İş Tanımı

1. Projeyi [GitHub](https://github.com/xkema/case-study-a-gpt-integration-problem/ "GitHub - xkema/case-study-a-gpt-integration-problem") adresinden bilgisayarına indir ve kur. `npm install`
2. Projeyi çalıştır. `npm start`
   - Proje doğru bir şekilde çalıştıysa [GitHub Pages](https://xkema.github.io/case-study-a-gpt-integration-problem/ "GitHub Pages - Örnek Yayıncı Sitesi") adresindeki kurulumun aynısını görmen gerek. (*Terminal ekranında local adres, `localhost:{PORT}` olarak görünecek, default: `localhost:3000`*.)
3. `02-site-with-gpt-inline-integration` örneğini incele. Anasayfada 3, detay sayfasında 4 adet reklam alanı var. Bunlar Google tarafından önerilen yöntemle sayfaya eklenmiş reklam alanları.
4. Bu sayfadaki tüm reklam tanımlama ve gösterme etkinliğini yönetecek JavaScript bundle için bir proje oluştur.
   - Bundle'ı hazırlarken bir module bundler ve yazdığın kodu `ES5` versiyonuna çevirebilen bir transpiler kullan. (şu an çalışan proje sırasıyla **Webpack** ve **Babel** kullanıyor)
   - Çalışmayı hem anasayfa hem de detay sayfasını kapsayacak şekilde hazırla.
5. Hazırladığın bundle'ı `04-site-with-gpt-webpack-integration` adresinde kod içinde işaretlenen yere ekle ve `02`'de olduğu gibi reklamların çalıştığından emin ol.
6. Hazırladığın projeyi bize gönder. (*Doğrudan sıkıştırılmış klasör olarak ya da bir repository adresi olarak.*)
7. [Sorular](./04-sorular.md "Sorular") dokümanından 2 tane soru seç ve yanıtla. (*Bunu göndermene gerek yok, örnek çalışmadan sonra görüşürsek orada üzerine konuşacağız.*)

## Diğer Notlar

- Hazırlayacağın bundle için kuracağın projeyi en başta hazırlayabilir ya da üstte klonladığın repo'yu başlangıç olarak kullanabilirsin.
- `02-*` ve `04-*`'le başlayan örneklerde, kod içinde yardımcı işaretçiler var. 👇 :HINT: ve 📌 :PIN:, dikkat etmen gereken yerleri, 📦 :BUNDLE: ise hazırlayacağın 3rd-party ürünün içine gitmesi gereken kod parçalarını gösteriyor.
- GPT kütüphanesinin kendisini, [gpt.js](https://securepubads.g.doubleclick.net/tag/js/gpt.js "Google Publisher Tag"), bundle'ın içine taşımaya gerek yok. Sadece reklam tanımlama ve gösterme etkinliğinin taşınması yeterli.
- Burada beklenen bir web sitesi tasarlamak değil, <u>bir 3rd-party JavaScript reklam kütüphanesi hazırlamak</u> ve bunu `04-*` örneğinde çalışır hâle getirmek.
- `03-*` örneği ad blocker'ını kapatmadan da çalışmayı görebilmen için eklendi. Bu örnekte, sayfaya gerçek reklamlar yerine mavi kutular yerleştirilir. Bilgisayarında bir reklam engelleyen bir uygulama kullanıyorsan gerçek reklamların olduğu sayfalarda reklam alanları göremezsin. Ad blocker ürünlerini geçici olarak kapatabilir ya da bu mock versiyonla çalışabilirsin.
- Eksik olduğunu düşündüğün her şey için bizimle iletişim kur.
- Kolay gelsin.