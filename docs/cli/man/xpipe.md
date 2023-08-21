# xpipe

<h2 id="_name">Name</h2>
<div class="sectionbody">
<p>xpipe - Command-line interface for XPipe.</p>
</div>
<div class="sect1">
<h2 id="_synopsis">Synopsis</h2>
<div class="sectionbody">
<div class="paragraph">
<p><strong>xpipe</strong> &lt;subcommand&gt;</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_description">Description</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Command-line interface to interact with the XPipe daemon. Note that the feature set of the CLI is not gigantic as XPipe is primarily designed to be used via the GUI.</p>
</div>
<div class="paragraph">
<p>For a full reference, see either the man pages (local or online) or the help command, available via xpipe --help.</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_commands">Commands</h2>
<div class="sectionbody">
<div class="dlist">
<dl>
<dt class="hdlist1"><a href="xpipe-open"><strong>open</strong></a></dt>
<dd>
<p>Opens the XPipe application</p>
</dd>
<dt class="hdlist1"><a href="xpipe-launch"><strong>launch</strong></a></dt>
<dd>
<p>Launches a specified shell connection in your existing terminal session</p>
</dd>
<dt class="hdlist1"><a href="xpipe-sink"><strong>sink</strong></a></dt>
<dd>
<p>Write the contents of stdin to a remote file.</p>
</dd>
<dt class="hdlist1"><a href="xpipe-drain"><strong>drain</strong></a></dt>
<dd>
<p>Reads the contents of a remote file and prints it to stdout.</p>
</dd>
<dt class="hdlist1"><a href="xpipe-ls"><strong>ls</strong>, <strong>list</strong></a></dt>
<dd>
<p>List all stored connections and their ids</p>
</dd>
<dt class="hdlist1"><a href="xpipe-daemon"><strong>daemon</strong></a></dt>
<dd>
<p>Commands for controlling the XPipe daemon</p>
</dd>
<dt class="hdlist1"><a href="xpipe-version"><strong>version</strong></a></dt>
<dd>
<p>Reports version information</p>
</dd>
</dl>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_exit_codes">Exit Codes:</h2>
<div class="sectionbody">
<div class="dlist">
<dl>
<dt class="hdlist1"><strong>0</strong></dt>
<dd>
<p>Successful execution</p>
</dd>
<dt class="hdlist1"><strong>1</strong></dt>
<dd>
<p>Client error: one or more inputs were not correctly specified</p>
</dd>
<dt class="hdlist1"><strong>2</strong></dt>
<dd>
<p>Internal error: An internal error occurred in the XPipe daemon while executing the command</p>
</dd>
<dt class="hdlist1"><strong>3</strong></dt>
<dd>
<p>Connection error: could either not start or communicate to the XPipe daemon</p>
</dd>
</dl>
</div>
</div>
</div>
