## Border
以下プロパティの値のみに使用
- border
- borderTop
- borderBottom
- borderLeft
- borderRight
- outline


| 名前 | 値 | 利用例 |
| --- | --- | --- |
| border.default | 1px solid ${colors.gray._300} | デフォルトの境界線でグループの区別を行う。<br>input、grid、Card等境界線のあるコンポーネントの基本的なborderプロパティ。|
| border.separate | 1px solid ${colors.gray._100} | デフォルトよりも薄く表示される。<br>情報の整理として主にコンテンツの境目として使用する。|
| border.none | none | 状況に応じて線を非活性にしたい場合 |
| border.danger | 1px solid ${colors.red._600} | 危険ステータスを表したい場合のグルーピングに使用。|
| border.warning | 1px solid ${colors.red._500} | 警告ステータスを表したい場合のグルーピングに使用。|
| border.error | 1px solid ${colors.red._200} | エラーステータスを表したい場合のグルーピングに使用。|
| border.success | 1px solid ${colors.green._700} | 成功ステータスを表したい場合のグルーピングに使用。|
| border.primary | 1px solid ${colors.primary._600} | 選択済、登録等ポジティブ及びアクティブな操作、要素に使用。<br>secondaryとセットで使用するとステータスの対比を表現できる。|
| border.secondary | 1px solid ${colors.secondary._200} | primaryな要素との対比なステータス状況を見せたい場合に使用。|
|