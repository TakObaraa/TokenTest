## sizes
width、heightプロパティの値のみに使用。padding,margin,gapでは使用不可。<br>
sizesのばらつきを防ぐ為、4,8の倍数を基準としたサイズ感で統一している。


| 名前 | 値 | 利用例 |
| --- | --- | --- |
| sizes.4xs | 1.5rem (24px) | 24pxの幅を保持する |
| sizes.3xs | 1.75rem (28px) | 28pxの幅を保持する |
| sizes.2xs | 2rem (32px) | 32pxの幅を保持する |
| sizes.xs | 4rem (64px) | 64pxの幅を保持する |
| sizes.sm | 8rem (128px) | 128pxの幅を保持する |
| sizes.md | 12rem (192px) | 192pxの幅を保持する |
| sizes.lg | 16rem (256px) | 256pxの幅を保持する |
| sizes.xl | 20rem (320px) | 320pxの幅を保持する |
| sizes.2xl | 24rem (384px) | 384pxの幅を保持する |
| sizes.3xl | 28rem (448px) | 448pxの幅を保持する |
| sizes.4xl | 32rem (512px) | 512pxの幅を保持する |
| sizes.5xl | 36rem (576px) | 576pxの幅を保持する |
| sizes.6xl | 42rem (672px) | 672pxの幅を保持する |
| sizes.7xl | 48rem (768px) | 768pxの幅を保持する |
| sizes.full | 100% | width: '100%'の指定を行う。（heightも同様）<br>親要素の横幅及び縦幅に合わせて要素を拡張する。 |
| sizes.max-content | max-content | 内部の要素にあわせて幅を指定する。折り返しせず領域を確保する。<br>ブロック要素でテキストの長さに合わせてbackgroundを広げたい場合。 |
| sizes.min-content | min-content | 内部の最小要素にあわせて幅を指定する。 |
| sizes.fit-content | fit-content | 内部の要素にあわせて幅を指定する。<br>max-contentと動作感が似ているが、レスポンシブによるビューポートのサイズに応じて幅を変化させたい場合はこちらを使用。 |
