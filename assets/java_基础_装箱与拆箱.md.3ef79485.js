import{_ as s,o as n,c as a,O as l}from"./chunks/framework.a9f788d3.js";const C=JSON.parse('{"title":"装箱与拆箱","description":"","frontmatter":{},"headers":[],"relativePath":"java/基础/装箱与拆箱.md"}'),p={name:"java/基础/装箱与拆箱.md"},o=l(`<h1 id="装箱与拆箱" tabindex="-1">装箱与拆箱 <a class="header-anchor" href="#装箱与拆箱" aria-label="Permalink to &quot;装箱与拆箱&quot;">​</a></h1><blockquote><p>装箱是指将值类型转换为对应的引用类型<br> 而拆箱则是将引用类型转换为值类型</p></blockquote><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 装箱</span></span>
<span class="line"><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">243</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//编译器转译为：Integer a = Integer.valueOf(243)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 拆箱</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">//编译器会修改成：int b = a.intValue();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 缓存[-128,127]之间的数字</span></span>
<span class="line"><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> i1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Integer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">valueOf</span><span style="color:#89DDFF;">(-</span><span style="color:#F78C6C;">128</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> i2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Integer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">valueOf</span><span style="color:#89DDFF;">(-</span><span style="color:#F78C6C;">128</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i1 </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> i2</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">//true 因为 -128 在缓存范围内</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">equals</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i2</span><span style="color:#89DDFF;">));</span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> i3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Integer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">valueOf</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">128</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#C792EA;">Integer</span><span style="color:#A6ACCD;"> i4 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Integer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">valueOf</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">128</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i3 </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> i4</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">//false 因为 128 不在缓存范围内</span></span>
<span class="line"><span style="color:#A6ACCD;">System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i3</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">equals</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i4</span><span style="color:#89DDFF;">));</span><span style="color:#676E95;font-style:italic;">//true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Integer对象将会自动生成一个缓存数组cache[256], 其值为[-128,127]之间, 如果请求封装的数字在这之间, 将会直接调用, 否则才会new一个新的对象  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 因此, i1 和 i2 引用的是同一个对象, “==”操作的结果为 true</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 而 i3 和 i4 的结果为 false</span></span></code></pre></div>`,3),e=[o];function t(c,r,y,D,F,i){return n(),a("div",null,e)}const _=s(p,[["render",t]]);export{C as __pageData,_ as default};
