"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _GithubController = require('./app/controllers/GithubController'); var _GithubController2 = _interopRequireDefault(_GithubController);

const routes = new (0, _express.Router)();

routes.get('/', _GithubController2.default.index);

exports. default = routes;
