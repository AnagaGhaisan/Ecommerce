'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "584c95c82f6adc2680b5038d6ea2ac13",
"version.json": "1d372fba9fb1842e3d0ff26a7782daf1",
"index.html": "fead6ebddc4d37990a0534a9a697fb4e",
"/": "fead6ebddc4d37990a0534a9a697fb4e",
"main.dart.js": "8f18e2a76388b55388e2e749166a8665",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5ebe97d0a14d799977b2d38509cbc390",
"assets/AssetManifest.json": "2983dad47408ab086225d4fd3def5e1f",
"assets/NOTICES": "5228617f921c8ea0896a610454762c91",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "0820f4876e285c60f4ba5bcc828c9457",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5239b7cf958231d23f9045a5576b9d1a",
"assets/fonts/MaterialIcons-Regular.otf": "74ea3412d97e4c8946da6b4c92371aaf",
"assets/assets/images/mastercard-2.png": "03c20b63d4ffa13484f48fac9d2e32b2",
"assets/assets/images/Pattern%2520Success.png": "20dfd9e68343e96d7a0eef80547cf7ed",
"assets/assets/images/product%25201%2520image.png": "d22ed624beffb93913bb3436bd8f9e6a",
"assets/assets/images/shoes2.png": "e746c8992abd29da966cf91f8da87290",
"assets/assets/images/fedex-express.png": "5c65ce272dc58c3dd0b416f0549f23e4",
"assets/assets/images/ps4_console_white_1.png": "070751496c7e7e8a3beee49c52fc4eba",
"assets/assets/images/ps4_console_white_3.png": "08c0901faebb16d9547fea1d651a795d",
"assets/assets/images/wireless%2520headset.png": "dd4c3f943adb93a516441e8068058b2c",
"assets/assets/images/ps4_console_white_2.png": "fdc127c9033115e9ff73d9abcec601c1",
"assets/assets/images/visa.png": "e5102f3cf10261b0cf2ddb4c27e66f14",
"assets/assets/images/ps4_console_white_4.png": "c06cfaab26ed218bdf3eadab54a97067",
"assets/assets/images/ps4_console_blue_2.png": "f321803db42a1852afeebcc740edae90",
"assets/assets/images/Image%2520Popular%2520Product%25203.png": "fcbdff37daf1bf2aca91b6bc9323c4ca",
"assets/assets/images/Image%2520Popular%2520Product%25202.png": "0daef779816bf4febf8967c5b8c9ddb3",
"assets/assets/images/ps4_console_blue_3.png": "69c388ccfc8f00f0815de3696f0dae25",
"assets/assets/images/glap.png": "562f67ce5b89f0fd52b82756866f5c6f",
"assets/assets/images/Profile%2520Image.png": "0efef95a7cd5133bf68ae7893f8c6665",
"assets/assets/images/ps4_console_blue_1.png": "0085bd0d4680ea7e99d92fbd1a2d67df",
"assets/assets/images/Image%2520Popular%2520Product%25201.png": "af5c7d2b62467e5340990c2c18d04841",
"assets/assets/images/splash_3.png": "c300773a1e5688e646673c340d1edeef",
"assets/assets/images/ps4_console_blue_4.png": "b9d0ed66e7040ef25f41501c143734b5",
"assets/assets/images/splash_2.png": "d1dc79732a2b60c6fac6baee21e4bcf8",
"assets/assets/images/Image%2520Banner%25203.png": "ac22df8189dc403ff2e113489fb114b4",
"assets/assets/images/Image%2520Banner%25202.png": "1d233e6648a139a8b30d63489e852fc8",
"assets/assets/images/success.png": "a125515759dc028812af8a9e853c4e97",
"assets/assets/images/splash_1.png": "c1c1b439d108b5aa8590824ed9647191",
"assets/assets/images/google-pay.png": "515fdb5d6b0c72ab7ff1d020715da990",
"assets/assets/images/apple-pay.png": "8ed30196e39ee689aa2cc5b604da80ee",
"assets/assets/images/paypal.png": "fdd28064849926e343b82d25e9df0a03",
"assets/assets/images/tshirt.png": "eaa8d7a86210783a28569afcd67632c6",
"assets/assets/icons/Search%2520Icon.svg": "90ec5ba2756ffa45faf4770e692b2fa5",
"assets/assets/icons/Log%2520out.svg": "85bc88461b4d037927ff57f4197b38ec",
"assets/assets/icons/Plus%2520Icon.svg": "22d2e8a46faf4319801d97d02749f473",
"assets/assets/icons/receipt.svg": "98463f063439864364056baea0da0f32",
"assets/assets/icons/User%2520Icon.svg": "47178e0339296781a8a71c21310578d8",
"assets/assets/icons/Parcel.svg": "379c0339c294ab5e10660a14c15f678e",
"assets/assets/icons/Chat%2520bubble%2520Icon.svg": "690ff344716b35c4b3bca747f8fcf6b6",
"assets/assets/icons/User.svg": "804cafef4e2b0efa931f3bc21a3b5762",
"assets/assets/icons/Flash%2520Icon.svg": "c5c56b4c7d7d7ae4c567beeaa8d9bee5",
"assets/assets/icons/Bill%2520Icon.svg": "7b102b1a305c98da7813d8000ed828b6",
"assets/assets/icons/Shop%2520Icon.svg": "6784588d5eef12108b531d5570febce5",
"assets/assets/icons/Question%2520mark.svg": "b171ea601a7f0345eed066c723ad91d4",
"assets/assets/icons/Cart%2520Icon.svg": "752872cfcccbaf92b65ec66633edadd8",
"assets/assets/icons/Lock.svg": "bac3c4f99e37023794cccc30e75855a1",
"assets/assets/icons/Settings.svg": "aa9374faf86162d6593693deaffda805",
"assets/assets/icons/Mail.svg": "a17ceb58992745f3c5e2e2942a1383a7",
"assets/assets/icons/Star%2520Icon.svg": "63429a4c513ececf825411f5a2980773",
"assets/assets/icons/Discover.svg": "06f6b0eef7b905dabcedc52fc8f52ba8",
"assets/assets/icons/Bell.svg": "30a496373812f1caed5c0a92f63efa6b",
"assets/assets/icons/Game%2520Icon.svg": "2394af22fb27b206d558e9d64290fe1e",
"assets/assets/icons/arrow_right.svg": "4ba609b81d9129a84b74643c9cc5a6b4",
"assets/assets/icons/Gift%2520Icon.svg": "a8a7fa81f4b696e90b1caf523e9c921b",
"assets/assets/icons/Close.svg": "c5c4b371923103b1789d2db8bf1e8f1e",
"assets/assets/icons/Back%2520ICon.svg": "4a80560d80ed642959f4935a50058d88",
"assets/assets/icons/Trash.svg": "119c42fe61113459ee8152b5dd28454b",
"assets/assets/icons/facebook-2.svg": "16b921d23a8762a12910ccfee7f39456",
"assets/assets/icons/Cash.svg": "4f14e28ecd7f9ed7b877c81f5b01b2f7",
"assets/assets/icons/Heart%2520Icon.svg": "978b66b40230447da334ac024a84e3e1",
"assets/assets/icons/Phone.svg": "ddef5e7aafc40ec56d8d4731601e20f6",
"assets/assets/icons/Success.svg": "79cf72017b837d781dffd57f13cd5d7c",
"assets/assets/icons/Call.svg": "0e0c4bcdaa90d0abe39eaac9f2b32ac1",
"assets/assets/icons/google-icon.svg": "c6b0756bf8af54751022f8eb8a4a726e",
"assets/assets/icons/Conversation.svg": "dcbaf0ff5dd40adeeb1f062a76dca67c",
"assets/assets/icons/remove.svg": "e3a82aa454c2666a35bb87dfe0e6a81a",
"assets/assets/icons/twitter.svg": "b191cb5452effcf214547f81fb614c36",
"assets/assets/icons/Error.svg": "78dafb761b77912a31a7053357c4a631",
"assets/assets/icons/Heart%2520Icon_2.svg": "611da53d056a7a63fe31f93d76bd2e72",
"assets/assets/icons/Location%2520point.svg": "0299ffed4603f6d6584d3090a6ceb98f",
"assets/assets/icons/Check%2520mark%2520rounde.svg": "3cfcecb4a3a823fbb924966b5c4e0cdb",
"assets/assets/icons/Camera%2520Icon.svg": "7454895a968d9637f2cc84b80a36ceb3",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
