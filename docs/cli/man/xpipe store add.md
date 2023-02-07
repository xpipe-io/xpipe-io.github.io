# xpipe store add

<h2 id="_name">Name</h2>
<div class="sectionbody">
<p>xpipe-store-add - Adds a new data store through an interactive dialog.</p>
</div>
<div id="preamble">
<div class="sectionbody">
<div class="paragraph">
<p>The type of the data store has to be supplied at the command invocation. To obtain a list of possible data store types, use the xpipe store types command.</p>
</div>
<div class="paragraph">
<p>This command can also store piped input data by storing the data in the internal X-Pipe storage. In this case, the data store type has to be blank. Furthermore, the store name has to be specified with the name option as there is no interactivity in this piped case.</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_synopsis">Synopsis</h2>
<div class="sectionbody">
<div class="paragraph">
<p><strong>xpipe store add</strong> [<strong>-n</strong>[=<em>&lt;name&gt;</em>]] [<em>&lt;type&gt;</em>]</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_description">Description</h2>
<div class="sectionbody">

</div>
</div>
<div class="sect1">
<h2 id="_options">Options</h2>
<div class="sectionbody">
<div class="dlist">
<dl>
<dt class="hdlist1"><strong>-n</strong>, <strong>--name</strong>[=<em>&lt;name&gt;</em>]</dt>
<dd>
<p>The store name. If this option is not specified, you can also set the name interactively at the end of the data store creation process.</p>
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
<dt class="hdlist1">[<em>&lt;type&gt;</em>]</dt>
<dd>
<p>The store type id.</p>
</dd>
</dl>
</div>
</div>
</div>
