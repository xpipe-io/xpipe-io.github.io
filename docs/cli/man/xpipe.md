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
<p>Command-line interface to interact with the XPipe daemon.</p>
</div>
<div class="paragraph">
<p>For a full reference, see either the man pages (local or online) or the help command, available via xpipe help &lt;subcommand&gt;.</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_commands">Commands</h2>
<div class="sectionbody">
<div class="dlist">
<dl>
<dt class="hdlist1"><a href="xpipe-askpass"><strong>askpass</strong></a></dt>
<dd>
<p>Password prompt</p>
</dd>
<dt class="hdlist1"><a href="xpipe-open"><strong>open</strong></a></dt>
<dd>
<p>Opens the specified inputs with the XPipe daemon</p>
</dd>
<dt class="hdlist1"><a href="xpipe-launch"><strong>launch</strong></a></dt>
<dd>
<p>Launches the specified connection</p>
</dd>
<dt class="hdlist1"><a href="xpipe-daemon"><strong>daemon</strong></a></dt>
<dd>
<p>Commands for controlling the XPipe daemon</p>
</dd>
<dt class="hdlist1"><a href="xpipe-help"><strong>help</strong></a></dt>
<dd>
<p>Displays help information about the specified command</p>
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
