import{_ as s,o as a,c as e,O as n}from"./chunks/framework.a9f788d3.js";const A=JSON.parse('{"title":"apt 配置","description":"","frontmatter":{},"headers":[],"relativePath":"modules/unix/ubuntu/环境配置/apt配置.md"}'),t={name:"modules/unix/ubuntu/环境配置/apt配置.md"},r=n(`<h1 id="apt-配置" tabindex="-1">apt 配置 <a class="header-anchor" href="#apt-配置" aria-label="Permalink to &quot;apt 配置&quot;">​</a></h1><h2 id="镜像修改" tabindex="-1">镜像修改 <a class="header-anchor" href="#镜像修改" aria-label="Permalink to &quot;镜像修改&quot;">​</a></h2><p>apt初始源在国内很慢, 因此需要修改为国内的镜像地址, 下方是对应版本 20.04 的镜像地址:</p><div class="language-list"><button title="Copy Code" class="copy"></button><span class="lang">list</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">deb https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;">deb-src https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">deb https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;">deb-src https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">deb https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;">deb-src https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># deb https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;"># deb-src https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">deb https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse</span></span>
<span class="line"><span style="color:#A6ACCD;">deb-src https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse</span></span></code></pre></div>`,4),l=[r];function i(o,p,c,u,m,d){return a(),e("div",null,l)}const b=s(t,[["render",i]]);export{A as __pageData,b as default};
