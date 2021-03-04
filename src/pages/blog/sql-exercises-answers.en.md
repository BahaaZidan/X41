---
title: "Intro to SQL exercises' answers"
date: "2021-01-03"
---

These are my answers to the exercises of the first databases course provied by standford on edx

Ex_1
Q1

```sql
select title
from Movie
where director = 'Steven Spielberg';
```

Q2
A1

```sql
select distinct year
from Movie inner join Rating
on Movie.mID = Rating.mID
where stars >= 4
order by year asc;
```

```js
import lolo from "lolo";

const hamo = lolo.koko();
```

A2

```sql
select year
from Movie
where mID in (select distinct mID
from Rating
where stars >= 4)
order by year ASC;
```

Q3

```sql
select title
from Movie
where mID not in (
	select mID
	from Rating
)
```

Q4

```sql
select name
from Reviewer inner join Rating
on Reviewer.rID = Rating.rID
where ratingDate is null
```

Q5

```sql
select name, title, stars, ratingDate
from Movie join (Reviewer join Rating on Reviewer.rID = Rating.rID)
on Movie.mID = Rating.mID
order by name, title, stars
```

Q6

```sql
select name, title
from Rating R1 join (Reviewer join (Rating R2 join Movie on R2.mID = Movie.mID) on Reviewer.rID = R2.rID)
on R1.mID = R2.mID and R1.rID = R2.rID
where R1.stars > R2.stars and R1.ratingDate > R2.ratingDate
```

Q7

```sql
select title, max(stars)
from Movie join Rating
on Movie.mID = Rating.mID
group by Rating.mID
order by title
```

Q8

```sql
select title, max(stars) - min(stars) as spread
from Movie join Rating
on Movie.mID = Rating.mID
group by Rating.mID
order by spread desc, title
```

Q9

```sql
select name
from Reviewer inner join Rating
on Reviewer.rID = Rating.rID
where ratingDate is null
```
