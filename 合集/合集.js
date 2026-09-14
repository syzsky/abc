addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname
  
  if (path === '/tvbox') {
    return getTVBoxConfig()
  }
  
  if (path === '/xymm' || path === '/xymm/live.txt') {
    return getLiveSource()
  }
  
  return new Response('Not Found', { status: 404 })
}

function getTVBoxConfig() {
  const config = {
    spider: "https://raw.githubusercontent.com/joevess/IPTV/master/vendor/drpy/drpy.min.js;md5;auto",
    wallpaper: "https://tuapi.eees.cc/api.php?category=fengjing&type=302",
    lives: [
      {name: "初秋语", type: 0, url: "https://raw.githubusercontent.com/duominisu/main/main/live.txt", playerType: 2},
      {name: "FongMi", type: 0, url: "https://raw.githubusercontent.com/FongMi/CatVodSpider/main/json/live.txt", playerType: 1},
      {name: "本地", type: 0, url: "/xymm/live.txt", playerType: 1}
    ],
    sites: [
      // VOD API 源 (支持 4K/高清)
      {key: "量子", name: "量子", type: 3, api: "https://cj.lziapi.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "非凡", name: "非凡", type: 3, api: "http://cj.ffzyapi.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "暴风", name: "暴风", type: 3, api: "https://bfzyapi.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "索尼", name: "索尼", type: 3, api: "https://suoniapi.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "光速", name: "光速", type: 3, api: "https://api.guangsuapi.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "百度", name: "百度", type: 3, api: "https://api.apibdzy.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "无尽", name: "无尽", type: 3, api: "https://api.wujinapi.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "红牛", name: "红牛", type: 3, api: "https://www.hongniuzy2.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "飞速", name: "飞速", type: 3, api: "https://www.feisuzy.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "鱼乐", name: "鱼乐", type: 3, api: "https://api.yuleapi.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "U酷", name: "U酷", type: 3, api: "https://api.ukuapi.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "樱花", name: "樱花", type: 3, api: "https://api.yhzy.cc/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "酷点", name: "酷点", type: 3, api: "https://kudian10.com/api.php/provide/vod", searchable: 1, quickSearch: 1, changeable: 1},
      
      // DRPY 爬虫源
      {key: "豆瓣", name: "豆瓣", type: 3, api: "csp_Douban", searchable: 0, quickSearch: 0, changeable: 1},
      {key: "哔哩", name: "哔哩", type: 3, api: "csp_Bili", searchable: 1, quickSearch: 1, changeable: 0},
      {key: "影视仓", name: "影视仓", type: 3, api: "csp_AppYsV2", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "南瓜影视", name: "南瓜影视", type: 3, api: "csp_NanGua", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "菜妮丝", name: "菜妮丝", type: 3, api: "csp_CaNei", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "小苹果", name: "小苹果", type: 3, api: "csp_LiteApple", searchable: 1, quickSearch: 1, changeable: 1},
      
      // XPath 爬虫
      {key: "360", name: "360", type: 3, api: "https://raw.githubusercontent.com/joesspider/TVBox/main/xpath/360.xml", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "腾云驾雾", name: "腾云驾雾", type: 3, api: "csp_Tengyun", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "百忙无果", name: "百忙无果", type: 3, api: "csp_BaiMao", searchable: 1, quickSearch: 1, changeable: 1},
      
      // 直播源
      {key: "本地直播", name: "本地直播", type: 3, api: "csp_LocalLive", searchable: 0, quickSearch: 0, changeable: 0},
      
      // 搜索源
      {key: "小纸条", name: "小纸条", type: 3, api: "csp_Gitcafe", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "找资源", name: "找资源", type: 3, api: "csp_Zhaozy", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "Up云搜", name: "Up云搜", type: 3, api: "csp_Upyunso", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "宜搜", name: "宜搜", type: 3, api: "csp_Yisou", searchable: 1, quickSearch: 1, changeable: 1},
      {key: "Alist", name: "Alist", type: 3, api: "csp_AList", searchable: 1, quickSearch: 1, changeable: 1},
      
      // 短视频
      {key: "抖音", name: "抖音", type: 3, api: "csp_Douyin", searchable: 0, quickSearch: 0, changeable: 0},
      {key: "快手", name: "快手", type: 3, api: "csp_Kuaishou", searchable: 0, quickSearch: 0, changeable: 0}
    ]
  }
  
  return new Response(JSON.stringify(config, null, 2), {
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store'
    }
  })
}

async function getLiveSource() {
  try {
    const upstream = 'https://raw.githubusercontent.com/duominisu/main/main/live.txt'
    const resp = await fetch(upstream, {redirect: 'follow'})
    if (resp.ok) {
      return new Response(resp.body, {
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-store'
        }
      })
    }
  } catch (e) {}
  
  // 备用：返回简易直播源
  const fallback = '#EXTM3U\n#EXT-X-VERSION:3\n'
  return new Response(fallback, {
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
