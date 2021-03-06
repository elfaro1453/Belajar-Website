# Styling Komponen Header

Komponen Header akan diberi style sederhana yaitu perubahan warna background dan warna font saja. Namun agar style hanya berlaku untuk komponen header ini, maka kita perlu memberikan identifikasi elemen, yakni dengan menambahkan **atribut id** pada elemen h1.

## Membuat file Header.css

Buat file `Header.css` di dalam folder `styles`.

Masukkan kode berikut ini :

```css
#header {
  color:white;
  background-color: darkcyan;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Simpan file `Header.css`

## Impor Header.css ke dalam Header.jsx

Buka file `Header.jsx`, masukkan tag `h1` ke dalam sebuah tag `div`, kemudian tambahkan atribut `id="header"` pada tag `div`. Sehingga kodenya menjadi seperti ini :

```javascript
import './styles/Header.css'

function Header() {
  let title = "Simple Todo App"
  document.title = title
  return(
    <div id="header"><h1>{title}</h1></div>
  )
}
export default Header
```

Keterangan :

* Tag `<h1>..</h1>` dibungkus di dalam tag `<div id="header"></div>` agar lebih mudah mengatur stylingnya
* file `Header.css` diimport dengan mengarahkan ke path atau lokasi filenya.
