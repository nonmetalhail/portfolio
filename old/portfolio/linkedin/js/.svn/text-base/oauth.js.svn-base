function do_login() {
  IG.login(function (response) {
   console.log(response);
      if (response.code) {
          document.location = '/instagram/callback?code=' + response.code;
      } else if (response.session) {
          document.location = '/instagram/load_user?ig_user_id=' + response.session.id;
      }
  }, {
      response_type: 'code',
      scope: ['comments','likes', 'relationships']
  });
}

window.igAsyncInit = function() {
  IG.init({
      client_id: 'c7367a799fe34e03829b0613a743fa92',
      logging: true,
      check_status: false
  });
};

(function() {
  var e = document.createElement('script'); e.async = true;
  e.src = document.location.protocol +
      'js/ig-min.js';
  document.getElementById('ig-root').appendChild(e);
}());



// IG.init({
//     client_id: YOUR_CLIENT_ID,
//     check_status: true, // check and load active session
//     cookie: true // persist a session via cookie
// });

// // client side access_token flow (implicit)
// IG.login(function (response) {
//     if (response.session) {
//         // user is logged in
//     }
// }, {scope: ['comments', 'likes']});

// // client side code flow
// IG.login(function (response) {
//     if (response.code) {
//         // user authorized app, send code to server
//         // for access_token exchange
//     }
// }, {response_type: 'code', scope: ['comments', 'likes']});