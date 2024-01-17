## Color

### Font
以下プロパティの値のみに使用
- color
- fill

| 名前 | 値 | 利用例 |
| --- | --- | --- |
| font.default | colors.gray._900 | デフォルトのテキストの色。<br>UI全体で標準的なメインテキストの色として使用。 |
| font.sub| colors.gray._700 | defaultよりも1段階弱いテキストの色。<br>・メインテキストに対する補足的な情報を扱うサブテキストに使用。<br>・インプットパーツ内の入力テキストのカラー |
| font.weak| colors.gray._700 | 最も弱いテキストの色。<br>・disabledやplaceholderなどに使用。<br>・情報の粒度によりsubよりも補足的な情報が存在する場合はこちらの使用を検討。 |
| font.accent | colors.white | アクセントカラー用テキスト。テキストが暗い背景上にある場合 |
| font.link | colors.primary._600 | リンクテキスト用の色 |

<br><br>

### Background
backgroundColorプロパティの値のみに使用

| 名前 | 値 | 利用例 |
| --- | --- | --- |
| background.surface | colors.white  | デフォルトのアプリケーション表面背景色。<br>ページ内の基本となるベースカラー。 |
| background.surfaceRaised | colors.gray_10  | 特定のレイヤーを表面の色（surface）から分離する必要がある場合<br>CardやGridTableのヘッダーが該当 |
| background.surfaceLowered | colors.gray_100  | surface-raisedよりも1段階暗めの色<br>プログレスバーなど、特定のレイヤーを表面の色よりもさ低く目立たせて表示する必要がある場合 |
| background.disabled | colors.gray_50  | DISABLEDのステータスを表す背景色 |

<br><br>

### StatusColor
以下プロパティの値のみに使用
- color
- backgroundColor
警告や成功などのステータスに応じてカラーを使い分ける。<br>
比較的濃いカラーが多いため、背景色で使う場合はButtonやLabel等小さい部品で使用すること。

| 名前 | 値 | 利用例 |
| --- | --- | --- |
| danger | colors.red._600 | 危険ステータスをユーザーに知らせる場合に使用。<br>ユーザーが先に進めるよう、解決する必要がある問題を伝える |
| warning | colors.red._500 | 警告ステータスをユーザーに知らせる場合に使用。<br>ユーザーの注意が必要である事を伝える。 |
| error | colors.red._200 | エラーステータスをユーザーに知らせる場合に使用。<br>何かしらの問題が発生している事を伝える。 |
| success | colors.green._700 | 成功ステータスをユーザーに知らせる場合に使用。<br>変更が保存されたか、何かが完了したことを表す。 |
| primary | colors.primary._600 | 選択済、登録等ポジティブ及びアクティブな操作、要素に使用。<br>secondaryとセットで使用するとステータスの対比を表現できる。 |
| secondary | colors.secondary._200 | primaryな要素との対比なステータス状況を見せたい場合に使用。 |