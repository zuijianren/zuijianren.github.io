import{_ as e,o as l,c as s,O as a}from"./chunks/framework.a9f788d3.js";const f=JSON.parse('{"title":"profile文件配置","description":"","frontmatter":{},"headers":[],"relativePath":"modules/unix/ubuntu/环境配置/profile文件配置.md"}'),o={name:"modules/unix/ubuntu/环境配置/profile文件配置.md"},p=a('<h1 id="profile文件配置" tabindex="-1">profile文件配置 <a class="header-anchor" href="#profile文件配置" aria-label="Permalink to &quot;profile文件配置&quot;">​</a></h1><p><code>.bash_profile</code> 和 <code>.zprofile</code> 等都是 linux 的配置文件, 具体使用哪个配置文件取决于用户的shell环境. 当用户登录时, shell会读取并执行特定于正在使用的shell的配置文件. 例如: 在.bash_profile的情况下, Bash会读取并执行它. 对于.zprofile，Zsh会读取并执行它. 注意: 配置文件在登录过程中只被加载一次</p><ul><li><p>查看默认 shell 环境命令:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> $SHELL</span></span></code></pre></div></li><li><p>配置默认加载非当前环境的 profile</p><ul><li><p>在当前默认读取的 profile 文件中添加如下命令, 其中 <code>.bash_profile</code> 代表要读取的 profile 文件</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.bash_profile</span></span></code></pre></div></li></ul></li></ul>',3),t=[p];function i(n,r,c,_,d,h){return l(),s("div",null,t)}const m=e(o,[["render",i]]);export{f as __pageData,m as default};
