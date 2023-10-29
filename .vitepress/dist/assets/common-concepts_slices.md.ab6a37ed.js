import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.7cd3ab18.js";const F=JSON.parse('{"title":"Slices","description":"","frontmatter":{},"headers":[],"relativePath":"common-concepts/slices.md","filePath":"common-concepts/slices.md"}'),l={name:"common-concepts/slices.md"},p=e(`<h1 id="slices" tabindex="-1">Slices <a class="header-anchor" href="#slices" aria-label="Permalink to &quot;Slices&quot;">​</a></h1><p>A slice is a dynamic allocated array, for this reason it doesn&#39;t have a constant size expression. Slices are heap allocated and use Jule&#39;s reference counting memory management. A slice can be <code>nil</code> and its default value is <code>nil</code>. Slices are mutable.</p><p>Slices are defined using <code>[ ]</code>. Actually, you might remember this from the array section of documentation. They actually mean slice by default. When used in arrays, so examples always use type annotation, which indicates that it&#39;s an array. If no type annotation is given, a slice literal defaults to the data type of its first element as element type.</p><p>Example to slices:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> my_slice: []</span><span style="color:#F97583;">str</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nil</span></span>
<span class="line"><span style="color:#E1E4E8;">    my_slice </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&quot;Hello&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Jule&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;slices!&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(my_slice)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Nil is the default value of slices.</p><p>As seen at the first statement, slices should be defined with a data type. The second statement sets the value of <code>my_slice</code> as <code>[&quot;Hello&quot;, &quot;Jule&quot;, &quot;slices!&quot;]</code>. The last statement prints <code>my_slice</code> to console.</p><p>Output of program:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">[Hello Jule slices!]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="passing-slices-to-variadic-parameter" tabindex="-1">Passing Slices to Variadic Parameter <a class="header-anchor" href="#passing-slices-to-variadic-parameter" aria-label="Permalink to &quot;Passing Slices to Variadic Parameter&quot;">​</a></h2><p>We know that <code>...</code> is used for Variadic parameters. We also know that each variadic parameter is actually a slice. So can we pass an slice to a variadic parameter? Yes. Again, the <code>...</code> operator is used for this.</p><p>For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sum</span><span style="color:#E1E4E8;">(values: ...</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> total: </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> _, i </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> values {</span></span>
<span class="line"><span style="color:#E1E4E8;">        total </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> i</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">ret</span><span style="color:#E1E4E8;"> total</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> my_slice </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">32</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">53</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sum</span><span style="color:#E1E4E8;">(my_slice...)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(result)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>As seen in the example above, the owned variable <code>my_slice</code> holds a slice. Its elements are compatible with the variadic parameter. To send, it is sufficient to follow the <code>...</code> operator.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you pass slice to variadic parameter, you can&#39;t pass more value.</p></div><h2 id="slicing" tabindex="-1">Slicing <a class="header-anchor" href="#slicing" aria-label="Permalink to &quot;Slicing&quot;">​</a></h2><p>You can slice compatible types with indexing. As a result of slicing a slice, no new allocation is created, no copying is performed. The relevant memory section of the sliced slice is referenced and its length is limited by the length of the slice.</p><h3 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">EXPRESSION[START_EXPRESSION:TO_EXPRESSION]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#E1E4E8;">my_slice[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>At the example above, slice items start at <code>2</code> to <code>10</code> The <code>10</code> index is not included. So if you want to slice all components of a slice after the index <code>2</code>, the length of the slice needs to be given.</p><h3 id="auto-indexing" tabindex="-1">Auto Indexing <a class="header-anchor" href="#auto-indexing" aria-label="Permalink to &quot;Auto Indexing&quot;">​</a></h3><p>If you don&#39;t give the start index expression, <code>0</code> is assumed. If you don&#39;t give the &#39;to index&#39; expression, the whole length is assumed.</p><p>For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> my_slice </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(my_slice[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]) </span><span style="color:#6A737D;">// [3, 4, 5]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(my_slice[:])   </span><span style="color:#6A737D;">// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(my_slice[:</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">]) </span><span style="color:#6A737D;">// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(my_slice[</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">:])  </span><span style="color:#6A737D;">// [5, 6, 7, 8, 9, 10]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="supported-types" tabindex="-1">Supported Types <a class="header-anchor" href="#supported-types" aria-label="Permalink to &quot;Supported Types&quot;">​</a></h3><p>Arrays, slices and strings.</p><h2 id="allocating-slices" tabindex="-1">Allocating Slices <a class="header-anchor" href="#allocating-slices" aria-label="Permalink to &quot;Allocating Slices&quot;">​</a></h2><p>A specifically sized slice can be allocated with the builtin <code>make</code> function.</p><p>For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">make</span><span style="color:#E1E4E8;">([]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(s)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>At the example above, the <code>s</code> variable is 20 sized slices and all elements initialized with default value.</p><p>The <code>make</code> function can also allocate slices with capacity.</p><p>For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">make</span><span style="color:#E1E4E8;">([]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(s)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>At the example above, the <code>s</code> variable is 20 sized slices and first 20 elements initialized with default value. Slice capacity is <code>100</code>.</p><h2 id="copy-slices" tabindex="-1">Copy Slices <a class="header-anchor" href="#copy-slices" aria-label="Permalink to &quot;Copy Slices&quot;">​</a></h2><p>For copy slices, here is the built-in <code>copy</code> function. The built-in <code>copy</code> function copies source elements into destination slice and returns count of copied elements.</p><p>For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> slice_1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> slice_2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">make</span><span style="color:#E1E4E8;">([]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">copy</span><span style="color:#E1E4E8;">(slice_2, slice_1)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="append-elements-into-slices" tabindex="-1">Append Elements into Slices <a class="header-anchor" href="#append-elements-into-slices" aria-label="Permalink to &quot;Append Elements into Slices&quot;">​</a></h2><p>For append elements into slice, here is the built-in <code>append</code> function. The built-in <code>append</code> function appends elements into slice if slice already have enough capacity for new elements. If slice have not enough capacity for new elements, the <code>copy</code> function makes new allocation with new capacity, copies source slice elements to new allocation and then appends elements to new allocation. Returns appended slice.</p><p>For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uintptr</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">s[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]))</span></span>
<span class="line"><span style="color:#E1E4E8;">s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">append</span><span style="color:#E1E4E8;">(s, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uintptr</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">s[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The example above, shows basic append operation. The slice <code>s</code> has 5 element with 5 length and 5 capacity. Then we appending new elements into slice. The slice <code>s</code> has 9 elements with 9 length now. But remember capacity thing. In the beginning, slice <code>s</code> have not enough capacity for more 4 elements. Therefore, the <code>append</code> function returns new allocated slice, so you can see there is difference between addresses of slice&#39;s first element.</p><p>Same example with capacity:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">make</span><span style="color:#E1E4E8;">([]</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">append</span><span style="color:#E1E4E8;">(s, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uintptr</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">s[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]))</span></span>
<span class="line"><span style="color:#E1E4E8;">s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">append</span><span style="color:#E1E4E8;">(s, </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">8</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">9</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uintptr</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">s[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>This time, you can see there is no difference between addresses of first slice&#39;s element. Because slice <code>s</code> allocated with 10 capacity, so the <code>append</code> function just copies new elements to slice and returns same destination slice allocation.</p>`,49),o=[p];function t(c,r,i,E,y,d){return a(),n("div",null,o)}const m=s(l,[["render",t]]);export{F as __pageData,m as default};
