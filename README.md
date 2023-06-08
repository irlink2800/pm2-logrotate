
## Description

pm2 logrotate를 하기 위한 모듈입니다.
내부망이기 때문에 해당 모듈을 설치할 수 없어, 수동으로 설치 및 실행합니다.

[원본](https://github.com/keymetrics/pm2-logrotate) 주소입니다.

### Configure

- logrotate의 설정을 변경하고 싶다면 `package.json`의 `config` property를 확인하세요.
- pm2 실행 스크립트를 변경하고 싶다면 `ecosystem.config.json`을 확인하세요.

### How to use

```
# pm2 실행 시작 (pm2와 node가 설치되어있어야 합니다.)
$ pm2 start ecosystem.config.json
```

끝입니다!
