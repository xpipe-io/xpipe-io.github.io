# xpipe source peek

<h2 id="_name">Name</h2>
<div class="sectionbody">
<p>xpipe-source-peek - Peeks and displays the contents of a data source</p>
</div>
<div class="sect1">
<h2 id="_synopsis">Synopsis</h2>
<div class="sectionbody">
<div class="paragraph">
<p><strong>xpipe source peek</strong> [<strong>-l</strong>=<em>&lt;lines&gt;</em>] [<em>&lt;source&gt;</em>]</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_description">Description</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Displays the first few lines of content of a data source. Only the actual content that is displayed is actually queried, i.e. the complete data source is not read.</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_options">Options</h2>
<div class="sectionbody">
<div class="dlist">
<dl>
<dt class="hdlist1"><strong>-l</strong>, <strong>--lines</strong>=<em>&lt;lines&gt;</em></dt>
<dd>
<p>The maximum amount of lines to use to display the data source content</p>
<div class="literalblock">
<div class="content">
<pre>Default: 10</pre>
</div>
</div>
</dd>
</dl>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_arguments">Arguments</h2>
<div class="sectionbody">
<div class="dlist">
<dl>
<dt class="hdlist1">[<em>&lt;source&gt;</em>]</dt>
<dd>
<p>The data source reference. A data source reference supports multiple different formats:</p>
<div class="ulist">
<ul>
<li>
<p>If not specified, the latest data source will automatically be used</p>
</li>
<li>
<p>If a data source name is specified, the matching data source will be selected</p>
</li>
<li>
<p>In case there are multiple data sources with the same name, a fully qualified data source id can be used</p>
</li>
</ul>
</div>
</dd>
</dl>
</div>
</div>
</div>
