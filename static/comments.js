// static/comments.js
(function() {
  var script = document.createElement('script');
  script.src = 'https://utteranc.es/client.js';
  script.setAttribute('repo', 'anonymousx54713/anonymousx_comments'); // <-- Change this!
  script.setAttribute('issue-term', 'pathname');
  script.setAttribute('theme', 'github-dark'); // Or 'github-light' etc.
  script.crossOrigin = 'anonymous';
  script.async = true;
  document.getElementById('comments').appendChild(script);
})();
