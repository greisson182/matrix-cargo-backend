"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

class GithubController {
  async index(req, res) {
    let { language } = req.query;

    if (!language){
        language = 'javascript';
    }

    const response = await _axios2.default.get(`https://api.github.com/search/repositories?q=language:${language}&sort=created&order=asc`);

    return res.json(response.data.items);
  }
}

exports. default = new GithubController();
