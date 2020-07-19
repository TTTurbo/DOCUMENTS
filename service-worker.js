/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "24077d1091405479bfd83cd2e6f4d51b"
  },
  {
    "url": "app.png",
    "revision": "d07c372a8c70ea8e2e3aacfa97c957f1"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "d07c372a8c70ea8e2e3aacfa97c957f1"
  },
  {
    "url": "assets/css/0.styles.92e91394.css",
    "revision": "f97c3a3beca3eedf48f2d56ac5d3f14c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8710abea.js",
    "revision": "2deffd1125cf7043615b88a90d3f5903"
  },
  {
    "url": "assets/js/11.61fbb43c.js",
    "revision": "3f2ac1197f0ce878dad5794a61615ef7"
  },
  {
    "url": "assets/js/12.666581df.js",
    "revision": "a47250c1d0bfb31435d30caa7c402796"
  },
  {
    "url": "assets/js/13.e4b6bd7d.js",
    "revision": "2a45ba5c0acbb1646ec6c6e776c31d63"
  },
  {
    "url": "assets/js/14.05ae4924.js",
    "revision": "6e8fe3a018dbb98f917bddf757bdbdec"
  },
  {
    "url": "assets/js/15.ea726797.js",
    "revision": "67e39cd572229a9c202e829240d337f1"
  },
  {
    "url": "assets/js/3.9270a624.js",
    "revision": "2db7ef9db8137813513f3d44b88e2917"
  },
  {
    "url": "assets/js/4.36fcb5ce.js",
    "revision": "aefc2be55ab7127ad6c1dff4a4c9bb0f"
  },
  {
    "url": "assets/js/5.ee414668.js",
    "revision": "c1f60dfc4cc1bdce209434d740e5a1cb"
  },
  {
    "url": "assets/js/6.0f71ad1c.js",
    "revision": "892053091ac44a8fecd1c4e644774cd5"
  },
  {
    "url": "assets/js/7.d795aceb.js",
    "revision": "ecfac5d01bcf76678592ba16c61ec347"
  },
  {
    "url": "assets/js/8.71d1986e.js",
    "revision": "b6c7c0d198cbf70d1e75c1882f8f1e84"
  },
  {
    "url": "assets/js/9.13ac3631.js",
    "revision": "7422172d541ca5984387d6f24e8731b8"
  },
  {
    "url": "assets/js/app.fb434758.js",
    "revision": "2f82deb46b3f2c792a5b12cf8fe8d4b5"
  },
  {
    "url": "assets/js/vendors~docsearch.b9a44f16.js",
    "revision": "0642e126421c773efc01637484188aaa"
  },
  {
    "url": "base/interview/javascript-value-range.png",
    "revision": "869bcbbc99e38b6f63d56e2ab5663b00"
  },
  {
    "url": "bookmark/bookmark-scripts.gif",
    "revision": "b2a54dfaadc2464d22fc6909c7206e09"
  },
  {
    "url": "computer/data-write.html",
    "revision": "0b83f579b08d56a1407b3cff1a13da5d"
  },
  {
    "url": "computer/how-networks-work-1.jpg",
    "revision": "7f320d1baecd3659cb1bb8fd53ad4657"
  },
  {
    "url": "computer/how-networks-work.html",
    "revision": "063cea0347725bae035ac51eb7c79a17"
  },
  {
    "url": "computer/index.html",
    "revision": "fb13611c846a3e92d9fc8169e2fb407b"
  },
  {
    "url": "frontend/javascript/prototype-chains-function.jpg",
    "revision": "8eedf7b0b7a667ee145161d4a53f23a9"
  },
  {
    "url": "frontend/javascript/prototype-chains.jpg",
    "revision": "eaeeff3482a626079a774577eff9aeec"
  },
  {
    "url": "git/git_lifecycle.png",
    "revision": "b65dc1f4245a9a1230e78bac21f5ee6f"
  },
  {
    "url": "git/github-add-ssh-key.png",
    "revision": "9f897b5e1f906c6f540d90791c0492ac"
  },
  {
    "url": "guide/about-me.html",
    "revision": "798450dc1664c5cd359a96291d05b331"
  },
  {
    "url": "guide/docs-style.html",
    "revision": "669b2db91a59bc90338caf1ab514cb57"
  },
  {
    "url": "guide/index.html",
    "revision": "a95c1086589f5147a519cd20c35d0bb9"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "135c2aba490db14f8200cd772995f35d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "a4271dfcd229369a16522b36b4241afa"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "dc7ac2de31649de6f88df341b87d744f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "6171be93b691ce4f9546def624bcadc3"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "f5ff44fc10f11d717056f8108e7f4a9d"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "cee47d4601b5a5c4dada3693ffd3ef94"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "61eb9ebb22b0c68b6e236b859094a865"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c430ea29655773327896f7d65fe94c46"
  },
  {
    "url": "index.html",
    "revision": "6c329fc4f2f275b5a1905e51ed090ab2"
  },
  {
    "url": "os/manjaro/konsole-profile-command.png",
    "revision": "ac1c4dd351d9eba32f589e5dee7407be"
  },
  {
    "url": "os/manjaro/screen-flashing-when-recording.png",
    "revision": "3a69b153e25bbc18c0d9bccb0405f4b1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
