# Transfer Data antar Komponen React menggunakan props

Kita tahu bahwasanya komponen react dapat dibuat menggunakan function, maka tentu saja dapat menerima input parameter. Parameter yang diterima oleh komponen react adalah props (properties).

## Cara menggunakan props

Cara menggunakan props yakni tinggal menambahkan parameter bernama props di komponen penerima data.

Setelah props ditambahkan pada komponen, maka kita bisa mentransfer data dari komponen lain ke komponen tersebut dengan menambahkan atribut pada pemanggilan komponen, sebagai contoh :

## Contoh penggunaan props pada komponen Child dan Parent

Semisal kita akan mengirim data dari komponen `Parent` ke komponen `Child`

Langkahnya :

1. Tambahkan props pada komponen child, props harus mengarah ke atribut dari child
2. Panggil komponen child pada komponen parent dengan menambahkan atribut untuk props

### Komponen Child.jsx

```javascript
function Child(props) {
  // props.data berarti harus ada atribut data pada pemanggilan komponen Child
  // Contoh : <Child data={suatuData} />
  let data = props.data
  return (
    <h1>{data}</h1>
  )
}
```

### Komponen Parent.jsx

```javascript
function Parent() {
  let dataYangDitransfer = "Transfer data menggunakan props"
  return (
    // transfer dataYangDitransfer melalui atribut data
    <Child data={dataYangDitransfer} />
  )
}
```

komponen di atas hanya contoh saja ya.

Untuk mempelajari secara langsung, kita akan menggunakan data dummy pada komponen `<Todos />` yang akan ditransfer ke komponen `<TodoItem />`.

## Menambahkan props pada Komponen TodoItem

Buka file komponen `TodoItem.jsx`, modifikasi menjadi kode berikut ini:

```javascript
import React from "react"

function TodoItem(props) {
  let data = props.data
  // setiap perulangan data di React itu menggunakan map
  let listItem = data.map((item) => {
      return <li>{item}</li>
  })

  return (
    <React.Fragment>
      {listItem}
    </React.Fragment>
  )
}
export default TodoItem
```

Simpan file `TodoItem.jsx`

Keterangan :

* Variabel `data` berisi `props.data` sehingga pada pemanggilan komponen `TodoItem` perlu ditambahkan atribut `data`, contoh `<TodoItem data={variabelData} />`.
* TodoItem diharapkan memunculkan banyak data dari Todos, oleh karenanya terdapat variabel `listItem` berisi `map` dari data.
* Penggunaan perulangan `map` menandakan bahwa data berupa object (array juga termasuk object javascript)
* Masing-masing item dari data akan ditampilkan di dalam tag HTML `<li>..</li>`

## Menambahkan Data Dummy pada Komponen Todos

Komponen `Todos` merupakan parent dari komponen `TodoItem`, kita menambahkan data dummy pada komponen `Todos` untuk ditransfer ke komponen `TodoItem`.

Buka `Todos.jsx`, modifikasi menjadi kode berikut :

```javascript
import TodoItem from "./TodoItem"

function Todos() {
  let listData = [
    'Item Pertama',
    'Item Kedua',
    'Item Ketiga',
  ]
  return(
    <ul>
      <TodoItem data={listData}/>
    </ul>
  )
}
export default Todos
```

Simpan file `Todos.jsx`

Keterangan :

* Pembuatan variabel `listData` berisi array dari beberapa data
* Komponen `TodoItem` hanya dipanggil satu kali
* Terdapat atribut `data` pada pemanggilan komponen `TodoItem` dikarenakan pada komponen `TodoItem` properti yang diambil adalah data. Cek kode pada **TodoItem.jsx** terdapat bagian `let data = props.data`

Sampai di sini kita telah mendapatkan tampilan Aplikasi sederhana meski form masih belum berfungsi dengan baik, selanjutnya kita akan belajar untuk menambahkan style (CSS) pada JSX.
