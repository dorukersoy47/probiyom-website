# Probiyom Website

**Probiyom** is a brand operating under [IDOL Invest](https://www.idolinvest.com/), offering probiotic and prebiotic-based cleaning, personal care, and industrial products. This repository contains the source code for Probiyom's corporate website.

---

**Probiyom**, [IDOL Invest](https://www.idolinvest.com/) bünyesinde faaliyet gösteren, probiyotik ve prebiyotik bazlı temizlik, kişisel bakım ve endüstriyel ürünler sunan bir markadır. Bu repo, Probiyom'un kurumsal web sitesinin kaynak kodunu içermektedir.

---

## Technical Structure / Teknik Yapı

A single-page application built with plain HTML/CSS/JS, requiring no framework or build step. Page transitions are managed by a hash-based router.

Framework veya build adımı gerektirmeyen, saf HTML/CSS/JS ile geliştirilmiş tek sayfalı bir uygulamadır. Sayfa geçişleri hash tabanlı bir router ile yönetilir.

## Pages / Sayfalar

| Route | EN | TR |
|---|---|---|
| `#home` | Home | Ana sayfa |
| `#about` | About | Hakkımızda |
| `#products` | Product catalogue | Ürün kataloğu |
| `#products/<slug>` | Product group detail | Ürün grubu detayı |
| `#contact` | Contact | İletişim |

## Folder Structure / Klasör Yapısı

```
probiyom-website/
├── index.html        # App shell / Uygulama kabuğu
├── pages/            # HTML partials loaded by router / Router tarafından yüklenen HTML parçaları
├── styles/           # CSS modules / CSS modülleri
├── scripts/          # JS modules / JS modülleri
├── data/             # Product, slide and site data / Ürün, slayt ve site verisi
└── images/           # Static assets / Statik görseller
```

## Running Locally / Yerel Geliştirme

The router loads page partials via `fetch()`, so the site cannot be opened directly in the browser — it must be served over HTTP.

Router, sayfa parçalarını `fetch()` ile yüklediği için dosyanın doğrudan tarayıcıda açılması çalışmaz. Bir HTTP sunucusu üzerinden servis edilmesi gerekir:

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```
