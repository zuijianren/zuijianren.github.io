import{_ as s,o as a,c as n,O as e}from"./chunks/framework.a9f788d3.js";const A=JSON.parse('{"title":"apt 镜像修改","description":"","frontmatter":{},"headers":[],"relativePath":"linux/环境配置/apt镜像修改.md"}'),t={name:"linux/环境配置/apt镜像修改.md"},r=e(`<h1 id="apt-镜像修改" tabindex="-1">apt 镜像修改 <a class="header-anchor" href="#apt-镜像修改" aria-label="Permalink to &quot;apt 镜像修改&quot;">​</a></h1><p>apt初始源在国内很慢, 因此需要修改为国内的镜像地址, 下方是对应版本 20.04 的镜像地址:</p><div class="language-list"><button title="Copy Code" class="copy"></button><span class="lang">list</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">deb https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse</span></span>
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
<span class="line"><span style="color:#A6ACCD;">deb-src https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse</span></span></code></pre></div>`,3),l=[r];function i(p,o,c,u,m,d){return a(),n("div",null,l)}const _=s(t,[["render",i]]);export{A as __pageData,_ as default};
