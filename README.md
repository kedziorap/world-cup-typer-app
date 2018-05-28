# SuperTyper App

Aplikacja do Ligi Typerów mundialu w Rosji 2018.

## Ogólne

Aplikacja umożliwia typowanie wyników meczu mundialu Rosja 2018. Wyniki można typować dla wszystkich meczów udostępnionych przez administratora. Mecze można typować maksymalnie do 10 minut przed planowanym czasem ich rozpoczęcia. Po wprowadzeniu końcowych wyników przez Administratora przyznawane są punkty:
•	3 za trafiony dokładny wynik
•	1 za wytypowanie zwycięzcy lub remisu z inna liczbą bramek niż w meczu
•	0 za błędne trafienie
Udostępnianie meczów do typowania należy do administratora. Administrator nie jest typerem.


## Instalacja
Na początek instalacja wszystkich paczek komenda npm install
Do użytkowania aplikacji niezbędny jest lokalny serwer MySQL oraz utworzenie bazy danych ‘mundialdb’. Schemat bazy dostępny w pilku db/mundialdb.sql. W pliku db/db-mysql-connect.js należy zmienić domyślne opcję połącznia na poprawne dane:
```
const conectionOptions = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mundialdb'
}
```

Po instalacji komenda npm start

## Użycie
W bazie danych są utworzone domyślnie dwa konta ‘admin’ (konto administratora)  i ‘user1’ (konto użytkownika)  dla obu kont hasło: ‘qwerty1234’.

### Administrator
Konto administratora umożliwia:
* tworzenie/edycja/usuwanie aktualności
* zmienianie statusów i wyników spotkań
* edycję zespołów w danym spotkaniu
* przeglądanie wyników typowań użytkowników (tylko meczów zakończonych)
* przeglądanie aktualnego rankingu
* edycja regulaminu

### User:
Konto użytkownika umożliwia:
* przeglądanie aktualności, regulaminu
* przeglądanie wyników typowań użytkowników (tylko meczów zakończonych)
* przeglądanie aktualnego rankingu
* typowanie wyników spotkań
* zmiana hasła do konta

Aplikacja umożliwia stworzenie nowych kont użytkownika umożliwiających typowanie wyników. Nie przewidziano dodatkowych kont administratora.

## Autor

Piotr Kędziora [website] (https://kedziorap.github.io/)
