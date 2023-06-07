import{_ as a,o as s,c as l,O as n}from"./chunks/framework.a9f788d3.js";const d=JSON.parse('{"title":"JAVA","description":"","frontmatter":{},"headers":[],"relativePath":"java/index.md"}'),o={name:"java/index.md"},p=n(`<h1 id="java" tabindex="-1">JAVA <a class="header-anchor" href="#java" aria-label="Permalink to &quot;JAVA&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>Java是一种广泛使用的计算机编程语言, 拥有跨平台、面向对象、泛型编程的特性, 广泛应用于企业级Web应用开发和移动应用开发。</p><h3 id="java-的三大特性" tabindex="-1">java 的三大特性 <a class="header-anchor" href="#java-的三大特性" aria-label="Permalink to &quot;java 的三大特性&quot;">​</a></h3><p>封装, 继承, 多态</p><h3 id="java-的权限修饰符" tabindex="-1">java 的权限修饰符 <a class="header-anchor" href="#java-的权限修饰符" aria-label="Permalink to &quot;java 的权限修饰符&quot;">​</a></h3><ul><li><p>public</p><blockquote><p>公有</p></blockquote></li><li><p>default</p><blockquote><p>包</p></blockquote></li><li><p>protected</p><blockquote><p>子类</p></blockquote></li><li><p>private</p><blockquote><p>私有</p></blockquote></li></ul><h3 id="jdk-jre-jvm-的区别" tabindex="-1">jdk, jre, jvm 的区别 <a class="header-anchor" href="#jdk-jre-jvm-的区别" aria-label="Permalink to &quot;jdk, jre, jvm 的区别&quot;">​</a></h3><blockquote><p>三者属于包含关系</p></blockquote><ul><li><p>JDK</p><blockquote><p>Java SE Development Kit.</p><p>Java 标准开发包</p></blockquote><p>提供编译, 运行 Java 程序所需的各种工具和资源, 包括 Java 编译器,Java 运行时环境, 以及常用的 Java 类库等</p></li><li><p>JRE</p><blockquote><p>Java Runtime Environment</p><p>Java 运行环境</p></blockquote><p>用于解释执行 Java 的字节码文件。普通用户而只需要安装 JRE 来运行 Java 程序. 而程序开发者必须安装 JDK 来编译, 调试程序</p></li><li><p>JVM</p><blockquote><p>Java Virtual Mechinal</p><p>Java 虚拟机 是 JRE 的一部分</p></blockquote><p>整个 java 实现跨平台的最核心的部分, 负责解释执行字节码文件, 是可运行 java 字节码文件的虚拟计算机。所有平台的上的 JVM 向编译器提供相同的接口, 而编译器只需要面向虚拟机, 生成虚拟机能识别的代码, 然后由虚拟机来解释执行。</p></li></ul><h2 id="快速体验" tabindex="-1">快速体验 <a class="header-anchor" href="#快速体验" aria-label="Permalink to &quot;快速体验&quot;">​</a></h2><ul><li><p>创建一个 HelloWorld.java 文件, 写入以下内容:</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HelloWorld</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">static</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">[]</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">args</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        System</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">println</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello, world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li><li><p>使用 cmd 窗口, 执行如下命令进行体验:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 将 java 代码编译为 class 文件</span></span>
<span class="line"><span style="color:#FFCB6B;">javac</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HelloWorld.java</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果java代码中带有中文字符, 会报错 -&gt; 错误: 编码GBK的不可映射字符</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 可以用如下的方法进行编译</span></span>
<span class="line"><span style="color:#FFCB6B;">javac</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-encoding</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">utf-8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HelloWorld.java</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 执行class文件 不能带class后缀</span></span>
<span class="line"><span style="color:#FFCB6B;">java</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HelloWorld</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 反编译class文件</span></span>
<span class="line"><span style="color:#FFCB6B;">javap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HelloWorld</span></span>
<span class="line"><span style="color:#FFCB6B;">javap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-verbose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HelloWorld</span></span></code></pre></div></li></ul>`,12),e=[p];function t(c,r,i,y,C,A){return s(),l("div",null,e)}const u=a(o,[["render",t]]);export{d as __pageData,u as default};
