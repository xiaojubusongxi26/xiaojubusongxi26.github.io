var posts=["/posts/CSS/CSS绘制三角形/","/posts/CSS/Grid布局/","/posts/CSS/overflow详解/","/posts/CSS/SVG描边动画/","/posts/CSS/Mac使用触控板滚动至边界出现白边/","/posts/CSS/修改SVG图标颜色/","/posts/CSS/常用样式/","/posts/CSS/高度过渡实现方案/","/posts/JavaScript/ES6+/","/posts/JavaScript/JS对象遍历/","/posts/CSS/scss换肤效果/","/posts/JavaScript/JS里的宽高距离/","/posts/JavaScript/Symbol应用/","/posts/JavaScript/visibilitychange事件/","/posts/JavaScript/使用EyeDropper方法取色/","/posts/JavaScript/常用正则/","/posts/JavaScript/window对象/","/posts/JavaScript/标签页通信/","/posts/JavaScript/获取图片主要颜色/","/posts/Koa/Koa学习笔记/","/posts/Other/搭建hexo博客/","/posts/React/React学习笔记/","/posts/Vue/Vue3代码规范/","/posts/Vue/Vue3工具/","/posts/Vue/纯前端导出excel文件/","/posts/日常生活/2024年记/","/posts/uniapp/uniapp中http、https混合问题/","/posts/uniapp/uniapp开发文档/","/posts/服务器/Nginx安装及部署本地项目/","/posts/前端工程化/webpack小记/","/posts/案例/H5网页iPhone底部出现安全距离问题解决/","/posts/HTML/特殊HTML属性/","/posts/案例/flex布局子元素撑开父元素/","/posts/案例/使用canvas实现代码雨效果/","/posts/案例/打断离开页面操作/","/posts/案例/在小程序中实现图片压缩/","/posts/案例/根据链接解析网站favicon图标/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };