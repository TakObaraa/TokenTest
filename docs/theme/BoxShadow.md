## boxShadow
boxShadowプロパティの値のみに使用<br>
影の表現を変える事による要素間の高低差を表現できる。

| 名前 | 値 | 利用例 |
| --- | --- | --- |
| boxshadow.default | 0 1px 3px rgb(0 0 0 / 10%) |デフォルトのボックスシャドウ。surfaceから1階層隆起した状態を表す。<br>Cardのデフォルトのボックスシャドウ|
| boxshadow.popper | 0 6px 12px rgb(0 0 0 / 20%) |boxshadow.defaultよりも1階層隆起した状態を表す。<br>ドロワーやポップオーバーなど、より強く高低差を見せたい場合|
| boxshadow.header | 0 2px 2px rgb(0 0 0 / 20%) |グローバルヘッダー用のボックスシャドウ。|
| boxshadow.modal | 0 5px 15px rgb(0 0 0 / 50%) |モーダル用のボックスシャドウ。|
| boxshadow.focus | inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6)'|インプットのフォーカス用|