# Sorular

> - - -
> ℹ️ Bu dokümandan seçtiğin 2 soruyu, görüşmede yanıtlamanı isteyeceğiz. Bazı soruların yanıtlarını bulabilmek için GPT dokümantasyonlarına bakman gerekebilir.
> - - -

1. GPT kütüphanesinin sağladığı `googletag.cmd` object ne işe yarıyor? GPT, Neden kod bloklarını doğrudan çalıştırmak yerine, önce `cmd` array'in içine gönderiyor?
2. Örnek çalışmada bir desktop görünümü kullanıldı. Eğer sayfayı mobil ekran boyutuna getirirsek geniş reklam alanları sayfaya sığmayacak ve bir çözünürlüğün altında reklamlar ekranın dışında kalacak. Bu problemi nasıl çözersin?
3. Önerilen GPT entegrasyonunda, reklam alanlarını gösteren kod blokları doğrudan HTML `<script>` tag'leri içinde çağrılıyordu. JavaScript bundle içinde ise HTML'den bağımsız bir `googletag.display` akışı ile kontrol ediliyorlar. Bu durum reklam davranışında nasıl değiştirmiş olabilir? 
4. 3rd-pary JavaScript kütüphaneleri, doğal davranışları gereği, entegre oldukları ürünlerin deployment süreçlerinin bir parçası değiller. Yani kendilerine ait bir build süreçleri var ve sitenin geliştirme ortamından bağımsızlar. Bu durumda, sitenin geliştirme ortamını geliştirici bilgisayarına kurmadan, 3rd-party ürünü nasıl debug edersin veya nasıl geliştirirsin?
5. Örnek çalışma tek site için bir JavaScript kütüphanesi geliştirme hedefi koydu. Eğer aynı kütüphaneyi birden fazla siteyi çalıştırmak için kullanman gerekseydi nasıl bir geliştirme ortamı kurardın? (*Farklı siteler farklı teknolojiler kullanıyor varsayımıyla.*)
6. Örnek çalışmayı yaptığın sitede, sayfaların en altında, footer kısmında reklam alanları var. Bu reklam alanları kullanıcı footer'a scroll etmese bile görüntüleniyor. Bu alanları `lazyload` çalıştırmak istesen nasıl bir yol izlerdin?
7. Örnek çalışmada bir desktop görünümü kullanıldı. Eğer reklam alanlarını tanımlarken kullandığın `adUnitPath` ve `size` seçenekleri, farklı cihazlara göre (*desktop/tablet/mobile*) isim değiştirseydi, bu problemi nasıl çözerdin?
8. Örnek çalışmada, reklam alanlarının yerleşeceği pozisyonlar HTML element `#id`'leri ile önceden belirlenmişti. Eğer bu `#id`'ler belirlenmemiş olsaydı reklam alanlarını sayfaya nasıl eklerdin? (*Yani bir web sitesi var, sitenin kaynak kodlarına erişimin yok. Sana sadece GPT kütüphanesi ve `bundle.js` script'i sağlanmış site içinde. Reklam & Operasyon ekibi senden, gösterdikleri yerlere reklam eklemeni istiyor.*)
9. Eğer bir reklam alanını bir kullanıcı etkileşiminden sonra göstermek isteseydik, örneğin kullanıcı bir button'a tıkladıktan sonra, bu problemi nasıl çözerdin?
10. Eğer bir reklam alanını sitede dinamik değişen bir yere ekleme isteseydik, örneğin bir slider'ın içine, bu problemi nasıl çözerdin?
11. Eğer web sitesinde sonsuz içerik yüklenen bir sayfa olsaydı, yeni yüklenen içeriğe nasıl reklam alanı eklerdin?
12. Zamanla deployment ortamı ile geliştirme ortamı arasında farklar oluşmaya başladığını varsayalım. Örneğin Deployment ortamındaki `Node.js` kurulumu `v9.*`'da iken, geliştirici ortamında `v16.*` olsun. Böyle bir problemi çözmek için nasıl hareket ederdin? (*Deployment ortamı ile development ortamının farklı ekipler tarafından yönetildiği varsayımıyla.*)
13. GPT entegrasyonu olan bir sayfada `DevTools > Network` paneline git. Filtre kısmına `ads?` yaz. Burada listelenen HTTP request'ler sayfadaki reklam isteklerini gösteriyor. Anasayfa için 3, detay sayfası için 4 adet istek görüntülenecek. Sayfadaki reklam sayısı arttıkça, istek sayısı da artacak ve bir yerden sonra sayfa performansını etkileyecek diye varsayalım. Bu reklam isteklerini gruplayıp tek bir istekte birleştirebilir miyiz?
