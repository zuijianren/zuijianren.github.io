import{_ as s,o as a,c as n,O as l}from"./chunks/framework.a9f788d3.js";const C=JSON.parse('{"title":"注解","description":"","frontmatter":{},"headers":[],"relativePath":"java/进阶/注解.md"}'),o={name:"java/进阶/注解.md"},p=l(`<h1 id="注解" tabindex="-1">注解 <a class="header-anchor" href="#注解" aria-label="Permalink to &quot;注解&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>不同于 xml 的另一种配置方式</p><blockquote><p>本质是一个 继承了 Annotation 接口的接口(可以反编译任意注解类进行验证)</p></blockquote><p>注意: 当使用注解时, 如果没有指定属性名, 直接赋值, 则会将该值赋给 value 属性</p><h2 id="元注解" tabindex="-1">元注解 <a class="header-anchor" href="#元注解" aria-label="Permalink to &quot;元注解&quot;">​</a></h2><ul><li><p>@Target 注解</p><blockquote><p>用于标识注解的作用目标</p></blockquote><ul><li><code>ElementType.TYPE</code><br> 允许被修饰的注解作用在类、接口和枚举上</li><li><code>ElementType.FIELD</code><br> 允许作用在属性字段上</li><li><code>ElementType.METHOD</code><br> 允许作用在方法上</li><li><code>ElementType.PARAMETER</code><br> 允许作用在方法参数上</li><li><code>ElementType.CONSTRUCTOR</code><br> 允许作用在构造器上</li><li><code>ElementType.LOCAL_VARIABLE</code><br> 允许作用在本地局部变量上</li><li><code>ElementType.ANNOTATION_TYPE</code><br> 允许作用在注解上</li><li><code>ElementType.PACKAGE</code><br> 允许作用在包上</li></ul></li><li><p>@Retention</p><blockquote><p>注解的声明周期</p></blockquote><ul><li><code>RetentionPolicy.Source</code>: 当前注解编译器可见, 不会写入class文件</li><li><code>RetentionPolicy.CLASS</code>: 类加载阶段丢弃, 会写入class文件</li><li><code>RetentionPolicy.RUNTIME</code>: 永久保存, 可以获取反射权限</li></ul></li><li><p>@Documented</p><blockquote><p>注解是否应该被包含在 JavaDoc 文档中</p></blockquote></li><li><p>@Inherited</p><blockquote><p>是否允许子类继承该注解</p></blockquote></li></ul><h2 id="预定义注解" tabindex="-1">预定义注解 <a class="header-anchor" href="#预定义注解" aria-label="Permalink to &quot;预定义注解&quot;">​</a></h2><ul><li>@Override <blockquote><p>方法重写</p></blockquote></li><li>@Derecated <blockquote><p>过时</p></blockquote></li><li>@SuppressWarnings <blockquote><p>压制警告</p></blockquote></li></ul><h2 id="应用" tabindex="-1">应用 <a class="header-anchor" href="#应用" aria-label="Permalink to &quot;应用&quot;">​</a></h2><h3 id="自定义注解" tabindex="-1">自定义注解 <a class="header-anchor" href="#自定义注解" aria-label="Permalink to &quot;自定义注解&quot;">​</a></h3><p>示例代码:</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Target</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">ElementType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">FIELD</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ElementType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">METHOD</span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Retention</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RetentionPolicy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">RUNTIME</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">MyAnnotation1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">value</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">value2</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">默认值</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">MyAnnotation1</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">throws</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Exception</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Class</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">Test</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> testClass </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Test</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">Method</span><span style="color:#A6ACCD;"> main </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> testClass</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getMethod</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[].</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 如果存在注解 MyAnnotation1 则进行如下处理，否则不处理</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">main</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isAnnotationPresent</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">MyAnnotation1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">)){</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 获取注解的属性值 value</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#C792EA;">MyAnnotation1</span><span style="color:#A6ACCD;"> annotation </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> main</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAnnotation</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">MyAnnotation1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">class</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">annotation</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">value</span><span style="color:#89DDFF;">());</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 2</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">annotation</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">value2</span><span style="color:#89DDFF;">());</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 默认值</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 没有数据获取，打印 null</span></span>
<span class="line"><span style="color:#A6ACCD;">            System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">null</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,14),e=[p];function t(c,r,D,y,F,A){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{C as __pageData,u as default};
