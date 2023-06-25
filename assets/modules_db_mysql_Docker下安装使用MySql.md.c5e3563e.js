import{_ as s,o as a,c as l,O as o}from"./chunks/framework.a9f788d3.js";const A=JSON.parse('{"title":"Docker 下安装使用 Mysql","description":"","frontmatter":{},"headers":[],"relativePath":"modules/db/mysql/Docker下安装使用MySql.md"}'),e={name:"modules/db/mysql/Docker下安装使用MySql.md"},n=o('<h1 id="docker-下安装使用-mysql" tabindex="-1">Docker 下安装使用 Mysql <a class="header-anchor" href="#docker-下安装使用-mysql" aria-label="Permalink to &quot;Docker 下安装使用 Mysql&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql5.7</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3306</span><span style="color:#C3E88D;">:3306</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/srv/mysql/data:/var/lib/mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/srv/mysql/conf.d:/etc/mysql/conf.d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">MYSQL_ROOT_PASSWORD=</span><span style="color:#F78C6C;">123456</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql:5.7</span></span></code></pre></div><h2 id="进入-mysql-容器" tabindex="-1">进入 Mysql 容器 <a class="header-anchor" href="#进入-mysql-容器" aria-label="Permalink to &quot;进入 Mysql 容器&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql5.7</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span></span></code></pre></div>',5),p=[n];function t(c,r,y,C,d,D){return a(),l("div",null,p)}const _=s(e,[["render",t]]);export{A as __pageData,_ as default};
