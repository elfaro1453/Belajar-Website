# Struktur HTML

Berikut ini adalah contoh dari struktur HTML yang ideal

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Struktur Dasar HTML</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#">Sebuah link</a></li>
        <li><a href="#">Sebuah link</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <article>
      <section><!--...--></section>
      <section><!--...--></section>
    </article>
  </main>
  <aside><!--...--></aside>
  <footer><!--...--></footer>
</body>
</html>
```

## Penjelasan Struktur HTML

### Doctype html

adanya kode `<!DOCTYPE html>` menandakan bahwa laman HTML yang dibuat mendukung HTML5.

```html
<!DOCTYPE html>
<!-- Kode selanjutnya -->
```

### HTML atribut lang

Atribut lang pada tag `html` untuk memberi tahu browser mengenai bahasa yang digunakan dalam informasi yang ditunjukkan pada html. Alat lain seperti mesin pencari akan mengenali bahasa yang digunakan di dalam html

Daftar kode bahasa yang didukung oleh HTML5 dapat di cek di tautan berikut ini : <https://www.w3schools.com/tags/ref_country_codes.asp>

```html
<!DOCTYPE html>
<html lang="en">
<!-- Kode selanjutnya -->
```

### Tag Head

Tag head berisi informasi yang tidak ditampilkan untuk user namun dimengerti oleh browser dan mesin pencari.

```html
<!-- kode lainnya -->
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Struktur Dasar HTML</title>
</head>
<!-- kode lainnya -->
```

### Tag Meta

Tag meta digunakan untuk memberi informasi khusus untuk browser dan mesin pencari

```html
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Keterangan :

* charset untuk memberi tahu browser atas set karakter yang digunakan pada laman HTML
* http-equiv digunakan untuk memberi tahu kompabilitas untuk browser versi lama
* viewport digunakan untuk menentukan lebar awal dari laman html

### Tag Title

Tag title digunakan untuk membuat judul dari html.

```html
<title>Struktur Dasar HTML</title>
```

Selain tag di atas, di dalam tag `head` bisa berisi banyak tag lain

## Tag Body

Tag body berisi informasi yang akan dirender atau ditampilkan pada user.

