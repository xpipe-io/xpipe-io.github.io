# xpipe store

<h2 id="_name">Name</h2>
<div class="sectionbody">
<p>xpipe-store - Commands for data store handling</p>
</div>
<div class="sect1">
<h2 id="_synopsis">Synopsis</h2>
<div class="sectionbody">
<div class="paragraph">
<p><strong>xpipe store</strong> &lt;subcommand&gt;</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_description">Description</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Various commands that work on data stores. To print help information about a specific sub command, use xpipe store help &lt;subcommand&gt;.</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_commands">Commands</h2>
<div class="sectionbody">
<div class="dlist">
<dl>
<dt class="hdlist1"><a href="xpipe-store-help.html"><strong>help</strong></a></dt>
<dd>
<p>Displays help information about the specified command</p>
</dd>
<dt class="hdlist1"><a href="xpipe-store-add.html"><strong>add</strong></a></dt>
<dd>
<p>Adds a new data store through an interactive dialog.</p>
<div class="paragraph">
<p>The type of the data store has to be supplied at the command invocation. To obtain a list of possible data store types, use the xpipe store types command.</p>
</div>
<div class="paragraph">
<p>This command can also store piped input data by storing the data in the internal X-Pipe storage. In this case, the data store type has to be blank. Furthermore, the store name has to be specified with the name option as there is no interactivity in this piped case.</p>
</div>
</dd>
<dt class="hdlist1"><a href="xpipe-store-mv.html"><strong>mv</strong>, <strong>rename</strong>, <strong>move</strong></a></dt>
<dd>
<p>Renames an existing data store.</p>
</dd>
<dt class="hdlist1"><a href="xpipe-store-rm.html"><strong>rm</strong>, <strong>remove</strong>, <strong>delete</strong>, <strong>del</strong>, <strong>rem</strong></a></dt>
<dd>
<p>Removes an existing data store from the X-Pipe storage. Note that this does not mean that the underlying store is deleted as well.</p>
</dd>
<dt class="hdlist1"><a href="xpipe-store-ls.html"><strong>ls</strong>, <strong>list</strong></a></dt>
<dd>
<p>List all saved data stores.</p>
</dd>
<dt class="hdlist1"><a href="xpipe-store-edit.html"><strong>edit</strong></a></dt>
<dd>
<p>Edits an existing data store through an interactive dialog.</p>
</dd>
<dt class="hdlist1"><a href="xpipe-store-info.html"><strong>info</strong></a></dt>
<dd>
<p>Displays information about the data store.</p>
</dd>
<dt class="hdlist1"><a href="xpipe-store-types.html"><strong>types</strong></a></dt>
<dd>
<p>List all available data store type ids.</p>
</dd>
<dt class="hdlist1"><a href="xpipe-store-drain.html"><strong>drain</strong></a></dt>
<dd>
<p>Creates an X-Pipe drain that blocks until a connection from a data producer is made.</p>
</dd>
<dt class="hdlist1"><a href="xpipe-store-sink.html"><strong>sink</strong></a></dt>
<dd>
<p>Creates an X-Pipe sink that blocks until a connection from a data consumer is made.</p>
</dd>
</dl>
</div>
</div>
</div>
