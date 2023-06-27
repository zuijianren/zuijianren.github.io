import{_ as s,o as a,c as l,O as n}from"./chunks/framework.a9f788d3.js";const D=JSON.parse('{"title":"git 环境配置","description":"","frontmatter":{},"headers":[],"relativePath":"modules/system/ubuntu/环境配置/git环境配置.md"}'),o={name:"modules/system/ubuntu/环境配置/git环境配置.md"},e=n(`<h1 id="git-环境配置" tabindex="-1">git 环境配置 <a class="header-anchor" href="#git-环境配置" aria-label="Permalink to &quot;git 环境配置&quot;">​</a></h1><h2 id="安装-git" tabindex="-1">安装 git <a class="header-anchor" href="#安装-git" aria-label="Permalink to &quot;安装 git&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span></span></code></pre></div><h2 id="配置-git" tabindex="-1">配置 git <a class="header-anchor" href="#配置-git" aria-label="Permalink to &quot;配置 git&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">夏纤云</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yiqiejiaogeizaixia@gmail.com</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h2 id="生成-ssh-密钥" tabindex="-1">生成 ssh 密钥 <a class="header-anchor" href="#生成-ssh-密钥" aria-label="Permalink to &quot;生成 ssh 密钥&quot;">​</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ssh-keygen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ed25519</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">yiqiejiaogeizaixia@gmail.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 所有选项默认即可</span></span></code></pre></div>`,7),t=[e];function p(c,i,r,C,y,h){return a(),l("div",null,t)}const g=s(o,[["render",p]]);export{D as __pageData,g as default};
