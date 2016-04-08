FSME2.0
=======

This is a fork of Wolff09's [FSME](https://github.com/Wolff09/FSME/) (shoutouts to him), groundwork for a redesign of _the_ Intranet. This has become necessary as

- the features and data of _the_ Intranet have grown alot [sic]
- [Gumby](http://www.gumbyframework.com/) has been discontinued
- Someone has invented [Flexbox](https://www.w3.org/TR/css-flexbox-1/)


Documentation
-------------

FSME2.0 now based on [Foundation](http://foundation.zurb.com/), the .scss-files are in `_sass/foundation`.

Important design elements are **panels**. They can be built either via using the class `panel` on some container, or by including the `panel`-mixin.
Especially `<section>`-elements are panels.

**Headlines**: `<h1>` is only allowed once per page, on top. `<h2>` may be used inside panels.

**Tables**: They are nested as follows: `ul > li > a > .cell-x`. You can declare a headline row via `li.tab-head`. You can adjust the width of the columns by the `x` of class `cell-x` where `x` can be 1 upto 12, according to Foundation's grid.