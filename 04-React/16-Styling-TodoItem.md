# Styling Komponen TodoItem

Komponen `TodoItem` berisi kode untuk mengolah data dari `props.data` menjadi item dari list.

Dikarenakan hasilnya berupa daftar, maka kita hanya bisa menggunakan `className` sebagai identitas untuk style-nya.

Buka `TodoItem.jsx`, modifikasi kodenya menjadi seperti berikut ini :

```javascript
import React from "react"
import './styles/TodoItem.css'

function TodoItem(props) {
  let data = props.data
  let listItem = data.map((item) => {
      return <li className="itemlist">{item}</li>
  })

  return (
    <React.Fragment>
      {listItem}
    </React.Fragment>
  )
}
export default TodoItem
```

Simpan file `TodoItem.jsx`, kemudian buat file CSS untuk TodoItem.

## Membuat styling TodoItem.CSS

buat file `TodoItem.css` di dalam folder `styles`. Isi dengan kode berikut ini :

```css
.itemlist {
  border: 1px solid blueviolet;
  list-style-type: none;
}
```

Simpan file `TodoItem.css`, kemudian lihat hasilnya.
