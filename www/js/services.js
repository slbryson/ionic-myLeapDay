angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '153',
    lastText: 'A small size c-1900 line cut Gutta Percha ball without paint that is oxidizing.',
    cat: 'Gutta Percha',
    dimensions: 'width: 168px; height: 185px',
    face: 'img/153.png'
  }, {
    id: 1,
    name: '154',
    lastText: 'A c-1900 remade line cut solid Gutta Percha ball stamped "Silver Town" with a few minor iron marks.',
    cat: 'Gutta Percha',
    dimensions: 'width: 173px; height: 189px',
    face: 'img/154.png'
  }, {
    id: 2,
    name: '155',
    lastText: 'C-1900 Spalding "Vardon Flyer" Gutta Percha ball with multiple iron marks and 90% original paint that has faded to cream-light tan.',
    cat: 'Vardon Flyer',
    dimensions: 'width: 167px; height: 182px',
    face: 'img/155.png'
  }, {
    id: 3,
    name: '156',
    lastText: 'A British size "Goodrich Whippet" and "Patented April 11, \'99" boldly in very large lettering on the poles. The cover is a Triangle Pattern that has been repainted.',
    cat: 'Triangle',
    dimensions: 'width: 165px; height: 189px',
    face: 'img/156.png'
  }, {
    id: 4,
    name: '157',
    lastText: '"Goodrich Whippet" and "Patented April 11, \'99" boldly in small lettering on the poles. The cover is a Triangle Pattern with about 50-60% original painted faded to tan. Same cover design, with smaller triangles, as the "Meteor" P-209 in my 2nd edition. A nice display ball.',
    cat: 'Triangle',
    dimensions: 'width: 171px; height: 186px',
    face: 'img/157.png'
  }, {
    id: 5,
    name: '158',
    lastText: '"Standard, Pat. Feb 3, 03" on both poles of a wound center ball most likely made by Worthington. 90% original paint faded to a cream color with a few minor iron marks and a "Y" shaped crack in the Gutta Percha cover.',
    cat: 'Bramble',
    dimensions: 'width: 167px; height: 200px',
    face: 'img/158.png'
  }, {
    id: 6,
    name: '185',
    lastText: '"Fleetwing" and "Atlas" at the poles of an outstanding c-1920\'s Mesh with 8 panels colored black for identification. Nice ball for display.',
    cat: 'Meshed',
    dimensions: 'width: 178px; height: 203px',
    face: 'img/185.png'
  }, {
    id: 7,
    name: '186',
    lastText: '"Couples Two-Up" in green lettering at both poles of a c-1930\'s Mesh that is outstanding. This ball was made by MacGregor.',
    cat: 'Meshed',
    dimensions: 'width: 166px; height: 198px',
    face: 'img/186.png'
  }, {
    id: 8,
    name: '187',
    lastText: '"Tiger" at both poles of a c-1930\'s Mesh. No marks or evidence of play, however the cover is tan as 90% of the paint is gone.',
    cat: 'Meshed',
    dimensions: 'width: 165px; height: 192px',
    face: 'img/187.png'
  }, {
    id: 9,
    name: '191',
    lastText: '"Spalding-Fifty" at both poles of a c-1920\'s British size Dimple.',
    cat: 'Dimpled',
    dimensions: 'width: 173px; height: 193px',
    face: 'img/191.png'
  }, {
    id: 10,
    name: '192',
    lastText: '"Baby Dimple" surrounding two blue and two red dots at each pole. Spider web cover cracks keep this from a premium ball.',
    cat: 'Dimpled',
    dimensions: 'width: 173px; height: 197px',
    face: 'img/192.png'
  }, {
    id: 11,
    name: '193',
    lastText: 'A circa 1935-40 MINT new small size Dimple with "North British" in green at both poles. A few minor blemishes keeps this from superb mint.',
    cat: 'Dimpled',
    dimensions: 'width: 160px; height: 189px',
    face: 'img/193.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
