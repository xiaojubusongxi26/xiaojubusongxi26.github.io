var posts=["/posts/CSS/Grid布局/","/posts/CSS/scss换肤效果/","/posts/CSS/修改SVG图标颜色/","/posts/CSS/常用样式/","/posts/CSS/高度过渡实现方案/","/posts/JavaScript/ES6+/","/posts/JavaScript/JS对象遍历/","/posts/JavaScript/Symbol应用/","/posts/JavaScript/使用EyeDropper方法取色/","/posts/JavaScript/常用正则/","/posts/JavaScript/标签页通信/","/posts/Koa/Koa学习笔记/","/posts/React/React学习笔记/","/posts/Vue/Vue3代码规范/","/posts/Vue/Vue3工具/","/posts/Vue/纯前端导出excel文件/","/posts/uniapp/uniapp中http、https混合问题/","/posts/uniapp/uniapp开发文档/","/posts/前端工程化/webpack小记/","/posts/Other/搭建hexo博客/","/posts/HTML/特殊HTML属性/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };