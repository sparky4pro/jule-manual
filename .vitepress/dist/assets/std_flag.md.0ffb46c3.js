import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.7cd3ab18.js";const m=JSON.parse('{"title":"std::flag","description":"","frontmatter":{},"headers":[],"relativePath":"std/flag.md","filePath":"std/flag.md"}'),l={name:"std/flag.md"},o=n(`<h1 id="std-flag" tabindex="-1">std::flag <a class="header-anchor" href="#std-flag" aria-label="Permalink to &quot;std::flag&quot;">​</a></h1><h2 id="traits" tabindex="-1">Traits <a class="header-anchor" href="#traits" aria-label="Permalink to &quot;Traits&quot;">​</a></h2><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">trait</span><span style="color:#E1E4E8;"> CommonFlag {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Returns name of flag.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">self</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">str</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Returns short name of flag.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">short</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">self</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">rune</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Returns description of flag.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">what</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">self</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">str</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Resets data to default.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">reset</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">self</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Common behaviors of flags.</p><h2 id="structures" tabindex="-1">Structures <a class="header-anchor" href="#structures" aria-label="Permalink to &quot;Structures&quot;">​</a></h2><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> FlagSet</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Flag parser for command-line arguments.</p><p><strong>Methods:</strong></p><p><code>static fn new(): &amp;FlagSet</code><br> Returns new flagset.</p><p><code>fn find_flag(mut self, name: str): CommonFlag</code><br> Returns flag by name, returns nil if not exist.</p><p><code>fn find_flag_short(mut self, name: rune): CommonFlag</code><br> Returns flag by short name, returns nil if not exist.</p><p><code>fn flags(mut self): []CommonFlag</code><br> Returns all flags.</p><p><code>fn parse(mut self, args: []str)!: []str</code><br> Parse arguments and process flags. Returns non-flag content. Exceptional always is string and holds error message.</p><p><strong>Syntax:</strong></p><ul> Long names can be used with double dash (\` -- \`). Short names can be used with a single dash ( \`-\` ). When Boolean flags are used, they use the opposite of their default values. Floating-point values are the same as the \`parse_float\` function provided by \`std::conv\` package. Decimal, octal, binary and hexadecimal formats are supported for signed and unsigned integer types. String types accept values ​​directly. <p>Octal values are represented by starts with 0o or <code>0</code> prefix. Hexadecimal values are represented by starts with <code>0x</code> prefix. Binary values are represented by starts with <code>0b</code> prefix.</p><p>A space is required to give a value. When a single dash (-) is used, all following characters are considered short names and thus collective use is allowed. If the short name flags used need values, the values ​should follow respectively.</p></ul><p><code>fn reset(mut self)</code><br> Resets all flags to default value.</p><p><code>fn add[T](mut self, name: str, short: rune, default: T, what: str): &amp;T</code><br> Adds new flag and returns allocated reference variable. Panics if name or short name is alreadys exist. Zero (0) short names will be ignored. Panics if used unsupported type.</p><p><strong>Supported types are:</strong></p><ul><li><code>int</code></li><li><code>uint</code></li><li><code>f64</code></li><li><code>str</code></li><li><code>bool</code></li></ul><p><code>fn add_var[T](mut self, mut var: &amp;T, name: str, short: rune, what: str)</code><br> Same with add method but do not allocates new reference, uses existing.</p>`,20),t=[o];function r(p,c,i,d,u,f){return a(),e("div",null,t)}const y=s(l,[["render",r]]);export{m as __pageData,y as default};
