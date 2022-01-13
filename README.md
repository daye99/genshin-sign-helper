## 原神签到

自动获取原神每日福利

## 教程

### 1. 获取 Cookie

浏览器打开 https://bbs.mihoyo.com/ys/ 并登录账号

#### 1.1 方法一

 按`F12`，打开`开发者工具`，找到`Network`并点击

 按`F5`刷新页面，按下图复制`Cookie`

![](https://picgo-1300387158.cos.ap-guangzhou.myqcloud.com/img/20220113183948.png)

 当触发`Debugger`时，可尝试按`Ctrl + F8`关闭，然后再次刷新页面，最后复制`Cookie`

#### 1.2 方法二

 复制以下代码

```js
var cookie = document.cookie;
var ask = confirm('Cookie:' + cookie + '\n\n是否复制内容到剪切板？');
if (ask == true) {
    copy(cookie);
    msg = cookie;
} else {
    msg = 'Cancel';
}

```



按`F12`，打开`开发者工具`，找到`Console`并点击

命令行粘贴代码并运行，获得类似`Cookie:xxxxxx`的输出信息

`xxxxxx`部分即为所需复制的`Cookie`，点击确定复制

### 2.使用项目

`Fork`项目，点击`Settings ->Secrets -> new repository secret `

`Name`填入`COOKIE`

`value`粘贴我们复制的值

![](https://picgo-1300387158.cos.ap-guangzhou.myqcloud.com/img/20220113182549.png)

![](https://picgo-1300387158.cos.ap-guangzhou.myqcloud.com/img/20220113184433.png)

### 3.Server酱微信通知

点击扫码关注登录[server酱](https://sct.ftqq.com/login)，点击SendKey，复制

再如上图

`Name`为`SENDKEY`

`Value`为粘贴的值



> 注：Name中填写的SENDKEY及COOKIE必须为大写、必须为大写、必须为大写

然后回到项目，点击`Actions`

![](https://picgo-1300387158.cos.ap-guangzhou.myqcloud.com/img/20220113185056.png)

![](https://picgo-1300387158.cos.ap-guangzhou.myqcloud.com/img/20220113185226.png)

最后点击`Run workflow`就完成了

## 开发

这个项目的开发离不开两位大佬的开源项目支持

https://github.com/sirodeneko/genshin-sign/blob/HEAD/README.md#L62-L92（Python）

https://github.com/PonKing66/genshi-helper（Java）

在这再次膜拜两位大佬，下面协议都是出自sirodeneko大佬的复制啊哈哈哈哈

## 协议

使用 genshin-sign-helper即表明，您知情并同意：

- 此代码通过模拟浏览器使用 Cookies 登录米游社网页，点击页面完成签到来实现签到。功能通过官方公开的 API 实现，并非游戏外挂

- 用户之 Cookie 被储存于 Github 服务器，只供本项目使用。若 Github 服务器被攻破，则您的 Cookie 有遭到泄露的风险。除此之外，开发者无权获取您的 Cookie；即使是用户，一旦创建完成`Secrets`，也无法再次从中查看 Cookie
