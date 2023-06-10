'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "4f5d83ddb61e41e3f4a2e7aa63d590f0",
"assets/AssetManifest.smcbin": "96cd64335177ad7c56ff2bbfce565aea",
"assets/assets/fonts/CustomIcons.ttf": "758e7a81325e9309c1c830e17a2ed7d1",
"assets/assets/icons/address.svg": "591417f54fd32a90f6e11b5afc942a41",
"assets/assets/icons/add_payment.svg": "4aa8d31e14ae125e800aa62133c6bc17",
"assets/assets/icons/app_icon_512.png": "b210120928388dca72a6ab9a23c988d5",
"assets/assets/icons/city.svg": "081f6c10247167ce28923ce8068cc687",
"assets/assets/icons/confirmed.svg": "a064314ba24099a3e4a20ba73e5f63e2",
"assets/assets/icons/cost.svg": "fdc10bf17e059928869b80d22010c046",
"assets/assets/icons/country.svg": "67a5203a1cb3b7f0848f4a54691ad07b",
"assets/assets/icons/customers.svg": "929694ff094161fc2c2aa77a03e5b8ed",
"assets/assets/icons/information-point.svg": "49a3b770c9882aa8ca3ace0e029a1fe3",
"assets/assets/icons/info_hand.svg": "b323c3cd382307ad84ea68bb8fbc8a61",
"assets/assets/icons/offers.svg": "9dbf72538738672f4fe4e6806317be6a",
"assets/assets/icons/office-building.svg": "b013de5f8be1f262a0e4c8495465fb2c",
"assets/assets/icons/paid1.svg": "03a044ef26da3350de1263edc57b2def",
"assets/assets/icons/paid2.svg": "4655f077801986e9a587fb64d4b02975",
"assets/assets/icons/paid3.svg": "c44a53d091fe9d3f7b7372cb985e5e21",
"assets/assets/icons/payments.svg": "95686477bd8368b15009b66e7eb87194",
"assets/assets/icons/pdf.svg": "f0ecdf6c8c6ec7af0157e730ba6cea6c",
"assets/assets/icons/pdf_1.svg": "abcb4bba932eec0356a23ef9a74c5c87",
"assets/assets/icons/percentage_discount.svg": "a970c623eb687de5c6f517be651d6d10",
"assets/assets/icons/stock.svg": "d4cdbe9cd7f8e8d36f54fe477e2aa81e",
"assets/assets/icons/stock1.svg": "44d6830df6e5177780618a29eee98c1f",
"assets/assets/icons/tag_discount.svg": "76d49621cc4024163530c7345ecdf313",
"assets/assets/icons/tag_vat.svg": "93e8b51acafa4a8d931e155a45f22860",
"assets/assets/icons/title_tag.svg": "bfa1fe85efb528340bf7f6aa4d5ccab1",
"assets/assets/icons/unconfirmed.svg": "5eb3904e317e3c498735684c3123c457",
"assets/assets/icons/unpaid.svg": "34412a1b2c097b3a9207fc023c366eba",
"assets/assets/icons/yen.svg": "03fca1d0cfffdf16123415c7606ccdbf",
"assets/assets/icons/yen_total.svg": "b287633b067ca4aa04f639dcd9636655",
"assets/assets/icons/yen_total2.svg": "c64ac54dbc98423c5dd3df5196c63709",
"assets/assets/images/kecpe.png": "9d3230df5bea71a724d52a298ff14ea3",
"assets/assets/images/kenarlik.png": "55b9933dc73bb39c3ac8dd12664885a9",
"assets/assets/images/pdf_footer.JPG": "bd3c5379bdea6d80a708d2745a7ddec3",
"assets/assets/images/pdf_footer2.jpg": "bd3c5379bdea6d80a708d2745a7ddec3",
"assets/assets/images/sara_logo.png": "c755734316e3f8ff0f1a8860f318e0c8",
"assets/assets/images/sara_logo.svg": "db1c448d9062d5d8b29cae3d45f2ac98",
"assets/assets/images/sara_logo_min.png": "4096c37cd20a70247798fc12f8ae9464",
"assets/assets/images/splash_screen.png": "4c3be77c5362e1651daa266f62d6c70c",
"assets/FontManifest.json": "f8ec27312bf02bf4ac4f918c39934293",
"assets/fonts/MaterialIcons-Regular.otf": "ed37988eda5ce517fd311a89338f89cc",
"assets/NOTICES": "dfa173f31ce061240ae42285c5c18cb9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "070be8844d4fa5eddabe7f726800c475",
"/": "070be8844d4fa5eddabe7f726800c475",
"main.dart.js": "9f7a2e770b65cbcac3411be393e2b544",
"manifest.json": "09198458400785187cbe15e74aa1c8cb",
"splash/img/dark-1x.png": "1decf156f7556c2a2fb52b8e3c76406d",
"splash/img/dark-2x.png": "880153951f0c69a407635d8396ccf966",
"splash/img/dark-3x.png": "df8e8bc01826ed07ce9bfd705261d5d9",
"splash/img/dark-4x.png": "6491667862767765eff8c6d85a903f14",
"splash/img/light-1x.png": "1decf156f7556c2a2fb52b8e3c76406d",
"splash/img/light-2x.png": "880153951f0c69a407635d8396ccf966",
"splash/img/light-3x.png": "df8e8bc01826ed07ce9bfd705261d5d9",
"splash/img/light-4x.png": "6491667862767765eff8c6d85a903f14",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "cbd53cd601ee4cb081e77dd37414f2ff",
"version.json": "294a532d8a4cca5b8f9732895a497d08"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
