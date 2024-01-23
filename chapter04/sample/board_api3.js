const morgan = require('morgan');
const url = require('url');
const uuidAPIKey = require('uuid-apikey');
const cors = require('cors'); // cors 임포트

/* express app generate */
const express = require('express');
const app = express();

/* 포트 설정 */
app.set('port', process.env.PORT || 8080);

/* 공통 미들웨어 */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors()); // 모든 라우터에 cors 적용