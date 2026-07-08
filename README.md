# CharacterVerse

CharacterVerse, favori kurgu karakterlerini listelemek, filtrelemek, detaylarını incelemek ve yeni karakter eklemek için geliştirilmiş full-stack bir karakter arşivi uygulamasıdır.

## Ozellikler

- Karakter listeleme ve detay sayfasi
- Isme, evrene, role, duruma ve minimum puana gore filtreleme
- Favori karakter isaretleme
- Yeni karakter ekleme, guncelleme ve silme
- Gorsel yukleme destegi
- React tabanli modern arayuz
- Express + Prisma + SQLite tabanli API

## Kullanilan Teknolojiler

### Frontend

- React
- Vite
- React Router
- React Hot Toast

### Backend

- Node.js
- Express
- Prisma
- SQLite
- Multer

## Proje Yapisi

```text
CharacterVerse/
|- backend/
|  |- prisma/
|  |- src/
|- frontend/
|  |- public/
|  |- src/
|- .env.example
|- README.md
```

## Kurulum

### 1. Repoyu klonla

```bash
git clone https://github.com/Ardaozk54/CharacterVerse.git
cd CharacterVerse
```

### 2. Backend bagimliliklarini yukle

```bash
cd backend
npm install
```

### 3. Environment dosyasini hazirla

Kok dizindeki `.env.example` dosyasini referans alarak `backend/.env` dosyasi olustur:

```env
DATABASE_URL="file:./dev.db"
```

### 4. Veritabani kurulumunu tamamla

```bash
npx prisma migrate dev
npx prisma db seed
```

### 5. Backend'i calistir

```bash
npm run dev
```

API varsayilan olarak `http://localhost:3000` adresinde calisir.

### 6. Frontend bagimliliklarini yukle ve uygulamayi baslat

Yeni terminalde:

```bash
cd frontend
npm install
npm run dev
```

Frontend varsayilan olarak Vite uzerinden `http://localhost:5173` adresinde acilir.

## API Ozeti

Temel endpoint: `http://localhost:3000/api/characters`

| Method | Endpoint | Aciklama |
| --- | --- | --- |
| GET | `/api/characters` | Tum karakterleri listeler |
| GET | `/api/characters/:id` | Tek karakter detayi getirir |
| POST | `/api/characters` | Yeni karakter ekler |
| PATCH | `/api/characters/:id` | Karakteri gunceller |
| DELETE | `/api/characters/:id` | Karakteri siler |
| PATCH | `/api/characters/:id/favorite` | Favori durumunu degistirir |
| POST | `/api/characters/upload` | Karakter gorseli yukler |

### Desteklenen filtreler

- `search`
- `universe`
- `role`
- `status`
- `favorite=true`
- `minRating`

Ornek:

```bash
GET /api/characters?search=walter&status=ALIVE&minRating=8
```

## Veri Modeli

Her karakter kaydi su alanlari icerir:

- `name`
- `universe`
- `role`
- `skill`
- `rating`
- `status`
- `imageUrl`
- `description`
- `isFavorite`

## Gelistirme Notlari

- Frontend servis katmani su anda API adresini sabit olarak `http://localhost:3000/api/characters` uzerinden kullaniyor.
- Gorsel yuklemeleri backend tarafinda `/uploads` altinda servis ediliyor.
- Veritabani olarak Prisma uzerinden SQLite kullaniliyor.

## GitHub'a Gonderme

Bu projede `origin` remote'u zaten bagli:

```bash
https://github.com/Ardaozk54/CharacterVerse.git
```

README'yi ve diger degisiklikleri gondermek icin tipik akis:

```bash
git add README.md frontend/README.md
git status
git commit -m "docs: improve project README"
git push origin main
```

Eger baska dosyalardaki mevcut degisiklikleri de gondereceksen once `git status` ile kontrol etmeni oneririm.
