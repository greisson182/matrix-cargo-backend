import axios from 'axios';

class GithubController {
  async index(req, res) {
    let { language } = req.query;

    if (!language){
        language = 'javascript';
    }

    const response = await axios.get(`https://api.github.com/search/repositories?q=language:${language}&sort=created&order=asc`);

    return res.json(response.data.items);
  }
}

export default new GithubController();
