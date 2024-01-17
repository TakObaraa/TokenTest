## Spacing
padding,margin,gapプロパティの値のみに使用<br>
width、heightでは使用不可

| 名前 | 値 | 利用例 |
| --- | --- | --- |
| spacing.none | none | 既に設定されているmargin、padding、gapのstyleを打ち消す場合に使用する |
| spacing.2xs | 0.125rem (2px) | 主にgap用。<br>marginやpaddingで使う場合は要素同士の間隔調整で使用 |
| spacing.xs | 0.25rem (4px) | 同じグルーピングの要素同士の間隔を開けたい場合<br>アイコンとテキストの間隔など |
| spacing.sm | 0.5rem (8px) | 同じグルーピングで隣り合う要素同士の間隔を開けたい場合。<br>・複数のラジオボタンを横に並べる<br>・タイトルと本文の間隔を開ける<br>可読性を上げるために周囲と間隔を取る場合にも使用。 |
| spacing.md | 1rem (16px) | 別々の要素同士、間隔を開けて隣り合わせる場合に使用<br>可読性を上げるために周囲と間隔を取る場合にも使用 |
| spacing.lg | 1.5rem (24px) | Cardなど別々のコンテンツ同士、間隔を開けて表示する場合に使用 |
| spacing.xl | 2rem (32px) | 別々のコンテンツ同士、間隔を開けて表示する場合に使用。<br>modalやpopover等のフロート要素の位置調整用にも使用 |
| spacing.auto | auto | コンポーネントを中央揃え、左右詰めで表示させたい場合。<br>gapでは使用不可 |