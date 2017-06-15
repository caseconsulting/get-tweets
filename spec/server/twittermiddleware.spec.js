const twittermiddleware = require('../../server/twittermiddleware');
const twitter = require('../../server/twitterapi');

describe("twittermiddleware", function() {
  describe('tweets', () => {
    let req, res, body;

    beforeEach(() => {
      req = {
        params: {
          handle: 'handle'
        }
      };
      res = '{res}';
      body = '{body}';

      spyOn(twitter, 'getTweets');
    });

    afterEach(() => {
      expect(twitter.getTweets).toHaveBeenCalledWith(req.params.handle, res);
    });

    it('should call getTweets', () => {
      twittermiddleware.tweets(req, res, body);
    });
  }); // tweets

  describe('friends', () => {
    let req, res, body;

    beforeEach(() => {
      req = {
        params: {
          handle: 'handle'
        }
      };
      res = '{res}';
      body = '{body}';

      spyOn(twitter, 'getFriends');
    });

    afterEach(() => {
      expect(twitter.getFriends).toHaveBeenCalledWith(req.params.handle, res);
    });

    it('should call getFriends', () => {
      twittermiddleware.friends(req, res, body);
    });
  }); // friends

  describe('followers', () => {
    let req, res, body;

    beforeEach(() => {
      req = {
        params: {
          handle: 'handle'
        }
      };
      res = '{res}';
      body = '{body}';

      spyOn(twitter, 'getFollowers');
    });

    afterEach(() => {
      expect(twitter.getFollowers).toHaveBeenCalledWith(req.params.handle, res);
    });

    it('should call getFriends', () => {
      twittermiddleware.followers(req, res, body);
    });
  }); // followers
});
