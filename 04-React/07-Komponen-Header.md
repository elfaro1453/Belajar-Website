# Membuat Komponen Header

Pada Project Todo ini, komponen Header hanya berisi judul dari nama aplikasi saja. Kita akan membuat sebuah komponen sederhana yang terdiri dari title dan heading 1

Buat file baru di dalam folder `components` bernama `Header.jsx`, kemudian isi dengan kode berikut :

```javascript
function Header() {
  let title = "Simple Todo App"
  document.title = title
  return(
    <h1>{title}</h1>
  )
}
export default Header
```

Simpan file `Header.jsx`

Keterangan :

* `document.title` digunakan untuk mengubah title dari laman html
* kurung kurawal di kode `{title}` digunakan untuk memanggil nama variabel, sehingga nilai variabel muncul
* `export default` digunakan untuk mengekspor fungsi sehingga fungsi dapat dipanggil di fungsi lain

simpan file `Header.js`.

## Modifikasi App.js

Setelah membuat komponen Header, kita perlu memasukkannya ke dalam `App.js` dikarenakan Komponen Header adalah child dari komponen App.

Buka `App.js`, modifikasi menjadi berikut ini :

```javascript
import React from 'react'
import Header from "./components/Header"

function App() {
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
}
export default App
```

Simpan file `App.js` kemudian lihat hasilnya di browser.

Keterangan :

* return value dari komponen hanya boleh terdiri dari sebuah komponen child.
* `<React.Fragment>` digunakan sebagai wrapper atau pembungkus dari beberapa komponen sehingga return value dianggap hanya memiliki sebuah child.
* Nantinya akan ada komponen selain `Header`, yaitu `AddTodo` dan `Todos`.
