(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{432:function(t,a,s){"use strict";s.r(a);var r=s(29),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("一直以来，从输入链接到页面显示内容经历了什么是一个非常常规的面试题，而 《网络是怎样连接的》目录已经很好的回答了这个问题。")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/computer/how-networks-work-1.jpg"),alt:"how-networks-work-1"}}),t._v(" "),s("h2",{attrs:{id:"第一章-浏览器生成消息-探索浏览器内部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一章-浏览器生成消息-探索浏览器内部"}},[t._v("#")]),t._v(" 第一章 浏览器生成消息 -- 探索浏览器内部")]),t._v(" "),s("h3",{attrs:{id:"_1-生成-http-请求消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成-http-请求消息"}},[t._v("#")]),t._v(" 1. 生成 HTTP 请求消息")]),t._v(" "),s("p",[t._v("生成 HTTP 前需要解析 URL：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. HTTP 协议")]),t._v("\nhttp://user:password@www.shanyuhai.top:80/dir/index.html\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# user 用户名（可省略）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# password 密码（可省略）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# www.shanyuhai.top Web 服务器域名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 80 端口（可省略）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /dir/index.html 文件的路径名")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. FTP 协议")]),t._v("\nftp://user:password@ftp.shanyuhai.top:21/dir/index.html\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# user 用户名（可省略）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# password 密码（可省略）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ftp.shanyuhai.top FTP 服务器域名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 21 端口（可省略）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /dir/index.html 文件的路径名")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 客户端本地文件")]),t._v("\nfile://localhost/home/shanyuhai/project/network/index.html\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# localhost 计算机名（可省略）")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /home/shanyuhai/project/network/index.html 文件的路径名")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mailto 邮件")]),t._v("\nmailto:shanyuhai@shanyuhai.top\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# shanyuhai@shanyuhai.top 邮件地址")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# news 新闻组")]),t._v("\nnews:comp.protocols.tcp\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# comp.protocols.tcp 新闻组名")]),t._v("\n")])])]),s("p",[t._v("HTTP 主要方法：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("方法")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("GET")]),t._v(" "),s("td",[t._v("获取 URI 指定的信息。如果 URI 指定的是文件，则返回文件的内容；如果 URI 指定的是 "),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/CGI",target:"_blank",rel:"noopener noreferrer"}},[t._v("CGI 程序"),s("OutboundLink")],1),t._v("，则返回该程序的输出数据。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("POST")]),t._v(" "),s("td",[t._v("从客户端向服务器发送数据。一般用于发送表单中填写数据等情况。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("HEAD")]),t._v(" "),s("td",[t._v("和 GET 基本相同，只不过它只返回 HTTP 的消息头（message header），而不返回数据的内容。用于获取文件最后更新时间等信息。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("OPTIONS")]),t._v(" "),s("td",[t._v("用于通知或查询通信选项。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("PUT")]),t._v(" "),s("td",[t._v("替换 URI 指定的服务器上的文件。如果 URI 指定的文件不存在，则创建该文件。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("DELETE")]),t._v(" "),s("td",[t._v("删除 URI 指定的服务器上的文件。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("TRACE")]),t._v(" "),s("td",[t._v("将服务器收到的请求行和头部（header）直接反给客户端。用于在使用代理的环境中检查改写请求的情况。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("CONNECT")]),t._v(" "),s("td",[t._v("使用代理传输加密消息时使用。")])])])]),t._v(" "),s("p",[t._v("在了解以上基础后就可以生成请求消息了：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<方法><空格><URI><空格><HTTP 版本>\n<字段名1>:<字段值>\n<字段名2>:<字段值>\n<字段名n>:<字段值>\n<空行>\n<消息体>\n")])])]),s("p",[t._v("第一行为"),s("strong",[t._v("请求行")]),t._v("，通过这一行就可以大致了解请求的内容。")]),t._v(" "),s("p",[t._v("第二部分一堆字段名被称为"),s("strong",[t._v("消息头")]),t._v("，每行包含一个头字段，用于表示请求行的附加信息。消息头的行数根据具体可变，一直延伸到空行为止。")]),t._v(" "),s("p",[s("strong",[t._v("消息体（message body）")]),t._v(" 包含客户端向服务器发送的数据，例如用 POST 方法向服务器发送的网页表单数据。")]),t._v(" "),s("h3",{attrs:{id:"_2-向-dns-服务器查询-web-服务器的-ip-地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-向-dns-服务器查询-web-服务器的-ip-地址"}},[t._v("#")]),t._v(" 2. 向 DNS 服务器查询 Web 服务器的 IP 地址")]),t._v(" "),s("h3",{attrs:{id:"_3-全世界-dns-服务器的大接力"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-全世界-dns-服务器的大接力"}},[t._v("#")]),t._v(" 3. 全世界 DNS 服务器的大接力")]),t._v(" "),s("h3",{attrs:{id:"_4-委托协议栈发送消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-委托协议栈发送消息"}},[t._v("#")]),t._v(" 4. 委托协议栈发送消息")]),t._v(" "),s("h2",{attrs:{id:"第二章-用电信号传递-tcp-ip-探索协议栈和网卡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二章-用电信号传递-tcp-ip-探索协议栈和网卡"}},[t._v("#")]),t._v(" 第二章 用电信号传递 TCP/IP -- 探索协议栈和网卡")]),t._v(" "),s("h3",{attrs:{id:"_1-创建套接字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建套接字"}},[t._v("#")]),t._v(" 1. 创建套接字")]),t._v(" "),s("h3",{attrs:{id:"_2-连接服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-连接服务器"}},[t._v("#")]),t._v(" 2. 连接服务器")]),t._v(" "),s("h3",{attrs:{id:"_3-收发数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-收发数据"}},[t._v("#")]),t._v(" 3. 收发数据")]),t._v(" "),s("h3",{attrs:{id:"_4-从服务器断开并删除套接字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-从服务器断开并删除套接字"}},[t._v("#")]),t._v(" 4. 从服务器断开并删除套接字")]),t._v(" "),s("h3",{attrs:{id:"_5-ip-与以太网的包收发操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-ip-与以太网的包收发操作"}},[t._v("#")]),t._v(" 5. IP 与以太网的包收发操作")]),t._v(" "),s("h3",{attrs:{id:"_6-udp-协议的收发操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-udp-协议的收发操作"}},[t._v("#")]),t._v(" 6. UDP 协议的收发操作")]),t._v(" "),s("h2",{attrs:{id:"第三章-从网络到网络设备-搜索集线器、交换机和路由器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三章-从网络到网络设备-搜索集线器、交换机和路由器"}},[t._v("#")]),t._v(" 第三章 从网络到网络设备 -- 搜索集线器、交换机和路由器")]),t._v(" "),s("h3",{attrs:{id:"_1-信号在网线和集线器中传输"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-信号在网线和集线器中传输"}},[t._v("#")]),t._v(" 1. 信号在网线和集线器中传输")]),t._v(" "),s("h3",{attrs:{id:"_2-交换机的包转发操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-交换机的包转发操作"}},[t._v("#")]),t._v(" 2. 交换机的包转发操作")]),t._v(" "),s("h3",{attrs:{id:"_3-路由器的包转发操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-路由器的包转发操作"}},[t._v("#")]),t._v(" 3. 路由器的包转发操作")]),t._v(" "),s("h3",{attrs:{id:"_4-路由器的附加功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-路由器的附加功能"}},[t._v("#")]),t._v(" 4. 路由器的附加功能")]),t._v(" "),s("h2",{attrs:{id:"第四章-通过接入网进入互联网内部-探索接入网和网络运营商"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四章-通过接入网进入互联网内部-探索接入网和网络运营商"}},[t._v("#")]),t._v(" 第四章 通过接入网进入互联网内部 -- 探索接入网和网络运营商")]),t._v(" "),s("h3",{attrs:{id:"_1-adsl-接入网的结构和工作方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-adsl-接入网的结构和工作方式"}},[t._v("#")]),t._v(" 1. ADSL 接入网的结构和工作方式")]),t._v(" "),s("h3",{attrs:{id:"_2-光纤接入网（ftth）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-光纤接入网（ftth）"}},[t._v("#")]),t._v(" 2. 光纤接入网（FTTH）")]),t._v(" "),s("h3",{attrs:{id:"_3-接入网中使用的-ppp-和隧道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-接入网中使用的-ppp-和隧道"}},[t._v("#")]),t._v(" 3. 接入网中使用的 PPP 和隧道")]),t._v(" "),s("h3",{attrs:{id:"_4-网络运营商的内部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-网络运营商的内部"}},[t._v("#")]),t._v(" 4. 网络运营商的内部")]),t._v(" "),s("h3",{attrs:{id:"_5-跨越运营商的网络包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-跨越运营商的网络包"}},[t._v("#")]),t._v(" 5. 跨越运营商的网络包")]),t._v(" "),s("h2",{attrs:{id:"第五章-服务器端的局域网有什么玄机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第五章-服务器端的局域网有什么玄机"}},[t._v("#")]),t._v(" 第五章 服务器端的局域网有什么玄机")]),t._v(" "),s("h3",{attrs:{id:"_1-web-服务器的部署地点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-web-服务器的部署地点"}},[t._v("#")]),t._v(" 1. Web 服务器的部署地点")]),t._v(" "),s("h3",{attrs:{id:"_2-防火墙的结构和原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-防火墙的结构和原理"}},[t._v("#")]),t._v(" 2. 防火墙的结构和原理")]),t._v(" "),s("h3",{attrs:{id:"_3-通过请求平分给多台服务器来平衡负载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过请求平分给多台服务器来平衡负载"}},[t._v("#")]),t._v(" 3. 通过请求平分给多台服务器来平衡负载")]),t._v(" "),s("h3",{attrs:{id:"_4-使用缓存服务器来分担负载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用缓存服务器来分担负载"}},[t._v("#")]),t._v(" 4. 使用缓存服务器来分担负载")]),t._v(" "),s("h3",{attrs:{id:"_5-内容分发服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-内容分发服务"}},[t._v("#")]),t._v(" 5. 内容分发服务")]),t._v(" "),s("h2",{attrs:{id:"第六章-请求到达-web-服务器，响应返回浏览器-短短几秒的-漫长旅行-迎来终点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第六章-请求到达-web-服务器，响应返回浏览器-短短几秒的-漫长旅行-迎来终点"}},[t._v("#")]),t._v(" 第六章 请求到达 Web 服务器，响应返回浏览器 -- 短短几秒的 “漫长旅行” 迎来终点")]),t._v(" "),s("h3",{attrs:{id:"_1-服务器概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-服务器概览"}},[t._v("#")]),t._v(" 1. 服务器概览")]),t._v(" "),s("h3",{attrs:{id:"_2-服务器的接收操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-服务器的接收操作"}},[t._v("#")]),t._v(" 2. 服务器的接收操作")]),t._v(" "),s("h3",{attrs:{id:"_3-web-服务器程序解释请求消息并作出响应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-web-服务器程序解释请求消息并作出响应"}},[t._v("#")]),t._v(" 3. Web 服务器程序解释请求消息并作出响应")]),t._v(" "),s("h3",{attrs:{id:"_4-浏览器响应消息并显示内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-浏览器响应消息并显示内容"}},[t._v("#")]),t._v(" 4. 浏览器响应消息并显示内容")])])}),[],!1,null,null,null);a.default=e.exports}}]);