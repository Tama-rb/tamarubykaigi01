# Tamarubykaigi2019

## 環境設定
1. `git clone`
2. `git clone`したディレクトリで`npm install`
3. ビルド用にcliをインストール`npm install -g @angular/cli`

## ローカルサーバー起動
`ng serve`

## Prodaction環境リリース(Github Pages)
### 前提
- masterブランチの`docs`配下をGithub Pagesに適用中
    - https://github.com/Tama-rb/tamarubykaigi2019/settings
- docs配下が以下のURLに公開される
    - https://tama-rb.github.io/tamarubykaigi2019/

### 操作
1. localでbuild
    - `ng build --prod --output-path "docs" --base-href "https://Tama-rb.github.io/tamarubykaigi2019/" --deploy-url "/tamarubykaigi2019/"`
2. `/docs`配下を全てcommit
3. git push

## help
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
