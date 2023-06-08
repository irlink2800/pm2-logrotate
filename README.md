## Description

pm2 logrotate를 하기 위한 모듈입니다.<br />
내부망이기 때문에 해당 모듈을 설치할 수 없어, 수동으로 설치 및 실행합니다.<br />
버전은 `2.7.0` 입니다.

자세한 설정은 [원본](https://github.com/keymetrics/pm2-logrotate) 주소를 참고하세요.

### Configure

- logrotate의 설정을 변경하고 싶다면 `package.json`의 `config property`를 확인하세요.
- pm2 실행 스크립트를 변경하고 싶다면 `ecosystem.config.json`을 확인하세요.

### How to use

`release`에 가면 해당 소스를 압축해둔 파일이 있습니다.<br />
해당 파일을 다운받아서 실행할 서버에 압축을 풀어주세요.

그 후, 아래 스크립트로 서비스를 실행합니다.

```bash
# pm2 실행 시작 (pm2와 node가 설치되어있어야 합니다.)
$ pm2 start ecosystem.config.json
```

> node_modules
>
> 인터넷이 안되는 상황이 대부분이기 때문에, node_modules 폴더를 git에 올려뒀습니다.<br/>
> 따라서 굳이 install을 하지 않아도 됩니다.

**끝입니다!**
