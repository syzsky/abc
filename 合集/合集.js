addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname
  
  // TVBox 高清/4K 配置
  if (path === '/tvbox') {
    const tvbox = {
      spider: "",
      wallpaper: "",
      sites: [
        {key: "量子", name: "量子", type: 3, api: "https://cj.lziapi.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
        {key: "非凡", name: "非凡", type: 3, api: "http://cj.ffzyapi.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
        {key: "暴风", name: "暴风", type: 3, api: "https://bfzyapi.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
        {key: "索尼", name: "索尼", type: 3, api: "https://suoniapi.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
        {key: "光速", name: "光速", type: 3, api: "https://api.guangsuapi.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
        {key: "百度", name: "百度", type: 3, api: "https://api.apibdzy.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
        {key: "无尽", name: "无尽", type: 3, api: "https://api.wujinapi.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1}
      ],
      lives: []
    }
    return new Response(JSON.stringify(tvbox), {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store'
      }
    })
  }
  
  // 直播源代理
  if (path === '/xymm') {
    const upstream = 'http://45.192.97.170:5211/632718'
    const response = await fetch(upstream, {
      headers: {
        'User-Agent': request.headers.get('User-Agent') || 'Mozilla/5.0'
      }
    })
    const text = await response.text()
    return new Response(text, {
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store'
      }
    })
  }
  
  // 默认返回 404
  return new Response('Not Found', {status: 404})
}
