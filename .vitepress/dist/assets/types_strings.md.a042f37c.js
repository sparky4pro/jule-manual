import{_ as e,o as t,c as s,Q as r}from"./chunks/framework.7cd3ab18.js";const u=JSON.parse('{"title":"The str Type","description":"","frontmatter":{},"headers":[],"relativePath":"types/strings.md","filePath":"types/strings.md"}'),i={name:"types/strings.md"},a=r('<h1 id="the-str-type" tabindex="-1">The <code>str</code> Type <a class="header-anchor" href="#the-str-type" aria-label="Permalink to &quot;The `str` Type&quot;">​</a></h1><h2 id="fields" tabindex="-1">Fields <a class="header-anchor" href="#fields" aria-label="Permalink to &quot;Fields&quot;">​</a></h2><p><code>len: int</code> Character count of string. It is can constant if string is literal.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><p><code>fn has_prefix(self, sub: str): bool</code><br> Reports string has prefix as specified substring or not.</p><hr><p><code>fn has_suffix(self, sub: str): bool</code><br> Reports string has suffix as specified substring or not.</p><hr><p><code>fn find(self, sub: str): int</code><br> Returns index of first matched item with specified substring, returns -1 if not exist any match.<br> Starts searching at left of string to right.</p><hr><p><code>fn rfind(self, sub: str): int</code><br> Returns index of first matched item with specified substring, returns -1 if not exist any match.<br> Starts searching at right of string to left.</p><hr><p><code>fn ltrim(self, bytes: str): str</code><br> Trims string by specified bytes at left. Each character is each byte.</p><hr><p><code>fn rtrim(self, bytes: str): str</code><br> Trims string by specified bytes at right. Each character is each byte.</p><hr><p><code>fn trim(self, bytes: str): str</code><br> Trims string by specified bytes at left and right. Each character is each byte.</p><hr><p><code>fn split(self, sub: str, n: int): []str</code><br> Splits the string into the specified number of parts to the specified substring.<br> Returns empty slice if n is equals to zero.<br> Returns all parts if n less than zero.</p><hr><p><code>fn replace(self, sub: str, new: str, n: int): str</code><br> Replaces all substrings matching sub in the string with new.<br> Returns same string if n is equals to zero.<br> Replaces all matches if n less than zero.</p>',21),n=[a];function o(c,h,d,f,l,p){return t(),s("div",null,n)}const m=e(i,[["render",o]]);export{u as __pageData,m as default};
