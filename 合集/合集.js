addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  if (url.pathname === '/tvbox') {
    return new Response(TVBOX_JSON, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store'
      }
    })
  }
  if (url.pathname === '/xymm') {
    return Response.redirect('https://iptv.171998.xyz/live.txt', 302)
  }
  return new Response('Not Found', {status: 404})
}

const TVBOX_JSON = '{"spider":"","wallpaper":"","sites":[{"key":"量子","name":"量子","type":3,"api":"https://cj.lziapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"非凡","name":"非凡","type":3,"api":"http://cj.ffzyapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"暴风","name":"暴风","type":3,"api":"https://bfzyapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"索尼","name":"索尼","type":3,"api":"https://suoniapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"光速","name":"光速","type":3,"api":"https://api.guangsuapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"百度","name":"百度","type":3,"api":"https://api.apibdzy.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"无尽","name":"无尽","type":3,"api":"https://api.wujinapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"红牛","name":"红牛","type":3,"api":"https://www.hongniuzy2.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"飞速","name":"飞速","type":3,"api":"https://www.feisuzy.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"鱼乐","name":"鱼乐","type":3,"api":"https://api.yuleapi.com/api.php/provide/vod","searchable":1,"quickSearch":1,"changeable":1},{"key":"豆瓣","name":"豆瓣","type":3,"api":"csp_Douban","searchable":0,"quickSearch":0,"changeable":1},{"key":"哔哩","name":"哔哩","type":3,"api":"csp_Bili","searchable":1,"quickSearch":1,"changeable":0},{"key":"南瓜影视","name":"南瓜影视","type":3,"api":"csp_NanGua","searchable":1,"quickSearch":1,"changeable":1},{"key":"菜妮丝","name":"菜妮丝","type":3,"api":"csp_CaNei","searchable":1,"quickSearch":1,"changeable":1},{"key":"小苹果","name":"小苹果","type":3,"api":"csp_LiteApple","searchable":1,"quickSearch":1,"changeable":1},{"key":"360","name":"360","type":3,"api":"csp_SP360","searchable":1,"quickSearch":1,"changeable":1}],"lives":[]}'
