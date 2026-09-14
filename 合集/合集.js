addEventListener('fetch', event => {
  event.respondWith(new Response(CONFIG, {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store'
    }
  }))
})

const CONFIG = '{"spider":"","wallpaper":"","sites":[{"key":"量子","name":"量子","type":3,"api":"https://cj.lziapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"暴风","name":"暴风","type":3,"api":"https://bfzyapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"索尼","name":"索尼","type":3,"api":"https://suoniapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"无尽","name":"无尽","type":3,"api":"https://api.wujinapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"光速","name":"光速","type":3,"api":"https://api.guangsuapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"非凡","name":"非凡","type":3,"api":"http://cj.ffzyapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"百度","name":"百度","type":3,"api":"https://api.apibdzy.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1}],"lives":[]}'
