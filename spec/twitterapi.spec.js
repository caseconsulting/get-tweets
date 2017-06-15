const twitterapi = require('../server/twitterapi');
const client = require('twitter');

xdescribe("twitterapi", function() {
  describe('getTweets', function(){
    let name, res, params;

    beforeEach(function(){
      name = '';
      res = '';
      params = {
        screen_name: name,
        exclude_replies: true,
        include_rts: false
      };

      spyOn(client, 'get').and.returnValue('clientResponse');
      spyOn(twitterapi, '_timelineCB').and.returnValue('timelineResponse');
    });
    afterEach(function(){
      expect(client.get).toHaveBeenCalledWith('statuses/user_timeline', params, 'timelineResponse');
      expect(twitterapi._timelineCB(err, tweets, response));
    });
    it('Should return', function(){
      expect(twitterapi.getTweets(name, res)).toEqual('clientResponse');
    });
  });
});
