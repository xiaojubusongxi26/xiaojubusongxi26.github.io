var posts=["/posts/CSS/修改SVG图标颜色/","/posts/CSS/常用样式/","/posts/JavaScript/ES6+/","/posts/JavaScript/JS对象遍历/","/posts/JavaScript/Symbol应用/","/posts/JavaScript/常用正则/","/posts/React/React学习笔记/","/posts/Koa/Koa学习笔记/","/posts/CSS/scss换肤效果/","/posts/Vue/Vue3代码规范/","/posts/Vue/纯前端导出excel文件/","/posts/Vue/Vue3工具/","/posts/uniapp/uniapp开发文档/","/posts/uniapp/uniapp中http、https混合问题/","/posts/CSS/Grid布局/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };