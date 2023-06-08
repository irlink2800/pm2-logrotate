module.exports = {
  apps: [
    {
      name: 'pm2-logrotate', // 이름
      script: 'app.js', // 실행 파일
      cwd: '/application/pm2-logrotate-2.7.0', // 실행 경로
      watch: false, // 실시간 변경 확인 여부
      out_file: '/logs/nodejs/pm2/pm2-logrotate-out.log', // 로그 파일 경로
      error_file: '/logs/nodejs/pm2/pm2-logrotate-error.log', // 에러 로그 파일 경로
    },
  ],
};
